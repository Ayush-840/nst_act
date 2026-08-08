def create_binary_tree():
    root = Node(1)
    
    root.left = Node(2)
    root.right = Node(3)
    
    root.left.left = Node(4)
    root.left.right = Node(5)
    
    root.left.right.left = Node(6)
    root.left.right.right = Node(7)
    
    return root