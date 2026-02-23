<?php
function calculateGrade($marks)
{
    if ($marks >= 90) {
        return "A+";
    } elseif ($marks >= 75) {
        return "A";
    } elseif ($marks >= 60) {
        return "B";
    } elseif ($marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

$total = 0;

echo "<h3>Student Marks and Grades</h3>";

for ($i = 1; $i <= 5; $i++) {
    $marks = rand(35, 100);
    $total += $marks;
    echo "Subject $i Marks: $marks - Grade: " . calculateGrade($marks) . "<br>";
}

$average = $total / 5;

echo "<br>Total Marks: $total";
echo "<br>Average Marks: $average";
?>