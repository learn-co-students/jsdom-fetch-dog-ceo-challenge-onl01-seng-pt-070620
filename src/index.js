window.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breedsList = document.getElementById('dog-breeds')

    fetch(imgUrl)
        .then(rsp => rsp.json())
        .then(result => dogImage(result.message))

    function dogImage(images) {
        images.forEach(image => {
            const imgContainer = document.querySelector('#dog-image-container')
            const newImg = document.createElement('img')
            newImg.src = image
            imgContainer.appendChild(newImg)
        })
    };

    fetch(breedUrl)
        .then(rsp => rsp.json())
        .then(result => breedList(result.message))

    function breedList(breeds) {
        for (const breed in breeds) {
            let newLi = document.createElement('li')
            newLi.innerHTML = breed
            breedsList.appendChild(newLi)
            newLi.addEventListener('click', function() {
                newLi.style.color = 'red'
            })
        }
    };

    let breedDropdown = document.getElementById('breed-dropdown')
    console.log(breedDropdown.value)
    breedDropdown.addEventListener('change', (e) => {
        const letter = e.target.value
        const filterBreeds = breedsList.filter((breed) => breed.startsWith(letter))
    })
});