const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var arr = val.split(" ");
    var pat = "";
    for(let i=0;i<arr.length-1;i++)
    {
        pat += arr[i].toLowerCase()+"-";
    } 
    pat += arr[arr.length-1].toLowerCase();
    par.innerHTML =  pat
}