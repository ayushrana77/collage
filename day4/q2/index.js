const input = document.querySelector('input');

input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        if(val === "")
        {
            console.log("true");
        }else 
        {
            console.log("false");
        }   
    }
}