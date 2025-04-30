---
id: Unity3D-1day-Part3
---

> 标题：[Unity 3D] 1天开发闯关游戏_Part3_动画部分
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日
> 
<!-- 图库：https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main -->

# 动画部分：
## 给玩家添加闲置、奔跑动画

从 Adobe 提供的动画库：Mixamo 上，将小骷髅的 .fbx 模型上传上去，找到 Idle、Running 状态并下载。按照下图设置手臂间距和身体类型，使动作更贴合小骷髅的体型：
<img alt="picture 3" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-140405.jpg" width="600" />  

下载动作并重命名，添加 "Skeleton@" 前缀，用来标识这是小骷髅的动作。
导入到 Unity 项目 Assets -- Animation 目录下。对动作进行设置：勾选 Loop Time 和 Loop Pose
创建 Animator，并设置 Transition：
<img alt="picture 4" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-141542.jpg" width="600" />  

为了控制 Animator 的切换，需要在脚本中引入 Animator：
```cs
private Animator animator;
```
在 Start() 方法中获取：
```cs
animator = GetComponent<Animator>();
```
然后，更新移动的方法，在移动时设置 isRunning = true, 不移动时为false。
```cs
if (movementDirection != Vector3.zero)
{
    Quaternion toRotation = Quaternion.LookRotation(movementDirection);
    transform.rotation = Quaternion.RotateTowards(transform.rotation, toRotation, rotationSpeed * Time.deltaTime);
    animator.SetBool("IsRunning",true);
}
else
{
    animator.SetBool("IsRunning",false);
}
```
记得取消勾选 Has Exit Time，否则动画的缓入缓出时间会让动画看起来不跟手！
效果如下（Idle 拼错了，见谅）：
<img alt="picture 5" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-143107.gif" width="600" />  

## 动画改进：利用 Blend Tree 修复太空漫步，添加行走过度动画
如果只有 Running 一个状态，在使用线性输入的时候就会遇到问题（比如手柄、扳机），及时输入值很小，实际运动值，但是动画看起来还是跑很快。
<img alt="picture 6" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-143857.gif" width="600" />  

所以我们应该为慢速的运动设置一个慢走的动画，这样看起来才合理。
我们在 Mixamo 上找到 Walking 动画，设置手臂间距，下载为 Unity 使用的 fbx 格式。
<img alt="picture 7" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-151840.jpg" width="600" />  

导入到 Unity，删掉原来的 Idle 和 Running 状态，新建一个 Blend Tree，双击 Blend Tree 为它添加节点：
<img alt="picture 8" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-154921.jpg" width="600" />  

当前混合后的效果如下：
<img alt="picture 9" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-155138.gif" />  

接下来，修改动画切换代码，在行走的时候修改 InputMagnitude 的值，从而达到切换动画的目的。


首先是需要将 magnitude 单独存放起来，以便用于动画的切换。所以将原来的 moveSpeed 切换成为了 maxSpeed，而具体的速度大小由 inputMagitude 控制，并且通过判断是否按下了 Shift 或 LB 键，可以切换加速状态。（magnitude 最大值为 1）

所以，修改Update() 方法中的代码如下：

```cs
float inputMagnitude = Mathf.Clamp01(movementDirection.magnitude);
inputMagnitude /= 2; // 默认行走

if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift) || Input.GetKey(KeyCode.JoystickButton4))
{
    inputMagnitude *= 2; //加速
}

animator.SetFloat("InputMagnitude", inputMagnitude, 0.05f, Time.deltaTime);//设置动画的移动速度(0-1)

float moveSpeed = inputMagnitude * maxSpeed;
```


贴一段在 Unity 中输出按键的代码，可以方便开发者设置按键：
```cs
if (Input.anyKeyDown)
{
    foreach (KeyCode CurretkeyCode in Enum.GetValues(typeof(KeyCode)))
    {
        if (Input.GetKeyDown(CurretkeyCode))
        {
            Debug.Log("当前按下的键位是 : " + CurretkeyCode.ToString());
        }
    }
}
```
动画改进后效果如下：
<img alt="picture 10" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-164054.gif" width="600" />  

## 动画改进2：调整根运动 Root Motion
即使我们使用了 Blend Tree 来优化 “闲置 --> 跑步” 之间的过渡，但是当手柄玩家极慢的走路时，动画还是很不自然：
<img alt="picture 17" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-180100.gif" width="600" />  

