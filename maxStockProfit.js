function maxStockProfit(pricesArr) {
  /*
  * takes in array of prices as parameter
  * returns the max possible profit of the day
  * if no profit return -1
  * O(n)- linear runtime
  */
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if(sellPrice < buyPrice){
      changeBuyPrice = true
    }else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }

  }

  return maxProfit;
}


console.log(maxStockProfit([34,56,23,78,22,89]));
