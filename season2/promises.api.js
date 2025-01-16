const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("p1 rejected");
  }, 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("p2 rejected");
  }, 2000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("p3 rejected");
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err), console.log(err.errors));
