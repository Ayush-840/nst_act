# Your code here
# Read input values
n = int(input())
arr = list(map(int, input().split()))
k, l, r = map(int, input().split())

# Filter elements that are divisible by k and lie within the range [l, r]
total_sum = sum(x for x in arr if x % k == 0 and l <= x <= r)

# Print the result
print(total_sum)