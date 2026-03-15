with open("management.md" , "r+") as file:
    file.write(" process of effectivelly achieving organizational objectives by effective utillization use of scare resources in a changing environment.")
    file.seek(0)
    content =file.read()
    print(content)