"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3443],{5001:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}},9769:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","source":"@site/docs/tutorials/tutorial-extras/translate-your-site.md","sourceDirName":"tutorials/tutorial-extras","slug":"/tutorials/tutorial-extras/translate-your-site","permalink":"/tutorials/tutorial-extras/translate-your-site","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/tutorial-extras/translate-your-site.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"homeSidebar","previous":{"title":"Manage Docs Versions","permalink":"/tutorials/tutorial-extras/manage-docs-versions"},"next":{"title":"writing","permalink":"/category/writing"}}');var s=r(4848),a=r(8453);const o={sidebar_position:2},i="Translate your site",l={},c=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"translate-your-site",children:"Translate your site"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's translate ",(0,s.jsx)(n.code,{children:"docs/intro.md"})," to French."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-i18n",children:"Configure i18n"}),"\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," to add support for the ",(0,s.jsx)(n.code,{children:"fr"})," locale:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\r\n  i18n: {\r\n    defaultLocale: 'en',\r\n    locales: ['en', 'fr'],\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"translate-a-doc",children:"Translate a doc"}),"\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:"docs/intro.md"})," file to the ",(0,s.jsx)(n.code,{children:"i18n/fr"})," folder:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\r\n\r\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Translate ",(0,s.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/intro.md"})," in French."]}),"\n",(0,s.jsx)(n.h2,{id:"start-your-localized-site",children:"Start your localized site"}),"\n",(0,s.jsx)(n.p,{children:"Start your site on the French locale:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your localized site is accessible at ",(0,s.jsx)(n.a,{href:"http://localhost:3000/fr/",children:"http://localhost:3000/fr/"})," and the ",(0,s.jsx)(n.code,{children:"Getting Started"})," page is translated."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"In development, you can only use one locale at a time."})}),"\n",(0,s.jsx)(n.h2,{id:"add-a-locale-dropdown",children:"Add a Locale Dropdown"}),"\n",(0,s.jsx)(n.p,{children:"To navigate seamlessly across languages, add a locale dropdown."}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\r\n  themeConfig: {\r\n    navbar: {\r\n      items: [\r\n        // highlight-start\r\n        {\r\n          type: 'localeDropdown',\r\n        },\r\n        // highlight-end\r\n      ],\r\n    },\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The locale dropdown now appears in your navbar:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Locale Dropdown",src:r(5001).A+"",width:"370",height:"302"})}),"\n",(0,s.jsx)(n.h2,{id:"build-your-localized-site",children:"Build your localized site"}),"\n",(0,s.jsx)(n.p,{children:"Build your site for a specific locale:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build -- --locale fr\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or build your site to include all the locales at once:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);