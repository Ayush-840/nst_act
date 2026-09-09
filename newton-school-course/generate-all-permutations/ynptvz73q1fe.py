// ─── 12 ───
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1


// ─── 13 ───
def print_permutation(n):
    ans=[]
    path=[]
    used=[False]*(n+1)
    def back():
        if len(path)==n:
            ans.append(path[:])
        for i in range(1,n+1):
            if used[i]:
                continue
            path.append(i)
            used[i]=True
            back()
            path.pop()
            used[i]=False
    back()
    return ans