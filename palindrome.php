<?php
function isPalindrome($num)
{
    $original = $num;
    $reverse = 0;

    while ($num > 0) {
        $digit = $num % 10;
        $reverse = $reverse * 10 + $digit;
        $num = (int) ($num / 10);
    }

    if ($original == $reverse) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

echo "121 is " . isPalindrome(121);
?>