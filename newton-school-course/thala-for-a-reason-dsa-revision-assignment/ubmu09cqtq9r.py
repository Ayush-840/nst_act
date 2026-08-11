# Your code here
import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    elements = input_data[1:n+1]
    
    count = sum(1 for x in elements if int(x) % 7 == 0)
    print(count)

if __name__ == "__main__":
    main()