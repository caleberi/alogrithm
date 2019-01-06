function sieveOfEratosthenes(num) {
  var primes = [];
  for (let i = 0; i <= num; i++) {
    // intialize all the values of the index position to true
    primes[i] =  true;
  }
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num ; i++) {
      primes[i*j] =  false;
    }
  }

  var result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}


console.log(sieveOfEratosthenes(20));
