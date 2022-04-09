const par = document.getElementById("showcode")
var flag = true
function myfun1(e)
{
    e.preventDefault();
    const acc = document.getElementById('acc').value
    const exp = document.getElementById('exp').value
    if(acc.length < 11)
    {
        flag=false
        alert("Account Number is wrong")
    }
    var d = new Date()
    var t = new Date(exp)
    if(d.getFullYear() > t.getFullYear() || d.getMonth() > t.getMonth() || d.getDate() > t.getDate())
    {
        flag=false
        alert("card is expired")
    }
    if(flag == true) 
    {
        location.replace("../login_page/login.html")
    }
    flag = true   
}
