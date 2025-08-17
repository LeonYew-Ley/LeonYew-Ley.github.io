# C# 语言笔记
> 本文档结合[《C#语言入门讲解》](https://www.bilibili.com/video/BV1wx411K7rb)和《C# 12.0 本质论》提炼C#相关知识


## Inblox 零散知识
**来自[[CodeWars| Code Wars]]**

**其他零散记录**

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