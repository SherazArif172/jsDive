// // globl env

// // console.log(this);

// // // this inside a function

// // function any() {
// //   console.log(this);
// // }

// // any();

// // const obj = {
// //   a: 10,
// //   x: function () {
// //     console.log(this.a);
// //   },
// // };

// // obj.x();

// // const ob2 = {
// //   a: "ali ijaz",
// // };

// // obj.x.call(ob2);

// const obj = {
//   a: 10,
//   x: function () {
//     const y = function () {
//       const z = () => {
//         console.log(this);
//       };
//       z();
//     };
//     y();
//   },
// };

// obj.x();
