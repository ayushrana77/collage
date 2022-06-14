<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "AJAX = Asynchronous JavaScript and XML\n";
fwrite($myfile, $txt);

$myfile = fopen("newfile.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>

</body>
</html