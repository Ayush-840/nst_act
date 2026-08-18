'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def isBST(root):
        arr = []
        def inorder(node):
            if node is None:
                return
            inorder(node.left)
            arr.append(node.val)
            inorder(node.right)

        inorder(root)