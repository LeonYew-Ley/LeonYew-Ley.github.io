---
id: Unity3D-1day-Part2
---
> 标题：[Unity 3D] 1天开发闯关游戏_Part2_玩家交互
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日

<!-- 图库：https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main -->

# 游戏操作
|操作|键盘|手柄|
|-|-|-|
|移动|WASD|L|
|加速|Shift|LB|
|跳跃|空格|Y|
|旋转视角|鼠标|R|

# 玩家功能部分

## 设置角色行走功能
利用网络上的素材，简单搭建场景并添加 Animator Controller 用来测试 Collider 和角色行走的功能
<img alt="picture 1" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240110-215210.jpg" width="600" />  

切换到侧视图，给小骷髅设置 Capsule Collider，给草方块添加 Mesh Collider
<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240110-215404.jpg" width="600" />  

新建脚本：PlayerMovement.cs
在课堂上脚本的基础上，优化一下代码结构：利用 Character Controller 来控制玩家，可以用 SimpleMove 来代替 Translate 和一堆参数，还可以省去 RigidBody ，并且可以像 AI Navigation 中的 Agent 一样让角色能够走一定程度的障碍。

搭建如下障碍，并给角色添加 Character Controller。
<img alt="picture 9" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-025331.jpg" width="600" />  


优化后的代码如下：
```CS
public class PlayerMovement : MonoBehaviour
{
    public float moveSpeed;
    public float rotationSpeed;
    private CharacterController chracterController;

    private void Start()
    {
        chracterController = GetComponent<CharacterController>();
    }
    private void FixedUpdate()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        Vector3 movementDirection = new Vector3(horizontalInput, 0, verticalInput);
        float magnitude = movementDirection.magnitude;
        movementDirection.Normalize();
        chracterController.SimpleMove(movementDirection * magnitude * moveSpeed);

        if (movementDirection != Vector3.zero)
        {
            Quaternion toRotation = Quaternion.LookRotation(movementDirection);

            transform.rotation = Quaternion.RotateTowards(transform.rotation, toRotation, rotationSpeed * Time.deltaTime);
        }
    }
}
```

只使用 Character Controller 效果如下：
<img alt="picture 10" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-030434.gif" width="600" />  


## 行走改进：修复 Normalize 导致手柄无法线性控速
在获取输入的代码中，我们采用了以下代码来修复斜向速度超过1的问题：
```CS
movementDirection.Normalize();
```
但是这样也导致了小数值被格式化为 1，所以，在对数值格式化之前，应该先将 magnitude 存储起来，以确保游戏能在手柄上使用。

修改代码如下：
```CS
float magnitude = movementDirection.magnitude;
movementDirection.Normalize();
transform.Translate(movementDirection * magnitude * moveSpeed * Time.deltaTime, Space.World);
```

修改效果对比：
|修改前|修改后|
|-|-|
|<img alt="picture 8" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-024400.gif" width="600" />  |<img alt="picture 7" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-024339.gif" width="600" />  |

## 使用 CinemaMachine 添加跟随摄像机
在菜单栏 -- Window -- Package Manager，右上角搜索 Cinemachine，再点击 Install 安装。
在 Hierarchy 面板右键 -- Cinemachine -- Virtual Camera
<img alt="picture 11" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-031306.jpg" width="600" />  

这时，Main Camera 会出现一个 Cinemachine 的 logo，代表 Main Camera 被 Cinemachine 控制。在右侧的 Inspector 面板配置 Cinemachine：
<img alt="picture 12" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-031949.jpg" width="600" />  

效果如下：
<img alt="picture 13" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-032058.gif" width="600" />  

## 镜头改进：Cinemachine 第三人称动画
在固定视角中，当玩家在某些场景下可能需要观察周围的环境，所以需要动鼠标或者右摇杆来旋转视角，而使用 Cinemachine 的固定跟随视角很明显不能做到，所以在这里，将镜头更改为第三人称动画：

**修改相机焦点**
在玩家角色下，新建一个空物体 CamFocus 作为子物体。待会儿将这个子物体作为相机焦点，高度差不多放在嘴巴高度。
<img alt="picture 11" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-170424.jpg" width="600" />  

