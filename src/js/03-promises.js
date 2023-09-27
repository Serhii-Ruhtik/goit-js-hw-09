// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// !---------------------------------------
const promise = new Promise((resolve, relect) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('YES');
    }
    relect('NO');
  }, 2000);
});
// console.log(promise);
// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

/**
 * ланцюжки промісів
 */
promise
  .then(result => {
    console.log(result);

    return 5
  })
  .then(x => {
    console.log(x);
  })
  .then(y => {
    console.log(y);
  });

