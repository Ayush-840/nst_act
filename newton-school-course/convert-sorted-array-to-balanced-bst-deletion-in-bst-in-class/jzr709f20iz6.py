// ─── 2 ───
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


        

// ─── 8 ───
0 -10 -3 5 9
-10 -3 0 5 9