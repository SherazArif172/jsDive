const p = new Promise((resolve, reject) => {
  resolve("value is this");
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
}
