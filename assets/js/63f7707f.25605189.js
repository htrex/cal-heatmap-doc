"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"scale",sidebar_position:47},l="scale",i={unversionedId:"options/scale",id:"options/scale",title:"scale",description:"Control your data colors",source:"@site/docs/options/scale.md",sourceDirName:"options",slug:"/options/scale",permalink:"/cal-heatmap-doc/docs/options/scale",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/scale.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{title:"scale",sidebar_position:47},sidebar:"tutorialSidebar",previous:{title:"verticalOrientation",permalink:"/cal-heatmap-doc/docs/options/verticalOrientation"},next:{title:"Events",permalink:"/cal-heatmap-doc/docs/events"}},c={},s=[{value:"as",id:"as",level:2},{value:"type",id:"type",level:2},{value:"domain",id:"domain",level:2},{value:"scheme",id:"scheme",level:2},{value:"range",id:"range",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scale"},"scale"),(0,a.kt)("p",null,"Control your data colors"),(0,a.kt)("admonition",{title:"Work in progress",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Documention for this option is incomplete, option is not final and may change before the final release")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type scaleOptions = {\n  as: 'color' | 'opacity',\n  type: 'threshold',\n  domain: number[],\n  scheme: string,\n  range: string[] | d3-scale-chromatic\n};\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"as"},"as"),(0,a.kt)("p",null,"Specify the type of color type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"as: 'color' | 'opacity',\n")),(0,a.kt)("h2",{id:"type"},"type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"type: 'threshold',\n")),(0,a.kt)("h2",{id:"domain"},"domain"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"domain: number[],\n")),(0,a.kt)("h2",{id:"scheme"},"scheme"),(0,a.kt)("p",null,"Set a color scheme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"scheme: string,\n")),(0,a.kt)("p",null,"Support all schemes from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-scale-chromatic"},"d3-scale-chromatic"),".\nJust use any scheme name without the ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme")," prefix."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"range"),", which allow more advanced scheme customization, will take precedence if set.")),(0,a.kt)("h2",{id:"range"},"range"),(0,a.kt)("p",null,"Define a range of colors, instead of using one the predefined ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"range: string[] | d3-scale-chromatic\n")),(0,a.kt)("p",null,"Accepts an array of colors, a color scheme, or an color interpolator."))}m.isMDXComponent=!0}}]);