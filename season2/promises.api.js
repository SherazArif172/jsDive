const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p1 succes");
  }, 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p2 succes");
  }, 2000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("p3 rejected");
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
