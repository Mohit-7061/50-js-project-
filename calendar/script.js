const month = document.querySelector('.month');
const week = document.querySelector('.week');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

window.addEventListener('DOMContentLoaded',() => {
    const date = new Date ();
    console.log(date.toLocaleDateString('en-US',{month:'long'}));
    console.log(date.toLocaleDateString('en-US',{weekday:'long'}));
    console.log(date.getDate());
    console.log(date.getFullYear());

    month.textContent = date.toLocaleDateString('en-US',{month:'long'});
    day.textContent= date.getDate()
    week.textContent = date.toLocaleDateString('en-US',{weekday:'long'})
    year.textContent = date.getFullYear()
    
})