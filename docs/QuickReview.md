---
sidebar_position: 999
tags: [tutorial]
---
# 📃 Docusaurus 快速回顾
## 本地调试
```bash
cd my-website
npm run start
```
这时候，大概率会在 http://localhost:3000/ 这个地址预览
## 打包发布
打包构建
```bash
npm run build
```
本地调试构建版本：
```bash
npm run serve
```
## MD额外语法
### 文本信息
```markdown
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
# 文章标签
tags: [tutorial,tag2,tag3]
# 侧边栏索引位置
sidebar_position: 1
---
```

### 特殊警告样式
```markdown
:::tip[灯泡logo+提示]
一些提示，歪比巴卜
:::

:::danger[火焰logo+红色警告]
特别重要的内容！！！
:::
```
:::tip[灯泡logo+提示]
一些提示，歪比巴卜
:::

:::danger[火焰logo+红色警告]
特别重要的内容！！！
:::
## 单文件设置
想这篇文章一样，直接在侧边栏的文章，可以直接讲md文件放在docs文件夹下，并通过文档首部的`sidebar_position`来设置它在侧边栏的位置。

## 文件夹设置
`_category_.json` 文件可以设置文件夹的名称和排序

### 设置文件夹名称和自定义图标
```json
{
  "label": "高级主题",
  "position": 2,
  "collapsed": true,
  "link": {
    "type": "generated-index",
    "title": "高级主题索引",
    "description": "这里是高级主题的索引页面。",
    "slug": "/advanced-topics"
  }
}
```

### 禁用文件夹的自动索引
```json
{
  "label": "实验性功能",
  "position": 3,
  "collapsed": false,
  "link": {
    "type": "none"
  }
}
```
