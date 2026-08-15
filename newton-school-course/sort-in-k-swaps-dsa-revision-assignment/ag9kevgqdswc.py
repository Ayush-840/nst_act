def bubbleSort(nums, k):
    n = len(nums)
    swap_count = 0
    
    # Standard Bubble Sort implementation
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
                swap_count += 1
                swapped = True
        
        # If no elements were swapped, array is already sorted
        if not swapped:
            break

    # Return True if total swaps made is <= k
    return swap_count <= k