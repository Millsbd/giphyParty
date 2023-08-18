console.log("Let's get this party started!");

const giphyContainer = document.querySelector('#container');
const deleteBtn = document.querySelector('#button');
const searchBox = document.querySelector('#searchInput');
const form = document.querySelector('#searchForm');

async function searchGiphy(q) {
    const api_key = 'J1FC6TS5kXaTaCHoZgvo42mBHEAWbqxw'
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { q, api_key } });
    console.log(res);

    createGif(res);
}

function createGif(res) {
    $newGif = $('<img>', { src: res.data[0].images.original.url });
    giphyContainer.append($newGif);
}
// error at 17 cannot read properties of undefined (reading 'images')
// for some reason it is not pullling the url and setting the src

deleteBtn.addEventListener('click', function (){
    giphyContainer.innerHTML = '';
})
// Idea is this will clear the container and delete all Gif when clicked. 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    searchGiphy(searchBox.value);
    searchBox.innerText = '';
})

// on form submission, prevent page from resfreshing, use the searchGiphy function to make a get request for giphy api. Use the result to create a gif using the createGif function and append that to the result div. 



