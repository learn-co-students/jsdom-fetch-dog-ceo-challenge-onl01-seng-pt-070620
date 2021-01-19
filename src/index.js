console.log('%c HI', 'color: firebrick')

//Challenge 1
let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    renderImages();
    loadBreedOptions();
})

async function getImages() {
    let imageUrl = "https://dog.ceo/api/breeds/image/random/4";
    let response = await fetch(imageUrl);
    return await response.json();
}

async function renderImages() {
    let images = await getImages();
    let imageContainer = document.getElementById('dog-image-container');

    function createImageNode(imgSrc) {
        let img = document.createElement('img');
        img.src = imgSrc;
        img.width = "300";
        img.style.margin = "20px";
        return img;
    }

    images.message.forEach(img => {
        imageContainer.appendChild(createImageNode(img));
    })
}