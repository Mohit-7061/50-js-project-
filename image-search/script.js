
const search = document.querySelector('.search');
const submit = document.querySelector('.search-btn');
const img_container = document.querySelector('.img-container');

submit.addEventListener('click', async() => {
    const search_value = search.value;
    if (search_value === '') {
        alert('Please enter a valid keyword');
        return;
    }else{
        const key = 'S4KQUbTL4sPMaDYHgl-cfHbdAvnR0I2dd29r9Mw2Jm4'
        const url = `https://api.unsplash.com/search/photos?page=3&query=${search_value}&client_id=${key}`
        let data = await fetch(url)
        data = await data.json();
        console.log(data);
        displayImages(data);
    }
});


function displayImages(data){
    img_container.innerHTML = ''
    data.results.forEach(element => {
        console.log(element.urls.regular,"element.urls.regular")
        const img = document.createElement('img')
        img.src=element.urls.regular
        img_container.appendChild(img)
    });
}