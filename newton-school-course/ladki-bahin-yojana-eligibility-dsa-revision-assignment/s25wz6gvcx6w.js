# Your code here
gender, income, age = input().split()
income = int(income)
age = int(age)

if gender == "female" and income <= 250000 and 21 <= age <= 65:
    print("Eligible")
else:
    print("Not Eligible")