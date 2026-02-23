<?php
$number = 9875;
$original = $number;
$sum = 0;

echo "<h3>Sum of Digits</h3>";

while ($number > 0) {
    $digit = $number % 10;

    if ($digit % 2 == 0) {
        echo "Even Digit Found: $digit <br>";
    }

    $sum += $digit;
    $number = (int) ($number / 10);
}

echo "<br>Original Number: $original";
echo "<br>Sum of Digits: $sum";
?>s