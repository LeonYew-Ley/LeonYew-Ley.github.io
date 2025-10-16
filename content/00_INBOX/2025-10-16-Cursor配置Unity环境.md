---
title: Cursor配置Unity环境
draft: false
date: 2025-10-16
tags:
  - unity
  - Cursor
  - CSharp
---
# Cursor配置Unity环境

> 2025年4月15日，微软开始对 Cursor 等 Code Forks 进行了进一步的插件封禁，不能下载到 VSCode 市场中的官方插件，比如 C#、C# Dev Kit、C++等，因此 Cursor 的配置方式与 VSCode 有所不同。
> 原贴地址：https://www.reddit.com/r/Unity3D/comments/1kq9psh/cursor_unity_integration_short_guide/

## 在 Unity 配置 External Tools

1. 通过 git 添加 Package： https://github.com/boxqkrtm/com.unity.ide.cursor.git
2. 设置 External Tools
 
![[Pasted image 20251016180103.png]]

3. 如果没有出现 Cursor 选项，尝试以下步骤：
    1. 重启 Unity 和 Unity Hub
    2. 重装 Cursor
    3. 重装 Cursor 并保持默认路径

## Cursor 中安装 C# & C# Dev Kit 替代插件

> 搜不到的插件请看下文《[[#离线下载其他 VSCode 插件、颜色主题]]》

- Language Support：**[C#（muhanmmad-sammy）](https://open-vsx.org/extension/muhammad-sammy/csharp)**
    - 这是从 ms-dotnettools 的 C# 中 fork 并保持更新的，删除了 C# 与 C# DevKit 的绑定关系，需要自己安装 Debugger 插件，比如下文的 DotRush
    - Anysphere（Cursor 公司）的 C# 插件不支持 Code-Lens 等特性
- Debugger：**[DotRush](https://open-vsx.org/extension/nromanov/)**

## 配置 DotRush Debugger (.vscode)

extensions.json
```Plain
{
    "recommendations": [
      "nromanov.dotrush"
    ]
}
```

launch.json
```JSON
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Unity Debugger",
            "type": "unity",
            "request": "attach"
        }
    ]
}
```

settings.json
```JSON
{
    "files.exclude": {
        "**/*.meta": true,
        "**/Library": true,
        "**/Temp": true,
        "**/obj": true,
        "**/Logs": true,
        "**/Build": true,
        "**/.vs": true
    },
    "search.exclude": {
        "**/*.meta": true,
        "**/*.csproj": true,
        "**/*.sln": true,
        "**/Library": true,
        "**/Temp": true,
        "**/obj": true,
        "**/Logs": true,
        "**/Build": true,
        "**/.vs": true
    },
    "files.watcherExclude": {
        "**/Library/**": true,
        "**/Temp/**": true,
        "**/obj/**": true,
        "**/Logs/**": true,
        "**/Build/**": true
    },
    "dotnet.defaultSolution": "<YourProject>.sln"
}
```

## 离线下载其他 VSCode 插件、颜色主题

- 快捷网站：https://vsc-extension.dreamsoul.cn
- 原理：https://github.com/Peter-007/VSIX_download_url

# 已知问题

- DotRush 有时候可能断点打不上
    - 排查之后好像都是 Git 切换项目，导致代码丢失掉了引用的问题，这时候关掉 Cursor 中所有 Tab，然后从 Unity 双击项目代码文件打开 Cursor 就可以了

---

> 标题：Cursor配置Unity环境  
> 作者：[LeonYew](mailto:learngenius@outlook.com)  
> 日期：2025-10-16
