const input = document.querySelectorAll('input');
const par = document.getElementById('demo')
console.log(input);

input[1].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var str = input[0].value;
        var val = e.target.value;
        par.innerHTML=str.substr(0,val) 
    }
}