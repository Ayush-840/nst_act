def findScoreSum(nums):
    ans = 0
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                ans += j - i 
    return ans