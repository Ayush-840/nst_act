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