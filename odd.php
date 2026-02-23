<?php
function checkEvenOdd($num)
{
    if ($num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

$number = 7;
echo "Number $number is " . checkEvenOdd($number);
?>