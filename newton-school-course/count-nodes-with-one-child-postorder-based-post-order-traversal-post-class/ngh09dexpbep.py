'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def one_child(root):
    if not root:
        return 0
    
    # Postorder traversal: Process left subtree, then right subtree
    left_count = one_child(root.left)
    right_count = one_child(root.right)
    
    # Check if the current node has exactly one child
    has_one_child = (root.left is None and root.right is not None) or (root.left is not None and root.right is None)
    
    # Return total count of single-child nodes in current subtree
    return left_count + right_count + (1 if has_one_child else 0)