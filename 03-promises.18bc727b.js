var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var l=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=l),l("7Y9D8");document.querySelector(".form");function n(e,o){const t=Math.random()>.3;return new Promise(((l,n)=>{t?l({pos:e,delay:o}):n({pos:e,delay:o})}))}form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(selectors.delayInput.value),t=Number(selectors.delayInput.value),l=Number(selectors.delayInput.value),r=null;for(let e=1;e<=l;e+=1)e>1&&(o+=t),r=setTimeout((()=>{console.log(e),n(e,o).then((({pos:e,delay:o})=>{Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({pos:e,delay:o})=>{Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}),o)}));
//# sourceMappingURL=03-promises.18bc727b.js.map
