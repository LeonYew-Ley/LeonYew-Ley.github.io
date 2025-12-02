> [!todo]
> - Photon isMine
> - RPC
> - ECS


## 物理 Rigidbody
### 代码：Rigidbody 不能被移除
如题，因为 Rigidbody 继承自 Component 组件，而常见的脚本、Collider 都继承自 Behaviour。
### 定义：静态碰撞体和动态碰撞体
> 区别，没带 Rigidbody 和带了 Rigidbody

Static Collider，指的是不带 Rigidbody 的 Collider
Dynamic Collider，带了 Rigidbody 组件的 Collider
### 碰撞检测（Continuous Collision Detection, CCD）
> Unity Manual: https://docs.unity3d.com/6000.2/Documentation/Manual/ContinuousCollisionDetection.html

**Collision Dectation：**
- **Discrete**，离散，每次物理检测检查碰撞，效率最高，但容易漏掉

除此以外，下面三种 Continuous 都是提前预算碰撞来实现的碰撞检测

- **Continuous**，持续检查与静态碰撞体的碰撞（不带 Rigidbody 的 Collider）
- **Continuous Dynamic**，持续监测 Rigidbody 与静态碰撞体和动态碰撞体的碰撞

这两种检测方式是基于 [Sweep-based CCD](https://docs.unity3d.com/6000.2/Documentation/Manual/sweep-based-ccd.html)，最精确的检测方式同时也最耗性能，但不能预测旋转，只能预测线性运动（比如一根棍子高速旋转的场景，检测不到棍子扫到的物体）

- **Continuous Speculative**，推测检测

基于 [Speculative CCD](https://docs.unity3d.com/6000.2/Documentation/Manual/speculative-ccd.html) ，支持线性运动和角运动，采用 AABB 包围盒检测，精确度相比于 Sweep-based CCD 更低，预测结果可能出错导致偏离预期轨迹。

> [!tip]
> 碰撞检测推荐尝试顺序：
> - Discrete
> - Continuous Speculative
> - Continuous
> - Continuous Dynamic

**更完整的选择顺序：**
> 还要更完整的检测顺序建议自己去读一下 Unity 文档，表格表示并没有把文档中的情况都涵盖到位，还是需要自己去看一下各种算法怎么实现的，缺陷可能在哪里才能选择最适合自己的检测模式。

**视频推荐：**
【Unity】3分钟搞懂Unity的4种碰撞检测模式 CC中字熟 https://www.bilibili.com/video/BV1de4y1E7Qm/
### Tip：改变单个物体重力
> 比如我们场景中有多个玩家（PlayerController），希望玩家踩空的时候变成浮空的状态，怎么办？

法一：AddForce
法二：修改 Drag & AnglerDrag

### Tip：不要对刚体应用 Transform

## 碰撞器 Collider & Trigger

### 使用 Layer 过滤来优化碰撞检测效率
> 在 Unity 开发中，`Collider` 和 `Trigger` 的检测效率对性能有很大影响，尤其是在场景中存在大量物体时。一个常见的优化手段就是使用 **Layer** 来进行碰撞过滤，而不是依赖 Tag 或逐个对象判断。


**为什么用 Layer 而不是 Tag？**
- **性能差异**：Layer 在 Unity 内部使用整数表示，而 Tag 是字符串，整数比较远比字符串比较高效。
- **位运算支持**：LayerMask 可以通过位屏蔽（二元运算）进行快速过滤，非常适合批量判断。

**比较单个Layer：**
```csharp
//这样可以将字符串名称转换成 Layer 的整数 ID。
int layerId = LayerMask.NameToLayer("Enemy");

if (other.gameObject.layer == layerId) 
{
	Debug.Log("检测到敌人"); 
}
```

**多个 Layer 的比较：**
> 当需要判断一个物体是否属于多个目标 Layer 时，推荐使用 `LayerMask` 配合位运算：

```csharp
public LayerMask targetLayers;
void OnTriggerEnter(Collider other)
{
	if ((targetLayers.value & (1 << other.gameObject.layer)) != 0) 
	{
		Debug.Log("进入目标 Layer 范围");
	} 
}
```

这里的关键是 `(1 << other.gameObject.layer)`，它会生成对应 Layer 的掩码，然后与目标 `LayerMask` 做按位与运算。如果结果不为 0，就说明当前物体的 Layer 在目标集合内。

**讲讲位运算和 LayerMask 的存储方式：**

LayerMask 的存储方式：

Unity 一共有 32 个 Layer（编号 0–31）。每个物体的 gameObject.layer 是一个 int，表示它在哪个 Layer 上（例如 Layer 8 = "Player"）。

LayerMask 本质上是一个 32 位整数，每一位表示一个 Layer 是否启用：

- 1 << 8 → 表示第 8 个 Layer（Player）。
- 1 << 9 → 表示第 9 个 Layer（Enemy）。
- 1 << 8 | 1 << 9 → 同时包含 Player 和 Enemy 两个 Layer。


`<<` 左移运算：
> 会把一个数的二进制 **整体往左移动 N 位**，右边空出来的位置补 0
```csharp
// x << n   =   x * 2^n
1 << 0   // 0000...0001 → 结果 = 1
1 << 1   // 0000...0010 → 结果 = 2
1 << 2   // 0000...0100 → 结果 = 4
1 << 3   // 0000...1000 → 结果 = 8
```

`&`按位与运算符（bitwise AND）：
> 对两个整数的二进制表示逐位比较：如果两个数在同一位上 **都是 1** 则结果为 1。否则结果为 0。

`|` 按位或运算符（bitwise OR）：
> 对两个整数的二进制表示逐位比较：只要某一位上 有一个是 1 , 结果就是 1。两个都为 0 结果才是 0。

可以用`|` 来合并多个 Layer 掩码：
```csharp
// 只包含 Layer 8
int maskA = 1 << 8;  

// 只包含 Layer 9
int maskB = 1 << 9;  

// 合并两个 → 同时包含 Layer 8 和 9
int maskAB = maskA | maskB;  
```

位屏蔽（bitmask）：
> **位屏蔽**就是用一个整数（`LayerMask`）的二进制位来表示一组 Layer 是否被选中。

综上，对于下面代码就很好理解了：
```csharp
void OnCollisionEnter(Collision other)
{
	// 将要检测的 targetLayers 的 value 与 碰撞进来的 other.gameObject.layer 进行比较，如果不为 0，则代表 targetLayer 包含 other.gameObject.layer
	if ((targetLayers.value & (1 << other.gameObject.layer)) != 0)
	{
	    // 命中
	}
}
```

或者我们也可以这样写：
```csharp
void OnCollisionEnter(Collision other)
{
	// 如果 targetLayers 和 other.gameObject.layer 进行按位或运算（也就是合并）之后，依旧和 targetLayers 相等，就表示 targetLayers 包含 other.gameObject.layer

	// 比如 targetLayers 为 0011, other.gameObject.layer = 1000, 按位或运算之后为 1011, 就不对，表示没有命中； 而如果是 0011 和 0001 进行按位或运算之后，依旧是 0011
	if(targetLayers == (targetLayers | (1 << other.gameObject.layer)))
	{
		// 命中
	}
}
```
## -------------- 实战应用 --------------

## 状态机
状态机负责管理状态切换，每个状态需要包含：Enter、（Loop）、Exit

## InputSystem与多人分屏
> 有空再来整理吧，参考链接：https://www.bilibili.com/video/BV1HA411d7YQ/
- InputActions
  - Control Schemes
    - 根据InputSystem发出的事件，可以改变UI的图标
- PlayerInput组件
  - 提供一个玩家控制，一个输入与
  - 标识接受哪一个控制器的输入
  - Actions、键位映射
  - Auto-Switch：用户自动切换设备
  - UI Input Module（不同玩家不同UI）
  - Camera：切分镜头
  - Behavior
    - SendMessage（调用玩家Obj其他组件上的函数，下面举例了）
      - 反射（Private也可以调用）
      - OnMove
    - Invoke Unity Events
      - 拖脚本函数
    - ★Invoke C Sharp Events
      -  
- 脚本框架
  - PlayerPawn（玩家身体）
    - SetMovement
  - PlayerController（读取输入）
- 每个玩家
  - Player(Prefab)
    - 模型/Obj
    - PlayerPawn
  - PlayerController(Prefab)
    - 这个放到InputSystem Manager中
    - PlayerInput
    - PlayerController.cs
      - PlayerPrefab(Player)
## 道具系统与UI
- Item
  - enum ItemType
  - GetSprite
  - IsStackable
- ItemAssets 道具资产
  - pfItemWorld
  - swordSprite
  - healthPotionSprite
  - ...
- Inventory
  - OnItemListChanged
  - itemList
  - useItemAction
  - 
  - Inventory(useItemAction)
  - 
  - AddItem
  - RemoveItem
  - UseItem
  - GetItemList
- Player
  - UseItem
  - new Inventory
  - onTriggerEnter
- ItemWorldSpawner
  - public Item item;
  - ItemInWorld.SpawnItemInWorld(this.pos,item)
- ItemInWorld
  - SpawnItemWorld
    - Instantiate
  - SetItem
    - this.item = item
  - GetItem
  - DestroySelf
- UI Inventory
  - (SetPlayer)
  - SetInventory
  - Inventory_OnItemListChanged
  - RefreshInventoryItems

## 避障第三人称摄像机的实现
> link: https://www.youtube.com/watch?v=QrDgrCO22aU
> 
> date: 2025年12月2日

原理：从玩家位置向摄像机理想位置发送一条射线，如果检测到障碍物，就将摄像机的位置应用为 hit.distance - minimumDistance（摄像机距墙最小距离）

构成：三部分——Hierarchy保持相对位置、Controller通过读取输入设置旋转、RayCaster 通过射线更新位置。

这里有四个层级：
- CamRoot：放在 Player 下面，设置 LocalOffset 为玩家头顶
	- CamControlls：挂CamController和CamDistanceRayCaster
		- CamTarget：LocalOffset 设置为玩家身后
			- CamTransform：MainCamera，摄像机本体。

![[Pasted image 20251202013729.png]]

CamRoot是一直在玩家头顶的。
CamControlls上的CamController会读取输入控制自身旋转，这样就控制了CamTarget和相机本体相对于玩家的旋转。
CamControlls上的 RayCaster 组件则是控制相机本地的 position，用来避障。

![[Pasted image 20251202012519.png]]

原理还是很简单，但是之前在地铁上看的时候没搞懂代码里面的变量和 Hierarchy 面板中的Obj 的对应关系，一直搁置，今天运行了一下工程才搞懂。