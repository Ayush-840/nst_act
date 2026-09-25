# Your code here
# Read m and n
m, n = map(int, input().split())
a = []
for _ in range(m):
    a.append(list(map(int, input().split())))
b = []
for _ in range(m):
    b.append(list(map(int, input().split())))
for i in range(m):
    result_row = []
    for j in range(n):
        result_row.append(str(a[i][j] + b[i][j]))
    print(" ".join(result_row))