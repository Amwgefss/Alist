!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,u,i=[],o=!0,l=!1;try{for(e=e.call(r);!(o=(n=e.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,u=c}finally{try{o||null==e.return||e.return()}finally{if(l)throw u}}return i}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}System.register(["./index-legacy.0e8c8898.js","./useUtil-legacy.eb871b3f.js","./EncodingSelect-legacy.226f6542.js","./api-legacy.a7ea7ccd.js"],(function(t){"use strict";var e,n,u,i,o,l,c,a,f;return{setters:[function(r){e=r.j,n=r.$,u=r.e,i=r.bY,o=r.r,l=r.c2},function(r){c=r.e,a=r.c},function(r){f=r.E},function(){}],execute:function(){function d(t){var n=r(u("utf-8"),2),c=n[0],d=n[1],s=a(t.children),g=s.isString,y=s.text;return e(l,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(i.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return y(c())}}),e(o,{when:!g,get children(){return e(f,{get encoding(){return c()},setEncoding:d})}})]}})}t("default",(function(){var t=r(c(),1)[0];return e(n,{get loading(){return t.loading},get children(){return e(d,{get children(){var r;return null===(r=t())||void 0===r?void 0:r.content}})}})}))}}}))}();