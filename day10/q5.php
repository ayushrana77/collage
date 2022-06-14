<html>
<head>
<title>PHP Program for Multiplication of two matrices</title>
</head>
<body>
<?php
$a = array
(
array(1, 0, 8),
array(0, 2, 1),
array(1, 3, 2)
);
$b = array
(
array(1, 0, 1),
array(2, 3, 1),
array(1, 4, 0)
);
$rows = count($a);
$cols = count($b[0]);
$m = count($b);
if(count($a[0]) != $m)
{
echo "Incompatible matrices";
exit(0);
}
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
$mul[$i][$j] = 0; 
for($k=0; $k < $m; $k++)
{
$mul[$i][$j] += $a[$i][$j] * $b[$i][$j];
}
}
}
echo("Matrix A:</br>");
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
echo($a[$i][$j] . " " );
echo "   ";
}
echo("</br>");
}
echo("Matrix B:</br>");
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
echo($b[$i][$j] . " " );
echo "   ";
}
echo("</br>");
}
echo("Multiplication of two matrices:</br>");
for($i = 0; $i < $rows; $i++)
{
for($j = 0; $j < $cols; $j++)
{
echo($mul[$i][$j] . " " );
echo "   ";
}
echo("</br>");
}
?>
</body>
</html>