// ─── 2 ───
'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def mergeBST(root1, root2):
    def dfs(root):
        arr = []
        def f(root):
            if not root:
                return 
            f(root.left)
            arr.append(root.val)
            f(root.right)
        f(root)
        return arr 
    
    arr1, arr2 = dfs(root1), dfs(root2)
    n, m = len(arr1), len(arr2)
    ans = [0] * (n + m)
    i, j = 0, 0
    idx = 0
    while i < n and j < m:
        if arr1[i] < arr2[j]:
            ans[idx] = arr1[i]
            i += 1
        else:
            ans[idx] = arr2[j]
            j += 1
        idx += 1
    
    while i < n:
        ans[idx] = arr1[i]
        i += 1
        idx += 1
    
    while j < m:
        ans[idx] = arr2[j]
        j += 1
        idx += 1
    return ans

// ─── 3 ───
3
2 1 4
3
1 0 3