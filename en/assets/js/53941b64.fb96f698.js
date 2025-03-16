"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9863],{3254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"university/WebDevelop/C2_DatabaseOperation","title":"\u7b2c\u4e8c\u7ae0 \u6570\u636e\u5e93\u57fa\u7840\u53ca\u64cd\u4f5c","description":"[TOC]","source":"@site/docs/university/WebDevelop/C2_DatabaseOperation.md","sourceDirName":"university/WebDevelop","slug":"/university/WebDevelop/C2_DatabaseOperation","permalink":"/en/university/WebDevelop/C2_DatabaseOperation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/university/WebDevelop/C2_DatabaseOperation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"homeSidebar","previous":{"title":"VR05-\u5229\u7528 TrailRender \u5728 Unity \u4e2d\u5236\u4f5c\u7b14\u5237\u529f\u80fd","permalink":"/en/university/VisualReality/VR05-\u5229\u7528 TrailRender \u5728 Unity \u4e2d\u5236\u4f5c\u7b14\u5237\u529f\u80fd"},"next":{"title":"C4.1 Apache Tomcat","permalink":"/en/university/WebDevelop/C4_Tomcat"}}');var l=i(4848),s=i(8453);const d={},a="\u7b2c\u4e8c\u7ae0 \u6570\u636e\u5e93\u57fa\u7840\u53ca\u64cd\u4f5c",t={},c=[{value:"Definition",id:"definition",level:2},{value:"Priority",id:"priority",level:2},{value:"ShortComing",id:"shortcoming",level:2},{value:"Work Flow",id:"work-flow",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic API List",id:"basic-api-list",level:2},{value:"DriverManager",id:"drivermanager",level:2},{value:"PreparedStatement\u4f7f\u7528",id:"preparedstatement\u4f7f\u7528",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Project Structures",id:"project-structures",level:2},{value:"General Coding Flow",id:"general-coding-flow",level:2},{value:"Create the entity class: Brand",id:"create-the-entity-class-brand",level:3},{value:"SelectALL Function",id:"selectall-function",level:3},{value:"SelectById",id:"selectbyid",level:3},{value:"What&#39;s MAVEN?",id:"whats-maven",level:2},{value:"Maven \u9879\u76ee\u7ed3\u6784",id:"maven-\u9879\u76ee\u7ed3\u6784",level:2},{value:"Maven \u9879\u76ee\u6784\u5efa\u6d41\u7a0b",id:"maven-\u9879\u76ee\u6784\u5efa\u6d41\u7a0b",level:2},{value:"MAVEN \u4f9d\u8d56\u7ba1\u7406",id:"maven-\u4f9d\u8d56\u7ba1\u7406",level:2},{value:"MAVEN \u4f7f\u7528\u6d41\u7a0b",id:"maven-\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93",id:"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93",level:3},{value:"\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93",id:"\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93",level:3},{value:"IDEA \u4f7f\u7528 MAVEN",id:"idea-\u4f7f\u7528-maven",level:2},{value:"\u5b9e\u9a8c3\u95ee\u9898",id:"\u5b9e\u9a8c3\u95ee\u9898",level:2},{value:"\u6309\u7167id\u67e5\u8be2",id:"\u6309\u7167id\u67e5\u8be2",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u7b2c\u4e8c\u7ae0-\u6570\u636e\u5e93\u57fa\u7840\u53ca\u64cd\u4f5c",children:"\u7b2c\u4e8c\u7ae0 \u6570\u636e\u5e93\u57fa\u7840\u53ca\u64cd\u4f5c"})}),"\n",(0,l.jsx)(n.p,{children:"[TOC]"}),"\n",(0,l.jsx)(n.h1,{id:"jdbc",children:"JDBC"}),"\n",(0,l.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(n.p,{children:"Q: What is JDBC?\r\nA: Java DataBase Connectivity, an API to modify the database via Java"}),"\n",(0,l.jsx)(n.h2,{id:"priority",children:"Priority"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5404\u6570\u636e\u5546\u4f7f\u7528\u76f8\u540c\u63a5\u53e3"}),"\n",(0,l.jsx)(n.li,{children:"\u53ef\u7528\u4e8e\u4e0d\u540c\u6570\u636e\u5e93"}),"\n",(0,l.jsx)(n.li,{children:"\u66f4\u6362\u6570\u636e\u5e93\u53ea\u9700\u66ff\u6362\u76f8\u5e94\u7684\u6570\u636e\u5e93\u9a71\u52a8\r\neg.\u5bfc\u5165MySQL\u6570\u636e\u5e93\u9a71\u52a8\u5305\u6765\u4f7f\u7528MySQL\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"shortcoming",children:"ShortComing"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u786c\u7f16\u7801"}),"\n",(0,l.jsx)(n.li,{children:"SQL\u8bed\u53e5\u786c\u7f16\u7801"}),"\n",(0,l.jsx)(n.li,{children:"\u64cd\u4f5c\u7e41\u7410\u3001\u624b\u52a8\u5c01\u88c5\u67e5\u8be2\u7ed3\u679c"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"work-flow",children:"Work Flow"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Java Language Coding"}),"\n",(0,l.jsx)(n.li,{children:"Sending SQL Code to MySQL"}),"\n",(0,l.jsx)(n.li,{children:"Exagerating SQL Code"}),"\n",(0,l.jsx)(n.li,{children:"Return the result to Java"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Creating a project, import the driver jar package"}),"\n",(0,l.jsx)(n.li,{children:"Registry the driver"}),"\n",(0,l.jsx)(n.li,{children:"Connect to MySQL"}),"\n",(0,l.jsx)(n.li,{children:"Define SQL Code"}),"\n",(0,l.jsxs)(n.li,{children:["Get SQL object: ",(0,l.jsx)(n.code,{children:"Statement"})]}),"\n",(0,l.jsx)(n.li,{children:"Exagerate Code"}),"\n",(0,l.jsx)(n.li,{children:"Show the result"}),"\n",(0,l.jsx)(n.li,{children:"Release the resources"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"jdbc-api",children:"JDBC API"}),"\n",(0,l.jsx)(n.h2,{id:"basic-api-list",children:"Basic API List"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"DriverManager"}),"\n",(0,l.jsx)(n.li,{children:"Statement"}),"\n",(0,l.jsx)(n.li,{children:"ResultSet"}),"\n",(0,l.jsx)(n.li,{children:"PreparedStatement"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"drivermanager",children:"DriverManager"}),"\n",(0,l.jsx)(n.h2,{id:"preparedstatement\u4f7f\u7528",children:"PreparedStatement\u4f7f\u7528"}),"\n",(0,l.jsx)(n.h1,{id:"\u6570\u636e\u5e93\u8fde\u63a5\u6c60",children:"\u6570\u636e\u5e93\u8fde\u63a5\u6c60"}),"\n",(0,l.jsx)(n.h1,{id:"\u7ec3\u4e60\u5546\u54c1\u54c1\u724c\u6570\u636e\u589e\u5220\u6539\u67e5",children:"\u7ec3\u4e60\uff1a\u5546\u54c1\u54c1\u724c\u6570\u636e\u589e\u5220\u6539\u67e5"}),"\n",(0,l.jsx)(n.h2,{id:"tasks",children:"Tasks"}),"\n",(0,l.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u589e\u52a0\u54c1\u724c"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u4fee\u6539\u6bd4\u4e9a\u8feaSlogan"]}),"\n",(0,l.jsxs)(n.li,{className:"task-list-item",children:[(0,l.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u5220\u9664\u4e09\u53ea\u677e\u9f20\u548c\u5c0f\u7c73"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"project-structures",children:"Project Structures"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mermaid",children:"graph LR\r\nProject --\x3e SrcFolder\r\nSrcFolder --\x3e package1\r\nSrcFolder --\x3e package2\n"})}),"\n",(0,l.jsx)(n.h2,{id:"general-coding-flow",children:"General Coding Flow"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u8bbe\u7f6e\u5c5e\u6027"}),"\n",(0,l.jsxs)(n.li,{children:["\u751f\u6210Getter&Setter: ",(0,l.jsx)("kbd",{children:"Alt"})," + ",(0,l.jsx)("kbd",{children:"Enter"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"create-the-entity-class-brand",children:"Create the entity class: Brand"}),"\n",(0,l.jsx)(n.h3,{id:"selectall-function",children:"SelectALL Function"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Load Config File","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"druid\u627e\u4e0d\u5230\u8def\u5f84: \u6253\u5370\u51fa\u6765"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Java",children:'System.out.println(System.getProperty("user.dir"));\n'})}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"SQL Code"}),"\n",(0,l.jsxs)(n.li,{children:["Handle with the result ",(0,l.jsx)(n.code,{children:"List<Brand>"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Java",metastring:"{.line-numbers}",children:' while (rs.next()) {\r\n String column1 = rs.getString("column1"); // \u66ff\u6362\u4e3a\u4f60\u7684\u5217\u540d\r\n int column2 = rs.getInt("column2"); // \u66ff\u6362\u4e3a\u4f60\u7684\u5217\u540d\r\n // \u4f60\u53ef\u4ee5\u7ee7\u7eed\u83b7\u53d6\u66f4\u591a\u7684\u5217...\r\n }\r\n```s\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"selectbyid",children:"SelectById"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u521b\u5efa",(0,l.jsx)(n.code,{children:"BrandSelectById"}),"\u7c7b\uff0c\u6839\u636eid\u67e5\u8be2"]}),"\n",(0,l.jsx)(n.li,{children:"Load Config File..(Same as the SelectALL)"}),"\n",(0,l.jsxs)(n.li,{children:["SQL Code","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Set id property"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Handle with the result ",(0,l.jsx)(n.code,{children:"List<Brand>"})]}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"maven",children:"MAVEN"}),"\n",(0,l.jsx)(n.h2,{id:"whats-maven",children:"What's MAVEN?"}),"\n",(0,l.jsx)(n.p,{children:"\u7ba1\u7406\u548c\u6784\u5efaJava\u9879\u76ee\u7684\u5de5\u5177\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u63d0\u4f9b\u6807\u51c6\u5316\u9879\u76ee\u7ed3\u6784"}),"\n",(0,l.jsx)(n.li,{children:"\u63d0\u4f9b\u6807\u51c6\u5316\u6784\u5efa\u6d41\u7a0b\uff08\u7f16\u8bd1\u3001\u6d4b\u8bd5\u3001\u6253\u5305\u3001\u53d1\u5e03\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u63d0\u4f9b\u4f9d\u8d56\u7ba1\u7406\u673a\u5236"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"maven-\u9879\u76ee\u7ed3\u6784",children:"Maven \u9879\u76ee\u7ed3\u6784"}),"\n",(0,l.jsx)(n.p,{children:"..."}),"\n",(0,l.jsx)(n.h2,{id:"maven-\u9879\u76ee\u6784\u5efa\u6d41\u7a0b",children:"Maven \u9879\u76ee\u6784\u5efa\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"MAVEN \u53f3\u952e\u83dc\u5355 'Run MAVEN' \u7684\u5404\u4e2a\u6309\u94ae\u5c31\u662f\u6784\u5efa\u7684\u5404\u4e2a\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.h2,{id:"maven-\u4f9d\u8d56\u7ba1\u7406",children:"MAVEN \u4f9d\u8d56\u7ba1\u7406"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Java",children:"<dependencies>\r\n   \x3c!-- MySQL Connector/J --\x3e\r\n   <dependency>\r\n      <groupId>mysql</groupId>\r\n      <artifactId>mysql-connector-java</artifactId>\r\n      <version>8.0.26</version>\r\n   </dependency>\r\n   \r\n   \x3c!-- Apache Commons Lang --\x3e\r\n   <dependency>\r\n      <groupId>org.apache.commons</groupId>\r\n      <artifactId>commons-lang3</artifactId>\r\n      <version>3.12.0</version>\r\n   </dependency>\r\n\r\n</dependencies>\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mermaid",children:"graph LR\r\n\u4e2d\u5fc3\u4ed3\u5e93 --\x3e \u8fdc\u7a0b\u4ed3\u5e93\r\n\u4e2d\u5fc3\u4ed3\u5e93 --\x3e \u672c\u5730\u4ed3\u5e93\n"})}),"\n",(0,l.jsx)(n.h2,{id:"maven-\u4f7f\u7528\u6d41\u7a0b",children:"MAVEN \u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93",children:"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"~/conf/setting.xml"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"<localRepository>Path/to/your/Repo</localRepository>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93",children:"\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"~/conf/settings.xml"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"<mirror>\r\n   <id>\r\n   <name>\r\n   <url>\r\n   <mirrorOf>\r\n<mirror>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"idea-\u4f7f\u7528-maven",children:"IDEA \u4f7f\u7528 MAVEN"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5efa\u7acb"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"mybatis-better-than-jdbc",children:"Mybatis: Better than JDBC"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u9a8c3\u95ee\u9898",children:"\u5b9e\u9a8c3\u95ee\u9898"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u589e\u52a0\u6570\u636e\u64cd\u4f5c\uff0c\u672a\u62a5\u9519\uff0c\u4f46\u6570\u636e\u672a\u6210\u529f\u6dfb\u52a0\r\n\u589e\u5220\u6539\u624b\u52a8\u63d0\u4ea4\u4e8b\u52a1","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"sqlSession.commit();\n"})}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u5f02\u5e38\r\n\u68c0\u67e5MyBatis-Config.xml\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u4f7f\u7528\u81ea\u5df1\u7684\u6570\u636e\u5e93\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6309\u7167id\u67e5\u8be2",children:"\u6309\u7167id\u67e5\u8be2"})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var r=i(6540);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);