function abc() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  console.log("All is well");
}

abc();
