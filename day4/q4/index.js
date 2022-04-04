const input = document.querySelectorAll('input');

console.log(input);

input[1].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var str = input[0].value;
        var val = e.target.value;
        console.log(str.substr(0,val));  
    }
}