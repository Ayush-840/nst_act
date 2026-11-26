import heapq
def dijkstra(n, edges):
  adj = [[] for _ in range(n)]
  for u, v, w in edges:
    adj[u].append((v, w))
    adj[v].append((u, w))

  dist = [float("inf")] * n
  parent = [-1] * n
  dist[0] = 0

  pq = [(0, 0)]
  while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]:
      continue
    if u == n - 1:
      break
    for v, w in adj[u]:
      new_dist = d + w
      if new_dist < dist[v]:
        dist[v] = new_dist
        parent[v] = u
        heapq.heappush(pq, (new_dist, v))

  if dist[n - 1] == float("inf"):
    return s
  path = []
  curr = n - 1
  while curr != -1:
    path.append(curr)
    curr = parent[curr]
  path.reverse()
  return path