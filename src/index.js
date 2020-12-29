// console.log('%c HI', 'color: firebrick')
const renderImages = images => {
    const imagesList = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img');
        img.setAttribute('src', `${image}`);
        img.setAttribute('width', '200');
        imagesList.append(img);
    });
};

const renderBreeds = breeds => {

    const breedsList = document.getElementById('dog-breeds')
    for(let [key,value] of Object.entries(breeds)){
        const li = document.createElement('li');
        li.innerHTML = `${key}`;
        breedsList.appendChild(li);
        li.addEventListener('click', () => {
            li.style.color = 'white'
            li.style.backgroundColor = 'black'
        });
        if(value.length !== 0){
            const subBreed = document.createElement('li');
            const subList = document.createElement('ul');
            subBreed.innerHTML = `${value}`;
            subList.appendChild(subBreed);
            breedsList.appendChild(subList);
        }
    }
};

const renderFiltered = (breeds) => {
    resetBreeds()
    const breedsList = document.getElementById('dog-breeds');
    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.innerHTML = `${breed.innerText}`;
        breedsList.appendChild(li);
    });
};

const resetBreeds = () => {
    const breedsList = document.getElementById('dog-breeds')
    breedsList.innerHTML = '';
}

const fetchImages = url => {
    fetch(url)
        .then((r) => r.json())
        .then(images => renderImages(images.message))
};
const fetchBreeds = url => {
    fetch(url)
        .then((r) => r.json())
        .then(breeds => renderBreeds(breeds.message))
};

document.addEventListener('DOMContentLoaded', () =>{

    const dropDownBox = document.getElementById('breed-dropdown')
    fetchImages('https://dog.ceo/api/breeds/image/random/4');
    fetchBreeds('https://dog.ceo/api/breeds/list/all');
    dropDownBox.addEventListener('change', () => {
        const dogBreedList = document.getElementById('dog-breeds').getElementsByTagName('li')
        const filteredBreeds = [...dogBreedList].filter(word => word.innerText.startsWith(`${dropDownBox.value}`))
        renderFiltered(filteredBreeds)
    });
});
