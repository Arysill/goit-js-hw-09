form.addEventListener("submit",(function(e){var o=function(e){e>1&&(t+=n),setTimeout((function(){var o,n,a;console.log(e),(o=e,n=t,a=Math.random()>.3,new Promise((function(e,t){a?e({pos:o,delay:n}):t({pos:o,delay:n})}))).then((function(e){var o=e.pos,t=e.delay;Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.pos,t=e.delay;Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}),t)};e.preventDefault();for(var t=Number(selectors.delayInput.value),n=Number(selectors.delayInput.value),a=Number(selectors.delayInput.value),c=1;c<=a;c+=1)o(c)}));
//# sourceMappingURL=03-promises.66159114.js.map
