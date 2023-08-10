/** LEET CODE 121
 * @param {number[]} prices
 * @return {number}
 */

const prices1 = [7, 2, 1,15, 3, 6, 4];


//==================MY SLOW SOLUTION============================
var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = prices[0];
  for (let i = 0; i < prices.length; i++) {
    console.log("left", left, "price[i]", prices[i]);
    if (prices[i] < left) {
      left = prices[i];
    }

    maxProfit = Math.max(maxProfit, prices[i] - left)
  }

  return maxProfit;
};

console.log(maxProfit(prices1));


//=============================BEST=============================

const fastMaxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};


console.log(fastMaxProfit(prices1));