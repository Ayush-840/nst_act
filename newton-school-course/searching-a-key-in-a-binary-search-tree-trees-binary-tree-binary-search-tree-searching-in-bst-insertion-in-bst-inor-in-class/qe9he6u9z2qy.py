'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def search_in_bst(root, key):
    if root==None:
        return 0
    if root.val==key:
        return 1
    if key < root.val:
        return search_in_bst(root.left,key)
    return search_in_bst(root.right,key)