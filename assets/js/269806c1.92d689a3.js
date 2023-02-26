"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[4951],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1007:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:n,minHeight:t,url:l="http://localhost:3000"}=e;return a.createElement("div",{className:o.browserWindow,style:{minHeight:t}},a.createElement("div",{className:o.browserWindowHeader},a.createElement("div",{className:o.buttons},a.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(o.browserWindowAddressBar,"text--truncate")},l),a.createElement("div",{className:o.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar})))),a.createElement("div",{className:o.browserWindowBody},n))}},4767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(1007);const l={title:"Scale type",sidebar_position:1},i=void 0,d={unversionedId:"advanced/scaleType",id:"advanced/scaleType",title:"Scale type",description:"Detailed guide about all the various scale's type",source:"@site/docs/advanced/scaleType.md",sourceDirName:"advanced",slug:"/advanced/scaleType",permalink:"/docs/advanced/scaleType",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/advanced/scaleType.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Scale type",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/advanced/"},next:{title:"FAQ",permalink:"/docs/faq"}},s={},p=[{value:"<code>ordinal</code>",id:"ordinal",level:2},{value:"<code>categorical</code>",id:"categorical",level:2},{value:"<code>threshold</code>",id:"threshold",level:2},{value:"<code>quantize</code>",id:"quantize",level:2},{value:"<code>quantile</code>",id:"quantile",level:2},{value:"<code>linear</code>",id:"linear",level:2},{value:"<code>diverging</code>",id:"diverging",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"subhead"},"Detailed guide about all the various scale's type"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide assumes that you have read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/options/scale"},(0,r.kt)("inlineCode",{parentName:"a"},"scale"))," section"),(0,r.kt)("p",{parentName:"admonition"},"The calendar rely on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot#color-options"},"Plot")," to handle all color scales. Part of this documentation is extracted from their own documentation, see their docs for more advanced usage.")),(0,r.kt)("h2",{id:"ordinal"},(0,r.kt)("inlineCode",{parentName:"h2"},"ordinal")),(0,r.kt)("p",null,"Associate each ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," value to a specific color."),(0,r.kt)("p",null,"This type is best used when your dataset have a finite number of different values,\nwhich do not necessarly have a specific ordered, ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," do not have to be sorted."),(0,r.kt)("p",null,"This is also the type you have to use when using a dataset with non-numerical values."),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [0, 5, 10, 15, 20, 25, 30],\n        type: 'ordinal',\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_max']),\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-ordinal',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-ordinal\"></div>);\n"))),(0,r.kt)("p",null,"Notice in the above example that all data not matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," values are ignored."),(0,r.kt)("p",null,"You can control the colors by passing the option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"scheme")),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"range"),", an array of colors, same size as the domain array")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," are specified, it will default to ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#Turbo"},(0,r.kt)("inlineCode",{parentName:"a"},"Turbo"))," scheme."),(0,r.kt)("p",null,"Followed is an example with non-numerical dataset"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: ['Banana', 'Orange', 'Apple', 'Berry'],\n        type: 'ordinal',\n      },\n    },\n    data: {\n      source: [\n        { t: new Date('2012-01-01'), v: 'Banana' },\n        { t: new Date('2012-01-04'), v: 'Orange' },\n        { t: new Date('2012-01-12'), v: 'Apple' },\n        { t: new Date('2012-01-18'), v: 'Berry' },\n      ],\n      x: 't',\n      y: 'v',\n      groupY: d => d[0],\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-ordinal-2',\n    domain: {\n      type: 'month',\n    },\n    subDomain: {\n      type: 'x_day',\n      radius: 2,\n      width: 35,\n      height: 35,\n      label: (t, v) => v,\n    },\n  },\n  [[Legend, { width: 400 }]]\n);\n\nrender(<div id=\"ex-ordinal-2\"></div>);\n"))),(0,r.kt)("h2",{id:"categorical"},(0,r.kt)("inlineCode",{parentName:"h2"},"categorical")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"ordinal"),", but default to ",(0,r.kt)("inlineCode",{parentName:"p"},"tableau10")," scheme."),(0,r.kt)("h2",{id:"threshold"},(0,r.kt)("inlineCode",{parentName:"h2"},"threshold")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a threshold scale, the domain represents n (typically numeric) thresholds which will produce a range of n + 1 output colors; the ith color of the range applies to values that are smaller than the ith element of the domain and larger or equal to the i - 1th element of the domain")),(0,r.kt)("p",null,"Learn more about on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot#color-options"},"Plot documentation")),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [5, 10, 15, 20, 25, 30],\n        type: 'threshold',\n        scheme: 'YlOrRd',\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_max']),\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-threshold',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-threshold\"></div>);\n"))),(0,r.kt)("p",null,"You can control the colors by passing the option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"scheme")),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"range"),", an array of ",(0,r.kt)("inlineCode",{parentName:"li"},"n+1")," colors, with ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," the size of ",(0,r.kt)("inlineCode",{parentName:"li"},"domain"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," are specified, it will default to ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#RdYlBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdYlBu"))," scheme."),(0,r.kt)("h2",{id:"quantize"},(0,r.kt)("inlineCode",{parentName:"h2"},"quantize")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a quantize scale, the domain will be transformed into approximately n quantized values, where n is an option that defaults to 5.")),(0,r.kt)("p",null,"Learn more about on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot#color-options"},"Plot documentation")),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [0, 30],\n        type: 'quantize',\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_max']),\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-quantize',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-quantize\"></div>);\n"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," are specified, it will default to ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#RdYlBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdYlBu"))," scheme."),(0,r.kt)("h2",{id:"quantile"},(0,r.kt)("inlineCode",{parentName:"h2"},"quantile")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a quantile scale, the domain represents all input values to the scale, and the n option specifies how many quantiles to compute from the domain; n quantiles will produce n - 1 thresholds, and an output range of n colors")),(0,r.kt)("p",null,"Learn more about on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot#color-options"},"Plot documentation")),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [0, 30],\n        type: 'quantile',\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_max']),\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-quantile',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-quantile\"></div>);\n"))),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," are specified, it will default to ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#RdYlBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdYlBu"))," scheme."),(0,r.kt)("h2",{id:"linear"},(0,r.kt)("inlineCode",{parentName:"h2"},"linear")),(0,r.kt)("p",null,"Create a scale of continuous colors."),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [0, 30],\n        type: 'linear',\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_max']),\n      groupY: 'max',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-linear',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-linear\"></div>);\n"))),(0,r.kt)("p",null,"You can control the colors by passing the option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"scheme")),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"range")," of 2 or more colors, with an optional ",(0,r.kt)("inlineCode",{parentName:"li"},"interpolate")," function")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," are specified, it will default to ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#Turbo"},(0,r.kt)("inlineCode",{parentName:"a"},"Turbo"))," scheme."),(0,r.kt)("p",null,"There are a few mathematical-oriented variant of the ",(0,r.kt)("inlineCode",{parentName:"p"},"linear")," type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pow")," - power (exponential) transform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqrt")," - square-root transform (pow transform with exponent = 0.5)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log")," - logarithmic transform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symlog")," - bi-symmetric logarithmic transform per Webber et al."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sequential")," - equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"linear")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cyclical")," - equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"linear"),", but defaults to the ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@d3/color-schemes#Rainbow"},(0,r.kt)("inlineCode",{parentName:"a"},"Rainbow"))," scheme")),(0,r.kt)("h2",{id:"diverging"},(0,r.kt)("inlineCode",{parentName:"h2"},"diverging")),(0,r.kt)("p",null,"Equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"linear"),", but with a pivot; but defaults to the ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes#RdBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdBu"))," scheme"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"all diverging color scales are symmetric around the pivot; set symmetric to false if you want to cover the whole extent on both sides.")),(0,r.kt)("p",null,"All diverging type support additional options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pivot")," (default to 0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symmetric")," (default to false), whether the scale should be symetric around the pivot")),(0,r.kt)("p",null,"Play with the option in the playground to check how these options work."),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint(\n  {\n    scale: {\n      color: {\n        domain: [-20, 20],\n        type: 'diverging',\n        scheme: 'BuRd',\n        pivot: 0,\n        symmetric: true,\n      },\n    },\n    data: {\n      source: '../../fixtures/seattle-weather.csv',\n      type: 'csv',\n      x: 'date',\n      y: d => parseInt(d['temp_min']),\n      groupY: 'min',\n    },\n    date: { start: new Date('2012-01-01') },\n    range: 1,\n    itemSelector: '#ex-diverging',\n    domain: {\n      type: 'year',\n    },\n    subDomain: { type: 'day', radius: 2, label: (t, v) => v },\n  },\n  [[Legend]]\n);\n\nrender(<div id=\"ex-diverging\"></div>);\n"))),(0,r.kt)("p",null,"There are also variant of the ",(0,r.kt)("inlineCode",{parentName:"p"},"diverging")," scale:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-log")," - like log, but with a pivot that defaults to 1; defaults to the ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@d3/color-schemes#RdBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdBu"))," scheme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-pow")," - like pow, but with a pivot; defaults to the ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@d3/color-schemes#RdBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdBu"))," scheme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-sqrt")," - like sqrt, but with a pivot; defaults to the ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@d3/color-schemes#RdBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdBu"))," scheme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-symlog")," - like symlog, but with a pivot; defaults to the ",(0,r.kt)("a",{parentName:"li",href:"https://observablehq.com/@d3/color-schemes#RdBu"},(0,r.kt)("inlineCode",{parentName:"a"},"RdBu"))," scheme")))}u.isMDXComponent=!0}}]);