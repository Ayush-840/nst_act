'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def sorted_order(root):
    res=[]
    def inorder(root):  
        if root is None:
            return 
        inorder(root.left)
        res.append(root.val)
        inorder(root.right)
    inorder(root)
    return res