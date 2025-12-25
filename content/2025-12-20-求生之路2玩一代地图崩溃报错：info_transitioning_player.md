---
title: 求生之路2玩一代地图崩溃报错：info_transitioning_player
draft: false
date: 2025-12-20
tags:

---
# 求生之路2玩一代地图崩溃报错：info_transitioning_player

笔者和女友本地服务器联机求生之路2的一代地图的时候，总是遇见崩溃弹窗：

 ```txt
4xx/ - info_transitioning_player: UTIL_SetModel: not precached: models/survivors/survivor_xxxxxxxx.mdl
 ```

一般开头结尾会对应一个角色，比如 producer, mechanic... 这个报错什么意思呢，在转换 Player 的时候，尝试设置模型，但是模型没有预加载，所以报错崩溃了。

笔者是下面三个方案一起使用了才正常游玩的，具体哪个才是最正式最优雅的解决方案，我也不想排查了。
# 方案一：简单粗暴禁用角色Mod
> 最稳妥的方案，立刻生效

禁用所有角色模型替换 Mod

# 方案二：禁用 AI Mod
有的 AI Mod 有可能会在加载关卡的时候，初始化一下一代和二代的所有角色。比如笔者这里禁用的就是——[Improved Bots (Simple)](https://steamcommunity.com/sharedfiles/filedetails/?id=121071938) 

# 方案三：预加载所有模型
这里也有两种方式：Steam 启动参数和游戏目录修改。

Steam 添加下列参数：
```
+precache_all_survivors 1
```

游戏目录去这里修改：
```
Left 4 Dead 2\left4dead2\scripts\vscripts\coop.nut
```

vscripts 目录需要自己创建，然后再在目录下创建一个 txt 文件，重命名为 `coop.nut` 然后在 `coop.nut` 里面添加：

```
PrecacheModel( "models/survivors/survivor_mechanic.mdl" );
PrecacheModel( "models/survivors/survivor_producer.mdl" );
PrecacheModel( "models/survivors/survivor_coach.mdl" );
PrecacheModel( "models/survivors/survivor_gambler.mdl" );
```

理论上，这两个方式选一个应用就好，笔者是下面这个方式生效的。注意重启游戏。
# 参考链接：
https://developer.valvesoftware.com/wiki/Info_transitioning_player
https://steamcommunity.com/sharedfiles/filedetails/?id=212352894
https://steamcommunity.com/app/550/discussions/0/3115920924809693201/

---

> 标题：求生之路2玩一代地图崩溃报错：info_transitioning_player  
> 作者：[LeonYew](mailto:learngenius@outlook.com)  
> 日期：2025-12-20
