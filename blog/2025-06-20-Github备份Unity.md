---
slug: UnityToGitHub
title: 如何将Unity项目备份至Github
authors: [leonyew]
tags: [unity, git, github]
---

本文讲述如何将Unity项目备份到Github，包括`.gitignore`的设置

<!-- truncate -->

## Unity相关设置
- VersionControl —— Mode —— "Visiable Meta Files"
- Editor —— Asset Serilization —— Mode —— ForceText

## 创建仓库
1. 将本地的Git工具相关的SSH Key保存到Github账户设置中
2. 在本地创建仓库，然后发布到Github，可以直接用VSCode等Git工具登录Github账户，然后可以直接发布到新仓库中。

## gitignore设置
GitHub官方有针对Unity项目做出的`.gitignore`文件，文件链接：https://github.com/github/gitignore/blob/main/Unity.gitignore，将`.gitignore`文件添加到项目根目录即可。

> 注意，如果在项目仓库中，套了一层文件夹，则需要将Library、Temp、Builds等文件夹前面的斜杠`\`删去。

## Git GUI 工具推荐
- UGit
- VSCode内置Source Control
- Github Desktop

## 其余注意事项
### LFS的设置
LFS 归根结底就是一个云盘，通过将图片、音频等非代码资产移动到云盘中，减小代码仓库的体积。如果你使用UGit，在新建Repo的时候会默认有一个`.gitattribute`用来管理归类LFS文件类型，会导致很多资产文件上传到Github的LFS系统中，这里建议直接删除`.gitattribute`文件，在商业项目中可以使用LFS来管理资产文件，也可以选择自建云盘，降低资源服务器成本。

### 如果不慎上传了LFS...
![如果不慎上传了LFS，Github就会给你发邮件提醒你充钱](../static/img/paste/20250622163331.png)  

果不慎上传了LFS，Github就会给你发邮件提醒你充钱，可以将情况告诉AI，让AI生成git指令，删除前几次Commit中所有的被标记为LFS的文件，变为普通文件。
下面是步骤参考，没有AI可以参考以下步骤。

1. 删除`.gitattribute`文件，也可以直接重命名为`.gitattribute.bak`
2. 移除LFS标记
```bash
git lfs migrate export --everything --include="*"
```

## 本文参考链接
- 【手把手教你用git管理unity游戏项目，让你少掉5根头发】 https://www.bilibili.com/video/BV1DG4y1n7md/?share_source=copy_web&vd_source=e96b797ceb2cdca0a51cc68fda96dce4