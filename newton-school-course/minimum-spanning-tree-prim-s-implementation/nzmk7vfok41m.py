// ─── 2 ───
from heapq import heappush, heappop
def minimumCost(N, edges):
    graph = [[] for _ in range(N)]
    for u, v, w in edges:
        graph[u - 1].append((v - 1, w))
        graph[v - 1].append((u - 1, w))
    
    heap = [(0, 0)] #weight, node
    ans = 0
    visited = [False] * N
    while heap:
        wt, node = heappop(heap)
        if visited[node]:
            continue 
        ans += wt 
        visited[node] = True
        for nei, w in graph[node]:
            if not visited[nei]:
                heappush(heap, (w, nei))
    return ans if sum(visited) == N else -1

// ─── 3 ───
3 3
1 3 1
1 2 5
2 3 6