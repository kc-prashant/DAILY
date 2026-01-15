x =input("Enter any sentence :").lower()

word = x.split()
words =0
character=x.replace(" ", "")
count =0

for i in character:
    count += 1
for i in word:
    words += 1

print(f"Total words:{words}")
print(f"Total characters: {count}")

