!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=a(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=f;var d={};function h(){}function v(){}function g(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==n&&o.call(m,a)&&(p=m);var b=g.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(d).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=g,l(b,"constructor",g),l(g,"constructor",v),v.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){for(var r in e){(i=e[r]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r,i)}if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++){var i,a=n[o];(i=e[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a,i)}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.0e8c8898.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.74a50e6e.js"],(function(t){"use strict";var n,a,u,f,s,d,h,v,g,p,y,m,b,w,x,S,L,O,j,_,E,k,T,C,I,N,P,A,G,$,F,q,B,D,J,R,U,V,Y,M,X,z,H;return{setters:[function(t){n=t.d,a=t.j,u=t.b1,f=t.U,s=t.al,d=t.V,h=t.I,v=t.c7,g=t.T,p=t.b3,y=t.b4,m=t.b5,b=t.b6,w=t.b7,x=t.b8,S=t.b9,L=t.x,O=t.ba,j=t.bb,_=t.bc,E=t.r,k=t.F,T=t.bd,C=t.u,I=t.a,N=t.bo,P=t.e,A=t.bL,G=t.w,$=t.bs,F=t.X,q=t.ct,B=t.ca,D=t.cb,J=t.aj,R=t.aq,U=t.B,V=t.n,Y=t.D,M=t.bq,X=t.$},function(t){z=t.T},function(t){H=t.R}],execute:function(){var K=function(t){var e=n();return a(T,{w:"$full",display:"flex",flexDirection:"column",get required(){return t.required},get children(){var r,n;return[a(u,(r={},"for",n={},n.for=n.for||{},n.for.get=function(){return t.name},l(r,"display","flex"),l(r,"alignItems","center"),"children",n.children=n.children||{},n.children.get=function(){var r;return e((null!==(r=t.full_name_path)&&void 0!==r?r:"common"===t.driver)?"storages.common.".concat(t.name):"drivers.".concat(t.driver,".").concat(t.name))},c(r,n),r)),a(f,{get fallback(){return a(s,{get children(){return e("settings.unknown_type")}})},get children(){return[a(d,{get when(){return t.type===z.String},get children(){return a(h,{get id(){return t.name},get type(){return"password"==t.name?"password":"text"},get readOnly(){return t.readonly},get value(){return t.value},get onInput(){return t.type===z.String?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.value)}:void 0}})}}),a(d,{get when(){return t.type===z.Number},get children(){return a(h,{type:"number",get id(){return t.name},get readOnly(){return t.readonly},get value(){return t.value},get onInput(){return t.type===z.Number?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,parseInt(e.currentTarget.value))}:void 0}})}}),a(d,{get when(){return t.type===z.Bool},get children(){return a(v,{get id(){return t.name},get readOnly(){return t.readonly},get defaultChecked(){return t.value},get onChange(){return t.type===z.Bool?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.checked)}:void 0}})}}),a(d,{get when(){return t.type===z.Text},get children(){return a(g,{get id(){return t.name},get readOnly(){return t.readonly},get value(){return t.value},get onChange(){return t.type===z.Text?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.value)}:void 0}})}}),a(d,{get when(){return t.type===z.Select},get children(){return a(p,{get id(){return t.name},get readOnly(){return t.readonly},get defaultValue(){return t.value},get onChange(){return t.type===z.Select?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e)}:void 0},get children(){return[a(y,{get children(){return[a(m,{get children(){return e("global.choose")}}),a(b,{}),a(w,{})]}}),a(x,{get children(){return a(S,{get children(){return a(L,{get each(){var e;return null===(e=t.options)||void 0===e?void 0:e.split(",")},children:function(r){return a(O,{value:r,get children(){return[a(j,{get children(){var n;return e((null!==(n=t.options_prefix)&&void 0!==n?n:"common"===t.driver?"storages.common.".concat(t.name,"s"):"drivers.".concat(t.driver,".").concat(t.name,"s"))+".".concat(r))}}),a(_,{})]}})}})}})}})]}})}})]}}),a(E,{get when(){return t.help},get children(){return a(k,{get children(){return e("common"===t.driver?"storages.common.".concat(t.name,"-tips"):"drivers.".concat(t.driver,".").concat(t.name,"-tips"))}})}})]}})};function Q(t,e){switch(t){case z.Bool:return!!e&&"true"===e;case z.Number:return e?parseInt(e):0;default:return e||""}}t("default",(function(){var t=n(),u=C(),c=u.params,f=u.back,s=u.to,d=c.id,h=i(I((function(){return N.get("/admin/driver/list")}),!0),2),v=h[0],g=h[1],p=i(P({}),2),y=p[0],m=p[1],b=function(){var t=o(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:e=t.sent,M(e,m);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=i(I((function(){return N.get("/admin/storage/get?id=".concat(d))}),!0),2),x=w[0],S=w[1],O=i(I((function(){return N.get("/admin/driver/info?driver=".concat(W.driver))}),!0),2),j=O[0],_=O[1],k=function(){var t=o(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:e=t.sent,M(e,function(){var t=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(e),rt(JSON.parse(e.addition)),t.next=4,_();case 4:n=t.sent,M(n,(function(t){return m(l({},W.driver,t))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();d?k():b();var T=i(A({}),2),W=T[0],Z=T[1],tt=i(A({}),2),et=tt[0],rt=tt[1],nt=i(I((function(){return Z("addition",JSON.stringify(et)),N.post("/admin/storage/".concat(d?"update":"create"),W)})),2),ot=nt[0],it=nt[1],at=G((function(){var t,e=null===(t=y()[W.driver])||void 0===t?void 0:t.config.alert;if(console.log(e),e)return e.split("|")[0]}));return a(X,{get loading(){return d?x()||j():v()},get children(){return[a($,{mb:"$2",get children(){return t("global.".concat(d?"edit":"add"))}}),a(F,{mb:"$2",spacing:"$2",get children(){return[a(K,{name:"driver",default:"",readonly:void 0!==d,required:!0,get type(){return z.Select},get options(){return d?W.driver:Object.keys(y()).join(",")},get value(){return W.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:function(t){var r,n=e(y()[t].common);try{for(n.s();!(r=n.n()).done;){var o=r.value;Z(o.name,Q(o.type,o.default))}}catch(c){n.e(c)}finally{n.f()}rt(q((function(t){for(var e in t)delete t[e]})));var i,a=e(y()[t].additional);try{for(a.s();!(i=a.n()).done;){var u=i.value;rt(u.name,Q(u.type,u.default))}}catch(c){a.e(c)}finally{a.f()}Z("driver",t)}}),a(E,{get when(){return at()},get children(){return a(B,{get status(){return at()},w:"$full",get children(){return[a(D,{}),J((function(){return t("drivers.config.".concat(W.driver,".alert"))}))]}})}})]}}),a(H,{get children(){return a(E,{get when(){return y()[W.driver]},get children(){return[a(L,{get each(){return y()[W.driver].common},children:function(t){return a(K,R(t,{driver:"common",get value(){return W[t.name]},onChange:function(e){Z(t.name,e)}}))}}),a(L,{get each(){return y()[W.driver].additional},children:function(t){return a(K,R(t,{get driver(){return W.driver},get value(){return et[t.name]},onChange:function(e){rt(t.name,e)}}))}})]}})}}),a(U,{mt:"$2",get loading(){return ot()},onClick:(n=o(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y()[W.driver].config.need_ms&&(V.info(t("manage.add_storage-tips")),window.open(Y("/@manage/messenger"),"_blank")),e.next=3,it();case 3:n=e.sent,M(n,(function(){V.success(t("global.save_success")),f()}),(function(t,e){n.data.id&&s("/@manage/storages/edit/".concat(n.data.id))}));case 5:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)}),get children(){return t("global.".concat(d?"save":"add"))}})];var n}})}))}}}))}();
