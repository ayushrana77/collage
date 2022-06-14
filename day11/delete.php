<?php
$eid=$_POST['eid'];
$mysqli=mysqli_connect("localhost","root","","ayush"); if(mysqli_connect_errno())
{
echo"database could not be connected";
}
else{
$query="DELETE FROM emp_det WHERE eid=".$eid."";
$res=mysqli_query($mysqli,$query); if($res==TRUE)
{
echo"The data deleted successfully";
}
else
{
printf("error ocurred:%s\n",mysqli_errno($mysqli));
}
}
mysqli_close($mysqli);
?>
