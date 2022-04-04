const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var pat = ""
    for(let i=0;i<val.length;i++)
    {
        var t = val.charCodeAt(i)^32;
        pat += String.fromCharCode(t);
    }
    
    par.innerHTML =  pat
}