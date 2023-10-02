// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// !---------------------------------------
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('YES');
//     }
//     reject('NO');
//   }, 2000);
// });

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// /**
//  * ланцюжки промісів
//  */

// promise
//   .then(onFulfilled, onRejected)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => console.log(y))
//   .then(a => console.log(a))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконуватися завжди'));

/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = (dish) => {
//   const DELAY = 1000;

//   const promise = new Promise((resolve, reject) =>
//   {
//     const passed = Math.random() > 0.5;
//   setTimeout(() => {
//     if (passed) {
//       resolve('Your food');
//     } else {
//       reject('your food is not ready');
//     }
//   }, DELAY);
//   })
//   return promise
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError) ;

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }
// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }
// console.log(10);
// console.log(20);
// console.log(30);
// console.log(40);
// console.log(50);

const promise = new Promise((resolve, reject) => {
  reject("Whoops")
})
promise.then(value => console.log(value));
console.log(10);