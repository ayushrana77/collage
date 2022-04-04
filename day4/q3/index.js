const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        par.innerHTML = val.split(" ")  
    }
}