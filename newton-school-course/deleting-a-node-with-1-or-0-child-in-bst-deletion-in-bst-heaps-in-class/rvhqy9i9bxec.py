'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def deleteFromBST(root, target):
    if root==None:
        return None 
    if target>root.val:
        root.right=deleteFromBST(root.right,target)
    elif target<root.val:
        root.left=deleteFromBST(root.left,target)
    else:
        if root.left==None:
            return root.right
        if root.right==None:
            return root.left
    return root