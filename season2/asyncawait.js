const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value is this");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value is this");
  }, 10000);
});

// returning promise

async function namee() {
  return p;
}

const dataPromsie = namee();
// console.log(dataPromsie);

dataPromsie.then((res) => console.log(res));

//// async await combo

// simple way to deal with async
async function dataa() {
  return p.then((res) => console.log(res));
}

dataa();

// using async await combo

async function dataaa() {
  return await p.then((res) => console.log(res));
  console.log("helow world");
}
async function dataaaa() {
  return await p2.then((res) => console.log(res));
  console.log("helow world");
}

dataaaa();
