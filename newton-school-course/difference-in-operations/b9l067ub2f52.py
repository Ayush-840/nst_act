'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def calculateDifference(root):
    mini, maxi = float("inf"), -float('inf')
    def dfs(root):
        nonlocal mini, maxi
        if not root:
            return 
        dfs(root.left)
        mini = min(mini, root.val)
        maxi = max(maxi, root.val)
        dfs(root.right)
    dfs(root)
    return maxi * mini - maxi - mini