function myfun1(e)
{
    e.preventDefault();
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const adds = document.getElementById('adds').value
    const phone = document.getElementById('phone').value
    const occ = document.getElementById('occ').value
    sessionStorage.setItem("fname",fname)
    sessionStorage.setItem("lname",lname)
    sessionStorage.setItem("age",age)
    sessionStorage.setItem("email",email)
    sessionStorage.setItem("adds",adds)
    sessionStorage.setItem("phone",phone)
    sessionStorage.setItem("occ",occ)
    location.replace("../user_profile/user_profile.html")
}