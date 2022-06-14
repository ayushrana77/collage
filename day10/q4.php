
<html>
<head>
<title>PHP Program To find Transpose of the given matrix </title>
</head>
<body>
<?php
// Elements of matrix a
$a = array
(
array(1, 2, 3),
array(4, 5, 6),
array(7, 8, 9)
);
// To calculates the no.of rows and columns of given matrix
$rows = count($a);

$cols = count($a[0]);
//Calculates transpose of given matrix
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
$t[$i][$j] = 0;
//Initially transpose matrix to be declare with 0;
$t[$i][$j] = $a[$j][$i];
//Converts the row of original matrix into column of transposed matrix
}
}
echo("Original matrix is: <br>"); // to print Original matrix
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
echo ($a[$i][$j] . " ");
}
echo( "<br>");
}
echo( "Transpose of given matrix is:<br>"); // to print transpose matrix
for($i = 0; $i < $cols; $i++)
{
for($j = 0; $j < $rows; $j++)
{
echo($t[$i][$j] . " ");
}
echo( "<br>");
}
?>
</body>
</html>