const cart = ["shoes", "kurta", "coat"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
});

function createOrder(cart) {
  const pr = new Promise(function (reject, resolve) {});

  if (!validateCart(cart)) {
    const err = new Error("cart is not valid");
    reject(err);
  }
  const orderId = "12345";
  if (orderId) {
    resolve(orderId);
  }

  return pr;
}

function validateCart(cart) {
  return true;
}
