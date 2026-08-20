'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def left_view(root):
    # ----> BFS Traversal in Binary Trees <----

    # from collections import deque 
    # q = deque([root])
    # ans = []
    # while q:
    #     for i in range(len(q)):
    #         node = q.popleft()
    #         if i == 0:
    #             ans.append(node.val)
    #         if node.left:
    #             q.append(node.left)
    #         if node.right:
    #             q.append(node.right)
    # return ans


    # ----> Iterative DFS <----
    # stack = [(root, 0)]
    # ans = []
    # seen = set()
    # while stack:
    #     node, lvl  = stack.pop()
    #     if lvl not in seen:
    #         ans.append(node.val)
    #         seen.add(lvl)

    #     if node.right:
    #         stack.append((node.right, lvl + 1))
    #     if node.left:
    #         stack.append((node.left, lvl + 1))
    # return ans


    # ----> Recursive DFS <----
    ans = []
    def dfs(root, lvl):
        if not root:
            return 
        if lvl == len(ans):
            ans.append(root.val)
        dfs(root.left, lvl + 1)
        dfs(root.right, lvl + 1)
    dfs(root, 0)
    return ans