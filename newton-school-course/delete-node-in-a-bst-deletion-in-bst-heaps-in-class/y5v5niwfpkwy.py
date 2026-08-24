'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def deleteNode(root, key):
    if root ==None:
        return None
    if key < root.val:
        root.left=deleteNode(root.left,key)
    elif key > root.val:
        root.right=deleteNode(root.right,key)
    else:
        if root.left==None:
            return root.right
        if root.right==None:
            return root.left 
        temp=root.right
        while temp.left:
            temp=temp.left
        root.val=temp.val
        root.right=deleteNode(root.right,temp.val)
    return root