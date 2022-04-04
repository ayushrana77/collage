const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var hid = val.substr(0,5);
    var y = val.indexOf('@')
    hid += '......'+val.substring(y)
    par.innerHTML =  hid
}