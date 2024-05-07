const input = document.querySelector('#qr-input');
const img = document.querySelector('#qr-img');
const button = document.querySelector('#qr-button');

button.addEventListener('click',() => {
    const inputValue = input.value;
    
    if(!inputValue){
        alert('Please enter a valid URL');
        return;
    }else{
        img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        img.alt =`QR code for ${inputValue}`
    }
})