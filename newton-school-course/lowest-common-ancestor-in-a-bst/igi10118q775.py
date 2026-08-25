'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''
import sys
sys.setrecursionlimit(10**7)   
def LCA(node, n1, n2):
    def ifnode(x,node):
        if node is None:
            return False
        if node.val ==x:
            return True
        return ifnode(x,node.left) or ifnode(x,node.right)
    def lca(node,n1,n2):
        if node is None:
            return None
        if node.val == n1 or node.val==n2:
            return node
        left=lca(node.left,n1,n2)
        right=lca(node.right,n1,n2)

        if left and right:
            return node
        if left:
            return left
        if right:
            return right
        return None
    if ifnode(n1,node) and ifnode(n2,node):
        return lca(node,n1,n2)
    return None
        
    # if n1<node.val and n2<node.val:
    #     return LCA(node.left,n1,n2)
    # if n1>node.val and n2>node.val:
    #     return LCA(node.right,n1,n2)
    # return node.val