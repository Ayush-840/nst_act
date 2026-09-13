// ─── 2 ───
def maxProfit(prices):
    ans = 0
    m = prices[0]
    for i in prices[1:]:
        m = min(m, i)
        ans = max(ans, i - m)
    
    return ans

// ─── 3 ───
6
7 1 5 3 6 4