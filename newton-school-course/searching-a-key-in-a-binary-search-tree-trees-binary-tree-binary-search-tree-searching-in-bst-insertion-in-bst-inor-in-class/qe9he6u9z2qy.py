'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def search_in_bst(root, key):
    if root==None:
        return