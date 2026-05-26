---
date: '2026-01-06'
---
> 这个文件夹用来放一些计算机类的知识
# 《离散数学》
## 异或运算
`^` 异或运算规则：
- 0 与 任何数字异或都是数字本身
- a ^ b ^ a = b
- 支持交换律、结合律、自反律

**实践**
- 计算数组中出现奇数次的元素（偶数次会异或为0）

# 《数据结构》
# 《计算机组成原理》
# Git
## Git 的本质
> link: https://www.youtube.com/watch?v=kGdDFfVXbvI  
> date: 2026年1月6日

最核心的三个东西：Commit -> Tree -> Blob  
- Commit：每次改动代码后的提交
	- tree,(parent), author, committer
- Tree：该次 Commit 发生时的目录，记录引用的 blob
	- blob, blob, ...
- Blob：存储文件的具体内容

**git 中的文件存储在哪里？**  
`.git/objects/xx/xxxxx`， 其中 xx + xxxxx 是完整的哈希值

**branch 是什么？**  
branch 的本质是对某次 commit 的引用，在 `.git/refs/heads/...` 目录下，里面的文件内容是 commit 的哈希值

相关命令：
- `git cat-file -p {hash}`  填写 Commit、Tree、Blob 对象的哈希值，就能看到里面具体的内容
- `git reset` 删除 commit，重置 git 历史到某次提交
- `git gc --prune=now` 删除掉没有被引用的对象
