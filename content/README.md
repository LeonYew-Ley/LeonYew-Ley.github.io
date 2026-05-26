# 内容目录说明

本仓库 `content/` 同时作为 **Obsidian 笔记库** 与 **Quartz 站点源**。数字前缀控制侧边栏排序；是否上网由 `quartz.config.yaml` 的 `ignorePatterns` 与文章 frontmatter 共同决定。

## 目录一览

| 目录 | 用途 | 是否发布到 leonyew.space |
|------|------|--------------------------|
| `index.md`、`ABOUTME.md` | 首页、关于 | 是 |
| `20_BLOG/` | 对外博客（技术、随笔、影评等） | 是（`draft: true` 的除外） |
| `30_NOTES/` | 技术学习笔记（Unity、网络、MC 等） | 是 |
| `90_Archive/` | 归档：课程实验、旧系列教程 | 是 |
| `98_Images/` | 图片与附件（被文章引用时会进入构建产物） | 资源会随构建发布 |
| `10_2025/` | 读书笔记、年度目标、个人学习记录 | **否** |
| `80_ACCUMULATION/` | 个人词语/素材积累 | **否** |
| `99_RES_private/` | 健康、日记式随笔、模板、字典等敏感或本地专用 | **否** |

## 如何标记「不发布」

任选一种或组合使用（推荐按敏感程度从低到高）：

1. **整目录排除**（已在 `quartz.config.yaml` 配置）  
   `10_2025`、`80_ACCUMULATION`、`99_RES_private` 不会参与构建。

2. **单篇草稿**  
   在 frontmatter 写 `draft: true`，由 RemoveDrafts 插件过滤。

3. **仅链接可访问、不出现在导航**  
   `unlisted: true`（已启用 UnlistedPages 插件）。

4. **密码页**（仍会上线，需密码）  
   frontmatter 写 `password: "你的密码"`（EncryptedPages 插件）。

5. **仓库层面不公开**  
   `content/99_RES_private/` 已写入 `.gitignore`。若曾提交到公开 GitHub，需从远程历史中清理旧版本（否则历史提交仍可见）。

## 写新文章时的建议

- 打算公开：放在 `20_BLOG/`，`draft: false`，可从 `99_RES_private/templates/BlogTemplate.md` 复制 frontmatter。
- 仅本地：放在 `10_2025/`、`80_ACCUMULATION/` 或 `99_RES_private/blog/`。
- 勿把私密截图只放在 `98_Images/` 并指望不泄露：非 Markdown 资源在构建时仍可能被打包，敏感图请放在已 ignore 的目录内。

## 本地预览

```bash
npx quartz build --serve
```

构建日志里不应出现 `10_2025`、`80_ACCUMULATION`、`99_RES_private` 下的页面。
