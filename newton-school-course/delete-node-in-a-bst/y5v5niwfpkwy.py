// ─── 11 ───
'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def deleteNode(root, key):
    # Step 1: Perform inorder traversal to store values in sorted order
    arr = []
    def inorder(node):
        if not node:
            return
        inorder(node.left)
        arr.append(node.val)
        inorder(node.right)
    
    inorder(root)
    
    # Step 2: Remove the target key from the list
    # Expanded form
    new_arr = []
    for val in arr:
        if val != key:
            new_arr.append(val)
    arr = new_arr
    
    # Step 3: Rebuild a balanced BST from the remaining sorted array
    def build_bst(left, right):
        if left > right:
            return None
        mid = (left + right) // 2
        node = Node(arr[mid])
        node.left = build_bst(left, mid - 1)
        node.right = build_bst(mid + 1, right)
        return node

    return build_bst(0, len(arr) - 1)
    

// ─── 13 ───
yes