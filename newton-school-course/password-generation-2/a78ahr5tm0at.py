// ─── 10 ───
# Your code here
n=int(input())
chars = "aeiou1234@"
passs=[]
def backtrac(curr):
    k=len(passs)
    if k >1 and passs[k-1]==passs[k-2]:
        return
    if curr > 2:
        return
    if k==n:
        for v in passs:
            print(v,end='')
        print()
        return
    for c in chars:
        passs.append(c)
        if c=='1' or c=='2' or c=='3' or c=='4':
            backtrac(curr + 1)
        else:
            backtrac(curr)
        passs.pop()
backtrac(0)

// ─── 13 ───
a
e
i
o
u
1
2
3
4
@