// ─── 2 ───
def findSubsets(nums):
    ans=[]
    path=[]
    def backtrack(i):
        if i==len(nums):
            ans.append(path[:])
            return
        path.append(nums[i])
        backtrack(i+1)
        path.pop()
        backtrack(i+1)
    backtrack(0)
    return ans



// ─── 5 ───
[[-10,5,-6],[-10,5],[-10,-6],[-10],[5,-6],[5],[-6],[]]