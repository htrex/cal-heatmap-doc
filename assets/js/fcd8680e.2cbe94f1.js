"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,h=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"Template",sidebar_position:10},o=void 0,i={unversionedId:"template",id:"template",title:"Template",description:"Defines the structure and content of a subDomain",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/cal-heatmap-doc/docs/template",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/template.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Template",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"jumpTo()",permalink:"/cal-heatmap-doc/docs/API/navigation/jumpTo"},next:{title:"Migrating from 3.x",permalink:"/cal-heatmap-doc/docs/migrate_from_v3"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Creating a template",id:"creating-a-template",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Return value",id:"return-value",level:3},{value:"name",id:"name",level:3},{value:"parent",id:"parent",level:3},{value:"rowsCount",id:"rowscount",level:3},{value:"Example from the hour template",id:"example-from-the-hour-template",level:4},{value:"columnsCount",id:"columnscount",level:3},{value:"mapping",id:"mapping",level:3},{value:"extractUnit",id:"extractunit",level:3},{value:"Example",id:"example",level:4},{value:"Real world Example",id:"real-world-example",level:2},{value:"Quarter subDomain template",id:"quarter-subdomain-template",level:3},{value:"Days subDomain, with all days on the same row",id:"days-subdomain-with-all-days-on-the-same-row",level:3},{value:"Days subDomain, showinng only the weekdays",id:"days-subdomain-showinng-only-the-weekdays",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Defines the structure and content of a subDomain"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A subDomain is a time range, each represented by a cell in the calendar."),(0,r.kt)("p",null,"Taking the ",(0,r.kt)("inlineCode",{parentName:"p"},"month/day")," example above, there is 6 ",(0,r.kt)("inlineCode",{parentName:"p"},"month")," domains, each having\na varying number of ",(0,r.kt)("inlineCode",{parentName:"p"},"days")," subDomain, months having a different number of days."),(0,r.kt)("p",null,"Given a domain type and a time window, a Template generates a collection\nof subDomains, and defines how they are arranged on a x/y axis."),(0,r.kt)("p",null,"This template is then consumed by the calendar in order to draw the\ngiven subDomain cells."),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"By default, CalHeatmap ships with the ",(0,r.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"week"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"x_day"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"hour")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minute")," templates."),(0,r.kt)("p",null,"Each of these templates are pretty basic, but will be enough for most use cases."),(0,r.kt)("p",null,"You can create and use a custom template if you wish to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"change the number of columns and rows (ex: all subDomains on same row)"),(0,r.kt)("li",{parentName:"ul"},"change the time interval of a subDomain (ex: each subDomain equal 5min)"),(0,r.kt)("li",{parentName:"ul"},"exclude some time window (ex: showing only weekdays)")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates a template"),(0,r.kt)("li",{parentName:"ul"},"Register the template using ",(0,r.kt)("a",{parentName:"li",href:"/cal-heatmap-doc/docs/API/addTemplates"},(0,r.kt)("inlineCode",{parentName:"a"},"addTemplates()")))),(0,r.kt)("h3",{id:"creating-a-template"},"Creating a template"),(0,r.kt)("p",null,"A template is a javascript function taking 2 arguments\nand returning a ",(0,r.kt)("inlineCode",{parentName:"p"},"TemplateResult"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type Template = function(DateHelper: DateHelper, options: Options) {\n  return TemplateResult;\n}\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DateHelper"),": a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wa0x6e/cal-heatmap/blob/master/src/helpers/DateHelper.ts"},"Datehelper")," object, also used internally by the calendar for all date related computation. You should always rely on this helper whenever possible for date computation consistency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Options"),": the ",(0,r.kt)("a",{parentName:"li",href:"/cal-heatmap-doc/docs/options/"},"Options")," object")),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type TemplateResult = {\n  name: string,\n  parent?: string,\n  rowsCount: (ts: number) => number,\n  columnsCount: (ts: number) => number,\n  mapping: (startTimestamp: number, endTimestamp: number) => SubDomain[],\n  extractUnit: (ts: number) => number,\n};\n")),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"Name of the subDomain type."),(0,r.kt)("p",null,"Will be used by ",(0,r.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/options/subDomain#type"},(0,r.kt)("inlineCode",{parentName:"a"},"subDomain.type"))," options, and child template."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Name should be unique")),(0,r.kt)("h3",{id:"parent"},"parent"),(0,r.kt)("p",null,"Parent template's name"),(0,r.kt)("p",null,"Optional, set the name of another template to inherit its options."),(0,r.kt)("h3",{id:"rowscount"},"rowsCount"),(0,r.kt)("p",null,"Total number of rows"),(0,r.kt)("p",null,"This number may vary depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," type."),(0,r.kt)("h4",{id:"example-from-the-hour-template"},"Example from the hour template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"rowsCount: ts => {\n  const TOTAL_ITEMS = 24;\n  const ROWS_COUNT = 6;\n  const { domain } = options;\n\n  switch (domain.type) {\n    case 'week':\n      return (TOTAL_ITEMS / ROWS_COUNT) * 7;\n    case 'month':\n      return (\n        (TOTAL_ITEMS / ROWS_COUNT) *\n        (domain.dynamicDimension ? DateHelper.date(ts).daysInMonth() : 31)\n      );\n    case 'day':\n    default:\n      return TOTAL_ITEMS / ROWS_COUNT;\n  }\n};\n")),(0,r.kt)("h3",{id:"columnscount"},"columnsCount"),(0,r.kt)("p",null,"Total number of columns"),(0,r.kt)("p",null,"This number may vary depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"domain")," type."),(0,r.kt)("h3",{id:"mapping"},"mapping"),(0,r.kt)("p",null,"Function returning an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"SubDomain"),", used to populate each domain in the calendar."),(0,r.kt)("p",null,"A subDomain have 3 main properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type SubDomain = {\n  t: number,\n  x: number,\n  y: number,\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"t"),": the subDomain timestamp, rounded to the start of the time range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"x"),": the row index of the cell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"y"),": the column index of the cell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rows are indexed from top to bottom, with the top one being 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Columns are indexed from left to right, with the left one being 0."))),(0,r.kt)("h3",{id:"extractunit"},"extractUnit"),(0,r.kt)("p",null,"Function returning the start of the subDomain time range."),(0,r.kt)("p",null,"This function is used to bind your data to a subDomain"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If each subDomain is a 5min range, the timestamp for ",(0,r.kt)("inlineCode",{parentName:"li"},"9:18AM")," should return\nthe timestamp for ",(0,r.kt)("inlineCode",{parentName:"li"},"9:15AM")),(0,r.kt)("li",{parentName:"ul"},"If each subDomain is a weekday, the function should return the timestamp for the start of that day (",(0,r.kt)("inlineCode",{parentName:"li"},"00:00AM"),"), and return ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," for a weekend.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a look at the built-in templates on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wa0x6e/cal-heatmap/tree/master/src/calendar/templates"},"github")," repository, for real-world examples.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"real-world-example"},"Real world Example"),(0,r.kt)("h3",{id:"quarter-subdomain-template"},"Quarter subDomain template"),(0,r.kt)("p",null,"Each subDomain represent 3 months."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const quarterTemplate = function (DateHelper) {\n  return {\n    name: 'quarter',\n    rowsCount() {\n      return 1;\n    },\n    columnsCount() {\n      return 4;\n    },\n    mapping: (startDate, endDate, defaultValues) =>\n      DateHelper.intervals('quarter', startDate, DateHelper.date(endDate)).map(\n        (d, index) => ({\n          t: d,\n          x: index,\n          y: 0,\n          ...defaultValues,\n        })\n      ),\n    extractUnit(d) {\n      return DateHelper.date(d).startOf('quarter').valueOf();\n    },\n  };\n};\n")),(0,r.kt)("h3",{id:"days-subdomain-with-all-days-on-the-same-row"},"Days subDomain, with all days on the same row"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"day")," template as ",(0,r.kt)("inlineCode",{parentName:"p"},"parent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sameRowDayTemplate = function (DateHelper) {\n  return {\n    name: 'day_same_row',\n    parent: 'day',\n    rowsCount() {\n      return 1;\n    },\n    columnsCount() {\n      return 31;\n    },\n    mapping: (startDate, endDate, defaultValues) =>\n      DateHelper.intervals('day', startDate, DateHelper.date(endDate)).map(\n        (d, index) => ({\n          t: d,\n          x: index,\n          y: 0,\n          ...defaultValues,\n        })\n      ),\n    // Missing extractUnit property, will be inherit from parent\n  };\n};\nconst cal = new CalHeatmap();\ncall.addTemplates(sameRowDayTemplate);\ncal.paint({\n  range: 1,\n  domain: { type: 'month' },\n  subDomain: { type: 'day_same_row' },\n});\n")),(0,r.kt)("h3",{id:"days-subdomain-showinng-only-the-weekdays"},"Days subDomain, showinng only the weekdays"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/cal-heatmap-doc/docs/showcase"},"Showcase")))}s.isMDXComponent=!0}}]);