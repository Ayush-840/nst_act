'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def rangeSumBST(root, low, high):
    if root==None:
        return 0
    total=0
    if low <= root.val <= high:
        total=root.val
    







        total += self.rangeSumBST(root.left, low, high)
        total += self.rangeSumBST(root.right, low, high)

        return total