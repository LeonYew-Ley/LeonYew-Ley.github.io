# C# 语言笔记
> 本文档结合[《C#语言入门讲解》](https://www.bilibili.com/video/BV1wx411K7rb)和《C# 12.0 本质论》提炼C#相关知识

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


## 类与对象

### 对象与实例
简单理解，对象就是实例。

精确理解，在编程语境下，对象通常指现实世界中的物体，实例通常指类（代码）实例化出来的一个Object（对象）。

### 静态成员与非静态成员
核心区别是，这两个概念，成员属于“类”还是具体的“实例”

```csharp
public class NewDreamer
{
    private string _fullName = "黎恩瑜";
    public NewDreamer(string nickName)
    {
        this._fullName = nickName;
    }
    public string Introduce() => $"大家好，我是{_fullName}";
}
```

## 类型变量与方法
数据类型：int、float、double...

方法与函数：
> 在 C 语言中叫做函数，后来发展为 C++，函数成为了类成员，后面遍开始叫做方法（成员函数）。

算法：循环与递归

# Linq

[LINQ操作汇总 ](https://blog.csdn.net/lweiyue/article/details/129155467)

# ----- CodeWars -----

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