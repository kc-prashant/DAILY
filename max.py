nums = [10, 5, 8, 20, 3,22, 40, 50]
greatest_num =nums[0]
count =0
for i in nums:
    if i > greatest_num and i> 10:
        count += 1
        greatest_num =i
print(greatest_num)
print(f"{count} numbers are greater than 10")