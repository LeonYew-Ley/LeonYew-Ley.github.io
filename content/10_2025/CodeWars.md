# CodeWars 刷题记录

> 2025年7月27日 开始记录
> 
> 刷好多题容易忘，还是开一篇文章记录一下

## [[2025-08-17-正则表达式|正则表达式]]

> 正则表达式采用的是 C# 中的 Regex 类，可以通过`@`运算符来设置 pattern 字符串，填写正则表达式，并通过 `IsMatch` 等函数来返回查询结果

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