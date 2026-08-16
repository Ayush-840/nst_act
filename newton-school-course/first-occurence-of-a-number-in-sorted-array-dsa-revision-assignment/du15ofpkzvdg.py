def FindFirst(n, nums, target):
    low = 0
    high = n - 1
    ans = -1

    while low <= high:
        mid = (low + high) // 2

        if nums[mid] == target:
            ans = mid
            high = mid - 1  # Keep searching on the left for the first occurrence
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return ans