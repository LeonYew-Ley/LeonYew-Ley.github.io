---
title: Windows 锁屏后快速关闭显示器
draft: false
date: 2026-05-26
tags:
  - tech
  - productivity
---

Windows 锁屏后默认要等 **60 秒** 才关闭显示器。如果希望按下 `Win + L` 后几秒钟显示器就熄屏，可以通过修改隐藏的电源选项 **Console lock display off timeout** 来实现。

下面只记录最快的一种做法：用 `powercfg` 命令直接改当前电源计划的值。

---

## 最快做法（PowerShell 一次到位）

以**管理员身份**打开 PowerShell（或 Windows Terminal），运行以下三条命令，把 `5` 改成你想要的秒数：

```powershell
powercfg /setacvalueindex SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 5
powercfg /setdcvalueindex SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 5
powercfg /setactive SCHEME_CURRENT
```

执行完不用重启，下一次按 `Win + L` 锁屏，约 5 秒后显示器即自动关闭。

---

## 命令说明

| 命令 | 作用 |
|------|------|
| `setacvalueindex` | 接电源（AC）时的超时秒数 |
| `setdcvalueindex` | 使用电池（DC）时的超时秒数 |
| `setactive SCHEME_CURRENT` | 让上面的修改立即生效 |
| `SUB_VIDEO` | 「显示」子组 |
| `VIDEOCONLOCK` | 「控制台锁定显示关闭超时」设置项 |

> 台式机只需要 `setacvalueindex` 一条即可；笔记本两条都建议设。

---

## 注意事项

- **秒数别填 0**：`0` 在 powercfg 里表示「永不」，意思是锁屏后显示器永远不灭。建议至少 **1 ~ 5 秒**。
- **需要管理员权限**：普通 PowerShell 修改会失败但不报错，记得右键「以管理员身份运行」。
- **每个电源计划独立**：上面用的是 `SCHEME_CURRENT`，只改当前活动的电源计划。换计划后需要重新设置，或者把 `SCHEME_CURRENT` 换成具体 GUID。
- **快速恢复默认**：把秒数改回 `60` 再执行一次即可。

---

## 一键还原

```powershell
powercfg /setacvalueindex SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 60
powercfg /setdcvalueindex SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 60
powercfg /setactive SCHEME_CURRENT
```
