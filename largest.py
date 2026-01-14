numbers =[]

for i in range(0,5):
    num=int(input(f"Enter  number{i}:"))
    numbers.append(num)
  
print(numbers)
largest_num =numbers[0]
for i in numbers:
    if i > largest_num:
        largest_num= i
print(largest_num)