<?php
$eid=$_POST['eid'];
$mysqli=mysqli_connect("localhost","root","","ayush"); if(mysqli_connect_errno())
{
echo"database could not be connected";
}
else
{
$query="SELECT * FROM emp_det WHERE EID=".$eid."";
$res=mysqli_query($mysqli,$query); if($rows=mysqli_num_rows($res)>0)
{
while($result=mysqli_fetch_array($res))
{
echo"Employee Id:".$result['EID']."<br/>"; echo"Employee Name:".$result['ENAME']."<br/>"; echo"Employee Salary:".$result['ESAL']."<br/>";
}
}
 
else
{
echo"No rows selected";
}
}
?>
