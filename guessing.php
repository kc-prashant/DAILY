<?php
$secretNumber = 7;
$guess = 0;
$attempts = 0;

echo "<h3>Number Guessing Game</h3>";

while ($guess != $secretNumber) {
    $guess = rand(1, 10);
    $attempts++;

    echo "Attempt $attempts: You guessed $guess <br>";

    if ($guess < $secretNumber) {
        echo "Too Low!<br><br>";
    } elseif ($guess > $secretNumber) {
        echo "Too High!<br><br>";
    } else {
        echo "<b>Correct Guess!</b><br>";
    }
}

echo "Total Attempts: $attempts";
?>