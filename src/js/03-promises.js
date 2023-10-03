// const refsForm = document.querySelector('.form');
// // console.log(refsForm);

// refsForm.addEventListener('submit', submitInPromiseGenerator);

// function submitInPromiseGenerator(params) {
//   console.log(10);
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// console.log(10);

// !---------------------------------------

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const formField = document.querySelector('.form');
// let timerId = null;
// // let counter = 0;

// formField.addEventListener('submit', submitHandler);

// function submitHandler(event) {
//   event.preventDefault();
//   const {
//     elements: { delay, step, amount },
//   } = event.currentTarget;

//   let del = Number(delay.value);

//   for (let i = 1; i <= amount.value; i += 1) {
//     createPromise(i, del)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });

//     del += Number(step.value);
//   }

//   // while (counter < amount.value) {
//   //   counter++;

//   //   createPromise(counter, del)
//   //     .then(({ position, delay }) => {
//   //       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   //     })
//   //     .catch(({ position, delay }) => {
//   //       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   //     });

//   //   del += Number(step.value);
//   // }
//   // counter = 0;
//   event.currentTarget.reset();
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     timerId = setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
