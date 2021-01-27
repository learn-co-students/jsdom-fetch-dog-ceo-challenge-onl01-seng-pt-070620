console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    div = document.getElementById('dog-image-container')
    ul = document.getElementById('dog-breeds')
    dropDown = document.getElementById('breed-dropdown')


    fetchImages()
    fetchBreeds()

    function fetchImages() {
        return fetch(imgUrl)
        .then((response) => response.json())
        .then(json => renderImages(json))
    }

    function fetchBreeds() {
        return fetch(breedUrl)
        .then((response) => response.json())
        .then(json => renderBreeds(json))
    }




    function renderImages(images) {
        images.message.forEach(image => {
            const img = document.createElement('img')
            img.src = image
            div.appendChild(img)
        });
    }

    function renderBreeds(breeds) {
        Object.keys(breeds.message).forEach(breed => {
            const li = document.createElement('li');
            li.innerText = breed;
            ul.appendChild(li);

        })
    }

    ul.addEventListener('click', function(e){
        e.target.style.color == 'red' ? e.target.style.color = 'black' : 
        e.target.style.color = 'red';
    })

    dropDown.addEventListener('change', function(e){
        const letter = e.target.value;
        var items = ul.getElementsByTagName('li');
        for (var i = 0; i < items.length; ++i) {
            if (items[i].innerText.charAt(0) != letter){
                items[i].hidden = true;
            }
        else {
            items[i].hidden = false;
        }
        }
    })


})
