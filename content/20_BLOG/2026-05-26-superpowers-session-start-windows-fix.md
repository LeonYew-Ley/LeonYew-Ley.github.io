---
title: Superpowers session-start 在 Windows + Cursor 下的修复
draft: false
date: 2026-05-26
tags:
  - ai
  - tech
---

## 问题

Windows 上每次新建 Agent 会话时，Cursor 会弹出并打开 `session-start` 文件（无扩展名的 bash 脚本），钩子没有静默执行。

## 根因

Superpowers 插件通过 `hooks-cursor.json` 注册 `sessionStart` 钩子，命令指向 `./hooks/session-start`（无扩展名的 bash 脚本）。Windows 无法原生执行此类文件，结果用编辑器打开而非后台执行。

## 解决方案

增加一层 PowerShell 包装脚本，让 Cursor 在 Windows 上能通过 `.ps1` 入口执行：

```
Cursor sessionStart → session-start.ps1（Windows 可执行）→ Git Bash → session-start（原始逻辑）→ 输出 JSON
```

### 步骤

1. 确认插件版本目录：`C:\Users\lienyu\.cursor\plugins\cache\cursor-public\superpowers\<HASH>\`
2. 确认 Git Bash 路径：`C:\Program Files\Git\bin\bash.exe`
3. 在 `hooks/` 下创建 `session-start.ps1`，调用 bash 运行原始脚本
4. 修改 `hooks-cursor.json`，将 `command` 改为 `./hooks/session-start.ps1`
5. 验证：PowerShell 中运行 `.ps1` 应输出 JSON 无报错
6. 完全重启 Cursor

## 维护提醒

Superpowers 更新后可能生成新的 hash 目录，需在新目录下重新执行以上步骤。

## 参考

- [Superpowers 仓库](https://github.com/obra/superpowers)
- 插件内文档：`docs/windows/polyglot-hooks.md`
