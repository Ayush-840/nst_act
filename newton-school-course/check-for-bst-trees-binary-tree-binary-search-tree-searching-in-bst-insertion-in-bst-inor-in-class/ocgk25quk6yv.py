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
            if node == None:
                return
            inorder(node.left)
            arr.append(node.val)
            inorder(node.right)
        inorder(root)
        for i in range(1, len(arr)):
            if arr[i] <= arr[i - 1]:
                return 0
        return 1