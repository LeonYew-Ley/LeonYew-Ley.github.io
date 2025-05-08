
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

- [x] text
- [ ] text

### 预期结果
基于Unity 3D引擎设计实现一套可完整运行的第三人称固定视角的模拟角色解谜向游戏，实现游戏的游玩逻辑和具体功能。具体表现在完成三渲二风格的URP渲染管线的设置、完成场景的搭建、实现角色动作交互。制作NPC AI，编写逻辑脚本，完成NPC自动寻路等功能。以及检测是否连接互联网从而进行热更或离线模式的游玩。
在玩法方面，玩家通过鼠标键盘或手柄实现设置等按钮的选择与确定，使用相关功能键实现玩家操控，进入引导关卡。在游玩中通过外设实现对角色的控制。

## 项目细节
### 资源准备
猫咪模型与动作：从Unity Asset Store下载导入 Low Poly Cats 2.2.unitypackage
材质转换：在Package Manager中安装 Universal RP，然后 Window -> Rendering -> Universal Render Pipeline -> Upgrade Project Materials to UniversalRP Materials
场景模型：从Unity Asset Store下载导入 Low Poly Nature Pack 1.0.unitypackage

### 热更新框架搭建
![picture 20250505162333](../../static/img/paste/20250505162333.png)  
![picture 20250505162356](../../static/img/paste/20250505162356.png)  
![picture 20250505162409](../../static/img/paste/20250505162409.png)  
![picture 20250505162430](../../static/img/paste/20250505162430.png)  
![picture 20250505162551](../../static/img/paste/20250505162551.png)  
```bash
@echo off
setlocal enabledelayedexpansion

:: 设置Nginx路径
set NGINX_PATH=D:\CodingProjects\Nginx\hotupdate_nginx_1.27.4
set NGINX_EXE=%NGINX_PATH%\nginx.exe

:menu
cls
echo ==============================
echo    Nginx 热更新服务管理器 v1.0
echo ==============================
echo.
echo 可选操作：
echo 1. 启动Nginx (start)
echo 2. 重启Nginx (restart)
echo 3. 重载配置 (reload)
echo 4. 停止Nginx (stop)
echo 5. 退出
echo.
set /p choice=请输入操作编号或命令：

:: 转换输入为小写便于比较
set "choice=!choice: =!"
set "choice=!choice!"
if /i "!choice!"=="1" set choice=start
if /i "!choice!"=="2" set choice=restart
if /i "!choice!"=="3" set choice=reload
if /i "!choice!"=="4" set choice=stop
if /i "!choice!"=="5" exit

:: 执行对应操作
if /i "!choice!"=="start" (
    echo 正在启动Nginx...
    cd /d "%NGINX_PATH%"
    start "" "%NGINX_EXE%"
    echo Nginx已启动
    pause
    goto menu
) else if /i "!choice!"=="restart" (
    echo 正在重启Nginx...
    taskkill /f /im nginx.exe >nul 2>&1
    cd /d "%NGINX_PATH%"
    start "" "%NGINX_EXE%"
    echo Nginx已重启
    pause
    goto menu
) else if /i "!choice!"=="reload" (
    echo 正在重载Nginx配置...
    cd /d "%NGINX_PATH%"
    nginx -s reload
    echo Nginx配置已重载
    pause
    goto menu
) else if /i "!choice!"=="stop" (
    echo 正在停止Nginx...
    taskkill /f /im nginx.exe >nul 2>&1
    echo Nginx已停止
    pause
    goto menu
) else (
    echo 无效输入，请重新选择！
    pause
    goto menu
)
```

### 第三人称控制
InputSystem + Cinemachine + 视角变化脚本
#### 操作说明
| 操作        | 按键          | 备注 |
| ----------- | ------------- | ---- |
| 移动        | WASD          | /    |
| 跳跃        | Space         | /    |
| 转动视角    | 鼠标          | /    |
| 加速        | Shift         | /    |
| 远跳        | Shift + Space | /    |
| 攻击/操作键 | 鼠标左键      |
| 防御/放置键 | 鼠标右键      |

#### InputSystem
> 对于旧版输入系统 InputManager 的一层封装，按键与方法的映射通过InputSystem来管理，开发者只用在代码中写好固定的操作逻辑即可，与硬件的交互条件通过Unity Editor来配置，适合多设备适配。

1. 创建Actions配置文件
2. 在Player对象上添加Player Input组件来绑定Action和Unity Invoke事件

#### 第三人称视角的实现
1. 安装Cinemachine的Package
2. 创建 Virtual Camera
3. 




### 红点系统
![picture 20250505162425](../../static/img/paste/20250505162425.png)  
