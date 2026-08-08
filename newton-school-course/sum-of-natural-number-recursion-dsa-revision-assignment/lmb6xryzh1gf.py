# Your code here
import sys

# Increase recursion depth limit to handle up to n = 500 safely
sys.setrecursionlimit(2000)

def sum_natural(n):
    # Base case: sum of natural numbers for n <= 0 is 0
    if n <= 0:
        return 0
    # Recursive case
    return n + sum_natural(n - 1)

if __name__ == "__main__":
    n = int(input())
    print(sum_natural(n))