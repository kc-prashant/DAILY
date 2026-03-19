
def ans(num):
    if num ==1:
        return "today is sunday"
    elif num ==2:
        return "today is monday"
    elif num == 3:
        return " today is tuesday"
    elif num ==4 :
        return "today is wednusday"
    elif num == 5:
        return " today is thursdday"

print("enter a number to choose day")
num =int(input("> "))

print( ans(num))