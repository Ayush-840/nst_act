class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

# Read two space-separated integers
length, width = map(int, input().split())

# Create Rectangle object
rect = Rectangle(length, width)

# Print area and perimeter on separate lines
print(rect.area())
print(rect.perimeter())