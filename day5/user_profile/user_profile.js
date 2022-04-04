const par = document.querySelectorAll('p')

par[0].innerHTML = sessionStorage.getItem("fname")
par[1].innerHTML = sessionStorage.getItem("lname")
par[2].innerHTML = sessionStorage.getItem("age")
par[3].innerHTML = sessionStorage.getItem("email")
par[4].innerHTML = sessionStorage.getItem("adds")
par[5].innerHTML = sessionStorage.getItem("phone")
par[6].innerHTML = sessionStorage.getItem("occ")