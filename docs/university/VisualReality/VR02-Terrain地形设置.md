> 日期：2024年3月29日
> 书籍：《Unity 2017 虚拟现实开发标准》-人民邮电出版社-9787115507587

# VR02-Terrain地形设置

# Terrain Editor
## 创建地形
Hierarchy > 右键 > GameObject > 3D Object > Terrain

这将会创建一个 Terrain Object 在 Hierarchy 面板，也会创建一个 New Terrain Asset 在 Project 面板中。

<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-184410.jpg" width="600" />  


选中 New Terrain Asset 之后，Inspector 面板会出现 Terrain 工具用于进行地形的编辑操作。

Inspector中 Terrain 组件的五个图标工具栏提供了不同的选项：
- 创建相邻地形
- 雕刻景观特征并在地形上绘制纹理贴图
- 添加树木和草、花及岩石等其他细节
- 更改选定地形的常规设置

## 创建相邻地形
默认的地形是一块方形网格，长宽均为1000m。如果想扩展地形，可以使用 Create Neighbor Terrains 按钮进行扩展。

首先选择 Create Neighbor Terrains 按钮，即 Inspector 窗口中 Terrain 工具栏中的第一个按钮。接下来，将鼠标悬停在 Scene 窗口中，此时会出现一个新网格，显示4个象限，代表地形的东南西北四个方向。 

每新建一个地形，Hierarchy中都会随之增加相应的GameObject

## 雕刻地形特征
选择Paint Terrain工具，即 Terrain 工具栏中的第二个按钮。从下拉菜单中选择： Raise or Lower Terrain 可看到可用选项列表。可通过此下拉菜单使用各种绘画和雕刻工具

<img alt="picture 1" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-184555.jpg" width="600" />  

上图中的选项分别可以用来：绘制材质、在 Terrain 上创建空洞、统一高度、平滑地形、升降地面、设定高度

<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-185459.jpg" width="600" />  

如上图，1区用来展示笔刷材质；2区用于选择当前拥有的笔刷材质，不同的笔刷材质可以画出不同形状的山脉和地形；3区用于调整当前笔刷的大小和强度（透明度）

## 准备地形纹理
要使用纹理笔刷，需要准备地形纹理，优秀的地形纹理可以帮助地形创作者更加高效的创作地形。

地形纹理可从Asset Store下载，也可自行在 Photoshop 中制作并导入 Assets 文件夹。

1. 打开 Asset Store
2. 搜索并选择 Terrain Sample Asset Pack ，然后选择 在 Unity 打开
<img alt="picture 0" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-190438.jpg" width="600" />  

3. 选择 Import
4. 此时将出现 Import Unity Package 弹出窗口。折叠所有三角形，然后选择 None 以取消选中所有复选框。接下来，仅选中 Environment 文件夹的 SpeedTree 和 TerrainAssets 文件夹，然后选择 Import

如果要使用旧版本的 Standard Assets，请参考以下两个链接：
- https://zhuanlan.zhihu.com/p/65822341
- https://blog.csdn.net/qq_59490985/article/details/120982804

1. 选择“Standard Assets”，然后选择“Import”
2. 接下来，仅选中“Environment”文件夹的 “SpeedTree”和“TerrainAssets”文件夹，然后选择“Import”

<img alt="picture 1" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192147.jpg" />  

如果使用的是 URP 管线项目，可能需要升级材质。在Inspector中选择“Apply & Generate Materials”按钮。


## 绘制地形纹理

1. 在“Hierarchy”窗口中选中“Terrain”，在“Inspector”中选择“Paint Terrain”画笔工具，然后将下拉菜单选项设置为“Paint Texture”。选择“Edit Terrain Layers”按钮，然后选择“Create Layer”
<img alt="picture 2" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192444.jpg" width="600" />  

2. 此时会出现“Select Texture2D”弹出窗口，其中包含项目中保存的完整2D Asset集合。在搜索字段中输入“albedo”并搜索，就会看到一组地形2D样本表面纹理。选择标记为“GrassRockyAlbedo”的纹理。 
<img alt="picture 3" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192540.jpg" width="600" />  

3. 现在“GrassRockyAlbedo”纹理已作为Terrain Layer均匀添加到选定地形中
<img alt="picture 4" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192615.jpg" width="600" />  

4. 现在应用其他表面纹理，然后用这些纹理向地形添加更多细节。重复之前的步骤，首先选择“Edit Terrain Layers”按钮，然后选择“Add Layer”菜单，最后添加其他表面纹理，包括“GrassHillAlbedo”、“CliffAlbedo”和“SandAlbedo”纹理
<img alt="picture 5" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192816.jpg" width="600" />  

5. 选择其他Terrain Layer，尝试向地形绘制表面纹理组合。确保调整“Brush Siz”和“Opacity”，实现更加细致独特的融合效果
<img alt="picture 6" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-192949.jpg" width="600" />  

## 使用Paint Trees工具
Paint Trees画笔工具的使用方式与Paint Terrain类似，但是您必须首先定义 Tree Mesh 才能使用画笔。

