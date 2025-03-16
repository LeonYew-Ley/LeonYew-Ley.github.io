"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[788],{5803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tech-notes/Minecraft Fabric 1.21 Development/\u7b2c\u4e00\u4e2a\u7269\u54c1","title":"1_\u7b2c\u4e00\u4e2a\u7269\u54c1","description":"\u6982\u8ff0\uff1a","source":"@site/docs/tech-notes/Minecraft Fabric 1.21 Development/1_\u7b2c\u4e00\u4e2a\u7269\u54c1.md","sourceDirName":"tech-notes/Minecraft Fabric 1.21 Development","slug":"/tech-notes/Minecraft Fabric 1.21 Development/\u7b2c\u4e00\u4e2a\u7269\u54c1","permalink":"/en/tech-notes/Minecraft Fabric 1.21 Development/\u7b2c\u4e00\u4e2a\u7269\u54c1","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech-notes/Minecraft Fabric 1.21 Development/1_\u7b2c\u4e00\u4e2a\u7269\u54c1.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"homeSidebar","previous":{"title":"0_\u5f00\u53d1\u73af\u5883\u642d\u5efa","permalink":"/en/tech-notes/Minecraft Fabric 1.21 Development/\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"next":{"title":"Chapter1: OverView","permalink":"/en/tech-notes/Network/C1_Overview"}}');var i=t(4848),s=t(8453);const c={},o="1_\u7b2c\u4e00\u4e2a\u7269\u54c1",a={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1_\u7b2c\u4e00\u4e2a\u7269\u54c1",children:"1_\u7b2c\u4e00\u4e2a\u7269\u54c1"})}),"\n",(0,i.jsx)(n.p,{children:"\u6982\u8ff0\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728mod\u5305\u4e0b\u6a21\u4effVanilla\u7684Items\u7c7b\uff0c\u521b\u5efaitem\u5305\uff0c\u518d\u521b\u5efaModItems\u7c7b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6a21\u4effItems\u7c7b\u4e2d\u7684register\u65b9\u6cd5\uff0c\u5199\u4e00\u4e2aregister\u65b9\u6cd5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u58f0\u660eitem\uff0c\u5e76\u5728\u8d4b\u503c\u7684\u65f6\u5019\u4f7f\u7528\u521a\u624d\u5199\u7684register\u65b9\u6cd5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u518d\u58f0\u660e\u4e00\u4e2a static void \u7684 initialize\u65b9\u6cd5\uff0c\u7528\u6765\u521d\u59cb\u5316ModItem\uff0c\u4e5f\u65b9\u4fbf\u7a0d\u540e\u5728\u4e3b\u7c7b\u4e2d\u8c03\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\u5728Mod\u4e3b\u7c7b\u4e2d\u8c03\u7528ModItems\u7684 static\u65b9\u6cd5\uff0c\u53ef\u4ee5\u521d\u59cb\u5316\u6240\u6709static\u53d8\u91cf"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class ModItems {\r\n    public static void initialize(){\r\n        // Get the event for modifying entries in the ingredients group.\r\n// And register an event handler that adds our suspicious item to the ingredients group.\r\n        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS)\r\n                .register((itemGroup) -> itemGroup.add(ModItems.PINK_HEART));\r\n    }\r\n    public static Item register(Item item, String id){\r\n        return (Item) Registry.register(Registries.ITEM, Identifier.of(ToDoList.MOD_ID,id), item);\r\n    }\r\n    public static final Item PINK_HEART = register(\r\n            new Item(new Item.Settings()),\r\n            "pink_heart"\r\n    );\r\n}\r\n\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Major Idea\uff1a\u6a21\u4effVanilla\u7684\u4ee3\u7801\u3001\u9879\u76ee\u7ed3\u6784\r\nHow to remember\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lang \u8bed\u8a00\u6587\u4ef6\uff0c\u80af\u5b9a\u5305\u542b\u4e86\u6240\u6709\u7269\u54c1\u3001\u65b9\u5757\u3001\u6750\u8d28\u7684\u540d\u79f0\r\n\u91c7\u7528\u8bed\u8a00\u6765\u547d\u540d\uff0c\u4f8b\u5982 zh_cn.json"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n  "item.to-do-list.pink_heart": "\u7c89\u8272\u7231\u5fc3"\r\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"models \u6a21\u578b\u6587\u4ef6\uff0c\u5bf9\u4e8eitem\uff0c\u80af\u5b9a\u662f\u6e32\u67d3\u65b9\u5f0f\u548c2D sprite\uff0c\u5bf9\u4e8e3D\u7269\u54c1\uff0c\u65b9\u5757\uff0c\u5219\u662f\u6a21\u578b\uff0c\u5bf9\u4e8eitem\u7c7b\uff0c\u91c7\u7528\u7684\u662fjson\u6587\u4ef6\u6307\u660e\u6750\u8d28\u548c\u6e32\u67d3\u65b9\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n  "parent": "minecraft:item/generated",\r\n  "textures": {\r\n    "layer0": "to-do-list:item/pink_heart"\r\n  }\r\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"textures \u6750\u8d28\u6587\u4ef6\uff0c\u6545\u4e5f\u8981\u5206item\u7c7b\u51fa\u6765"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);