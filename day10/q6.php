<?php
$a1 = array(
    array(4, 6, 7),
    array(3, 9, 9),
    array(5, 4, 8)
);
$a2 = array(
    array(6, 7, 5),
    array(9, 2, 1),
    array(6, 8, 3)
);
$row = count($a1);
$col = count($a1[0]);
echo "First matrix:  <br>";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $a1[$i][$j] . " ";
    }
    echo "<br>";
}
echo "Second matrix: <br>";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $a2[$i][$j] . " ";
    }
    echo "<br>";
} 
$sum = array();
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        $sum[$i][$j] = $a1[$i][$j] + $a2[$i][$j];
    }
}
echo "Addition of two matrices: <br>";
for ($i = 0; $i < $row; $i++) {
    for ($j = 0; $j < $col; $j++) {
        echo $sum[$i][$j] . " ";
    }
    echo "<br>";
}
?>