password =input("Enter your password:")

length =False
upper =False
digit = False

if len(password) >=8:
        length=True
for ch in password :
    if ch.isupper():
          upper=True
    if ch.isdigit():
          digit=True
if length== True and upper == True and digit == True :
      print("passowrd is strong")
    
else:
      print("password is weak")