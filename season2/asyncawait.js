const p = new Promise((resolve, reject) => {
  resolve("value is this");
});

async function namee() {
  return p;
}

const dataPromsie = namee();
// console.log(dataPromsie);

dataPromsie.then((res) => console.log(res));
