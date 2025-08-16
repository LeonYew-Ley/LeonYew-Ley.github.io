---
id: Unity3D-1day-Part7
---

> 标题：[Unity 3D] 1天开发闯关游戏_Part7_场景搭建
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月10日

<!-- 图库：https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main -->

# 场景部分：第一关
## 搭建第一关场景
Okkkkkkkkkkk，经历了一整天 24 小时，咱们终于完善了玩家的移动，现在小骷髅已经可以和我们玩家人骨合一！

接下来，我们利用 Unity Assets Store 中的资产，给项目导入一些方块啥的，简单搭建一个第一关的场景。

我们把导入进来的模型放入项目的 Assets -- Models 文件夹中。

建立一个新的场景：Scene_01。

为了方便复用和统一编辑，我们需要给地基、道具等等创建 Prefeb 预制体。将模型拖到 Hierarchy 面板，再拖到 Prefebs 文件夹，就完成了预制体的创建。

<img alt="picture 33" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/
imgs/2024/01/20240111-234556.jpg" width="600" />

重复的搭建过程就不截图了，项目建好后路线如下：
<img alt="picture 50" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-035311.jpg" width="600" />  
俯视图：
<img alt="picture 51" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-035406.jpg" width="600" />  

## 道具设置：金币
为了鼓励玩家按照指定路线进行探索，开发者需要设置激励系统来激励玩家完成成就。在这个项目中，我们准备使用金币来作为奖励。

**创建金币**
<img alt="picture 52" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-040303.jpg" width="600" />  

由于使用的预制体，所以只需要修改一个，其他的设置就会跟着修改。

选中一个，添加 BoxClider，勾选 isTrigger，这样就不会阻挡玩家。

在 Inspector 面板中，找到 Overrides --> Apply All，将设置同步到预制体
<img alt="picture 53" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-040543.jpg" width="600" />  

**编写脚本**
接下来编写两个脚本：Coins 和 PlayerScore，用于记录玩家得到的金币数。Coins.cs 用在金币上面，用于处理金币的消失和调用 PlayerScore的增加分数方法。 PlayerScore.cs 用于处理玩家的分数逻辑和分数 UI 的显示。

PlayerScore.cs:
```cs
public class PlayerScore : MonoBehaviour
{
    public int NumberOfCoins { get; private set; } // 只读

    public UnityEvent<PlayerScore> OnCoinCollected;

    public void CoinCollected()
    {
        NumberOfCoins++;
        OnCoinCollected.Invoke(this); //发送信息给订阅者（ScoreUI）
    }
}
```

Coins.cs：
```cs
public class Coins : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        PlayerScore playerScore = other.GetComponent<PlayerScore>();

        if (playerScore != null)
        {
            playerScore.CoinCollected();
            gameObject.SetActive(false);
        }
    }
}
```
效果如下：
<img alt="picture 54" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-043008.gif" width="600" />  

## 设置UI组件：显示分数
设置 UI 分辨率：
<img alt="picture 55" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-043617.jpg" width="600" />  

添加 TMP Text，根据提示导入 TMP Essentials
写个数字：-1，表示没有输入

新建文件夹：Sprites，用于存放 2D 图像，将金币图案导入进来，在 Inspector 面板设置 Type 为 Sprite。

效果如下：
<img alt="picture 57" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-050246.jpg" width="600" />  

## 新建脚本、记录分数：修改 UI TMP 内容
在之前道具设置的时候，我们就已经写好了 PlayerScore.cs 中，向订阅者发送信息的代码（问就是做完了再写的文章，不想删掉再做了）。

我们给 UI 写一个脚本，包含更新文字内容的方法，每当订阅者发送信息就调用。

ScoreUI.cs:
```cs
public class ScoreUI : MonoBehaviour
{
    private TextMeshProUGUI coinScore;

    void Start()
    {
        coinScore = GetComponent<TextMeshProUGUI>();
    }

    public void UpdateDiamondText(PlayerScore playerScore)
    {
        coinScore.text = playerScore.NumberOfCoins.ToString();
    }
}
```

点击 Skeleton，找到脚本，给 PlayerScore 添加订阅者：把 Text组件 拖入到 PlayerScore上。

效果如下：
<img alt="picture 58" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-053627.gif" width="600" />  

## 设置结束效果：
游戏失败的场景：
<img alt="picture 59" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-055321.jpg" width="600" />  

游戏成功的场景：
<img alt="picture 60" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-055345.jpg" width="600" />  

逻辑如下：
给水面添加 Trigger，当角色碰到水面，游戏失败，黑场，传送到指定位置 Defeat Point，并播放相应的动作；给成功的地方添加Trigger，当角色进入到成功的地方，游戏成功，黑场，传送到指定位置，播放相应的动作。

添加 WinArea 并勾选 Trigger：
<img alt="picture 61" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-060741.jpg" width="600" />  


创建 GameEnding.cs，添加如下代码，绑定到 Win Area 物体上。
```cs
public class GameEnding : MonoBehaviour
{
    private bool? isWin;
    private bool? isDefeated;   

    public void DropDefeated()
    {
        isDefeated = true;
    }

    public void ArrivalWin()
    {
        isWin = true;
    }
}

```

再给海水添加一个 Trigger脚本 SeaDrop.cs，调用GameEnding方法。
```cs
public class SeaDrop : MonoBehaviour
{
    public GameObject player;
    public GameEnding gameEnding;
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject == player)
        {
            gameEnding.DropDefeated();
        }
    }
}
```

经测试，均可以正确响应。然后，根据逻辑，添加相关的代码。


我们给成功和失败分别创建两个 Scene，在成功/失败的时候 LoadScene 来展示结算画面：


> 标题：[Unity 3D] 1天开发闯关游戏_Part7_场景搭建
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月10日