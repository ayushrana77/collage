<?php
$mysqli=mysqli_connect("localhost","root","","ayush"); if(mysqli_connect_errno())
{
echo"database could not be conncted";
}
else
{
$query1="SELECT eid,esal FROM EMP_DET";
$res1=mysqli_query($mysqli,$query1);
$rows=mysqli_num_rows($res1); while($result=mysqli_fetch_array($res1))
{
$eid=$result['eid'];
$basic=$result['esal']; if($basic>50000)
{
$eda=$basic*(20/100);
$ehra=$basic*(7.5/100);
}
else if($basic>20000 && $basic<=50000)
{
$eda=$basic*(15/100);
$ehra=$basic*(6/100);
}
else
{
$eda=$basic*(10/100);
$ehra=$basic*(5/100);
}
$enet=$basic+$eda+$ehra;
$query2="UPDATE EMP_DET SET esal='".$eda."'WHERE eid='".$eid."'";
$res2=mysqli_query($mysqli,$query2);
}
}
echo $rows."rows are updated"; mysqli_close($mysqli);
?>
