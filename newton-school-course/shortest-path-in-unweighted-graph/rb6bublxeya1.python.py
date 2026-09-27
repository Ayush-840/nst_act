// ─── 2 ───
# Your code here
from collections import deque
t=int(input())
for _ in range(t):
    n,m,s,e=map(int,input().split())
    graph = [[] for _ in range(n + 1)]
    for i in range(m):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)
    # queue = deque()
    # visited = [False] * (n + 1)
    # distance = [-1] * (n + 1)
    # queue.append(s)
    # visited[start] = True
    distance=[-1]*(n+1)
    q=deque()
    q.append(s)
    distance[s]=0
    while q:
        node=q.popleft()
        for neigh in graph[node]:
            if distance[neigh]==-1:
                distance[neigh]=distance[node]+1
                q.append(neigh)
    print(distance[e])

// ─── 3 ───
1
5 5 1 5
1 2
1 3
2 4
3 4
4 5