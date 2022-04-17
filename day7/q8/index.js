const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var res = val.match(/[0-9]+/g)
    console.log(res);
    par.innerHTML = res
}