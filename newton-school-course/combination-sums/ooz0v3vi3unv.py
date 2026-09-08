def combinationSum(nums, target):
    ans=[]
    path=[]
    def back(i,target):
        if target==0:
            ans.append(path[:])
            return
        if i==len(nums):
            return
        if nums[i]<= target:
            path.append(nums[i])
            back(i,target-nums[i])
            path.pop()
        back(i+1,target)
    back(0,target)
    return ans