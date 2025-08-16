# Quartz
## 常用 npm 命令
```bash
# 定位到 quartz目录
cd quartz

# Build成网页，并在 http://localhost:8080/ 预览
npx quartz build --serve

# 同步到 GitHub，并发布成 Github Pages （https://quartz.jzhao.xyz/hosting）
npx quartz sync
```
## 配置
具体配置可以参考下文的[[#^5996e4|Quartz配置]]，这里仅列出一些可能会用到的配置项
- `pageTitle`: title of the site. This is also used when generating the [RSS Feed](https://quartz.jzhao.xyz/features/RSS-Feed) for your site.
- `locale`: used for [i18n](https://quartz.jzhao.xyz/features/i18n) and date formatting
- `baseUrl`: this is used for sitemaps and RSS feeds that require an absolute URL to know where the canonical ‘home’ of your site lives. This is normally the deployed URL of your site (e.g. `quartz.jzhao.xyz` for this site). Do not include the protocol (i.e. `https://`) or any leading or trailing slashes.
    - This should also include the subpath if you are [hosting](https://quartz.jzhao.xyz/hosting) on GitHub pages without a custom domain. For example, if my repository is `jackyzha0/quartz`, GitHub pages would deploy to `https://jackyzha0.github.io/quartz` and the `baseUrl` would be `jackyzha0.github.io/quartz`.
    - Note that Quartz 4 will avoid using this as much as possible and use relative URLs whenever it can to make sure your site works no matter _where_ you end up actually deploying it.
- Fonts
# Obsidian 语法
> Quartz 支持 GitHub Flavored Markdown 语法和 Obsidian Flavored Markdown 语法，同时也像 Docsuaurus 一样，支持在文章开头添加属性，用于表示作者、时间、标签等等。
## 文章属性
在Quartz中，支持的文章属性有以下内容
```
---
title: 这是文章的标题
permalink: 文章的URL链接
aliases: 文章别名
draft: false/true，是否为草稿（若为true，将不会被发布）
date: YYYY-MM-DD，文章的发布日期
description: 文章的简介，用于 Preview 的
---
```
## 支持的扩展 Markdown 语法
### 双链笔记
- 通过双括号 `[[]]` 可以链接笔记
- 链接到（笔记中的）标题/块：`[[笔记名称]]`, `[[笔记名称#标题]]`, `[[笔记名称#^块ID]]`
- 别名链接：`[[笔记名称|显示别名]]`
### 标签（Tags）
	- `[[#标签]]`
	- `[[#项目/子标签]]`
### Callouts（提示框）
Obsidian 支持的提示框有很多类型：
`note`、`info`、`tip`、`success`
`question`、`warning`、`failure`、`danger`
`bug`、`example`、`quote`

```markdown
> [!NOTE] 这是一个提示
> 你可以写很多内容
```

> [!NOTE] 这是一个提示
> 你可以写很多内容
### 任务列表（Task List）
```markdown
- [ ] 未完成任务
- [x] 已完成任务
- [/] 半完成任务
```
- [ ] 未完成任务
- [x] 已完成任务
- [/] 半完成任务
### LaTeX 数学公式符号
```latex
%% 内联 %%
$E = mc^2$

%% 占据整行 %%
$$
\int_0^1 x^2 dx
$$
```
### 注释 & 转义字符
```markdown
%% 这是注释 %%
\*不会变成斜体\*
用 `\` 避免触发 Markdown 格式。
```

\*不会变成斜体\*

## 基础 Markdown 语法
### 富文本
```markdown
*斜体*   _斜体_
**加粗**
~~删除线~~
```
*斜体*   _斜体_
**加粗**
~~删除线~~

### 调整图片大小
```
![[图片文件.png | 300]]
```
## 插件
### Templator
> 模板插件，模板位置：99_RES_private/tempaltes/
### Various Complements
> 自动补全插件，字典位置： 99_RES_private/VComplements/dict

# 参考链接
- [Quartz配置](https://quartz.jzhao.xyz/configuration) ^5996e4
- https://zhuanlan.zhihu.com/p/19640496491
- https://zhuanlan.zhihu.com/p/26095824336
- https://quartz.jzhao.xyz/
