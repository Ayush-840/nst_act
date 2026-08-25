// ─── 5 ───
'''
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def sortedArrayToBST(nums):
    def ans(l,r):
        if l>r:
            return None
        mid=(l+r)//2
        root=TreeNode(nums[mid])
        root.left=ans(l,mid-1)
        root.right=ans(mid+1,r)
        return root
    return ans(0,len(nums)-1)


// ─── 18 ───
  File "/box/script.py", line 40
    return root
IndentationError: unexpected indent

Exited with error status 1

// ─── 19 ───
'''
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def sortedArrayToBST(nums):
    def ans(l,r):
        if l>r:
            return None
        mid=(l+r)//2
        root=TreeNode(nums[mid])
        root.left=ans(l,mid-1)
        root.right=ans(mid+1,r)
        return root
    return ans(0,len(nums)-1)