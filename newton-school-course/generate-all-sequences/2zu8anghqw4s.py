# Your code here
n=int(input())
seq=["A","C","G","T"]
ans=[]
path=[]
def back():
    if len(path)==n:
        ans.append("".join(path))
        return
    for ch in seq:
        path.append(ch)
        back()
        path.pop()
back()
for res in ans:
    print(res)