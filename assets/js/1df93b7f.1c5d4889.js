"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[3237],{1262:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(2389);function i(e){let{children:t,fallback:a}=e;return(0,l.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},1057:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(7294),l=a(6010),i=a(9960),o=a(2263),r=a(4774),s=a(7462);const c={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},d=[{title:"Date locale and timezone support",description:n.createElement(n.Fragment,null,"Customize the calendar language, timezone and locale specific setting, such as first day of the week")},{title:"Animated Date Navigation",description:n.createElement(n.Fragment,null,"Browse the calendar dynamically, or jump to a specific date ")},{title:"Time granularity",description:n.createElement(n.Fragment,null,"Customize the layout and time interval: years, months, weeks, days, hours, minutes, and many more via plugins")},{title:"Customizable",description:n.createElement(n.Fragment,null,"Customize the UI to your liking: cell size, padding, margin, color, cell position, RTL, etc...")},{title:"Extensible",description:n.createElement(n.Fragment,null,"Add more functionality to the calendar via a plugin system")},{title:"Typescript and tests",description:n.createElement(n.Fragment,null,"Written in typescript, ES6, and fully tested on real browsers via Browserstack")}];function m(e){let{title:t,description:a}=e;return n.createElement("div",{className:(0,l.Z)("col col--4")},n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,a)))}function u(){return n.createElement("section",{className:c.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},d.map(((e,t)=>n.createElement(m,(0,s.Z)({key:t},e)))))))}function p(){const e={0:["year","month",4,10,20,5,2,"MMMM YYYY"],1:["year","week",2,5,25,0,2,"[Week #]w YYYY"],2:["year","day",1,10,10,1,2,"LL"],3:["month","week",10,10,10,0,0,"[week of] LL"],4:["month","day",10,10,10,0,2,"LL"],5:["day","hour",12,10,10,0,2,"LLL"],6:["hour","minute",9,10,10,0,2,"LLLL"]};let t=2;const a={date:{start:new Date("2013-01-01")},data:{source:"./fixtures/seattle-weather.csv",type:"csv",x:"date",y:"temp_min",groupY:"min"},scale:{color:{type:"diverging",scheme:"PRGn",domain:[-10,20]}},itemSelector:"#cal-heatmap-index",domain:{type:e[t][0]},subDomain:{type:e[t][1]}};let l=new window.CalHeatmap;function i(a){a.domain={type:e[t][0]},a.subDomain={type:e[t][1],width:e[t][3],height:e[t][4],radius:e[t][5],gutter:e[t][6]},a.range=e[t][2],l.paint(a,[[window.Tooltip,{text:function(a,n,l){return(n?n+"\xb0C":"No data")+" on "+l.format(e[t][7])}}]])}return l.on("resize",(function(e){window.d3.select("#cal-heatmap-index-toolbar").attr("style",`width: ${e}px; opacity: 1`),window.d3.select("#cal-heatmap-index-footer").attr("style",`width: ${e}px; opacity: 1`)})),l.paint({data:{source:"./fixtures/seattle-weather.csv",type:"csv",x:"date",y:"temp_max",groupY:"max"},date:{start:new Date("2012-01-01")},range:1,scale:{color:{type:"linear",scheme:"PRGn",domain:[0,40]}},domain:{type:"year",label:{text:null}},subDomain:{type:"day",radius:2},itemSelector:"#cal-heatmap-index"},[[window.Tooltip,{text:function(e,t,a){return(t?t+"\xb0C":"No data")+" on "+a.format("LL")}}]]),n.createElement("div",null,n.createElement("div",{id:"cal-heatmap-index-toolbar"},n.createElement("div",{className:"group-buttons"},n.createElement("a",{id:"index-zoom-out",title:"Zoom out",onClick:()=>function(){if(t<=0)return!1;1===t&&window.d3.select("#index-zoom-out").classed("disabled",!0),t!=Object.keys(e).length-2&&window.d3.select("#index-zoom-in").classed("disabled",!1),t--,l.destroy().then((()=>{l=new window.CalHeatmap,i(a),l.on("resize",(function(e){window.d3.select("#cal-heatmap-index-toolbar").attr("style",`width: ${e}px; opacity: 1`),window.d3.select("#cal-heatmap-index-footer").attr("style",`width: ${e}px; opacity: 1`)}))}))}(),className:"button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"},"-"),n.createElement("a",{id:"index-zoom-in",title:"Zoom in",onClick:()=>function(){if(t>=Object.keys(e).length-1)return!1;t===Object.keys(e).length-2&&window.d3.select("#index-zoom-in").classed("disabled",!0),t>=0&&window.d3.select("#index-zoom-out").classed("disabled",!1),t++,l.destroy().then((()=>{l=new window.CalHeatmap,i(a),l.on("resize",(function(e){window.d3.select("#cal-heatmap-index-toolbar").attr("style",`width: ${e}px; opacity: 1`),window.d3.select("#cal-heatmap-index-footer").attr("style",`width: ${e}px; opacity: 1`)}))}))}(),className:"button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"},"+")),n.createElement("div",null,n.createElement("h4",null,"Seattle mininum temperature (\xb0C)")),n.createElement("div",{className:"group-buttons"},n.createElement("a",{title:"Previous",id:"index-previous",onClick:()=>l.previous(),className:"button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"},"\u2039"),n.createElement("a",{title:"Next",id:"index-next",onClick:()=>l.next(),className:"button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"},"\u203a"))),n.createElement("div",{id:"cal-heatmap-index"}))}var h=a(1262);const y={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function g(){const{siteConfig:e}=(0,o.Z)();return n.createElement("header",{className:(0,l.Z)("hero",y.heroBanner)},n.createElement("div",{className:"container"},n.createElement("img",{className:"hero-logo",src:"img/favicon.png",alt:"{siteConfig.title} logo"}),n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline)),n.createElement("div",{id:"hero-example"},n.createElement(h.Z,null,(()=>n.createElement(p,null))),n.createElement("div",{id:"cal-heatmap-index"}),n.createElement("div",{id:"cal-heatmap-index-footer"},n.createElement("small",null,"Data may not be available for all timeframes"))),n.createElement("div",{className:"container"},n.createElement("div",{className:y.buttons},n.createElement(i.Z,{className:"button button--primary button--lg",to:"/docs/getting-started/installation"},"Get started \u2192"),n.createElement(i.Z,{className:"button button--secondary button--outline  margin-left--md button--lg",href:"https://github.com/wa0x6e/cal-heatmap"},n.createElement("span",{className:"github-link margin-right--sm",style:{float:"left"}}),"Star on Github"))))}function w(){const{siteConfig:e}=(0,o.Z)();return n.createElement(r.Z,{title:`${e.title}`,description:`${e.tagline}`},n.createElement(g,null),n.createElement("main",null,n.createElement(u,null)))}}}]);