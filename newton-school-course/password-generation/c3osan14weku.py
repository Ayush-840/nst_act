// ─── 6 ───
# Your code here
n=int(input())
chars = "aeiou1234@"
passs=[]
def backtrac(curr):
    if curr==n:
        for v in passs:
            print(v,end='')
        print()
        return
    for c in chars:
        passs.append(c)
        backtrac(curr + 1)
        passs.pop()
backtrac(0)

// ─── 7 ───
1