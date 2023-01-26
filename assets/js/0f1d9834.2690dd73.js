"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),m=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(r.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(a),u=o,h=s["".concat(r,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[s]="string"==typeof e?e:o,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const l={title:"Migrating from 3.x",sidebar_position:25},i="Migrating from 3.x",d={unversionedId:"migrate_from_v3",id:"migrate_from_v3",title:"Migrating from 3.x",description:"The current v4 release is rewritten from the ground up, and have a lot of major breaking changes.",source:"@site/docs/migrate_from_v3.md",sourceDirName:".",slug:"/migrate_from_v3",permalink:"/cal-heatmap-doc/docs/migrate_from_v3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/migrate_from_v3.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Migrating from 3.x",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/cal-heatmap-doc/docs/template"},next:{title:"Showcase",permalink:"/cal-heatmap-doc/docs/showcase"}},r={},m=[{value:"Major changes",id:"major-changes",level:2},{value:"Default settings update",id:"default-settings-update",level:2},{value:"New settings",id:"new-settings",level:2},{value:"<code>domain.sort</code>",id:"domainsort",level:3},{value:"<code>date.locale</code>",id:"datelocale",level:3},{value:"<code>data.x</code>",id:"datax",level:3},{value:"<code>data.y</code>",id:"datay",level:3},{value:"<code>data.groupY</code>",id:"datagroupy",level:3},{value:"<code>data.subLabel</code>",id:"datasublabel",level:3},{value:"<code>subDomain.color</code>",id:"subdomaincolor",level:3},{value:"<code>scale</code>",id:"scale",level:3},{value:"Renamed/moved settings",id:"renamedmoved-settings",level:2},{value:"<code>label.align</code>",id:"labelalign",level:3},{value:"<code>label</code>",id:"label",level:3},{value:"<code>date</code>",id:"date",level:3},{value:"<code>minDate</code>",id:"mindate",level:3},{value:"<code>maxDate</code>",id:"maxdate",level:3},{value:"<code>highlight</code>",id:"highlight",level:3},{value:"<code>data</code>",id:"data",level:3},{value:"<code>dataType</code>",id:"datatype",level:3},{value:"<code>domain</code>",id:"domain",level:3},{value:"<code>domainGutter</code>",id:"domaingutter",level:3},{value:"<code>domainMargin</code>",id:"domainmargin",level:3},{value:"<code>domainDynamicDimension</code>",id:"domaindynamicdimension",level:3},{value:"<code>domainLabelFormat</code>",id:"domainlabelformat",level:3},{value:"<code>subDomain</code>",id:"subdomain",level:3},{value:"<code>cellSize</code>",id:"cellsize",level:3},{value:"<code>cellRadius</code>",id:"cellradius",level:3},{value:"<code>cellPadding</code>",id:"cellpadding",level:3},{value:"<code>subDomainTextFormat</code>",id:"subdomaintextformat",level:3},{value:"Removed settings",id:"removed-settings",level:2},{value:"<code>weekStartOnMonday</code>",id:"weekstartonmonday",level:3},{value:"<code>legend</code>, <code>displayLegend</code>, <code>legendCellSize</code>, <code>legendCellPadding</code>, <code>legendCellMargin</code>, <code>legendVerticalPosition</code>, <code>legendHorizontalPosition</code>, <code>legendOrientation</code>, <code>legendTitleFormat</code>",id:"legend-displaylegend-legendcellsize-legendcellpadding-legendcellmargin-legendverticalposition-legendhorizontalposition-legendorientation-legendtitleformat",level:3},{value:"<code>legendColors</code>",id:"legendcolors",level:3},{value:"<code>subDomainDateFormat</code>, <code>subDomainTitleFormat</code>, <code>itemName</code>",id:"subdomaindateformat-subdomaintitleformat-itemname",level:3},{value:"<code>tooltip</code>",id:"tooltip",level:3},{value:"<code>afterLoadData</code>",id:"afterloaddata",level:3},{value:"New methods",id:"new-methods",level:2},{value:"<code>afterLoad</code> and <code>onComplete</code> removed",id:"afterload-and-oncomplete-removed",level:3},{value:"Renamed methods",id:"renamed-methods",level:2},{value:"Removed methods",id:"removed-methods",level:2},{value:"<code>rewind()</code>",id:"rewind",level:3},{value:"<code>showLegend()</code>, <code>removeLegend()</code>, <code>setLegend()</code>",id:"showlegend-removelegend-setlegend",level:3},{value:"<code>highlight</code>",id:"highlight-1",level:3},{value:"<code>getSVG</code>",id:"getsvg",level:3},{value:"Over changes",id:"over-changes",level:2}],p={toc:m};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-from-3x"},"Migrating from 3.x"),(0,o.kt)("p",null,"The current v4 release is rewritten from the ground up, and have a ",(0,o.kt)("em",{parentName:"p"},"lot of major breaking changes"),".\n{: .fs-6}"),(0,o.kt)("p",null,"The last 3.x release was from October 2016,\nand was built on top of a vanilla JS codebase from 2012."),(0,o.kt)("p",null,"After 7 years, the javascript scene has seen some changes,\nsuch as the maturity of ECMAScript, babel, and other various bundler tools,\nas well as newer versions of the underlying d3.js libraries used by Cal-Heatmap."),(0,o.kt)("p",null,"Aside from some bugfixes and new features, the v4 branch has been rewritten\nfrom the ground up as ES modules,\nand transpiled to support older browsers.\nThis direction allows an easier code maintainability and readability\nthan the previous single file 3k lines codebase."),(0,o.kt)("p",null,"Most of the breaking changes come from the settings renaming, and methods removal."),(0,o.kt)("h2",{id:"major-changes"},"Major changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All functions using callbacks have been migrated to use a Promise instead"),(0,o.kt)("li",{parentName:"ul"},"Code base rewritten in Typescript, and ESnext (babel transpiled for older browser support)"),(0,o.kt)("li",{parentName:"ul"},"New plugin system to extend/modify calendar capabilities"),(0,o.kt)("li",{parentName:"ul"},"New Template system to use user-created calendar layout"),(0,o.kt)("li",{parentName:"ul"},"All dates handling delegated to dayjs"),(0,o.kt)("li",{parentName:"ul"},"Bundles for ESM, UMD"),(0,o.kt)("li",{parentName:"ul"},"Support for D3.js v6 and v7")),(0,o.kt)("h2",{id:"default-settings-update"},"Default settings update"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animationDuration")," has been decreased from 500ms to 200ms.")),(0,o.kt)("h2",{id:"new-settings"},"New settings"),(0,o.kt)("h3",{id:"domainsort"},(0,o.kt)("inlineCode",{parentName:"h3"},"domain.sort")),(0,o.kt)("p",null,"Control the sort order of the domains"),(0,o.kt)("h3",{id:"datelocale"},(0,o.kt)("inlineCode",{parentName:"h3"},"date.locale")),(0,o.kt)("p",null,"Set a custom date locale. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"en")),(0,o.kt)("h3",{id:"datax"},(0,o.kt)("inlineCode",{parentName:"h3"},"data.x")),(0,o.kt)("p",null,"Instruct the calendar how to extract the date from your dataset"),(0,o.kt)("h3",{id:"datay"},(0,o.kt)("inlineCode",{parentName:"h3"},"data.y")),(0,o.kt)("p",null,"Instruct the calendar how to extract the value from your dataset"),(0,o.kt)("h3",{id:"datagroupy"},(0,o.kt)("inlineCode",{parentName:"h3"},"data.groupY")),(0,o.kt)("p",null,"Instruct the calendar how to aggregate values from same time range"),(0,o.kt)("h3",{id:"datasublabel"},(0,o.kt)("inlineCode",{parentName:"h3"},"data.subLabel")),(0,o.kt)("p",null,"Still experimental option, add a customizable secondary label to domain"),(0,o.kt)("h3",{id:"subdomaincolor"},(0,o.kt)("inlineCode",{parentName:"h3"},"subDomain.color")),(0,o.kt)("p",null,"Dynamically color the subDomain's label"),(0,o.kt)("h3",{id:"scale"},(0,o.kt)("inlineCode",{parentName:"h3"},"scale")),(0,o.kt)("p",null,"New option, grouping previous functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"legend")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"legendColors"),", to control how to colorize your dataset"),(0,o.kt)("h2",{id:"renamedmoved-settings"},"Renamed/moved settings"),(0,o.kt)("h3",{id:"labelalign"},(0,o.kt)("inlineCode",{parentName:"h3"},"label.align")),(0,o.kt)("p",null,"Renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"label.textAlign"),"."),(0,o.kt)("h3",{id:"label"},(0,o.kt)("inlineCode",{parentName:"h3"},"label")),(0,o.kt)("p",null,"Moved inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"domain")," namespace."),(0,o.kt)("h3",{id:"date"},(0,o.kt)("inlineCode",{parentName:"h3"},"date")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"date")," is now a namespace, grouping all date related options.\nOld ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," option has been moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"date.start")),(0,o.kt)("h3",{id:"mindate"},(0,o.kt)("inlineCode",{parentName:"h3"},"minDate")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"date.min")),(0,o.kt)("h3",{id:"maxdate"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxDate")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"date.max")),(0,o.kt)("h3",{id:"highlight"},(0,o.kt)("inlineCode",{parentName:"h3"},"highlight")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"date.highlight")),(0,o.kt)("h3",{id:"data"},(0,o.kt)("inlineCode",{parentName:"h3"},"data")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," is now a namespace, grouping all data related options.\nOld ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," option has been moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"data.source")),(0,o.kt)("h3",{id:"datatype"},(0,o.kt)("inlineCode",{parentName:"h3"},"dataType")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"data.type")),(0,o.kt)("h3",{id:"domain"},(0,o.kt)("inlineCode",{parentName:"h3"},"domain")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"domain")," is now a namespace, grouping all domain related options.\nOld ",(0,o.kt)("inlineCode",{parentName:"p"},"doamin")," option has been moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.type")),(0,o.kt)("h3",{id:"domaingutter"},(0,o.kt)("inlineCode",{parentName:"h3"},"domainGutter")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"domain.gutter")),(0,o.kt)("h3",{id:"domainmargin"},(0,o.kt)("inlineCode",{parentName:"h3"},"domainMargin")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"domain.padding")),(0,o.kt)("h3",{id:"domaindynamicdimension"},(0,o.kt)("inlineCode",{parentName:"h3"},"domainDynamicDimension")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"domain.dynamicDimension")),(0,o.kt)("h3",{id:"domainlabelformat"},(0,o.kt)("inlineCode",{parentName:"h3"},"domainLabelFormat")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"domain.label")),(0,o.kt)("h3",{id:"subdomain"},(0,o.kt)("inlineCode",{parentName:"h3"},"subDomain")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subDomain")," is now a namespace, grouping all subDomain related options.\nOld ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain")," option has been moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.type")),(0,o.kt)("h3",{id:"cellsize"},(0,o.kt)("inlineCode",{parentName:"h3"},"cellSize")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.height")),(0,o.kt)("h3",{id:"cellradius"},(0,o.kt)("inlineCode",{parentName:"h3"},"cellRadius")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.radius")),(0,o.kt)("h3",{id:"cellpadding"},(0,o.kt)("inlineCode",{parentName:"h3"},"cellPadding")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.gutter")),(0,o.kt)("h3",{id:"subdomaintextformat"},(0,o.kt)("inlineCode",{parentName:"h3"},"subDomainTextFormat")),(0,o.kt)("p",null,"Moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"subDomain.label")),(0,o.kt)("h2",{id:"removed-settings"},"Removed settings"),(0,o.kt)("h3",{id:"weekstartonmonday"},(0,o.kt)("inlineCode",{parentName:"h3"},"weekStartOnMonday")),(0,o.kt)("p",null,"Use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"date.locale"),", or a custom Template."),(0,o.kt)("h3",{id:"legend-displaylegend-legendcellsize-legendcellpadding-legendcellmargin-legendverticalposition-legendhorizontalposition-legendorientation-legendtitleformat"},(0,o.kt)("inlineCode",{parentName:"h3"},"legend"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"displayLegend"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendCellSize"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendCellPadding"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendCellMargin"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendVerticalPosition"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendHorizontalPosition"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendOrientation"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"legendTitleFormat")),(0,o.kt)("p",null,"Removed, migrated to ",(0,o.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/plugins/legend"},"Legend")," plugin"),(0,o.kt)("h3",{id:"legendcolors"},(0,o.kt)("inlineCode",{parentName:"h3"},"legendColors")),(0,o.kt)("p",null,"Moved to a new option inside ",(0,o.kt)("inlineCode",{parentName:"p"},"scale"),"."),(0,o.kt)("h3",{id:"subdomaindateformat-subdomaintitleformat-itemname"},(0,o.kt)("inlineCode",{parentName:"h3"},"subDomainDateFormat"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"subDomainTitleFormat"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"itemName")),(0,o.kt)("p",null,"Removed, use Tooltip ",(0,o.kt)("inlineCode",{parentName:"p"},"text")),(0,o.kt)("h3",{id:"tooltip"},(0,o.kt)("inlineCode",{parentName:"h3"},"tooltip")),(0,o.kt)("p",null,"Removed, migrated to ",(0,o.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/plugins/tooltip"},"Tooltip")," plugin."),(0,o.kt)("h3",{id:"afterloaddata"},(0,o.kt)("inlineCode",{parentName:"h3"},"afterLoadData")),(0,o.kt)("p",null,"CalHeatmap is not expecting a strict opinionated data structure anymore,\nand accept an array of object, just like d3.js. See ",(0,o.kt)("inlineCode",{parentName:"p"},"data.x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data.y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data.groupY")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"colLimit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rowLimit")),(0,o.kt)("p",null,"To customize the layout of the subDomains, a new ",(0,o.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/template"},(0,o.kt)("inlineCode",{parentName:"a"},"Template"))," system has been introduced"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nextSelector"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"previousSelector")),(0,o.kt)("p",null,"The same objective can be achieved by adding an ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick()")," event on\nyour desired DOM Element, and call ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"previous()")," on the calendar instance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"considerMissingDataAsZero")),(0,o.kt)("p",null,"Data are treated as they are, you can preprocess/transform them using ",(0,o.kt)("inlineCode",{parentName:"p"},"data.y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data,.groupY")," options."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"itemNamespace")),(0,o.kt)("p",null,"Obsolete, was only used internally to namespace the ",(0,o.kt)("inlineCode",{parentName:"p"},"nextSelector")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"previousSelector")," onclick events."),(0,o.kt)("h2",{id:"new-methods"},"New methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on(eventName, callback)")," has been added, to replace all old callback functions.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/events"},"Events")," for the complete list of events"),(0,o.kt)("h3",{id:"afterload-and-oncomplete-removed"},(0,o.kt)("inlineCode",{parentName:"h3"},"afterLoad")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"onComplete")," removed"),(0,o.kt)("p",null,"These events are now obsolete, as all methods now return a promise."),(0,o.kt)("h2",{id:"renamed-methods"},"Renamed methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"init(options)")," renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"paint(options)"),". This method can now be called multiple times with new options, and will update the calendar dynamically, instead of redrawing it from scratch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update(data, afterLoad, updateMode)")," renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"fill(data)"),", to reflect that it's for updating data only, and not the options. It now accepts only ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," as its only argument, all other arguments can be set via ",(0,o.kt)("inlineCode",{parentName:"li"},"paint()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"destroy(callback)")," do not take a callback argument anymore, and returns a Promise.")),(0,o.kt)("h2",{id:"removed-methods"},"Removed methods"),(0,o.kt)("h3",{id:"rewind"},(0,o.kt)("inlineCode",{parentName:"h3"},"rewind()")),(0,o.kt)("p",null,"The same objective can be achieved by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"jumpTo()")," with your initial start date on the calendar instance."),(0,o.kt)("h3",{id:"showlegend-removelegend-setlegend"},(0,o.kt)("inlineCode",{parentName:"h3"},"showLegend()"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"removeLegend()"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"setLegend()")),(0,o.kt)("p",null,"The same objective can be achieved by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"paint({}, [[Legend, LEGEND_OPTIONS]])")," on the calendar instance."),(0,o.kt)("h3",{id:"highlight-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"highlight")),(0,o.kt)("p",null,"The same objective can be achieved by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"paint({ date: { highlight: [YOUR_DATES] } })")," on the calendar instance."),(0,o.kt)("h3",{id:"getsvg"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSVG")),(0,o.kt)("p",null,"Delegated to a plugin"),(0,o.kt)("h2",{id:"over-changes"},"Over changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All the CSS classes used for data coloring have been removed. The ",(0,o.kt)("inlineCode",{parentName:"li"},"scale")," option allow a more precise color customization."),(0,o.kt)("li",{parentName:"ul"},"All the ",(0,o.kt)("inlineCode",{parentName:"li"},"x_")," subDomains variants aside from ",(0,o.kt)("inlineCode",{parentName:"li"},"x_day")," have been removed. You can re-created them with a custom template."),(0,o.kt)("li",{parentName:"ul"},"The mouse cursor do not change to ",(0,o.kt)("inlineCode",{parentName:"li"},"pointer")," when hovering on a subDomain cell automatically when there is an ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," event registered, since there is no reliable way to detect if an onClick listener is registered anymore."),(0,o.kt)("li",{parentName:"ul"},"Test suite migrated to Jest, and start testing on browserstack against a matrix of browsers.")))}s.isMDXComponent=!0}}]);