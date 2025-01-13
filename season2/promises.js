const promise = fetch("https://api.github.com/users");

promise.then(function (data) {
  console.log(data);
});
