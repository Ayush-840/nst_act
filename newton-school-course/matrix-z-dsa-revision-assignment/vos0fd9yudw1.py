# Your code here
def solve():
    # Read all tokens from standard input using built-in input()
    tokens = []
    try:
        while True:
            line = input()
            if line:
                tokens.extend(line.split())
    except EOFError:
        pass

    if not tokens:
        return

    N = int(tokens[0])

    # Handle N = 1 case
    if N == 1:
        print(tokens[1])
        return

    # Reconstruct matrix
    matrix = []
    idx = 1
    for _ in range(N):
        matrix.append([int(x) for x in tokens[idx : idx + N]])
        idx += N

    # Calculate sum of Z-shape
    total_sum = sum(matrix[0]) + sum(matrix[N - 1])

    for i in range(1, N - 1):
        total_sum += matrix[i][N - 1 - i]

    print(total_sum)

solve()