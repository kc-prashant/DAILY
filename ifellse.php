<?php
$balance = 10000;
$choice = 0;

echo "<h3>ATM Simulation</h3>";

do {
    $choice = rand(1, 3); // Random choice for demo

    if ($choice == 1) {
        echo "Check Balance: $balance <br><br>";
    } elseif ($choice == 2) {
        $withdraw = rand(500, 3000);

        if ($withdraw <= $balance) {
            $balance -= $withdraw;
            echo "Withdrawn: $withdraw <br>";
            echo "Remaining Balance: $balance <br><br>";
        } else {
            echo "Insufficient Balance!<br><br>";
        }
    } elseif ($choice == 3) {
        echo "Exit Transaction<br>";
    }

} while ($choice != 3);
?>