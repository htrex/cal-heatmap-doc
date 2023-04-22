"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"FAQ",sidebar_position:50},r=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"How to change start of week to monday",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/faq.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"FAQ",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Scale type",permalink:"/docs/advanced/scaleType"}},s={},c=[{value:"How to change start of week to monday",id:"how-to-change-start-of-week-to-monday",level:3},{value:"Use a locale where the start of the week is monday",id:"use-a-locale-where-the-start-of-the-week-is-monday",level:4},{value:"Keep the <code>en</code> locale, but customize it to have monday as start of the week",id:"keep-the-en-locale-but-customize-it-to-have-monday-as-start-of-the-week",level:4},{value:"Pass your own custom locale",id:"pass-your-own-custom-locale",level:4},{value:"How to change the calendar language",id:"how-to-change-the-calendar-language",level:3},{value:"Dark/Light mode support",id:"darklight-mode-support",level:3},{value:"Trigger an action when clicking a calendar cell",id:"trigger-an-action-when-clicking-a-calendar-cell",level:3},{value:"Use a custom <code>subDomain</code> interval, such as <code>6 hours</code>, <code>15 min</code>, etc ...",id:"use-a-custom-subdomain-interval-such-as-6-hours-15-min-etc-",level:3},{value:"Refresh the calendar with new data, dynamically",id:"refresh-the-calendar-with-new-data-dynamically",level:3},{value:"How to change the domain/subDomain label text size/font",id:"how-to-change-the-domainsubdomain-label-text-sizefont",level:3},{value:"Show only weekdays, instead of all days of the week",id:"show-only-weekdays-instead-of-all-days-of-the-week",level:3},{value:"Use a data source, behind authentication",id:"use-a-data-source-behind-authentication",level:3},{value:"Right to Left (RTL) support",id:"right-to-left-rtl-support",level:3},{value:"Reproduce a calendar in the Github contribution style",id:"reproduce-a-calendar-in-the-github-contribution-style",level:3},{value:"Does it work with React ?",id:"does-it-work-with-react-",level:3},{value:"Does it work with VueJS ?",id:"does-it-work-with-vuejs-",level:3},{value:"Does it work on NodeJS ?",id:"does-it-work-on-nodejs-",level:3}],d={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-change-start-of-week-to-monday"},"How to change start of week to monday"),(0,o.kt)("p",null,"The start of the week (sunday/monday) depends on each locale. By default,\nthe calendar is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"en")," locale, which uses sunday as first day of the week."),(0,o.kt)("h4",{id:"use-a-locale-where-the-start-of-the-week-is-monday"},"Use a locale where the start of the week is monday"),(0,o.kt)("p",null,"Some locale, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"fr"),", uses monday as start of the week, nothing else is required"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({\n  // highlight-next-line\n  date: { locale: 'fr' },\n});\n")),(0,o.kt)("h4",{id:"keep-the-en-locale-but-customize-it-to-have-monday-as-start-of-the-week"},"Keep the ",(0,o.kt)("inlineCode",{parentName:"h4"},"en")," locale, but customize it to have monday as start of the week"),(0,o.kt)("p",null,"You can pass a partial ",(0,o.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/customization/customization"},"daysjs locale object")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),", overwritting some default ",(0,o.kt)("inlineCode",{parentName:"p"},"en")," locale values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({\n  // highlight-next-line\n  date: { locale: { weekStart: 1 } },\n});\n")),(0,o.kt)("h4",{id:"pass-your-own-custom-locale"},"Pass your own custom locale"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/customization/customization"},(0,o.kt)("inlineCode",{parentName:"a"},"locale"))," doc"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This option was known as ",(0,o.kt)("inlineCode",{parentName:"p"},"startWeekOnMonday")," in the previous version.")),(0,o.kt)("h3",{id:"how-to-change-the-calendar-language"},"How to change the calendar language"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/options/date#locale"},"locale")," option. For additional text such as tooltip text, a callback\nfunction is provided, so you can customize the displayed text."),(0,o.kt)("h3",{id:"darklight-mode-support"},"Dark/Light mode support"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/options/theme"},(0,o.kt)("inlineCode",{parentName:"a"},"theme"))," option"),(0,o.kt)("h3",{id:"trigger-an-action-when-clicking-a-calendar-cell"},"Trigger an action when clicking a calendar cell"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/events#click"},(0,o.kt)("inlineCode",{parentName:"a"},"click")," event")),(0,o.kt)("h3",{id:"use-a-custom-subdomain-interval-such-as-6-hours-15-min-etc-"},"Use a custom ",(0,o.kt)("inlineCode",{parentName:"h3"},"subDomain")," interval, such as ",(0,o.kt)("inlineCode",{parentName:"h3"},"6 hours"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"15 min"),", etc ..."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/template"},"Templates"),", to create your own custom subDomain with your desired time interval"),(0,o.kt)("h3",{id:"refresh-the-calendar-with-new-data-dynamically"},"Refresh the calendar with new data, dynamically"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/API/fill"},(0,o.kt)("inlineCode",{parentName:"a"},"fill")," API")),(0,o.kt)("h3",{id:"how-to-change-the-domainsubdomain-label-text-sizefont"},"How to change the domain/subDomain label text size/font"),(0,o.kt)("p",null,"Take a look at the css"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"domain")," label are controlled via ",(0,o.kt)("inlineCode",{parentName:"li"},".ch-domain-text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subDomain")," text are controlled via ",(0,o.kt)("inlineCode",{parentName:"li"},".ch-subdomain-text"))),(0,o.kt)("h3",{id:"show-only-weekdays-instead-of-all-days-of-the-week"},"Show only weekdays, instead of all days of the week"),(0,o.kt)("p",null,"Use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/template"},"custom template"),". You can see an example ",(0,o.kt)("a",{parentName:"p",href:"/docs/template#days-subdomain-with-all-days-on-the-same-row"},"here")),(0,o.kt)("h3",{id:"use-a-data-source-behind-authentication"},"Use a data source, behind authentication"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/options/data#source"},(0,o.kt)("inlineCode",{parentName:"a"},"data.source"))," is expecting a string url. When your API is behind authentication,\nor required additional request headers, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/options/data#requestinit"},(0,o.kt)("inlineCode",{parentName:"a"},"requestinit"))," to customize the http request,\nto add addition headers, change the request type to ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", etc ..."),(0,o.kt)("h3",{id:"right-to-left-rtl-support"},"Right to Left (RTL) support"),(0,o.kt)("p",null,"Set both ",(0,o.kt)("a",{parentName:"p",href:"/docs/options/domain/#sort"},(0,o.kt)("inlineCode",{parentName:"a"},"domain.sort"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/options/subDomain#sort"},(0,o.kt)("inlineCode",{parentName:"a"},"subDomain.sort"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"desc")),(0,o.kt)("h3",{id:"reproduce-a-calendar-in-the-github-contribution-style"},"Reproduce a calendar in the Github contribution style"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/showcase#github-profile-contribution-like"},"Github showcase")),(0,o.kt)("h3",{id:"does-it-work-with-react-"},"Does it work with React ?"),(0,o.kt)("p",null,"Yes, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wa0x6e/cal-heatmap-react-starter"},"this starter demo")),(0,o.kt)("p",null,"The homepage demo is also a React Component, see the source code directly on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wa0x6e/cal-heatmap-doc/blob/main/src/components/CalHeatmapComponent/index.tsx"},"documention repo")),(0,o.kt)("h3",{id:"does-it-work-with-vuejs-"},"Does it work with VueJS ?"),(0,o.kt)("p",null,"Yes, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wa0x6e/cal-heatmap-vue-starter"},"this starter demo")),(0,o.kt)("h3",{id:"does-it-work-on-nodejs-"},"Does it work on NodeJS ?"),(0,o.kt)("p",null,"The script requires a DOM Element. As long as your app have a virtual DOM Element, it should work."))}u.isMDXComponent=!0}}]);