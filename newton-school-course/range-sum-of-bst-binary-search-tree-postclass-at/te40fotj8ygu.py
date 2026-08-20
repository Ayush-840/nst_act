'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def rangeSumBST(root, low, high):
    ans = 0
    def dfs(root):
        nonlocal ans
        if not root:
            return
        dfs(root.left)
        if low <= root.val <= high:
            ans += root.val
        if root.val > high:
            return 
        dfs(root.right)
    dfs(root)
    return ans