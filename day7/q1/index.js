const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);

function updateValue(e) {
    var val = e.target.value;
    var res = val.match(/\b([\w]{3})\b/gi);
    var t = "";
    for(let i=0;i<res.length;i++)
    {
        t += res[i] + " ";
    }
    par.innerHTML = t; 
}