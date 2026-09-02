// ─── 2 ───
def maxProfit(prices):
    n = len(prices)
    if n == 1:
        return 0

    b = [-float("inf")] * n
    s = [0] * n
    for i in range(n):
        b[i] = max(b[i - 1], s[i - 2] - prices[i])
        s[i] = max(s[i - 1], b[i - 1] + prices[i])

    return s[n - 1]

// ─── 3 ───
5
1 2 3 0 2