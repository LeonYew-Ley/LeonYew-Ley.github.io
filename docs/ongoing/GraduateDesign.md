
# 毕业设计 MiMo
> 标题：基于Unity3D与可热更技术的猫咪角色解谜闯关游戏《MiMo》的设计与实现

## 项目信息
随着游戏形式的不断发展，非人类角色的游戏越来越受到玩家的欢迎。相比传统的人类视角，玩家逐渐倾向于从其他生物或拟人化角色的视角体验游戏内容，这不仅带来了新鲜感，更能激发玩家对游戏世界的好奇心与探索欲。近年来，《捣蛋鹅》、《动物森友会》和《动物派对》等游戏的成功便充分证明了这一趋势。
打破传统游戏中以人类角色为主的局限，为玩家提供独特的体验，拓宽游戏设计的创新路径。同时，采用Unity3D引擎与可热更技术，探索现代游戏开发中灵活高效的技术实践，为小型团队的独立游戏开发提供技术参考。通过拟人化猫咪角色的塑造和趣味互动的解谜设计，游戏能够增强玩家的情感共鸣，满足其对轻松治愈性体验的需求。

## 操作说明
| 操作        | 按键          | 备注 |
| ----------- | ------------- | ---- |
| 移动        | WASD          | /    |
| 跳跃        | Space         | /    |
| 转动视角    | 鼠标          | /    |
| 加速        | Shift         | /    |
| 远跳        | Shift + Space | /    |
| 攻击/操作键 | 鼠标左键      |
| 防御/放置键 | 鼠            |

## 项目进度 TODO
- [x] 猫咪玩家控制
  - [ ] ~~出水后shaking~~
  - [x] 关闭相机自动对准正面的功能
  - [x] 捡起物品的功能
  - [x] 第三人称相机设置
  - [x] ~~测试直接移除掉holder下的物体，不能继续拾取（用来开锁）~~
- [x] 存档系统
  - [x] 复位玩家、物品位置和旋转
  - [ ] 存储任务进度
- [ ] NPC状态
  - [x] 动画：Idle、移动
    - [x] Idle：道具骨骼：阅读Synty的Documentation
    - [x] AI Nav
  - [ ] 驱赶玩家
  - [ ] 不同NPC穿着：学生（3）、保安、路人(2)、小孩（1）
- [ ] 场景搭建
  - [ ] 环境、路径规划
  - [ ] ~~天空盒~~
  - [x] 超市
    - [x] 学府超市
    - [ ] 学府超市有NPC进出
  - [x] 池塘
  - [x] 火箭楼
  - [x] 毕业照楼梯
- [ ] 任务制定
  - [ ] 拾取：捡起地上的果实
  - [ ] 跑酷：向上跑、吓跑小鸟
  - [ ] 营养的一餐：鱼、苹果、饭团,放到野餐篮/鸟巢里
  - [ ] ~~和玩家玩井字棋并胜利~~
  - [ ] 帮路人捡起池塘中的帽子
  - [ ] 让学生被店主骂（偷走玩家的钱）
  - [ ] 偷走鱼罐头并放到小屋中（调整小屋位置）
  - [ ] 从超市偷走相纸
  - [ ] 出现在毕业照中
- [x] 游戏菜单Esc
  - [x] 任务列表
  - [ ] 平移切换UI
  - [ ] 音效开关
  - [x] 保存并退出到主菜单
  - [x] 退出游戏
  - [ ] ~~任务列表可滚动~~
  - [ ] ~~按键绑定~~
  - [ ] ~~音量调节~~
- [x] 主菜单
  - [x] GPT重新画剪影
  - [x] （继续游戏）开始游戏
  - [x] 开启新游戏
  - [ ] ~~设置~~


