function abc() {
  for (var i = 1; 1 <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  console.log("All is well");
}

abc();
