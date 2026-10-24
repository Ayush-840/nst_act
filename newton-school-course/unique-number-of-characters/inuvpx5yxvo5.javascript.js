# Your code here
# s=input()
# s1=set()
# for i in s:
#     s1.add(i)
# print(len(s1))
    

s=input()
l=[]
for i in s:
    if i in l:
        continue
    else:
        l.append(i)
print(len(l))