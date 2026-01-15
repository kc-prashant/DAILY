word=input("Enter a word:").lower()
count =0
for i in word:
    if i in ["a","e","i","o","u"]:
        count +=1
print(f"Total vowels are :{count}")
print (word)