## 参考链接
- [【在逃猫咪】在水里发现这种猫科动物，千万别吸！](https://www.bilibili.com/video/BV1PYPWeVEgZ/)
- [C#语言](https://www.youtube.com/watch?v=EgIbwCnQ680&list=PLZX6sKChTg8GQxnABqxYGX2zLs4Hfa4Ca)
- [Unity获取盗版插件指北](https://wenjie.store/archives/unity%E8%8E%B7%E5%8F%96assetstore%E7%9B%97%E7%89%88%E6%8F%92%E4%BB%B6%E6%8C%87%E5%8C%97)


### 文献
- [《2024年1-6月中国游戏产业报告》正式发布](https://www.cgigc.com.cn/details.html?id=08dcaca7-6753-4d1e-8938-f61cd1acd37b&tp=report)
- https://www.yooasset.com/docs/Introduce
- https://hybridclr.doc.code-philosophy.com/
- [优雅的UML类图](https://refactoringguru.cn/design-patterns/abstract-factory)
![picture 20250516125435](../../static/img/paste/20250516125435.png)  
飞书可以画出类似上述的效果

### 资源/插件
- [Animal Controller](https://malbersanimations.gitbook.io/animal-controller)
  - [AC Tutorial](https://www.youtube.com/watch?v=q5tAmVpqSWA&list=PLh3LIrWD73czEsKkJK78BfLJ83KGKbDik)
  - [Using the new input system with Malbers Animal Controller](https://www.youtube.com/watch?v=TjX3xN7qeZM&list=PLh3LIrWD73cwzPwbVLCXzPhCMaVPNVLK6)
- [Spinal Animator](https://www.youtube.com/watch?v=LUUAkCHIfIU)
  - [How to animate animals from cheap package more realistically](https://www.youtube.com/watch?v=fmp1t5Ug5CI)
- [CSDN讲AC](https://blog.csdn.net/adsdasdasdahj/article/details/142670492)
- Synty Studios模型 Low-Poly材质
- [代码打字练习SpeedCoder](https://www.speedcoder.net/lessons/csharp/1/)
- [更好看的各种打字练习monkeytype](https://monkeytype.com/)
- [GIF转PNG图集](https://tool.koalahollow.com/gifconverter)
- [Newtonsoft JSON Documentation](https://www.newtonsoft.com/json/help/html/Introduction.htm)
- [CodeImgGenerator](https://www.ray.so/)
- [Mermaid Live](https://mermaid.live/)

### 技术
- [还在 Input.GetKey？一次搞懂 Unity 新版输入系统！【Unity 小技巧】](https://www.bilibili.com/video/BV1Pu57z3EKB/)
- [Unity: CHARACTER CONTROLLER vs RIGIDBODY](https://medium.com/ironequal/unity-character-controller-vs-rigidbody-a1e243591483)
- [Rigidbody实现玩家控制](https://medium.com/@tumo.yeh/unity3d一次就搞定角色移動-上-基礎移動-抖動避免-高度控制-菜鳥開發紀錄-1-a64998200119)
- [Unity : 使用 Rider 进行调试，卡在 Reloading Domain](https://blog.csdn.net/weixin_44918974/article/details/142564439)
- [Unity Universal Render Pipeline (URP) - Initial Setup](https://www.tomstephensondeveloper.co.uk/post/unity-universal-render-pipeline-urp-initial-setup)
- [升级自定义 Shader 以兼容 URP](https://docs.unity.cn/cn/Packages-cn/com.unity.render-pipelines.universal@14.1/manual/urp-shaders/birp-urp-custom-shader-upgrade-guide.html)
- [ps动画制作方法视频：添加时间轴操作图层建立逐帧图片](https://www.bilibili.com/video/BV1nb41147r7/) 
- [Unity场景Addictive加载导致的光照问题](https://blog.csdn.net/qq_26318597/article/details/120972465)
- [word文档参考文献按引用顺序自动调整编号](https://maple.link/2022/05/09/word%E6%96%87%E6%A1%A3%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE%E6%8C%89%E5%BC%95%E7%94%A8%E9%A1%BA%E5%BA%8F%E8%87%AA%E5%8A%A8%E8%B0%83%E6%95%B4%E7%BC%96%E5%8F%B7/)
- [【Low-Poly低多边形风格】使用Unity快速进行风格化的关卡设计-第二辑](https://www.bilibili.com/video/BV1TW411t7uu/)