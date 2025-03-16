> 日期：2024年3月29日
> 书籍：《Unity 2017 虚拟现实开发标准》-人民邮电出版社-9787115507587

# VR03-UI编写与场景切换

## UI 创建
Hierarchy > Right Click > UI > Button - TextMeshPro

创建一个 Button，设置文字。

选中 Button 上一级的 Canvas，Inspector > Render Mode > World Space

在 Rect Transform 中调整画布大小和 Button 一样大，再选中 Canvas 移动到需要交互的位置。
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-121020.jpg" width="600" />  

## 编写脚本
Project > Right Click > Create C# Script : SwitchSceneScript.cs

编写一个跳转场景的脚本，记得提前在 Build Setting 中添加 Scene

我的脚本如下：
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class EnterPaintingScene : MonoBehaviour
{
    public void EnterSkyLight()
    {
        print("Entering SkyLight..");
        SceneManager.LoadScene("SkyScene");
    }
    public void BackLobby()
    {
        print("Backing Lobby..");
        SceneManager.LoadScene("LobbyScene");
    }
}

```

包含了两个函数，一个用于进入星空场景，一个用于返回大厅。

## 绑定脚本
在 Hierarchy > Right Click > Create Empty Object : ScriptObj

创建一个空物体用于放置脚本，将脚本拖拽到空物体上。

选中 Button，在 OnClick()中把空物体托上去，并选中 EnterSkyLight 函数作为 Button 触发后执行的函数。

星空场景重复以上操作。

## 测试脚本
<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-121805.gif" width="600" />  
