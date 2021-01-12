console.log('%c HI', 'color: firebrick')

// challenge 1

document.addEventListener('DOMContentLoaded', function() {
  getImages();
  renderImages();
  getBreed();
  renderBreed();
  addBreedToUl();
  updateColor();
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
    });
  }

  // challenge 2

  async function getBreed() {
    let breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let response = await fetch(breedUrl)
    return await response.json()
    // method 2
    // fetch(breedUrl)
    //   .then(response => response.json())
    //   .then(results => {
    //     breeds = Object.keys(results.message);
    //     renderBreed(breeds);
    //   })
  }
  
  async function renderBreed(breed) {
    let breedArray = await getBreed();
    let breeds = Object.keys(breedArray.message)
    let breedContainer = document.querySelector("#dog-breeds");
    
    breeds.forEach(breed => addBreedToUl(breed));
  }

  function addBreedToUl(breed) {
    let breedContainer = document.querySelector("#dog-breeds");
    let li = document.createElement("li");
    li.innerHTML = breed;
    li.style.cursor = 'pointer';
    breedContainer.appendChild(li);
    li.addEventListener('click', updateColor);
  }

    // challenge 3
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }

  //challenge 4
  // filterBreed() {
  //     letter = document.getElementById("breed-dropdown")
  //     if (letter.value == "a")
  //       return document.getElementsByName("breed").beginWith("a")
  //     else if (letter.value == "b")
  //       return document.getElementsByName("breed").beginWith("b")
  //     else if (letter.value == "c")
  //       return document.getElementsByName("breed").beginWith("c")
  //     else if (letter.value == "d")
  //       return document.getElementsByName("breed").beginWith("d")
  // };