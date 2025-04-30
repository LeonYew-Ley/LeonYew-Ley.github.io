---
id: Unity3D-1day-Part6
---

> 标题：[Unity 3D] 1天开发闯关游戏_Part6_物理系统
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月10日

<!-- 图库：https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main -->

# 物理系统
## 推动障碍物：推箱子
在有些场景下，我们需要让玩家推动障碍物踮脚来达到跳跃高处的效果，这使得玩家有更多东西可以交互。
首先，引入一个箱子的资源，在 Inspector 面板取消勾选 Static，并且添加 Rigidbody --> Mass = 180。
<img alt="picture 47" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-024855.jpg" width="600" />  
由于我们玩家使用的是 Character Controller，并没有使用 Rigidbody，所以还不能推动木箱，我们需要编写脚本实现。

新建脚本 PlayerPushObject.cs，代码逻辑比较简单，查看官方文档的 Character Controller 部分即可查到相关方法：
```cs
public class PlayerPushObject : MonoBehaviour
{
    [SerializeField]
    private float forceMagnitude; //给一个推动的力

    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        var rigidBody = hit.collider.attachedRigidbody; //获取物体的Rigidbody组件

        if (rigidBody != null)
        {
            var forceDirection = hit.gameObject.transform.position - transform.position; // 计算力的方向
            forceDirection.y = 0; // 不设置垂直方向的力
            forceDirection.Normalize();

            rigidBody.AddForceAtPosition(forceDirection * forceMagnitude, transform.position, ForceMode.Impulse); // Impulse 脉冲，持续施加


        }
    }
}
```

推箱子效果演示：
<img alt="picture 48" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-030657.gif" width="600" />  




> 标题：[Unity 3D] 1天开发闯关游戏_Part6_物理系统
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月10日