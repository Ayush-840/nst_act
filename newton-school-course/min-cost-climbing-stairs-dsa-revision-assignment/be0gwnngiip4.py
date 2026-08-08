def min_cost_to_climb(cost):
    n = len(cost)
    if n == 0:
        return 0
    if n == 1:
        return cost[0]
    
    # prev2 is min cost to reach step i-2
    # prev1 is min cost to reach step i-1
    prev2 = cost[0]
    prev1 = cost[1]
    
    for i in range(2, n):
        curr = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = curr
        
    # To reach the top (beyond step n-1), we can step from step n-1 or step n-2
    return min(prev1, prev2)