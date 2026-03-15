with open ("management.md" , "a+") as file:
    file.write(" \n this is newline added from appended")
    file.seek(0)
    content =file.read()
    print(content)