function memoizedFibonacci(position,cache) {
  cache = cache || [];
  if (cache[position]) {
    return cache[position];
  }
  else {
    if (position < 3) {
      return 1;
    }else{
      return memoizedFibonacci(position-1,cache) + memoizedFibonacci(position-2,cache)
    }
  }
  return cache[position];
}

console.log(memoizedFibonacci(40));
