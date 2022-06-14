<?php
$htno=$_POST['htno'];
$sname=$_POST['sname'];
$dob=$_POST['dob'];
$class=$_POST['class'];
$yos=$_POST['yos'];
$sem=$_POST['sem'];
$m1=$_POST['m1'];
$m2=$_POST['m2'];
$m3=$_POST['m3'];
$tot=$m1+$m2+$m3;
$avg=$tot/3; if($m1<35||$m2<35||$m3<35)
{
$grad="fail";
}
else
{
if($avg>=75)
{
$grad="distinction";
}
elseif($avg>=60&&$avg<75)
{
$grad="first class";
}
elseif($avg>=50&&$avg<60)
{
$grad="second class";
}
else
{
$grad="third class";
}
}
echo"<h1 align=\"center\">STUDENT'S MARK LIST</h1>"; 
echo"HALL TICKET NO:".$htno."<br/>"; 
echo"NAME:".$sname."<br/>";
echo"DATE OF BIRTH:".$dob."<br/>"; 
echo"CLASS:".$class."<br/>"; 
echo"YEAR:".$yos."<br/>"; 
echo"SEMEISTER:".$sem."<br/>"; 
echo"<table align=\"center\">"; 
echo"<tr align=\"center\">"; 
echo"<th>MARK1</th>"; 
echo"<th>MARK2</th>"; 
echo"<th>MARK3</th>"; 
echo"<th>TOTAL</th>"; 
echo"<th>AVG</th>"; 
echo"<th>GRADE</th>"; 
echo"</tr>";
echo"<tr align=\"center\">"; 
echo"<td>".$m1."</td>";
echo"<td>".$m2."</td>";
echo"<td>".$m3."</td>"; 
echo"<td>".$tot."</td>"; 
echo"<td>".$avg."</td>"; 
echo"<td>".$grad."</td>"; 
echo"</tr>";
 echo"</table>";
?>
