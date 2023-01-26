"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7294),a=n(6010);const o="browserWindow_my1Q",c="browserWindowHeader_jXSR",s="buttons_uHc7",i="browserWindowAddressBar_Pd8y",l="dot_giz1",p="browserWindowMenuIcon_Vhuh",m="bar_rrRL",u="browserWindowBody_Idgs";function d(e){let{children:t,minHeight:n,url:d="http://localhost:3000"}=e;return r.createElement("div",{className:o,style:{minHeight:n}},r.createElement("div",{className:c},r.createElement("div",{className:s},r.createElement("span",{className:l,style:{background:"#f25f58"}}),r.createElement("span",{className:l,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(i,"text--truncate")},d),r.createElement("div",{className:p},r.createElement("div",null,r.createElement("span",{className:m}),r.createElement("span",{className:m}),r.createElement("span",{className:m})))),r.createElement("div",{className:u},t))}},3204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(1007);const c={title:"range",sidebar_position:2},s="range",i={unversionedId:"options/range",id:"options/range",title:"range",description:"Specify the number of domains to show",source:"@site/docs/options/range.md",sourceDirName:"options",slug:"/options/range",permalink:"/cal-heatmap-doc/docs/options/range",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/options/range.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"range",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"itemSelector",permalink:"/cal-heatmap-doc/docs/options/itemSelector"},next:{title:"domain",permalink:"/cal-heatmap-doc/docs/options/domain/"}},l={},p=[{value:"Usage",id:"usage",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"range"},"range"),(0,a.kt)("p",null,"Specify the number of domains to show"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"range: number;\n")),(0,a.kt)("p",null,"This option accepts any number greater than 1."),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"12")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const cal = new CalHeatmap();\ncal.paint({ range: 3 });\n\nrender(<div id="cal-heatmap"></div>);\n'))))}u.isMDXComponent=!0}}]);