from collections import deque
def alienOrder(words):
    graph = [[] for _ in range(26)]
    indegree = [0] * 26
    visited = [False] * 26
    for k in range(1, len(words)):
        curr = words[k]
        prev = words[k - 1]
        k = 0
        while k < len(curr) and k < len(prev):
            if curr[k] == prev[k]:
                k += 1
            else:
                graph[ord(prev[k]) - 97].append(ord(curr[k]) - 97)
                indegree[ord(curr[k]) - 97] += 1
                visited[ord(curr[k]) - 97] = True
                visited[ord(prev[k]) - 97] = True 
                break
    
    q = deque([])
    for i in range(26):
        if visited[i] and indegree[i] == 0:
            q.append(i)
    
    ans = []
    while q:
        node = q.popleft()
        ans.append(chr(node + 97))
        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                q.append(nei)
    
    return "".join(ans)