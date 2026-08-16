# Your code here
import sys

def main():
    # Read all input from standard input
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    arr = input_data[1:n+1]
    
    # Select alternate elements starting from index 0
    alternate_elements = arr[::2]
    
    # Print space-separated elements
    print(*(alternate_elements))

if __name__ == "__main__":
    main()