要使用根运动，首先需要更改使用的动画。目前使用的是原地移动的动画，我们需要使用自带前进向量的动画。来到 Mixamo，下载动画的时候，取消勾选 “In Place”。
<img alt="picture 18" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-194107.jpg" width="600" />  

将 Walking 和 Running 都做替换，并导入 Unity。
对两个动画设置如下参数：
<img alt="picture 19" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-194530.jpg" width="600" />  
<img alt="picture 20" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-194632.jpg" width="600" />  

如果动画文件替换前后文件名相同，在 Blend Tree 中不用再添加新的动作
<img alt="picture 21" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-194823.jpg" width="600" />  

接下来，我们修改脚本：
由于这次我们使用的是带有前进向量的动画，所以我们只需要在脚本中计算跳跃的时候 y 轴大小即可，将水平移动留给动画。

要调用动画的移动方法，声明如下，最终移动向量的计算放到这个方法中：
```cs
private void OnAnimatorMove()
{
    // 通过动画控制器的速度来控制移动
    Vector3 velocity = animator.deltaPosition;
    velocity.y = ySpeed * Time.deltaTime;
    characterController.Move(velocity * Time.deltaTime);
}
```
在上方代码中，我们调用了 animator.deltaPosition 获取了动画中角色的位置，并给这个 Vector3 变量添加了我们所计算好的 y 值，最终再把值应用到 characterController 上。

再删除掉源代码中的 moveSpeed 计算、maxSpeed变量。

最后，在测试中发现，起跑的时候会有向后滑步的现象出现，对于这个现象，可能是 Idle 和 Walking 之间的动画差别较大，所以，我们单独将 Idle 作为状态，像以前一样在 Animator 中 Make Transition，并在代码中 SetBool。

效果如下：
<img alt="picture 22" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-211538.gif" width="600" />  

## 分解跳跃动画
此前动画中一直没有跳跃动画，导致操作手感比较虚，所以在这里，我们给角色添加跳跃动画。由于角色的下落时间是不可控的（比如：从高处落下、从低处落下）。

如果使用完整流程的跳跃动画，有可能还没落地动画就放完了，又或者还没放完动画，角色已经落地了。

所以，我们需要把跳跃动画分解成 3 个部分：起跳（Jump Up） -- 滞空（Fall Idle） -- 落地（Landing）。

又到了熟悉的环节，我们到 Adobe 的 Mixamo 网站上找到对应的动作，下载设置和前文一样：fbx for Unity、without Skin。下载完之后导入 Unity。

导入后，设置 Humanoid、Avatar、Animation 为 Origin，其中，滞空动作勾选上 Loop。

接下来，在 Animator 中设置如下转换：
<img alt="picture 23" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-213428.jpg" width="600" />  

具体的转换场景也已经在途中标注，不再赘述。

新建相关的 布尔变量 赋值到 Transition 的 Conditions 中：
<img alt="picture 24" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-213627.jpg" />  

设置好之后，再做以下步骤：
- 取消勾选 Has Exit Time，及时响应动画过渡
- 设置过渡时间，起跳和落地为 0.1，落地不动 0.6，落地行动 0.2

<img alt="picture 25" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-214615.jpg" width="600" />  

接下来，在脚本中绑定相关的变量，值得一提的是，只用设置 isJumping 和 isGrounded 就可以判断出剩余的 Falling 状态了。
```cs
private bool isJumping;//跳跃状态
private bool isGrounded;//落地状态
```

