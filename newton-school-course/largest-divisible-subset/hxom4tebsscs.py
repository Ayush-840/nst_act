def largestDivisibleSubset(nums):
    # Write your code here
    nums.sort(reverse = True)
    n = len(nums)
    dp = [1] * n 
    ans = 1
    prev = [-1] * n
    idx = -1
    for i in range(1, n):
        for j in range(i):
            if nums[j] % nums[i] == 0 and dp[i] < dp[j] + 1:
                dp[i] = dp[j] + 1
                prev[i] = j
        
        if dp[i] > ans:
            ans = dp[i]
            idx = i
    
    res = [0] * ans
    i = 0
    while idx >= 0:
        res[i] = nums[idx]
        idx = prev[idx]
        i += 1
    return res