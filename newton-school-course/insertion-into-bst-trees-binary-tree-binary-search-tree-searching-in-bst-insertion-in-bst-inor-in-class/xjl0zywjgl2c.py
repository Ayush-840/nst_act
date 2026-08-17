'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
def insertIntoBST(root, val):
    if root==None:
        return Node(val)
    if val<root.val:
        root.left=insertIntoBST(root.left,val)
    if val > root.val:
        root.right=insertIntoBST(root.right,val)
    return root