import random
import sys

sys.setrecursionlimit(200000)

def kth_smallest(arr, k):
    def quick_select(left, right, target_idx):
        if left == right:
            return arr[left]
        
        pivot_idx = random.randint(left, right)
        pivot = arr[pivot_idx]
        
        arr[pivot_idx], arr[right] = arr[right], arr[pivot_idx]
        
        store_idx = left
        for i in range(left, right):
            if arr[i] < pivot:
                arr[store_idx], arr[i] = arr[i], arr[store_idx]
                store_idx += 1
                
        arr[right], arr[store_idx] = arr[store_idx], arr[right]
        
        if store_idx == target_idx:
            return arr[store_idx]
        elif store_idx < target_idx:
            return quick_select(store_idx + 1, right, target_idx)
        else:
            return quick_select(left, store_idx - 1, target_idx)

    return quick_select(0, len(arr) - 1, k - 1)