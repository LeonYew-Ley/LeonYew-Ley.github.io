<%*
let today = tp.date.now("YYYY-MM-DD")
// 用 system.prompt 弹窗输入标题
let title = await tp.system.prompt("请输入文章标题")
// 修改文件名
await tp.file.rename(`${today}-${title}`)
%>
---
title: <% title %>
draft: false
date: <% today %>
tags:

---
# <% title %>

这里是正文部分……

---

> 标题：<% title %>  
> 作者：[LeonYew](mailto:learngenius@outlook.com)  
> 日期：<% today %>
