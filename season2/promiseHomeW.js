// const cart = [1, 2, 3, 4, 5];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     proceedToPayment(orderId);
//   })
//   .catch(function (err) {
//     console.log("error while ", err);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!invalidCart(cart)) {
//       const err = new Error("cart is invalid");
//       reject(err);
//       return;
//     }

//     const orderId = "1234567";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("payment added");
//   });
// }

// function invalidCart(cart) {
//   return true;
// }
