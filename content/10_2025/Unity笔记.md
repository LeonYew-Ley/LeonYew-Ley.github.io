## C# 脚本
### Header 标注
代码中，在变量前写如下代码，可以在Inspector面板查看标注：
```c#

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