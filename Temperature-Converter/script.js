const celsius = document.querySelector('#celsius')
const kelvin = document.querySelector('#kelvin')
const fahrenheit = document.querySelector('#fahrenheit')
console.log(celsius,kelvin,fahrenheit);

celsius.addEventListener('input', () => {
    let c = parseFloat(celsius.value)
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
});
fahrenheit.addEventListener('input',() => {
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32)*5/9;
    let k = (f - 32)*5/9 + 273.15;
    celsius.value =c;
    kelvin.value = k;
});

kelvin.addEventListener('input',() => {
    let k = parseFloat(kelvin.value);
    let c = (k - 273.15);
    let f = (k - 273.15)*9/5 + 32;
    celsius.value = c;
    fahrenheit.value = f;
});
