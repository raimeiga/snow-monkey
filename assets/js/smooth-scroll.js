(()=>{var t={196:t=>{!function(){"use strict";t.exports={polyfill:function(){var t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var e,l=t.HTMLElement||t.Element,r=468,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,s=(e=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var t=arguments[0].left,o=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===o?this.scrollTop:~~o)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var e=function(t){for(;t!==o.body&&!1===d(t);)t=t.parentNode||t.host;return t}(this),l=e.getBoundingClientRect(),r=this.getBoundingClientRect();e!==o.body?(h.call(this,e,e.scrollLeft+r.left-l.left,e.scrollTop+r.top-l.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,o){this.scrollLeft=t,this.scrollTop=o}function f(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,o){return"Y"===o?t.clientHeight+s<t.scrollHeight:"X"===o?t.clientWidth+s<t.scrollWidth:void 0}function p(o,e){var l=t.getComputedStyle(o,null)["overflow"+e];return"auto"===l||"scroll"===l}function d(t){var o=a(t,"Y")&&p(t,"Y"),e=a(t,"X")&&p(t,"X");return o||e}function u(o){var e,l,n,s,c=(i()-o.startTime)/r;s=c=c>1?1:c,e=.5*(1-Math.cos(Math.PI*s)),l=o.startX+(o.x-o.startX)*e,n=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,l,n),l===o.x&&n===o.y||t.requestAnimationFrame(u.bind(t,o))}function h(e,l,r){var s,f,a,p,d=i();e===o.body?(s=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,p=n.scroll):(s=e,f=e.scrollLeft,a=e.scrollTop,p=c),u({scrollable:s,method:p,startTime:d,startX:f,startY:a,x:l,y:r})}}}}()}},o={};function e(l){var r=o[l];if(void 0!==r)return r.exports;var n=o[l]={exports:{}};return t[l](n,n.exports,e),n.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var l in o)e.o(o,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:o[l]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{"use strict";var t=e(196);e.n(t)().polyfill();class o{constructor(t={}){this.settings={selector:void 0,offset:0,...t};const o=document.querySelectorAll(this.settings.selector);var e,l;l=t=>this.apply(t),0<(e=o).length&&Array.prototype.slice.call(e,0).forEach((function(t,o){l(t,o)}))}apply(t){t.addEventListener("click",(t=>{if(t.currentTarget.href.split("#")[0]!==window.location.href.split("#")[0])return!0;t.preventDefault(),this.handleClick(t)}),!1)}handleClick(t){const o=t.currentTarget.hash,e=document.getElementById(decodeURI(o).replace(/^#/,""));if(!e)return!1;window.history.pushState("","",o);const l="function"==typeof this.settings.offset?this.settings.offset():this.settings.offset;let r=e.getBoundingClientRect().top+window.pageYOffset-l;r=0>parseInt(r)?0:r,window.scrollTo({top:r,behavior:"smooth"})}}function l(){const t=document.getElementsByClassName("l-header");if(!(1>t.length))return t[0]}function r(){const t=document.getElementsByClassName("l-header__drop-nav");if(!(1>t.length))return t[0]}function n(t,o){if(t)return window.getComputedStyle(t).getPropertyValue(o)}window.addEventListener("load",(()=>{['.c-page-top a[href^="#"]','.wpco a[href^="#"]','.u-smooth-scroll[href*="#"]','.u-smooth-scroll a[href*="#"]'].forEach((t=>{new o({selector:t,offset:()=>function(t={}){const o=document.getElementById("wpadminbar");let e=0;o&&(e="fixed"===n(o,"position")?parseInt(n(function(){const t=document.getElementsByTagName("html");if(!(1>t.length))return t[0]}(),"margin-top")):e);const i=l();if(i){const o=n(i,"position");if("fixed"===o||"sticky"===o)return(function(t){return t.offsetWidth<document.documentElement.clientWidth}(i)?0:i.offsetHeight)+e;const s=r();if(s){const o=!0===t.forceDropNav||function(){const t=l(),o=r();return!(!t||!o)}()?s.offsetHeight:0;return o+e}}return e}()})}))}),!1)})()})();