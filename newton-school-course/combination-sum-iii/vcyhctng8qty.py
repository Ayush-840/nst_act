def combinationSum3(k, n):
    ans=[]
    path=[]
    def back(i,target):
        if len(path)==k:
            if target==0:
                ans.append(path[:])
                return
        if i==10:
            return
        if i <= target:
            path.append(i)
            back(i+1,target-i)
            path.pop()
        back(i+1,target)
    back(1,n)
    return ans