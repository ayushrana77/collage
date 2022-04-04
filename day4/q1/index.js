const input = document.querySelector('input');

input.addEventListener('change', updateValue);

function updateValue(e) {
    var val = e.target.value;
    console.log(isNaN(val));
}