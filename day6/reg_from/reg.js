const par = document.getElementById("showcode")
var flag = true
function myfun1(e)
{
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value
    const alt_email = document.getElementById('alt_email').value
    const code = document.getElementById('code').value
    if(code != 1123)
    {
        flag = false
        alert("code is wrong")
    }
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
    if(email == alt_email)
    {
        flag = false
        alert("email id are match")
    }
    if(flag == true) 
    {
        location.replace("../login_page/login.html")
    }
    flag = true   
}
