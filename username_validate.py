"""
This script validates a username based on the following requirements:
1. Username length: 5–15 characters.
2. Only letters and numbers are allowed.
3. No spaces are allowed.
4. The username must start with a letter.
"""

username = input("Enter your username: ")


if not username[0].isalpha():
    print("Username should start with alphabet!!!")

elif len(username) < 5 or len(username) > 15:
    print("Username should be of length 5-15!!!")

elif " " in username:
    print("Username mustnot contains spaces!!!")

elif not username.isalnum():
    print("username must be alphabetic or alphanumeric other special characters are not allowed!!!!")

else:
    print(f"{username} is valid!")
         