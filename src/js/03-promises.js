import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refsForm = document.querySelector('.form');
// console.log(refsForm);

refsForm.addEventListener('submit', submitInPromiseGenerator);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject) => {
  timerId = setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
});
}  


function submitInPromiseGenerator(params) {
  params.preventDefault();

  const { delay, step, amount } = params.currentTarget;
  let del = Number(delay.value);

  for (let i = 0; i <= amount.value; i+= 1) {
    
createPromise(i, del)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  del += Number(step.value);
  }
}

