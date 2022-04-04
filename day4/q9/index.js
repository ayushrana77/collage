const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var arr = val.split(" ")
    var pat = ""
    for(let i=0;i<arr.length;i++)
    {
        pat += arr[i].charAt(0).toUpperCase()+arr[i].substring(1)+" "
    }
    par.innerHTML = pat
}