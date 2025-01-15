const cart = [1, 2, 3, 4, 5];

createOrder(orderId)
  .then(function (resolve, reject) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log("error while ", err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!invalidCart(cart)) {
      const err = new Error("cart is invalid");
      reject(err);
    }

    const orderId = "1234567";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function invalidCart(cart) {
  return true;
}
