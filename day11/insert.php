<?php
$eid=$_POST['eid'];
$ename=$_POST['ename'];
$esal=$_POST['esal'];
$mysqli=mysqli_connect("localhost","root","","ayush")or die("couldnot connect"); 

if(mysqli_connect_errno())
{
printf("connect failed:%\n",mysqli_connect_error()); exit();
}
else
{
$sql="INSERT INTO EMP_DET VALUES($eid,'$ename',$esal)";
$res=mysqli_query($mysqli,$sql); 
if($res===TRUE)
{
echo"Data are inserted successfully.";
}else{

echo"could not creted table.";
}
mysqli_close($mysqli);
}
?>
