const input = document.querySelectorAll('input');


input[0].addEventListener('keypress', updateValue);

function updateValue(e) {
    
    if(e.key === 'Enter')
    {
        var val = e.target.value;
        var arr = val.split(" ");
        console.log(arr[0]);
        for(let i = 1;i<arr.length;i++)
        {
            console.log(" ");
            console.log(arr[1][0]);
            console.log(".");
        } 
    }
}