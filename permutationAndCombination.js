function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}


function permutation(num,r) {
  return (factorial(num))/(factorial(num-r))
}

function combination(num,r) {
  return (factorial(num))/((factorial(num-r))*(factorial(r)))
}

var x = combination(10,4);
var y = permutation(10,4);
console.log(x);
console.log(y);
