# Your code here
def solve():
    a, b, n = map(int, input().split())

    if n == 1:
        print(a)
        return
    if n == 2:
        print(b)
        return

    second_last = a
    last = b

    for _ in range(3, n + 1):
        current = 2 * last + 3 * second_last
        second_last = last
        last = current

    print(last)


if __name__ == "__main__":
    solve()