const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('change', updateValue);
function updateValue(e) {
    var val = e.target.value;
    var guess = Math.ceil(Math.random()*10)
    if(guess == val)
    {
        par.innerHTML = "Good Number"
    }else{
        par.innerHTML = `Not match <br> guess number is ${guess}`
    }
    console.log(guess);
}