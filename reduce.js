const num = [1, 2, 3, 4, 5, 6];

Array.prototype.myreduce = function () {
  var sum = 0;
  for (let index = 0; index < this.length; index++) {
    sum = sum + this[index];
  }
  return sum;
};

console.log(num.myreduce());

num.filter();
