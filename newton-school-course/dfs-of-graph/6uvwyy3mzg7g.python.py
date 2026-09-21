def dfsOfGraph(n, edges):
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)

    visited=[False] *n
    trav=[]
    def dfs(node):
        visited[node]=True
        trav.append(node)
        for neigh in adj[node]:
            if not visited[neigh]:
                dfs(neigh)
    # dfs(0)
    for i in range(n):
        if visited[i]==False:
            dfs(i)
    return trav