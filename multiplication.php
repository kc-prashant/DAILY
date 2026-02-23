<?php
function multiplicationTable($num)
{
    for ($i = 1; $i <= 10; $i++) {
        echo "$num x $i = " . ($num * $i) . "<br>";
    }
}

multiplicationTable(5);
?>