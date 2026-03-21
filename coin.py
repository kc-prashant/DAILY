import random
head =0
tail =0
for i in range(100):  
    if random.randint(0, 1) == 0:
        
        print('H', end=' ')
        head +=1
    else:
        print('T', end=' ')
        tail +=1
        

print()  
print (f"total heads are {head}")
print (f"total tails are {tail}")