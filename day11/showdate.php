<html>
<head>
<title>Display Today's Date</title>
</head>
<body>
<h1>Today's Date and Time</h1>
<h2>
<?php
$date_array=getdate(); foreach($date_array as $key=>$val)
{
echo $key."=".$val."</br>";
}
echo "<p>Today's date:".$date_array['mon']."/".$date_array['mday']."/".$date_array['year']."</p>";
?>
</h2>
</body>
</html>
