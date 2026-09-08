// ─── 2 ───
def subsetsWithDup(nums):
    nums.sort()
    ans=[]
    path=[]
    def back(i):
        ans.append(path[:])
        for ch in range(i,len(nums)):
            if ch>i and nums[ch]==nums[ch-1]:
                continue
            path.append(nums[ch])
            back(ch+1)
            path.pop()
    back(0)
    return ans




// ─── 8 ───
[[],[1],[1,2],[1,2,2],[2],[2,2]]