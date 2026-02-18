import{y as h,d as v,o as t,c as a,a as s,t as c,i,F as g,m as y,s as d,k as u,A as f,j as x}from"./index-BnoIOtV8.js";/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=h("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=h("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),w={class:"h-full w-full flex flex-col items-center justify-center bg-slate-50 p-8"},_={class:"max-w-4xl w-full h-full flex flex-col"},C={class:"mb-8 text-center shrink-0"},S={class:"text-3xl font-bold text-slate-900 mb-2"},j={key:0,class:"text-slate-500"},B={class:"flex-1 min-h-0 overflow-y-auto"},I={class:"space-y-4 pb-4"},L=["onClick"],q={class:"font-bold text-slate-800 text-lg"},z={key:0,class:"text-slate-400"},D={key:0,class:"px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4"},V=v({__name:"ListPage",props:{config:{type:Object,required:!0}},setup(e){const m=e,l=x({}),b=n=>{m.config.itemStyle==="collapsible"&&(l.value[n]=!l.value[n])};return(n,F)=>(t(),a("div",w,[s("div",_,[s("div",C,[s("h2",S,c(e.config.title),1),e.config.subTitle?(t(),a("p",j,c(e.config.subTitle),1)):i("",!0)]),s("div",B,[s("div",I,[(t(!0),a(g,null,y(e.config.items,(r,o)=>(t(),a("div",{key:o,class:d(["bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200",{"shadow-sm":!l.value[o],"shadow-md ring-1 ring-blue-100":l.value[o]}])},[s("button",{class:d(["w-full flex items-center justify-between p-5 text-left outline-none hover:bg-slate-50 transition-colors",{"cursor-default":e.config.itemStyle!=="collapsible"}]),onClick:N=>b(o)},[s("h3",q,c(r.title),1),e.config.itemStyle==="collapsible"?(t(),a("div",z,[l.value[o]?(t(),u(f(p),{key:0,class:"w-5 h-5"})):(t(),u(f(k),{key:1,class:"w-5 h-5"}))])):i("",!0)],10,L),e.config.itemStyle!=="collapsible"||l.value[o]?(t(),a("div",D,c(r.description),1)):i("",!0)],2))),128))])])])]))}});export{V as default};
