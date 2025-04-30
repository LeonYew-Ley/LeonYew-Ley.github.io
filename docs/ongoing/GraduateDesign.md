
# 毕业设计
> 标题：基于Unity3D与可热更技术的猫咪角色解谜闯关游戏《MiMo》的设计与实现

## 项目进度 TODO
Markdown编写todo好难受，用飞书吧：[🔗链接](https://swpu.feishu.cn/wiki/OWHHwKpxai6t9dklImFc7n8Yn1c?from=from_copylink)

## 项目信息
### 选题目的和意义
随着游戏形式的不断发展，非人类角色的游戏越来越受到玩家的欢迎。相比传统的人类视角，玩家逐渐倾向于从其他生物或拟人化角色的视角体验游戏内容，这不仅带来了新鲜感，更能激发玩家对游戏世界的好奇心与探索欲。近年来，《捣蛋鹅》、《动物森友会》和《动物派对》等游戏的成功便充分证明了这一趋势。
打破传统游戏中以人类角色为主的局限，为玩家提供独特的体验，拓宽游戏设计的创新路径。同时，采用Unity3D引擎与可热更技术，探索现代游戏开发中灵活高效的技术实践，为小型团队的独立游戏开发提供技术参考。通过拟人化猫咪角色的塑造和趣味互动的解谜设计，游戏能够增强玩家的情感共鸣，满足其对轻松治愈性体验的需求。

### 主要内容
![picture 20250317222253](../../static/img/paste/20250317222253.png)
![picture 20250317222825](../../static/img/paste/20250317222825.png)  

### 预期结果
基于Unity 3D引擎设计实现一套可完整运行的第三人称固定视角的模拟角色解谜向游戏，实现游戏的游玩逻辑和具体功能。具体表现在完成三渲二风格的URP渲染管线的设置、完成场景的搭建、实现角色动作交互。制作NPC AI，编写逻辑脚本，完成NPC自动寻路等功能。以及检测是否连接互联网从而进行热更或离线模式的游玩。
在玩法方面，玩家通过鼠标键盘或手柄实现设置等按钮的选择与确定，使用相关功能键实现玩家操控，进入引导关卡。在游玩中通过外设实现对角色的控制。

## 项目细节
### 资源准备
猫咪模型与动作：从Unity Asset Store下载导入 Low Poly Cats 2.2.unitypackage
材质转换：在Package Manager中安装 Universal RP，然后 Window -> Rendering -> Universal Render Pipeline -> Upgrade Project Materials to UniversalRP Materials
场景模型：从Unity Asset Store下载导入 Low Poly Nature Pack 1.0.unitypackage