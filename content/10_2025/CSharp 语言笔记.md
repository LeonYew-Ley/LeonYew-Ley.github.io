# C# 语言笔记 ——————————————
> 本文档结合[《C#语言入门讲解》](https://www.bilibili.com/video/BV1wx411K7rb)和《C# 12.0 本质论》提炼C#相关知识
> 课堂笔记： https://www.yuque.com/yuejiangliu/dotnet/timothy-csharp-001

学习资料：
- 
## 前言/基础概念
### 心法
- 不要怕见到自己看不懂的东西
- 要跟着操作，一遍遍练习，熟悉手里的东西
### 程序
程序的编写流程：
编辑 -> 编译 -> 调试 -> 发布

编程的学习路径
- 纵向：语言、类库、框架
- 横向：语言的各种应用，命令行、桌面应用、移动端、Web、游戏...

作业：
> 用 WPF 完成一个 Hello World 程序，点击按钮之后，TextBox 显示 “Hello World!”

### 项目
#### Solution 与 Project
- Solution是总的解决方案
- Project是解决具体的某个问题
  - Console
  - WPF
  - Windows Forms
  - ...

### 各种 Hello World
- Console Application
- WPF
- Windows Forms
## 基本元素
- 关键字
- 操作符（逻辑与或非等等）
- 标识符（名字）
  - 命名方法
    - Pascal 法（C#常用）
    - 驼峰法 thisIsAVariable（Java常用）
- 标点符号
- 文本（字面值）
  - 整数：int, long(3L, 64bit)
  - 实数：float(3f), double(3D)
  - 字符：单引号，一个字符
  - 字符串：双引号
  - 布尔：
  - 空 Null
- 注释与空白
  - 单行 `//`
  - 多行 `/**/`
  - VSCode 块注释快捷键：`Shift + Alt + A`（Windows/Linux），`Option + Shift + A`（Mac）
  - VSCode 格式化快捷键：`Shift + Alt + F`（Windows/Linux），`Option + Shift + F`（Mac）
## 03：类与命名空间
- using使用的都是命名空间，命名空间是为了避免同名函数冲突
- 冲突的时候使用全量命名
- Assembly 类库（DLL，Dynamic Link Library）
	- 提供方法
-  Microsoft Help Viewer，MSDN 文档使用：引用带有窗口的类库，让程序显示出窗口
- NuGet 管理器可以自动引用相关类库
- 依赖关系
	- UML图

## 06、07：类型变量与对象
> 07 特别有用，认识了C#中很重要的一些概念，同时也是面试常问的问题，C# 语言的五大基本类型，装箱拆箱，变量在内存中的存储等等。

**变量**
变量就是以变量名所对应的内存地址为起点，以其数据类型所要求的存储空间为长度的一块内存区域。

**变量的类型**
静态变量、实例变量、数组变量、值参数、引用参数、输出形参、局部变量（局部变量都分配在栈上）

```csharp
class Player
{
	public static int PlayerCount;  // 静态变量

	public int health = 100;        // 实例变量 / 成员变量 / 字段（Instance Variable / Field）

	public static void Attack(
		int monsterId,              // 值参数（Value Parameter：传值复制）
		ref int playerId,           // 引用参数（ref parameter：传引用，可修改原值）
		out bool attackSucess)      // 输出形参（out parameter：必须在方法内赋值）
	{
		int attackTimes = 3;        // 局部变量
		attackSucess = true;

		int[] numbers = new int[3]; // 数组元素
	}
}
```

**C# 的五大数据类型**
类、接口、委托；结构体、枚举；前三个是引用类型，后两个是值类型。

值类型分配在栈上，引用类型分配在堆上。栈只能由系统来操作，软件只能对堆进行操作，进而引出了装箱拆箱的概念。

在 Visual Studio 中，安装了离线的 Help Viewer，可以通过给 Help.F1Help 命令分配快捷键，进而查看关键字、一些数据类型的定义。

**值类型的变量**
byte, sbyte, short, ushort, int, bool...
引用类型的变量就是类、接口、委托，引用类型变量里面存储的数据是“对象的内存地址“

**装箱和拆箱**
装箱就是引用类型变量存储值类型变量的值，比如 Object obj 来存储 int x 的值，由于 x 分配在栈上且栈由系统管理，所以 obj 不能直接存储 x 在栈上的地址，只能把 x 的值复制到堆上，并且在 obj 的内存中存储堆上的内存地址，其中，把值从栈复制到堆上的操作叫做装箱。

拆箱就是把引用类型的值再放回栈上。比如 int y  = (int)obj，此时 y 是值类型存储在栈上，且直接存储值，所以需要通过 obj 获取到堆上的内存地址，再把堆上的内存中的值复制到 y 所对应的栈内存中，这个过程叫做拆箱。

我的理解是，“箱子”代表引用的堆上的地址，相当于引用类型封装了一层，把原本在栈上的值通过引用地址包装到堆中，叫做装箱；通过“箱子”找到堆上对应的值，再搬回栈中，避免了通过地址再访问，叫做拆箱，拆掉了这一层引用。

# C# 语法 ------------------------------------------
## 一些初始化声明
> 平常写代码的时候，声明变量完了，编辑器总是提示我这里可以 Quick Fix、那里也可以，导致我总是写着写着怀疑人生，搞得都不知道该如何声明变量了，所以在这里总结了一下。

C# 中有几种变量，基本类型、对象类型、集合类型等等。

```csharp
// 基本类型 - 有默认值
int number = 0;           // 或者 int number; (默认0)
bool flag = false;        // 或者 bool flag; (默认false)
string text = "";         // 或者 string text; (默认null)
char ch = '\0';           // 或者 char ch; (默认'\0')

/* 对象类型 */

// 传统方式
Person person = new Person();
Person person2 = new Person("John", 25);
// C# 9.0+ 目标类型推断
Person person3 = new("John", 25);  // 编译器推断类型
var person4 = new Person("John", 25);

/* 集合类型 */

// 传统方式
List<int> numbers = new List<int>();
List<int> numbers2 = new List<int> { 1, 2, 3, 4 };
// C# 9.0+ 目标类型推断
List<int> numbers3 = new() { 1, 2, 3, 4 };
var numbers4 = new List<int> { 1, 2, 3, 4 };
// C# 12+ 集合表达式
List<int> numbers5 = [1, 2, 3, 4];  // 最新语法

```

主要区别在于集合类型和对象类型在不同版本标准的 C# 中的语法不同。

对于集合类型，传统方式需要在 new 后面写出类型的类名、参数；C# 9.0 之后可以省略类名和参数，声明的内容（键值对）依旧使用 `{}` 花括号来表示（对象初始化器语法）；C# 12.0 之后，开始使用赋值初始化（索引器初始化器语法）

字典初始化方式变化：
```csharp
// 传统方式

Dictionary<string, int> dict = new Dictionary<string, int>();
Dictionary<string, int> dict2 = new Dictionary<string, int>
{
    {"apple", 1},
    {"banana", 2}
};

// C# 9.0+ 目标类型推断
Dictionary<string, int> dict3 = new()
{
    {"apple", 1},
    {"banana", 2}
};

// C# 12+ 集合表达式
Dictionary<string, int> dict4 = new()
{
    ["apple"] = 1,
    ["banana"] = 2
};
```

集合初始化方式变化：
```csharp
// 传统方式
List<int> numbers = new List<int>();
List<int> numbers2 = new List<int> { 1, 2, 3, 4 };
  
// C# 9.0+ 目标类型推断
List<int> numbers3 = new() { 1, 2, 3, 4 };
var numbers4 = new List<int> { 1, 2, 3, 4 };
  
// C# 12+ 集合表达式
List<int> numbers5 = [1, 2, 3, 4];  // 最新语法
```
## 条件判断：If()
### 短路求值及一些 Trick 写法
> 在 C# 中，逻辑运算符`&&`（逻辑与）和`||`（逻辑或）具有短路求值特性，这意味着当第一个操作数已经能确定整个表达式的结果时，第二个操作数不会被执行。

**判空操作：避免空指针**
```csharp
// 判断 a、b 数组是否为空且长度是否相等，先进行判空操作，避免 a 或 b 为 null 的时候访问成员变量 Length 的时候报 NullReferenceException
if (a == null || b == null || a.Length != b.Length)
	return false;
```

**条件执行函数 & 条件赋值 & 替代TryCatch**
条件执行函数、替代TryCatch
```csharp
isReady && DoSomething();
// 等价于
if (isReady) DoSomething();
```

**条件赋值**
```csharp
// 在 input 不为空且不为空字符串的时候才赋值，否则为 Default
string name = input != null && input.Length > 0 ? input : "Default";

// user 不为空才赋值，但布尔表达式需要 `&&` 两边都是布尔值，所以右边需要再判断一下 != null
(user != null && (user.Name = "Leo") != null);
```

**循环提前结束**
> 可以不用写 `break;`

```csharp
// 角色向目标点移动的逻辑（每帧更新）
void MoveToTarget(Character character, Vector3 target)
{
    // 短路逻辑：
    // 1. 先判断角色是否有效（未销毁）
    // 2. 再判断是否到达目标点（未到达则继续循环）
    // 3. 最后执行移动逻辑（只有前两个条件都满足才执行）
    // MoveToWards 未在这里实现
    while (character != null 
           && !IsReachedTarget(character, target) 
           && character.MoveTowards(target, Time.deltaTime)) 
    {
        // 循环体为空，所有逻辑在条件中通过短路求值完成
        // 每帧等待一次更新（避免死循环阻塞主线程）
        yield return null; 
    }

    // 移动结束后的处理
    if (character != null)
    {
        character.PlayIdleAnimation();
    }
}

// 检测是否到达目标点
bool IsReachedTarget(Character character, Vector3 target)
{
    return Vector3.Distance(character.Position, target) < 0.1f;
}
```

## Char
### char.GetNumericValue(x)
> 获取字符 x 的数值

## String
### String 和 string
两者使用上没什么区别，一个是类型名称，一个是关键字，在代码中两个都可以使用。

string 是 C# 的关键字，不需要引用命名空间就可以使用（与 bool, int, char 保持一致，都是小写）。
String 是类型名称（.NET Framework 的类型），需要引用命名空间 `using System` 才可以直接使用。
string 在编译成 IL 语言之后，会被编译成 `Sytem.String`
### string.Concat()
> 连接字符串

### string.Join()
> string.Join(string separator, params string[] value)
> 连接字符串，但是可以添加连接符

## Array 数组
### a.SequenceEqual(b) 判断两个序列是否相等
- 要求两个序列的**元素数量必须相同**，否则直接返回 `false`。
- 要求**每个位置的元素必须相等**（按顺序一一对比），顺序不同则判定为不相等。
- 对于值类型（如 `int`、`double`），直接比较值是否相等。
- 对于引用类型（如自定义类），默认比较引用地址，若需比较对象内容，需重写 `Equals` 方法或使用 `IEqualityComparer<T>` 自定义比较规则。

**与 `Equals` 或 `==` 的区别：**
- 数组 / 列表的 `Equals` 或 `==` 比较的是**引用是否相同**（是否为同一个对象），而 `SequenceEqual` 比较的是**内容是否相同**。
```csharp
int[] arr1 = { 1, 2 };
int[] arr2 = { 1, 2 };

Console.WriteLine(arr1 == arr2); // false（引用不同） Console.WriteLine(arr1.SequenceEqual(arr2)); // true（内容相同）
```
# Linq

[LINQ操作汇总 ](https://blog.csdn.net/lweiyue/article/details/129155467)

## 过滤
OfType
```csharp
// 将 listOfItems 中的 int 类型元素过滤出来
return listOfItems.OfType<int>();
```
Where
```csharp
return listOfItems
.Where(x => x.GetType() == typeof(int))
.Select(x => (int)x);
```
## 强制类型转换
Cast
```csharp
return listOfItems
.Where(x => x is int)
.Cast<int>();
```
Select

## 操作
### 排序
OrderBy/OrderByDescending，按一定规则升序/降序排序
```csharp
// 对整数数组升序排序
int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6};
var sorted = numbers.OrderBy(x => x).ToArray();
// 结果: [1, 1, 2, 3, 4, 5, 6, 9]

// 对字符串数组按长度排序
string[] words = {"apple", "pie", "banana", "cat"};
var byLength = words.OrderBy(x => x.Length).ToArray();
// 结果: ["pie", "cat", "apple", "banana"]
```

对象排序
```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string City { get; set; }
}
var people = new List<Person>
{
    new Person { Name = "Alice", Age = 25, City = "Beijing" },
    new Person { Name = "Bob", Age = 30, City = "Shanghai" },
    new Person { Name = "Charlie", Age = 25, City = "Beijing" }
};

// 按年龄排序
var byAge = people.OrderBy(p => p.Age).ToList();
// 按姓名排序
var byName = people.OrderBy(p => p.Name).ToList();
// 按城市排序
var byCity = people.OrderBy(p => p.City).ToList();
```

ThenBy，可以继续排序

## 序列化与反序列化
序列化：将对象转化为可以存储在内存中/网络传输的格式的过程，比如转化成XML文件、JSON文件、二进制文件等等
反序列化：用文件的内容重建为对象

# CodeWars刷题记录--------------------------------

> 2025年7月27日 开始记录
> 
> 刷好多题容易忘，还是开一篇文章记录一下

## [[2025-08-17-正则表达式|正则表达式]]

> 正则表达式采用的是 C# 中的 Regex 类，可以通过`@`运算符来设置 pattern 字符串，填写正则表达式，并通过 `IsMatch` 等函数来返回查询结果

### 在字符串大写字母前添加空格
```csharp
public static string BreakCamelCase(string str)
=> Regex.Replace(str, "(?<!^)([A-Z])", " $1");
```
- `()` 代表分组
- `[A-Z]` 代表大写字母
- `?<` 之前，表示大写字母之前
- `!^` 感叹号表示“非”，`^` 表示开头，所以 `!^` 表示不能为开头
- `(?<!^)` 大写字母之前不能是开头，这样不会匹配到一句话的开头
- ` $1` 空格、`$` 表示结尾、` $1` 表示空格后1个字符 
## 字符串操作
### 删去首尾字符
```csharp
s.Substring(startindex, length);
```
### 字符串范围表达
```csharp
public static string Remove_char(string s) => s[1..^1];
```

## 数组操作
### 求平均数
```csharp
public static double FindAverage(double[] array) => array.Length == 0 ? 0 : array.Average();
```
## 250727 汉诺塔&位运算
https://www.codewars.com/kata/534eb5ad704a49dcfa000ba6

解法：公式/位运算

位运算之左移运算：

> x \<\< n 表示把数字 x 的二进制表示向左移动 n 位
> 
> 每向左移动一位，数字就相当于乘以 2

例如：
- 1 \<\< 0 = 1 (二进制 0001)
- 1 \<\< 1 = 2 (二进制 0010)
- 1 \<\< 2 = 4 (二进制 0100)
- 1 \<\< 3 = 8 (二进制 1000)

```csharp
Console.WriteLine($"位运算2的3次方：{1<<3}");
```

```
位运算2的3次方：8
```