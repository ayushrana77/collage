const input = document.querySelectorAll('input');
const par = document.getElementById("demo")

input[0].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var arr = val.split(" ");
        var ans = arr[0]
        for(let i = 1;i<arr.length;i++)
        {
            ans += " "+arr[1][0]+"."
        } 
        par.innerHTML = ans;
    }
}