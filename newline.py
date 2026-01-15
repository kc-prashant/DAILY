x=input("Enter a word:")
w=0
for i in x:
    print(i)
    w += 1


print(f"Total words is: { w}")
reversed_x = ""
for i in x:
    reversed_x = i +reversed_x
print(reversed_x)
