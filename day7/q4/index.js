const input = document.querySelectorAll('input');
const par = document.getElementById('demo')


input[0].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var num = Number(val.replace(/[^0-9]/g,''));
        par.innerHTML=num
    }
}