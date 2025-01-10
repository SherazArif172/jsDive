const radius = [2, 4, 6, 7];

// const a = function (radius) {
//   const output = [];
//   for (let index = 0; index < radius.length; index++) {
//     output.push(Math.PI * radius[index] * radius[index]);
//   }
//   return output;
// };

// console.log(a(radius));

// but if we want to make it DRY Dont repeat youreself

const areaa = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let index = 0; index < radius.length; index++) {
    output.push(logic(radius[index]));
  }
  return output;
};

console.log(calculate(radius, areaa));
