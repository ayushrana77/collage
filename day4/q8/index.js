const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var ch = val.charAt(0)
    ch = ch.toUpperCase();
    ch += val.substring(1)
    par.innerHTML = ch
}