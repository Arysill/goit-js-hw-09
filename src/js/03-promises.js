function createPromise(pos, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ pos, delay });
    } else {
      reject({ pos, delay });
    }
  })
  return promise;
}
const handlerSubmit = function (evt) {
  evt.preventDefault()
  let delay = Number(selectors.delayInput.value);
  let step = Number(selectors.delayInput.value);
  let amount = Number(selectors.delayInput.value);
  
  let timeId = null;
  for (let pos = 1; pos <= amount; pos += 1) {
    if (pos > 1) {
      delay += step;
    };
    timeId = setTimeout(() => {
      console.log(pos);
      createPromise(pos, delay)
        .then(({ pos, delay }) => {
          Notify.success(`✅ Fulfilled promise ${pos} in ${delay}ms`);
        })
        .catch(({ pos, delay }) => {
          Notify.failure(`❌ Rejected promise ${pos} in ${delay}ms`);
        });
    }, delay);
  }
};
 form.addEventListener('submit', handlerSubmit);