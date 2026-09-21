def connectedComponents(n, edges):
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    visited = [False] * n
    ans = []
    def dfs(node, component):
        visited[node] = True
        component.append(node)
        for neigh in adj[node]:
            if not visited[neigh]:
                dfs(neigh, component)
    for i in range(n):
        if not visited[i]:
            component = []
            dfs(i, component)
            ans.append(component)

    return ans


# def connectedComponents(n, edges):