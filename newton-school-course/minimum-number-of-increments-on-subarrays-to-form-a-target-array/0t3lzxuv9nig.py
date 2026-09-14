// ─── 2 ───
def minNumberOperations(target):
    n=len(target)
    prev=0
    ans=0
    for i in range(n):
        if(target[i]<=prev):
            prev=target[i]
        else:
            ans+=abs(target[i]-prev)
            prev=target[i]
    return ans

// ─── 3 ───
5
1 2 3 2 1