const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var res = val.match(/[^0-9]/gi);
        var t = res.join('')
        par.innerHTML = t;
    }
}