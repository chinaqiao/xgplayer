!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.localPreview=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.localPreview=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=u,t.addClass=l,t.removeClass=c,t.toggleClass=f,t.findDom=s,t.padStart=d,t.format=p,t.event=g,t.typeOf=v,t.deepCopy=h,t.getBgImage=y,t.copyDom=m,t._setInterval=b,t._clearInterval=w,t.createImgBtn=x,t.isWeiXin=O,t.isUc=_,t.computeWatchDur=j,t.offInDestroy=M,t.on=P,t.once=C,t.getBuffered2=L,t.checkIsBrowser=E,t.setStyle=I;var r,o=n(3),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)})),o}function u(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function l(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):u(e,t)||(e.className+=" "+t))}function c(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):u(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function f(e,t){e&&t.split(/\s+/g).forEach((function(t){u(e,t)?c(e,t):l(e,t)}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function d(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],u=String(e);i--;)a.push(r);return a.join("").substring(0,o-u.length)+u}function p(e){if(window.isNaN(e))return"";var t=d(Math.floor(e/3600),2,0),n=d(Math.floor((e-3600*t)/60),2,0),r=d(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function v(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function h(e,t){if("Object"===v(t)&&"Object"===v(e))return Object.keys(t).forEach((function(n){"Object"!==v(t[n])||t[n]instanceof Node?"Array"===v(t[n])?e[n]="Array"===v(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?h(e[n],t[n]):e[n]=t[n]})),e}function y(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function m(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function b(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function w(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function x(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,u=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),u=Number(r.slice(0,r.indexOf(e)).trim()),l=e,!1)})),o.style.width=""+i+l,o.style.height=""+u+l,o.style.backgroundSize=""+i+l+" "+u+l,o.style.margin="start"===e?"-"+u/2+l+" auto auto -"+i/2+l:"auto 5px auto 5px"}return o}function O(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function _(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function j(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,u=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,u);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var l=0,c=0;c<t.length;c++)l+=t[c].end-t[c].begin;return l}function M(e,t,n,r){e.once(r,(function o(){e.off(t,n),e.off(r,o)}))}function P(e,t,n,r){if(r)e.on(t,n),M(e,t,n,r);else{e.on(t,(function r(o){n(o),e.off(t,r)}))}}function C(e,t,n,r){if(r)e.once(t,n),M(e,t,n,r);else{e.once(t,(function r(o){n(o),e.off(t,r)}))}}function L(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var o=[];if(t)for(var a=0;a<n.length;a++){var u=o.length;if(u){var l=o[u-1].end;n[a].start-l<t?n[a].end>l&&(o[u-1].end=n[a].end):o.push(n[a])}else o.push(n[a])}else o=n;return new i.default(o)}function E(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}function I(e,t,n){var r=e.style;try{r[t]=n}catch(e){r.setProperty(t,n)}}t.util={createDom:a,hasClass:u,addClass:l,removeClass:c,toggleClass:f,findDom:s,padStart:d,format:p,event:g,typeOf:v,deepCopy:h,getBgImage:y,copyDom:m,setInterval:b,clearInterval:w,createImgBtn:x,isWeiXin:O,isUc:_,computeWatchDur:j,offInDestroy:M,on:P,once:C,getBuffered2:L,checkIsBrowser:E,setStyle:I}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),o=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"localPreview",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"localPreview",method:function(){var e=this,t=e.root;function n(n){e.uploadFile=n.files[0];var o=URL.createObjectURL(e.uploadFile);if((0,r.hasClass)(t,"xgplayer-nostart"))e.config.url=o,e.start();else{e.src=o;var i=e.play();void 0!==i&&i&&i.catch((function(e){}))}}e.on("upload",n),e.once("destroy",(function t(){e.off("upload",n),e.off("destroy",t)}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={name:"s_localPreview",method:function(){var e=this;if(e.config.preview&&e.config.preview.uploadEl){var t=(0,r.createDom)("xg-preview",'<input type="file">',{},"xgplayer-preview"),n=t.querySelector("input");e.config.preview.uploadEl.appendChild(t),n.onchange=function(){e.emit("upload",n)}}}},e.exports=t.default}])}));