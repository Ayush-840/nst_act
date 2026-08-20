'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def LCA(node, n1, n2):
    root = node
    ans = None
    while root:
        if root.val > max(n1, n2):
            root = root.left 
        elif root.val < min(n1, n2):
            root = root.right 
        else:
            ans = root 
            break 

    x = 0  
    def f(root):
        nonlocal x
        if not root:
            return
        f(root.left)
        x += (root.val == n1 or root.val == n2)
        f(root.right)
    f(node)

    return ans if x == 2 else None