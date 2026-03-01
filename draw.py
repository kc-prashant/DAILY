from draw import *
import random

# Set canvas size
setCanvasSize(600, 400)

# Basket properties
basket_x = 250
basket_y = 350
basket_width = 100
basket_height = 20
basket_speed = 15

# Ball properties
ball_x = random.randint(50, 550)
ball_y = 0
ball_radius = 15
ball_speed = 5

score = 0

while True:
    clear()

    # Draw basket
    setColor(0, 0, 255)  # Blue
    filledRect(basket_x, basket_y, basket_width, basket_height)

    # Draw ball
    setColor(255, 0, 0)  # Red
    filledOval(ball_x, ball_y, ball_radius*2, ball_radius*2)

    # Move ball down
    ball_y += ball_speed

    # Move basket with keys
    if hasNextKeyTyped():
        key = nextKeyTyped()
        if key == 'a' and basket_x > 0:
            basket_x -= basket_speed
        if key == 'd' and basket_x < 500:
            basket_x += basket_speed

    # Check collision
    if (ball_y + ball_radius*2 >= basket_y and
        basket_x < ball_x < basket_x + basket_width):

        score += 1
        print("Score:", score)
        ball_y = 0
        ball_x = random.randint(50, 550)

    # If ball hits ground (miss)
    if ball_y > 400:
        print("Game Over! Final Score:", score)
        break

    show(0.02)