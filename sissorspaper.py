import sys , random

print("'Sissor' , ' Paper' , 'Rock'")

wins =0
losses =0
draw =0

# main loop
while  True:
    print('%s Wins, %s Losses, %s Ties' % (wins, losses, draw))
    while True :
        print("Enter your move  s(Sissors), p(Paper), r(Rock),q(Quit)")
        player_move=input (">")
        if player_move =="q":
            sys.exit()
        if player_move== "s" or player_move == "p" or player_move == "r":
            break
        print("Type one of s p r or q")

# display player move
if player_move =="s":
    print("sissiors vs ..")
elif player_move == "p":
    print("paper vs .....")
elif player_move == "r":
    print("rock vs ....")


#Computer choses
random_number == random.randint(1,3)
if comp_number ==1:
    computer_move = "s"
    print("Scissors")
elif comp_number ==2:
    computer_move ="p"
    print(Paper)
elif comp_number ==3:
    computer_move = "r"
    print(rock)

# Display  and record 
if player_move == comp_move:
    print ("its a tie ")
    ties = ties +1
elif player_move == 'r' and computer_move == 's':
        print('You win!')
        wins = wins + 1
elif player_move == 'p' and computer_move == 'r':
        print('You win!')
        wins = wins + 1
elif player_move == 's' and computer_move == 'p':
        print('You win!')
        wins = wins + 1
elif player_move == 'r' and computer_move == 'p':
        print('You lose!')
        losses = losses + 1
elif player_move == 'p' and computer_move == 's':
        print('You lose!')
        losses = losses + 1
elif player_move == 's' and computer_move == 'r':
        print('You lose!')
        losses = losses + 1