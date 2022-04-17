const input = document.querySelectorAll('input');
const par = document.getElementById("demo")

input[0].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var ans = val.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) 
        par.innerHTML = ans;
    }
}