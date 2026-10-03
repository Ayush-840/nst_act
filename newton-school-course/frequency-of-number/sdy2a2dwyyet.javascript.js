# Your code here
l=list(map(int,input().split()))
target=int(input())
c=0
for i in l:
    if i==target:
        c+=1
print(c)