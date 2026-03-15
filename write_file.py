with open("text.txt" , "w") as file:
    file.write("this is new line written in the file removing old one")
with open("text.txt" , "a") as file:
    file.write (" this is line added to the previous file \n")
    file.write(" this is another file")

with open ("text.txt", "r") as file:
    content = file.read()
    print (content)
