"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"fill()",sidebar_position:2},l=void 0,i={unversionedId:"API/fill",id:"API/fill",title:"fill()",description:"Update the calendar's data set",source:"@site/docs/API/fill.md",sourceDirName:"API",slug:"/API/fill",permalink:"/cal-heatmap-doc/docs/API/fill",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API/fill.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"fill()",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"paint()",permalink:"/cal-heatmap-doc/docs/API/paint"},next:{title:"destroy()",permalink:"/cal-heatmap-doc/docs/API/destroy"}},c={},s=[{value:"Arguments",id:"arguments",level:4},{value:"Return",id:"return",level:4},{value:"When to use",id:"when-to-use",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Update the calendar's data set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.fill(data: DataOptions['source']): Promise<unknown>;\n")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": A ",(0,r.kt)("a",{parentName:"li",href:"/cal-heatmap-doc/docs/options/data#source"},(0,r.kt)("inlineCode",{parentName:"a"},"Data.source")),".")),(0,r.kt)("h4",{id:"return"},"Return"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),", that will resolve once the calendar is filled with the new data.")),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"Use this method if you only want to update your calendar dataset,\nwithout trigerring any other changes, as ",(0,r.kt)("inlineCode",{parentName:"p"},"fill()")," is already called behind the scene by ",(0,r.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/API/paint"},(0,r.kt)("inlineCode",{parentName:"a"},"paint()")),"\nand all ",(0,r.kt)("a",{parentName:"p",href:"/docs/API/navigation/"},"navigation methods"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({ data: { source: 'https://my-api.com/weather-min-temp.json' } });\n// User opted to show max temp instead of min temp\n// highlight-next-line\ncal.fill('https://my-api.com/weather-max-temp.json');\n")))}u.isMDXComponent=!0}}]);