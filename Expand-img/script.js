const card = document.querySelectorAll('.inner-container');

card.forEach(element => {
    element.addEventListener( 'click', () =>{
        remove()
        element.classList.add('active');
    })
});

function remove(){
    card.forEach(element => {
        element.classList.remove('active');
    });
}