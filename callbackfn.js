setTimeout(() => {
  console.log("all is well");
}, 5000);

function a(y) {
  console.log("a");
  y();
}

a(function y() {
  console.log("y");
});
