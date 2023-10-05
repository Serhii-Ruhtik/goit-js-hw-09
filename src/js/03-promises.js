// import { Notify } from 'notiflix';



const refsForm = document.querySelector('.form');
// console.log(refsForm);

let timerId = null; 

refsForm.addEventListener('submit', submitInPromiseGenerator);

function createPromise(position, delay) {
 
return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
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

  const { delay, step, amount } = params.currentTarget.elements;
  let del = Number(delay.value);

  for (let i = 0; i <= amount.value; i+= 1) {
    
createPromise(i, del)
  .then(({ position, delay }) => {
    // Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    // Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  del += Number(step.value);
  }
}

