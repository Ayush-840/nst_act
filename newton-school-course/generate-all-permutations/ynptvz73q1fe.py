// ─── 8 ───
def print_permutation(n):
    ans = []
    def solve(arr):
        if len(arr) == n:
            ans.append(arr[:])
            return
        for i in range(1, n + 1):
            if i not in arr:
                arr.append(i)
                solve(arr)
                arr.pop()
    solve([])
    return ans

// ─── 10 ───
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1