const cart = ["shoes", "kurta", "coat"];
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    proceedPayment(orderId);
  })
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
      return;
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("payment");
  });
}

function validateCart(cart) {
  return true;
}
