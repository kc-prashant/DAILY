num=int(input("Enter a number:"))
def pos(n):
    if n >0 :
        return "  is Positive"
    elif n < 0:
        return " is negative"
    else:
        return " is zero"
def eveodd(n):
    if num % 2 ==0:
        return " is even"
    else:
        return " is odd"
print(f"{num}  {pos(num)} and {eveodd(num)}")

