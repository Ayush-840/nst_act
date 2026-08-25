// ─── 5 ───
'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
def insertIntoBST(root, val):
    if root is None:
        return Node(val)
    if val < root.val:
        root.left=insertIntoBST(root.left,val)
    if val > root.val:
        root.right=insertIntoBST(root.right,val)
    return root
    

// ─── 9 ───
40 20 60 10 30 50 70 -1 -1 25 

// ─── 10 ───
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