1. 在“Hierarchy”窗口中选中“Terrain”，选择“Paint Trees”工具，即“Terrain”工具栏中的第三个按钮。选择“Edit Trees”按钮，然后从下拉菜单中选择“Add Tree”
<img alt="picture 8" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-193541.jpg" width="600" />  

2. 此时将显示“Add Tree”弹出窗口。选择“Tree Prefab”字段右侧的“Object Loader”圆圈按钮，选择树模型。 
<img alt="picture 9" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-193605.jpg" width="600" />  

3. 此时将显示“Select GameObject”弹出窗口。选择标记为“Broadleaf_Desktop”的树网格，然后在“Add Tree”窗口中选择“Add”按钮，将树模型加载到“Paint Trees”画笔工具中。 

4. 现在可以在地形上绘制树了。调整“Brush Size”和“Tree Density”设置，确定树木放置的密度或稀疏程度。此外，勾选复选框以启用“Random Tree Height”，然后调整滑块范围以扩大或缩小随机性范围。始终勾选“Random Tree Rotation”，确保每棵树都按随机旋转角度放置，最后，调整滑块以提高或降低树的Color Variation。将光标放在“Scene”窗口的地形上，点击并拖动鼠标，从而有选择地将树纹理绘制到地形上。绘制时按住Shift键可删除树木。
<img alt="picture 7" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-193515.jpg" width="600" />  

## 绘制细节
Paint Details 画笔工具的使用方式与 Paint Trees 和 Terrain 画笔工具类似，但是同样必须首先定义详细的网格才能使用画笔。
1. 在“Hierarchy”窗口中选中“Terrain”，选择“Paint Details”工具，即“Terrain”工具栏中的第四个按钮。选择“Edit Details”按钮，然后从下拉菜单中选择“Add Grass Texture”。 
<img alt="picture 10" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-193723.jpg" width="600" />  

2. 此时将显示“Add Grass Texture”弹出窗口。选择“Detail Texture”字段右侧的“Object Loader”圆圈按钮，选择 Grass Texture。
3. 此时将显示“Select Texture2D”弹出窗口。在搜索字段中输入“grass”，然后选择标记为“GrassFrond01AlbedoAlpha”的草网格。接下来，在“Add Grass Texture”窗口中选择“Add”按钮，从而将草纹理加载到“Paint Details”画笔工具中。
4. 现在就可以在地形上绘制草纹理了。调整“Brush Size”和“Target Strength”设置，设置草纹理的大小和密度。将光标放在“Scene”窗口的地形上，点击并拖动鼠标，从而有选择地将草纹理绘制到地形上。绘制时按住Shift键可删除细节。 
<img alt="picture 11" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-194043.jpg" width="600" />  

## 地形设置工具
利用“Terrain Settings”工具，可以检查地形特征并进行调整
 

在“Hierarchy”窗口中选中“Terrain”，选择“Terrain Settings”工具，即“Terrain”工具栏中的第五个，也是最后一个按钮
<img alt="picture 12" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-194128.jpg" width="600" />  

在这里可以调整地形的整体设置，比如细节的显示距离：
<img alt="picture 13" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-194309.jpg" width="600" /> 
<img alt="picture 14" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-194341.jpg" width="600" />  

## 添加水
再次导入 Environment.unitypackage 这次只勾选 Water
<img alt="picture 15" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-194635.jpg" />  

## 使用 Terrain Tools

Edit > Project Settings > Package Manager > Enable Pre-release Pacakges : Checked

Window > Package Manager > Unity Registry > Terrain Tools : Install

在“Package Manager”窗口中选择“Download Asset Samples from Asset Store”按钮，导入山脉笔刷，可以方便我们后续创建山脉（记得把 Material 也勾选上，否则 Height Map 会出错）

<img alt="picture 16" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-211631.jpg" width="600" />  

这时，就会有一些山脉笔刷展示在 Unity 中了：
<img alt="picture 17" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-212314.jpg" width="600" />  

Stamp Terrain 也可以方便的生成山脉，按住 Ctrl + 滚轮 可以快速设置山脉的高度。

<img alt="picture 18" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-212453.jpg" width="600" />  

从顶部下拉菜单中选择：“Window”>“Terrain”>“Terrain Toolbox”，打开“Terrain toolbox”窗口
<img alt="picture 19" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-212534.jpg" width="600" />  

可以设置创建的地形 X、Y 方向上的划分数量：
<img alt="picture 20" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-212856.jpg" width="600" />  

Terrain Tool 绘制地形快捷键：
- S键 + 鼠标可修改画笔大小
- A键 + 鼠标可修改画笔力度
- D键 + 鼠标可修改画笔旋转度

<img alt="picture 21" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240502-213517.jpg" width="600" />  

<img alt="picture 22" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-104148.jpg" width="600" />  

使用 Terrain Tool 创作的地形：
<img alt="picture 23" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-105003.jpg" width="600" />  

## 添加水体
<img alt="picture 24" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-110335.jpg" width="600" />  

<img alt="picture 25" src="https://cdn.jsdelivr.net/gh/LeonYew-SWPU/FileTem@main/imgs/2024/01/20240503-110350.jpg" width="600" />  