**新建摄像机**
最开始创建的虚拟摄像机默认是固定视角的，所以我们需要新建一个 FreeLook Camera 作为第三人称摄像机。
将刚才新建的 CamFocus 拖到 FreeLookCam 的 Follow 和 LookAt
<img alt="picture 12" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-170942.jpg" width="600" />  

**修改 Cinemachine 设置**
在 Scene 视图中，我们可以看到 Cam 有 3 个圈，分别代表了 3 个不同高度的摄像机运动路径。我们按照“站得高看得远” 的原则，设置 3 个圈的半径如下：
<img alt="picture 13" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-171342.jpg" width="600" />  

**修改脚本，设置视角旋转**
接下来，修改脚本，以支持鼠标旋转视角。
为了让角色的朝向和视角的朝向一致，我们要先引入摄像机组件，并且将摄像机组件的 y 轴旋转值传递给角色朝向：
```cs
[SerializeField]
private Transform cameraTransform; //引入摄像机位置组件
```
>注意，上方代码的 [SerializeField] 是序列化的意思，序列化了之后，你就可以在 Inspector 面板看到 cameraTransform （即使是 private 属性），这样可以方便开发者传参，也有效避免了被其他类访问导致代码出错。

接下来，将相机的 y 轴旋转值赋值给 moveDirection：
```cs
// 将移动方向转换为相机的方向
movementDirection = Quaternion.AngleAxis(cameraTransform.rotation.eulerAngles.y, Vector3.up) * movementDirection;
movementDirection.Normalize();
```

## 镜头改进：细节设置
**隐藏光标**
还没完，要真正实现鼠标转换视角总得把光标隐藏了吧？
在脚本中添加如下方法，代码很简单，字面意思，懒得解释了：
```cs
// 锁定焦点、隐藏光标
private void OnApplicationFocus(bool focus)
{
    if (focus)
    {
        Cursor.lockState = CursorLockMode.Locked;
    }
    else
    {
        Cursor.lockState = CursorLockMode.None;
    }
}
```

接下来，将 Main Camera 拖到 Camera Transform 中：
<img alt="picture 14" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-172609.jpg" width="600" />  

**自动同步朝向**
在 FreeLookCam 中，继续进行以下设置:
|设置|值|作用|
|-|-|-|
|Orbits - Bingding Mode|Lock To Target On Assign|自动对齐相机与角色同向|
|Recenter To Target Heading|Enable: True|同上|

**自动躲避障碍**
在 Inspector 面板中， 找到 Extension，添加 Cinemachine Collider：
|设置|值|作用|
|-|-|-|
|Strategy|Pull Camera Forward|遇到障碍，相机向前运动|
|Damping|2|相机向前视角的速度|
|Damping When Occluded|2|视角恢复的速度|

**反转轴向**
|设置|值|作用|
|-|-|-|
|Axis Control -- Y Axis|Invert: false|取消反转 Y 轴|
|Axis Control -- X Axis|Invert: false|取消反转 X 轴|

**摇杆视角**
接下来，给手柄的右摇杆添加控制视角功能：
Edit -- Project Setting -- Input Manager，找到 Mouse X：
Duplicate Array Element，参数如下：
<img alt="picture 15" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-174517.jpg" width="600" />  

再找到 Mouse Y，同样的操作，不过选择 5th axis。

最终，镜头改进之后，我们实现了如下功能：
- 相机可以聚焦角色头部
- 遇到障碍后自动向前运动
- 角色转向后自动与角色朝向同步
- 摇杆可以控制视角

效果如下：
<img alt="picture 16" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-175607.gif" width="600" />  


## 使用 Character Controller 添加跳跃功能
分析跳跃逻辑如下：
<img alt="picture 4" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240110-232140.jpg" width="600" />  

根据跳跃逻辑，我们可以设置变量 jumpSpeed 和 ySpeed 计算角色的高度，并赋值给 Character Controller 的 Move 方法。
首先，新增如下变量：
```CS
public float jumpSpeed;//修改跳跃高度
private float originalStepOffset; //跳跃前的偏倚
private float ySpeed;
```

