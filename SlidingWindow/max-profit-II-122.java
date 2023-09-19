class Solution {
    public int maxProfit(int[] prices) {
        
        int totalProfit = 0;


        


        return totalProfit;
    }
}






// // BRUTE FORCE
// class Solution {
//     public int maxProfit(int[] prices) {
//         return calculate(prices, 0);
//     }

//     public int calculate(int prices[], int s) {
//         if (s >= prices.length)
//             return 0;
//         int max = 0;
//         for (int start = s; start < prices.length; start++) {
//             int maxprofit = 0;
//             for (int i = start + 1; i < prices.length; i++) {
//                 if (prices[start] < prices[i]) {
//                     int profit = calculate(prices, i + 1) + prices[i] - prices[start];
//                     if (profit > maxprofit)
//                         maxprofit = profit;
//                 }
//             }
//             if (maxprofit > max)
//                 max = maxprofit;
//         }
//         return max;
//     }
// }




// PEAK VALLEY APPROACH
// class Solution {
//     public int maxProfit(int[] prices) {
//         int i = 0;
//         int valley = prices[0];
//         int peak = prices[0];
//         int maxprofit = 0;
//         while (i < prices.length - 1) {
//             while (i < prices.length - 1 && prices[i] >= prices[i + 1])
//                 i++;
//             valley = prices[i];
//             while (i < prices.length - 1 && prices[i] <= prices[i + 1])
//                 i++;
//             peak = prices[i];
//             maxprofit += peak - valley;
//         }
//         return maxprofit;
//     }
// // }
// Algorithm

// Say the given array is:

// [7, 1, 5, 3, 6, 4].

// If we plot the numbers of the given array on a graph, we get:

// Profit Graph

// If we analyze the graph, we notice that the points of interest are the consecutive valleys and peaks.

// Mathematically speaking:
// TotalProfit=∑i(height(peaki)−height(valleyi))Total Profit= \sum_{i}(height(peak_i)-height(valley_i))TotalProfit=∑ 
// i
// ​
//  (height(peak 
// i
// ​
//  )−height(valley 
// i
// ​
//  ))

// The key point is we need to consider every peak immediately following a valley to maximize the profit. In case we skip one of the peaks (trying to obtain more profit), we will end up losing the profit over one of the transactions leading to an overall lesser profit.

// For example, in the above case, if we skip peakipeak_ipeak 
// i
// ​
//   and valleyjvalley_jvalley 
// j
// ​
//   trying to obtain more profit by considering points with more difference in heights, the net profit obtained will always be lesser than the one obtained by including them, since CCC will always be lesser than A+BA+BA+B.


