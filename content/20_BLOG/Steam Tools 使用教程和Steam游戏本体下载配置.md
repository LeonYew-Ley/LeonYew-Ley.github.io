> 标题：Steam Tools 使用教程和游戏本体下载配置
> 作者：[LeonYew](https://leonyew.fun/)
> 日期：2024年1月13日

# 前言
Steam Tools 作为免费入库工具，不是给广大玩家白嫖的，而是给大家交钱购买前一个免费的体验机会（Steam 游玩时间 2 小时以内也是可以退款的），希望大家支持正版，支持游戏开发者。并且这种“本地入库”方式，在重新安装 Steam 之后就会失效。

本篇文章仅作为计算机网络与应用层通信的技术型研究，没有任何诱导、引导目的，读者使用本文章的技术风险由自己承担。

## 常见的联机方式
一般来说，和朋友联机常见的联机方式有以下几种：
|联机方式|特点|
|-|-|
Steam正版 + 官方服务器联机|不一定能稳定联机
Steam正版 + 自建服务器联机|需要主机折腾
破解游戏 + 联机平台 | 依赖主机开房、有维护时间（tips:游侠收费了）
破解游戏 + 自建服务器/虚拟局域网 | 需要游戏支持IP自连，找资源费劲
Steam离线 + 入库工具 + 自建服务器/联机平台 | 需要主机和客户端都折腾一下，不过**不愁找资源**

本文介绍最后一种：Steam + Steam Tools 入库 + 下载配置。自建服务器请参考其他文章。

# 目录
[TOC]

# Steam 入库原理
当每有一款游戏，Steam会把游戏的本体文件和下载的清单文件（Manifest）下载到本地，而常见的Steam免费入库的操作就分注入式和外挂式，注入式修改Steam应用文件，将Steam的清单服务器修改为自己的；外挂式是将清单文件放在Steam游戏目录，让Steam免去检验文件的步骤。

这也是淘宝上几块钱一个游戏的激活原理，以上两个方法通过重新安装Steam都能恢复原有的状态，不过对于注入式的（通过 Powershell 输命令要添加远端脚本的），脚本来源不明且可以在线更新脚本，不建议使用。

# 下载资源和工具并安装
安装懒得截图了，是个人都会
|名称|链接|
|-|-|
Steam Tools| https://steamtools.net/
pcstory|https://www.pcstory.fun/%e8%98%91%e8%8f%876-0%e4%b8%8b%e8%bd%bd/

其中 pcstory 下载即可运行


# 使用 pcstory 下载游戏本体
> 顺便说一句，我怀疑这玩意儿挖矿啊，但是又没有证据，用起来一卡一卡的。但是看资源占用又没问题，也可能是和 Win 11 不太兼容吧。

这里以下载《森林之子》为例
打开 pcstory ，搜索 Son's...
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203020.jpg" width="600" />  

右键 --> 下载游戏
<img alt="picture 1" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203041.jpg" />  

转到 --> 正在下载 选项卡 ，可以看到游戏正在下载
<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203110.jpg" width="600" />  

下载完成后，游戏会出现在 本地游戏 选项卡中。
右键 --> 打开目录
<img alt="picture 3" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203219.jpg" width="600" />  

可以看到目录里面有这些文件，并且这个 蘑菇下载器pcstory 自带了一些破解文件
<img alt="picture 4" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203542.jpg" width="600" />  

打开 steamApps，把里面的内容复制到你自己的 Steam Library 中去。
比如我，就要把 `D:\mystream\森林之子[steam]\steamApps` 中的文件复制到 `D:\SteamLibrary\steamapps` 中去
<img alt="picture 5" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-203856.jpg" width="600" />  

到这里，pcstory 就完成了它的下载使命，你可以在 pcstory 里把下载好的文件删掉。

请接着往下看，使用 Steam Tools 完成本地入库。

# 使用 Steam Tools
移动好游戏目录之后，启动 Steam，可以看到库里面已经有森林之子了，不过是 “购买” 状态。
<img alt="picture 9" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-204504.jpg" width="600" />  

打开 Steam Tools。

打开 Steam Tools 的解锁模式
（可以把始终保持解锁和随Steam启动也打开，玩网络游戏的时候关闭就行）
<img alt="picture 10" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-204712.jpg" width="600" />  

根据提示，重启 Steam。
在库中，把《森林之子》拖到 Steam Tools 的图标上。
<img alt="picture 11" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-205254.jpg" width="600" />  

根据提示，重启 Steam。（可以右键 Steam Tools 重启）
<img alt="picture 12" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-205320.jpg" width="600" />  

找到《森林之子》，就可以玩了，其他游戏也同理
<img alt="picture 13" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-205454.jpg" width="600" />  

附上启动成功图：
<img alt="picture 14" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-205555.jpg" width="600" />  

甚至可以搜到服务器：
<img alt="picture 15" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240113-205838.jpg" width="600" />  

最后，希望大家觉得游戏好玩的话，还是尽量支持正版，上车补票。

# 参考链接
- [浅谈Steam入库原理](https://www.bilibili.com/read/cv25496353/)
- [steamtools的复活计划！！！steam入库教程..](https://www.bilibili.com/video/BV1Az4y1h7Wi/)

> 标题：Steam Tools 使用教程和游戏本体下载配置
> 作者：[LeonYew](https://leonyew.fun/)
> 日期：2024年1月13日