Update() 方法中，跳跃逻辑部分代码如下（没啥好看的，就是找出来哪里是什么状态，然后设置一下）：
```cs
// 误差时间内，如果跳跃按钮被按下，则跳跃
if (Time.time - lastGroundedTime <= jumpingBufferTime)
{
    characterController.stepOffset = originalStepOffset; // 恢复原始偏移
    ySpeed = -0.5f;// 跳跃后给y固定一个稳定的值

    // 在地面
    isJumping = false;
    isGrounded = true;
    animator.SetBool("IsGrounded",true);
    animator.SetBool("IsJumping",false);
    animator.SetBool("isFalling",false);

    if (Time.time - lastJumpPressedTime <= jumpingBufferTime)
    {
        // 跳跃中
        animator.SetBool("IsJumping",true);
        isJumping = true;

        //清空数值，以免重复跳跃
        ySpeed = jumpSpeed;
        lastJumpPressedTime = null;
        lastGroundedTime = null;
    }
}
else
{
    // 不在地面
    animator.SetBool("IsGrounded", false);
    isGrounded = false;
    // 判断是否在下落
    if ((isJumping && ySpeed < 0) || ySpeed < -2)
    {
        animator.SetBool("IsFalling", true);
    }

    characterController.stepOffset = 0; // 跳跃时将原始偏移设置为0
}

if (movementDirection != Vector3.zero)
{
    // 移动中
    animator.SetBool("IsMoving", true);
    Quaternion toRotation = Quaternion.LookRotation(movementDirection);
    transform.rotation = Quaternion.RotateTowards(transform.rotation, toRotation, rotationSpeed * Time.deltaTime);
}
else
{
    // 停止移动
    animator.SetBool("IsMoving",false);
}
```
运行游戏，会发现，还有一些问题：
- 落地马上再次跳跃，会在空中播放落地动画（没有被打断）
- 跳跃之后不能在水平方向上位移。（使用了根运动，而跳跃的三个动作本身没有位移）
## 动画改进3：解决跳跃分解动画的问题
对于刚才发现的第一个问题很好解决：让动画可以被打断即可。
在 Animator 中，对 Landing 之后的两个 Transition 进行设置 -- Interruption Source: Next State，这样，Landing 动画就可以被打断了。

对于第二个问题，我们只要分开两个情况：让跳跃过程不使用根运动，单独在 Update() 方法中计算移动向量即可。
更新 OnAnimatorMove() 方法：
```cs
private void OnAnimatorMove()
{
    if (isGrounded)
    {
        // 通过动画控制器的速度来控制移动
        Vector3 velocity = animator.deltaPosition;
        velocity.y = ySpeed * Time.deltaTime;

        characterController.Move(velocity);
    }
}
```

添加跳跃时的水平速度：
```cs
[SerializeField]
private float jumpHorizontalSpeed;//对跳跃动画的水平向量的补充
```

添加 Update() 方法中计算移动向量的代码：
```cs
if (!isGrounded)
{
    Vector3 velocity = movementDirection * inputMagnitude * jumpHorizontalSpeed;
    velocity.y = ySpeed;

    characterController.Move(velocity * Time.deltaTime);
}
```

最后改进的效果如下：
<img alt="picture 26" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-225643.gif" width="600" />  

## 动画改进4：缝合动画，制作无缝动画
<img alt="picture 31" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-232624.gif" />  

在刚才的跳跃动画中，角色下降时，头会更前倾一点，是因为 Jumping --> Falling Idle 的末始关键帧动作有一些差别。知道原因之后，我们很快就理解了解决方法：将 Jumping 的末尾关键帧复制给 Falling Idle。

但是，导入进来的动作关键帧是只读（Read-Only）的，不能编辑，所以我们要先复制一份 Falling Idle 并且更新 Animator 中绑定的 Falling 动作。

我们复制一份动作，命名为 FallingIdle New，并应用到 Animator State。
<img alt="picture 27" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-231005.jpg" width="600" />  

打开 Animation 窗口，选中我们的 Skeleton。
<img alt="picture 28" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-231123.jpg" width="600" />  
可以在这里切换角色的动作，可以看到，复制之后的动作没有 Read-Only 提示。

选中 FallingIdle New，找到 Root 相关的关键帧，变动一下值，看看哪个控制旋转角度，在这里我们测出来是 Skeleton: Root Q --> Root Q.x 控制下落的旋转角度，所以，我们找到 Jumping: Root Q，将其末尾的帧复制过来即可。

我们先将 FallingIdle New 中，第一帧以外的角度关键帧删掉
<img alt="picture 29" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-231715.jpg" width="600" /> 

复制 Jumping Up 末尾帧，复制好后如下：
<img alt="picture 30" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-232555.jpg" width="600" />  

改进4之后的动画效果如下：
<img alt="picture 32" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240111-233236.gif" width="600" />  

## 动画改进5：金币旋转
在关卡中，我们添加了金币，但是没有动效，这里我们来给它添加上动效。

打开动画窗口，点击 Create 创建动画，命名为 Coin Idle
<img alt="picture 62" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-073230.jpg" width="600" />  

创建 Rotation 关键帧，添加旋转效果
<img alt="picture 63" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-073346.jpg" width="600" />  

首尾帧分别为 0°，360°，并把末尾帧延长到 10s，最后 Apply All

效果如下：
<img alt="picture 64" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240112-081401.gif" width="600" />  

> 标题：[Unity 3D] 1天开发闯关游戏_Part3_动画部分
> 链接：[Yew's Blog](http://ley.asia/)
> 日期：2024年1月8日