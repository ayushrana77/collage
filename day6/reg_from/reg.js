const par = document.getElementById("showcode")
var flag = true
function myfun1(e)
{
    e.preventDefault();
    const name = document.getElementById('name').value
    // const age = document.getElementById('age').value
    // const sex = document.getElementById('sex').value
    // const adds = document.getElementById('adds').value
    // const email = document.getElementById('email').value
    // const password = document.getElementById('password').value
    // const cpassword = document.getElementById('cpassword').value
    // const alt_email = document.getElementById('alt_email').value
    // const sorc = document.getElementById('sorc').value
    const code = document.getElementById('code').value
    if(code != 1123)
    {
        flag = false
        alert("code is wrong")
    }
    if(name.lenght > 8)
    {
        flag = false
        alert("Name length less the 8")
    }
    if(flag == true) 
    {
        location.replace("../login_page/login.html")
    }
    flag = true   
}
