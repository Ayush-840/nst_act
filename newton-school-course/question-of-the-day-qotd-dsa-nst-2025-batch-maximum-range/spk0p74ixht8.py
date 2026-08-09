# Your code here
import sys
from collections import Counter

def main():
    data = sys.stdin.read().split()
    if not data:
        return
    
    n = int(data[0])
    arr = [int(x) for x in data[1:n+1]]
    
    counts = Counter(abs(x) for x in arr if x != 0)
    has_zero = 0 in arr
    
    # Each non-zero absolute value gives 2 distinct numbers if it appears >= 2 times, else 1
    total = sum(2 if count >= 2 else 1 for count in counts.values())
    
    # Zero can only ever contribute 1 unique number (0)
    if has_zero:
        total += 1
        
    print(total)

if __name__ == "__main__":
    main()