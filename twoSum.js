function twoSum(numArr,sum) {
  var pairs = [];
  var cache = [];
  for (let i = 0; i < numArr.length; i++) {
    var current = numArr[i];
    var counterpart =  sum - current;
    if (cache.indexOf(counterpart) !== -1) {
      pairs.push([current,counterpart])
    }
    cache.push(current)
  }
  return pairs;
}

console.log(twoSum([1,2,3,4,5,6,7],8));
