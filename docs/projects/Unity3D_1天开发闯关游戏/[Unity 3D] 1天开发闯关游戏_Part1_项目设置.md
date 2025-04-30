---
id: Unity3D-1day-Part1
---

> 标题：[Unity 3D] 1天开发闯关游戏_Part1_项目设置
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日

<!-- 图库：https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main -->

# 详细设计与实现
# 游戏操作
|操作|键盘|手柄|
|-|-|-|
|移动|WASD|L|
|加速|Shift|LB|
|跳跃|空格|Y|
|旋转视角|鼠标|R|
# 喜闻乐见的新建文件夹
## 创建Git仓库
1. 创建文件夹 `IceBallProject`
2. 右键 + Shift：`Git Bash Here`
3. 输入命令：`Git Init`
4. 写一个简单的 `README.md`
5. 添加文件并Push到远端：
    ```
    git add .
    git commit -m "Init IceBallProject"
    git remote add origin https://github.com/<username>/<repository>.git
    git push -u origin master
    ```
6. 创建完成，查看GitHub是否同步：https://github.com/LeonYew-SWPU/IceBallUnity
7. 为了项目的二进制文件能够被比较出差异，同时打开 Unity Plastic SCM 版本管理工具，在项目二进制文件出错时进行同步比较。
## 创建Unity项目
打开 Unity Hub -- New Project -- 创建3D项目模板，创建好后如下：
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240110-132056.jpg" width="600" />  

给项目资源文件分类：分为Animation、Audio、Materials、Models、Prefebs、Scenes、Scripts
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240110-200727.jpg" width="600" />  


# 项目部分：
## 经验一：一定要多保存多提PR
<img alt="picture 46" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-014207.jpg" width="600" />  

如图所示，一个草方块为一个 Tile，整理项目的时候手贱把 Prefeb 中的一个 Tile 删了，结果场景中全是这个 Prefeb 制作出来的 Model，真服了。。

更绝望的是，上一个 Commit 的版本是很古早的版本。。

所以，一定要及时 Commit，及时提 PR (Push Request)。

## 经验二：使用 Plastic 的时候不要断网
你妹的Unity，做得深更半夜的，时不时向 Plastic 服务器发送检验，查看是不是和本地的文件同步。结果断网之后就一直 Hold On..，你检验也就算了，断网重连都不会做？
<img alt="picture 56" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-045628.jpg" width="600" />  


## 导入本地资产包：Stylized Water 2
为了做项目，斥巨资购入包：Stylized Water 2，仅用于开发学习使用。
<img alt="picture 40" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-004846.jpg" width="600" />

下载到本地：
<img alt="picture 41" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-005051.jpg" />  

如果你向我一样，可以看到 Unity 的图标，代表 Unity 已经在 Windows 中和这个后缀名的文件关联了，可以直接双击安装。

如果你没看到图标，可以双击之后 --> 打开方式 --> 选择 Unity。

或者，你可以在 Unity 中 Package Manager 中点击 + 号导入。
<img alt="picture 42" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-005256.jpg" />  

啊..这，好丑，像蓝色的猪五花一样扭来扭去，原价还 35 美元？？
<img alt="picture 43" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-010127.jpg" width="600" />  

所以，再斥巨资，购入了 Cartoon Water
<img alt="picture 44" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-010256.jpg" />  

效果如下，终于舒服了：
<img alt="picture 45" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-014122.jpg" width="600" />  


## 升级为URP项目
我服了啊，创建项目的时候忘记创建为 URP 项目了，导致买的很多资产包无法用，所以这里我们要把普通的 3D 项目转化为 URP 项目。

先备份，或者直接在 Plastic SCM （以下简称塑料）中 Push 一下：
<img alt="picture 34" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-002659.jpg" width="600" />  

打开 Package Manager --> 搜索：Universal RP --> Install
<img alt="picture 35" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-002845.jpg" width="600" />  

创建一个 URP 文件夹，用来存储相关配置。

右键 --> Create --> Rendering --> URP Config File (With Universal Rendering)

会创建两个渲染管线资产，一个 Asset 一个 Renderer

打开 Project Setting --> Graphics --> Scriptable.... ，将 Asset 拖进去
<img alt="picture 36" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-003516.jpg" width="600" />  

不出意外，原有材质会暂时丢失：
<img alt="picture 37" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-003649.jpg" width="600" />  

接下来，将材质批量转换为 URP 材质。

打开 Window --> Render --> Pipeline Converter --> Built-in to URP

直接点击 Initialize and Convert 或者先 Initialize 再点击 Convert 也行（如果你怕出错的话）
<img alt="picture 38" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-004022.jpg" width="600" /> 

赶紧去运行一下项目有没有出错：
<img alt="picture 39" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-004209.jpg" width="600" />  
OK，完全没问题，非常好 Unity，使我的项目运行！

接下来就可以美滋滋的使用 URP 资产啦~

> 标题：[Unity 3D] 1天开发闯关游戏_Part1_项目设置
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日