在 Start() 方法中存储原始的步长偏移
```cs
originalStepOffset = characterController.stepOffset;// 存储原始偏移
```

在 FixedUpdate() 方法中计算 y 轴高度：
```cs
// 计算y高度
ySpeed += Physics.gravity.y * Time.deltaTime;
if (characterController.isGrounded)
{
    characterController.stepOffset = originalStepOffset; // 恢复原始偏移
    ySpeed = -0.5f;// 跳跃后给y固定一个稳定的值

    if (Input.GetButtonDown("Jump"))
    {
        ySpeed = jumpSpeed;
    }
}
else
{
    characterController.stepOffset = 0; // 跳跃时将原始偏移设置为0
}
```

修改原来的 SimpleMove() 方法，将跳跃高度加入到 Character Controller 中
```cs
// 添加了y轴的速度
Vector3 velocity = movementDirection * magnitude;
velocity.y = ySpeed;
characterController.Move(velocity * Time.deltaTime);
```

效果如下：
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-120134.gif" width="600" />  


因为跳跃的动画幅度较大，直接跳跃有可能会让动画跟不上（别问，问就是调一天也没调好），所以我们将跳跃拆成3个阶段：跳起、滞留、落地。
去 Adobe 的动作库网站： mixamo，将我们的小骷髅建模上传上去，分别找到这三个动作，然后下载。
<img alt="picture 5" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-013153.jpg" width="600" />  

将三个动作导入到Unity中，并对刚才的三个动作进行设置根动画，其中：Falling Idle 需要勾选 Loop Time，确保滞空的时候动作时间够长。
<img alt="picture 6" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-013328.jpg" width="600" />  


## 跳跃改进：增加缓冲区

由于玩家是存在反应时间的，如果没有缓冲区，在游玩过程中很容易出现以下情况：
|Bug体验|原因|
|-|-|
|刚落地就跳跃跳跃不起来|isGrounded还没有为true，还差一点接触到地面碰撞箱|
|从平台上跳起失效|玩了一点时间点击跳跃按钮，已经离开地面碰撞箱，isGrounded = false|
|各种跳起失效|控制器、键盘的电气特性造成的延迟|

改进的跳跃逻辑如下：
<img alt="picture 1" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-121538.jpg" width="600" />  

首先，增加变量用于检测跳跃按钮按下的时间：
```cs
public float jumpingBufferTime; //设置跳跃误差时间
private float? lastGroundedTime; //上一次接触地面的时间，?表示可以为空值(null)
private float? lastJumpPressedTime; //上次点击跳跃的时间
```

在 Update() 方法中，更新如下代码用于记录时间：
```cs
// 每次刷新，更新落地时间和跳跃按钮时间
if (characterController.isGrounded)
{
    lastGroundedTime = Time.time;
}
if(Input.GetButtonDown("Jump"))
{
    lastJumpPressedTime = Time.time;
}
```

在记录了时间之后，判断是否满足缓冲区并给予 ySpeed
```cs
// 误差时间内，如果跳跃按钮被按下，则跳跃
if (Time.time - lastGroundedTime <= jumpingBufferTime)
{
    characterController.stepOffset = originalStepOffset; // 恢复原始偏移
    ySpeed = -0.5f;// 跳跃后给y固定一个稳定的值

    if (Time.time - lastJumpPressedTime <= jumpingBufferTime)
    {
        ySpeed = jumpSpeed;
        //清空数值，以免重复跳跃
        lastJumpPressedTime = null;
        lastGroundedTime = null;
    }
}
else
{
    characterController.stepOffset = 0; // 跳跃时将原始偏移设置为0
}
```
这里我们将 JumpSpeed 设置为 5，JumpBufferTime 设置为 0.2 秒，更方便观察连跳效果。
改进后的跳跃效果如下：
（可能看不出来的，但是游玩过程中能明显发现起跳更容易了）
<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-123028.gif" width="600" />  




> 标题：[Unity 3D] 1天开发闯关游戏_Part2_玩家交互
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日
