---
title: Gemini in Chrome 国内启用指南：从原理到实操
draft: false
date: 2026-05-26
tags:
  - ai
  - google
---

Gemini in Chrome 是 Google 将 Gemini AI 集成进 Chrome 浏览器的功能，通过侧边栏调用 AI 辅助浏览。该功能目前主要面向美国用户灰度开放，国内用户可能看不到右上角的 Gemini 图标。

本文从官方要求、底层原理到多种启用方法，整理一份可操作的完整指南。

---

## 官方要求

- **年龄与地区**：年满 18 岁，且位于美国
- **设备**：Chromebook Plus、Mac 或 Windows
- **浏览器版本**：Chrome 最新版
- **登录状态**：已登录 Chrome（Google 账号）
- **语言**：Chrome 语言设为 **English (United States)**

前四条相对容易满足，真正卡住国内用户的是 **"在美国"** 这一限制。

---

## 为什么开了 flags 还是不行？

Chrome 判断地区采用**多重验证**，IP 只是其中一环，更关键的是浏览器本地存储的地区标识。

这些信息保存在 `Local State` 配置文件中。Chrome 每次启动读取该文件，决定推送哪些功能。

Gemini in Chrome 内部代号为 **glic**（`chrome://flags` 中搜 `glic`）。Chrome 会检查 `is_glic_eligible` 字段——只有 `true` 时才显示 Gemini 图标。

非美国地区安装的 Chrome，该字段通常不存在或为 `false`，`variations_country` 为 `cn`。即使手动启用了 glic flags，Chrome 仍可能认为你"没有资格"。

**解法：手动修改 `Local State` 中的地区与资格字段。**

---

## 方法一：chrome://flags 实验开关（最简单）

1. 地址栏输入 `chrome://flags/` 并回车
2. 搜索 **`glic`**
3. 所有带 Glic 的选项从 **Default** 改为 **Enabled**
4. 点击右下角 **Relaunch** 重启
5. 查看右上角是否出现 Gemini 图标

**若仍无图标：**

`Settings → AI innovations → Gemini in Chrome` 手动开启，首次使用同意条款即可。

无效则继续方法二。

---

## 方法二：修改 Local State 配置文件（核心）

### 文件位置

| 系统 | 路径 |
|------|------|
| Windows | `%LOCALAPPDATA%\Google\Chrome\User Data\Local State` |
| macOS | `~/Library/Application Support/Google/Chrome/Local State` |
| Linux | `~/.config/google-chrome/Local State` |

文件无扩展名，JSON 格式，可用文本编辑器打开。

### 操作步骤

> ⚠️ **修改前必须彻底关闭 Chrome**（Windows 退出托盘图标，macOS `Cmd+Q`）

1. **备份** `Local State` 文件（强烈建议）
2. 打开文件，搜索并修改以下字段

#### 让 Chrome 认为你在美国

```json
"variations_country": "us"
```

```json
"variations_permanent_consistency_country": ["148.0.xxxx.xx", "us"]
```

> 数组第一项填你的 **Chrome 版本号**（`chrome://version` 查看），第二项固定为 `"us"`。

#### 开放 Gemini 资格

```json
"is_glic_eligible": true
```

找不到这些字段，直接在文件开头 `{` 后面添加即可。

3. **保存文件**，重启 Chrome

### PowerShell 脚本示例

```powershell
# 关闭 Chrome
Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force

# 备份
$path = "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State"
Copy-Item $path "$path.backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

# 读取版本号
$version = (Get-Content "$env:LOCALAPPDATA\Google\Chrome\User Data\Last Version" -Raw).Trim()
```

---

## 方法三：检查 Google 账号关联地区

Chrome 配置文件只是一半，Google 账号本身也有"关联地区"概念。

### 查看当前地区

访问 [policies.google.com/terms](https://policies.google.com/terms)，页面底部会显示。

### 申请更改地区

1. 访问 [Google 关联地区更改表单](https://policies.google.com/country-association-form)
2. 地区选 **US**
3. 原因选 **Other reason**，说明需要使用美国地区服务
4. 审核通过后数日内邮件回复

### 更快的方式（可选）

访问 [pay.google.com](https://pay.google.com)，尝试添加一个美国地址的付款资料。即使添加失败，账号区域有时也会变为 US。

---

## 其他必要设置

| 项目 | 操作 |
|------|------|
| Chrome 语言 | 设为 **English (United States)**，置顶第一位 |
| 版本更新 | `Settings → About Chrome → Check for updates` |
| 登录账号 | 右上角登录已满足地区条件的 Google 账号 |
| 网络环境 | 使用时连接 **美国 VPN 节点** |

---

## 验证是否成功

| 检查项 | 预期结果 |
|--------|----------|
| `chrome://version` | 版本为最新 |
| 右上角工具栏 | 出现 Gemini 彩色星形图标 |
| `chrome://settings/ai` | 可见 **Gemini in Chrome** 开关且可开启 |
| `Local State` | `variations_country` 为 `us`，`is_glic_eligible` 为 `true` |

首次点击 Gemini 图标时需同意服务条款。

---

## 一键脚本（推荐）

使用 [enable-chrome-ai](https://github.com/lcandy2/enable-chrome-ai) 自动完成修改。

### 环境要求

- Python 3.13+
- Google Chrome 已安装

### 使用 uv

```powershell
# 安装 uv（一次性）
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# 克隆并运行
git clone https://github.com/lcandy2/enable-chrome-ai.git
cd enable-chrome-ai
uv sync
uv run main.py
```

脚本自动完成：关闭 Chrome → 修改 `variations_country`、`variations_permanent_consistency_country`、`is_glic_eligible` → 重启 Chrome。

---

## 恢复与回滚

1. 彻底关闭 Chrome
2. 用备份文件覆盖 `Local State`

```powershell
Copy-Item "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State.backup-YYYYMMDD-HHMMSS" `
          "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State" -Force
```

3. 重启 Chrome

---

## 常见问题

**Q：修改后重启 Chrome，配置被改回去了？**
Chrome 启动时重写了地区信息。尝试：美国 VPN 下重启 → 确认账号地区为 US → 重跑脚本。

**Q：有图标但无法使用？**
检查：已登录账号？VPN 连美国节点？账号满 18 岁且地区为 US？

**Q：flags 里 glic 全 Enabled 了为什么还不行？**
flags 只开启实验入口，**地区资格**由 `Local State` 的 `is_glic_eligible` / `variations_country` 控制，需配合使用。

**Q：会影响其他 Chrome 功能吗？**
主要影响 A/B 测试灰度分配，不影响书签、密码等个人数据。修改前务必备份。

---

## 总结

推荐操作顺序：

```
① chrome://flags 启用 glic → 重启
       ↓ 无效
② 修改 Local State（variations_country + is_glic_eligible）
       ↓ 仍无效
③ Google 账号关联地区 → 改为 US
       ↓
④ 确认：语言 en-US / Chrome 最新版 / 已登录 / 美国 VPN
```

---

*仅供学习与个人使用参考，请遵守 Google 服务条款及当地法律法规。*
