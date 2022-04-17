const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var res = val.match(/(\w*['-]\b[a-zA-Z])/gim);
    par.innerHTML =  res
}