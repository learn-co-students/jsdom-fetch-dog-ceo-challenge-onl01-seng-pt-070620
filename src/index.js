


document.addEventListener('DOMContentLoaded', function() {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  // Challenge 1

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(data => displayPix(data))

    function displayPix(data) {
      let picBox = document.getElementById('dog-image-container')
      data.message.forEach(function(m){
          let newPic = document.createElement('img')
          newPic.src = m
          picBox.append(newPic)
          console.log(m)
        })
    }



// Challenge 2
let list = document.getElementById('dog-breeds')

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(results => {listBreeds(Object.keys(results.message))})

function listBreeds(breeds) {

  breeds.forEach(function(b){
    let newLine = document.createElement('li')
    newLine.innerText = b
    list.append(newLine)

// Challenge 3
    newLine.addEventListener("click", function(){
      this.style.color = "red";
      return false;
    })
  })


}

// Challenge 4
// incomplete - can probably nest searching by first letter into listBreeds()
let breedSelector = document.getElementById('breed-dropdown')

breedSelector.addEventListener("click", function(){
  console.log(breedSelector.value)
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(results => {listBreedsByFirstLetter(Object.keys(results.message))})

  function listBreedsByFirstLetter(breeds) {

  }
})



  console.log('%c HI', 'color: firebrick')
})
