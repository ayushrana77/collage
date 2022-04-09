const par = document.getElementById("showcode")
var flag = true
function myfun1(e)
{
    e.preventDefault();
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value
    if(name.length < 8)
    {
        flag = false
        alert("Name length less the 8")
    }
    if(password.length < 6)
    {
        flag = false
        alert("password length less than 6")
    }
    else if(password != cpassword)
    {
        flag = false
        alert("Password not match")
    }
    if(flag == true) 
    {
        location.replace("../payment/pay.html")
    }
    flag = true   
}
