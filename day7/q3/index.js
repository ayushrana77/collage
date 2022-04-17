const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var num = Number(val.replace(/[A-Z\$' ',]/ig, ''));
        par.innerHTML = num
    }
}