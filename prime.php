<?php
function isPrime($num)
{
    if ($num <= 1)
        return "Not Prime";

    for ($i = 2; $i <= $num / 2; $i++) {
        if ($num % $i == 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}

echo "7 is " . isPrime(7);
?>