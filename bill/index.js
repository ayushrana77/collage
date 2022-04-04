const input = document.querySelector('input')
const btn = document.getElementById('btn')
const ret = document.querySelectorAll('p')

btn.addEventListener('click', () => {
    var price = Number(input.value);
    var gst = price*0.1;
    var se = ((price*5)/100);
    var total = price+gst+se;
    console.log( price+gst);
    ret[0].innerText = `product_ price : ${price}` 
    ret[1].innerText = `10% GST on product price: ${gst}`
    ret[2].innerText = `5% Srvece charge : ${se}`
    ret[3].innerText = `Total : ${total}`
});

