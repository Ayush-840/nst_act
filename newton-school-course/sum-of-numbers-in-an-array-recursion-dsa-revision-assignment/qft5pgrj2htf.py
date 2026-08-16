def sumArray(nums):
    # Base cases
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    # Divide the array into two halves and sum recursively
    mid = len(nums) // 2
    return sumArray(nums[:mid]) + sumArray(nums[mid:])