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

// ─── 3 ───
3
-10 5 -6