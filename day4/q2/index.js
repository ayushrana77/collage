const input = document.querySelector('input');
const par = document.getElementById('demo')
input.addEventListener('keypress', updateValue);

function updateValue(e) {
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        if(val === "")
        {
            par.innerHTML = true;
        }else 
        {
            par.innerHTML = false
        }   
    }
}