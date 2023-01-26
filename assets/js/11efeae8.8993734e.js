"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),a=n(6010),o=n(3438),i=n(9960),c=n(3919),s=n(5999);const l="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},1202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(2991);const i={title:"Options",sidebar_position:3,id:"options"},c=void 0,s={unversionedId:"options/options",id:"options/options",title:"Options",description:"Customize the UI and content of the calendar",source:"@site/docs/options/index.md",sourceDirName:"options",slug:"/options/",permalink:"/cal-heatmap-doc/docs/options/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/options/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Options",sidebar_position:3,id:"options"},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/cal-heatmap-doc/docs/getting-started/typescript"},next:{title:"itemSelector",permalink:"/cal-heatmap-doc/docs/options/itemSelector"}},l={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Customize the UI and content of the calendar"),(0,a.kt)("p",null,"The calendar can be customized by passing an ",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," object to the ",(0,a.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/API/paint"},(0,a.kt)("inlineCode",{parentName:"a"},"paint()"))," method on the calendar instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage"',title:'"Usage"'},"const cal = new CalHeatmap();\n// highlight-next-line\ncal.paint(options?: Options): Promise<unknown>;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Type Signature"',title:'"Type','Signature"':!0},"type Options = {\n  itemSelector: Element | string,\n  range: number,\n  domain: DomainOptions,\n  subDomain: SubDomainOptions,\n  verticalOrientation: boolean,\n  date: DateOptions,\n  data: DataOptions,\n  label: LabelOptions,\n  animationDuration: number,\n  scale: ScaleOptions,\n};\n")),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);