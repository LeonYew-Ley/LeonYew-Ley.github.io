# C#知识
> 本文档将和《C#图解教程》的读书笔记融合

# C# 快速笔记

- static 关键字的变量是整个类都可以访问的，譬如声明了一个Cat类，通过 static int sum，在每次Cat声明时，都sum++，就可以统计出一共创建了多少个Cat对象。
  譬如 static 方法，Console.WriteLine()，也是static方法，使用WriteLine并不需要创建一个Console实例，直接使用点方法即可。

- 编译：高级语言，汇编语言（操作寄存器），机器指令（010101）

- 关键字

- 变量命名，不能关键字，不能数字开头

- 命名规范：变量名，小写开头，小驼峰intStr；类名，大写开头，大驼峰Console；

- 存储单位：1b = 1 Bit，1Byte = 8bit，1k=1024，1KB = 1024B，进制2的10次方
  
  - int 4B，表示范围 $−2^{31} 到 2^{31}−1$
  
  - (无符号 unsigned)uint 4B 表示范围 $0到2^{32}-1$
  
  - float 4B，6-9位数字
  
  - double 8B，15-17位数字
  
  - bool
  
  - char 2B，单个字符
  
  - string
    
    - IndexOf("llo")，查找llo索引
    
    - Replace("a","b")，把a替换为b
    
    - Substring(first,second)，截取两个索引的子字符串

- 类型转换：
  
  - 显示类型转换：(int)
  
  - 隐式类型转换：float转double，不用打括号告诉类型
  
  - 字符串和数值转换`int valInt3 = int.Parse(valStr2);`

- 自增
  
  - ```csha```
    int a = 4;
    int b = a++; // b = 4, a = 5;
    a = 4;
    int b = ++a; // b = 5, a = 5;
    
    ```
    
    ```

- 字符串格式化
  
  - ```csharp
    string str1 = inputStr + "计算结果: " + result;
    string str2 = $"{inputStr}的计算结果：{result}";
    ```

## 枚举 Enum

```csharp
enum EGenderType{
    Male = 0,
    Female,//从上到下，依次为1，2，3
    Other = 3 //本应该
}

switch(gender){
    case EGenderType.Male: Console.WriteLine("男");break;
    case EGenderType.Female: Console.WriteLine("女");break;
    case EGenderType.Other: Console.WriteLine("朋友");break;    
}
```

## 中断 Continue Break

continue ：停止当前代码块，进入下一次循环。

break：停止当前循环，进入循环后的下一条语句。

## 循环 Do While

先执行语句块再进行条件判定

```csharp
int i = 0;
do{
    Console.WriteLine("i="+i);
    i++;
}while(i<3);

//output: i = 0, i = 1, i = 2;
```

## ref 变量可以在函数内被修改

```csharp
int TestRef(int incVal, ref int decVal){
    decVal--;
    return incVal + 1;
}

int val1 = 0; int val2 = 3;

int val3 = TestRef(val1, ref val2);
// val2 = 2; val3 = 1;
// 在变量面前添加 ref，传进去的是变量在内存中的地址。
```

# 类 Class

const常量，运行时不能更改其值。

构造函数，this.age 访问成员中的变量。

成员函数

属性Property，看起来像变量的函数

## 结构体 Struct2

# 面向对象
# 语法基础
# 协程
# 委托
# 事件
# 泛型

