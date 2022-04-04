const input = document.querySelector('input');

input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        console.log(val.split(" "));  
    }
}