import{d as E,e as i,a,bo as c,j as t,bs as m,ce as A,aq as g,B as u,bq as l,n as h,I as F,a1 as N,$ as P}from"./index.fef1c441.js";import{o as z}from"./index.69e47ed4.js";import{d as J}from"./useUtil.0387a8c3.js";import{G}from"./index.8597ba16.js";import{I as d}from"./SettingItem.a5d13e04.js";import"./api.853d5837.js";import"./index.be9be040.js";import"./item_type.be442da4.js";const re=()=>{const r=E();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,q]=i(""),[v,S]=i(""),[o,Q]=i([]),[U,B]=a(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[H,M]=a(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[O,R]=a(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await B();l(e,n=>{var C,T,I,L,w;_(((C=n.find(s=>s.key==="aria2_uri"))==null?void 0:C.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),S(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),q(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[j,x]=a(()=>c.post("/admin/setting/reset_token")),{copy:D}=J();return t(P,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>o().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>o().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return H()},onClick:async()=>{const e=await M();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>o().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>o().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>q(e)}))]}}),t(u,{my:"$2",get loading(){return O()},onClick:async()=>{const e=await R();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(F,{get value(){return v()},readOnly:!0}),t(N,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{D(v())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return j()},onClick:async()=>{const e=await x();l(e,n=>{h.success(r("settings_other.reset_token_success")),S(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{re as default};
