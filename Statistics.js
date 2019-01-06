function Mean(array) {
  var sum = 0 ;
  array.forEach(num=> {
    // add the elements together
    sum += num;
  });
  var mean =  sum /array.length;
  return mean;
}

function Mode(array) {
  array.sort(function (a,b) {
    return a-b;
  })
  var median;
  if (array.length % 2 !== 0) {
    median =  array[Math.floor(array.length / 2)]
  } else {
    var mid1 = array[(array.length/2) - 1];
    var mid2 = array[(array.length/2)];
    median =  (mid1 + mid2) /2
  }
  return median;
}

function Median(array) {
  var cache = {};
  array.forEach(num => {
    // check to see the number exist in the cache
    if (!cache[num]) {
      cache[num] = 0; // initialize the number to zero
      cache[num]++;
    }
  });
  var maxFrequency = 0;
  var modes = [];
  for (var num in cache) {
    if (cache[num]>maxFrequency) {
      modes = [num];
      maxFrequency = cache[num]
    }else if (cache[num] === maxFrequency) {
      modes.push(num)
    }
  }
  if (modes.length === Object.keys(cache).length) {
    modes = [];
  }
}


function statistics(array) {
  return {
    mean: Mean(array),
    median: Median(array),
    mode: Mode(array),
  };
}

console.log(statistics([2,,3,4,4,4,4,5,7,6,8,9,0,0,0,0]));;
