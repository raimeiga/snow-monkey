(()=>{"use strict";const t=function(t,e){0<t.length&&Array.prototype.slice.call(t,0).forEach((function(t,n){e(t,n)}))};function e(){const t=document.getElementsByClassName("l-header");if(!(1>t.length))return t[0]}function n(){const t=document.getElementsByClassName("l-header__drop-nav");if(!(1>t.length))return t[0]}function o(t,e){if(t)return window.getComputedStyle(t).getPropertyValue(e)}window.addEventListener("load",(()=>{const i=i=>{const c=i.querySelectorAll('.slick-dots > li, .spider__dots[data-thumbnails="true"] > .spider__dot');t(c,(t=>{t.addEventListener("click",(t=>{const c=i.getBoundingClientRect().top;if(0>c){const t=c+window.pageYOffset;window.scrollTo(0,t-function(t={}){const i=document.getElementById("wpadminbar");let c=0;i&&(c="fixed"===o(i,"position")?parseInt(o(function(){const t=document.getElementsByTagName("html");if(!(1>t.length))return t[0]}(),"margin-top")):c);const r=e();if(r){const i=o(r,"position");if("fixed"===i||"sticky"===i)return(function(t){return t.offsetWidth<document.documentElement.clientWidth}(r)?0:r.offsetHeight)+c;const s=n();if(s){const o=!0===t.forceDropNav||function(){const t=e(),o=n();return!(!t||!o)}()?s.offsetHeight:0;return o+c}}return c}())}}),!1)}))},c=document.querySelectorAll(".smb-thumbnail-gallery__canvas");t(c,i);const r=document.querySelectorAll(".smb-spider-slider");t(r,i)}))})();