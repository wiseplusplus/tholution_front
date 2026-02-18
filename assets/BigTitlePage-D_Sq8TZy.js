import{y as n,d as i,o as t,c,a as o,t as l,i as s,k as d,z as r}from"./index-BnoIOtV8.js";/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),f={class:"h-full w-full flex flex-col items-center justify-center p-8 text-center bg-slate-50"},g={class:"max-w-4xl w-full flex flex-col items-center"},u={class:"text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"},h={key:0,class:"text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"},w={key:1,class:"flex flex-col items-center gap-4 animate-bounce mt-8"},k={class:"text-slate-400 font-medium tracking-wide uppercase text-sm"},v=i({__name:"BigTitlePage",props:{config:{type:Object,required:!0}},setup(e){const a={arrowDown:x,msg:m};return(y,b)=>(t(),c("div",f,[o("div",g,[o("h1",u,l(e.config.title),1),e.config.subTitle?(t(),c("p",h,l(e.config.subTitle),1)):s("",!0),e.config.callToAction?(t(),c("div",w,[o("span",k,l(e.config.callToAction.text),1),e.config.callToAction.icon&&a[e.config.callToAction.icon]?(t(),d(r(a[e.config.callToAction.icon]),{key:0,class:"w-8 h-8 text-slate-400"})):s("",!0)])):s("",!0)])]))}});export{v as default};
