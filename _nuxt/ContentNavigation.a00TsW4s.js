import{u as f}from"./asyncData.gHNi0ELs.js";import{l as v,a0 as p,_ as g,d,a1 as l,H as h,m as _,U as y,Y as C,L as r,D as w}from"./entry.ezIEe8K1.js";import{q as P,w as m,e as $,s as N,j}from"./query.QeCrMH7l.js";import{u as T}from"./preview.B5F2C6r2.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.Twj8gVEz.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=E;export{R as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.Twj8gVEz.js","./entry.ezIEe8K1.js","./entry.-Unp0z6j.css","./slugify.a_4R14sV.js","./query.QeCrMH7l.js","./preview.B5F2C6r2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
