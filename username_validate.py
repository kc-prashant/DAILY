"""
This script validates a username based on the following requirements:
1. Username length: 5–15 characters.
2. Only letters and numbers are allowed.
3. No spaces are allowed.
4. The username must start with a letter.
"""

username = input("Enter your username: ")


if  username[0].isalpha():

    if len(username) >=5 and len(username) <= 15:
         
    elif username ==( " "):
         print("spaces are not allowed")

    else:
         print("Username should be within 5-15 characters!")
    
else:
     print("username should start with alphabet")