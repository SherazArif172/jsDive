// function a() {
//   var x = 10;
//   function b() {
//     console.log(x);
//   }
//   return x;
// }

// a();
// console.log(a()); // even the function has been returned still it prints the value of x , this is called closure

function a() {
  var x = 10;
  function b() {
    console.log(x);
    var y = 30;
    function c() {
      console.log(x, y);
    }
    c();
  }
  b();
}
a();

// it still follows the closure property
