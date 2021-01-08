console.log('%c HI', 'color: firebrick')
// Variables
let allBreeds = [];
const container = document.getElementById('dog-breeds');
//Functions
function addImage(src){
  let img = document.createElement("img");
  img.src = src;
  document.getElementById("dog-image-container").appendChild(img);
}
function addImages(items) {
  Object.keys(items.message).forEach(function(key) {
    let src = items.message[key];
    addImage(src);
  });
};
function createBreedsFromArray(array) {
  for(let i = 0; i < array.length; i++){
    const li = document.createElement('li');
    li.textContent = array[i];
    container.appendChild(li);
    li.addEventListener('click', function(e){
      li.style.color = 'red';
    });
  };
};
// First
 fetch('https://dog.ceo/api/breeds/image/random/4')
 .then(function(response) {
   return response.json();
 })
 .then(function(json) {
   addImages(json);
 });
 // Second
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(json) {
  createBreeds(json);
});
function createBreeds(breeds) {
  Object.keys(breeds.message).forEach(function(key){
    const li = document.createElement('li');
    li.textContent = key;
    allBreeds.push(key);
    container.appendChild(li);
    //Third
    li.addEventListener('click', function(e){
      li.style.color = 'red';
    })
  });
};
//Fourth
const dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener('change', function(e){
  const letter = e.target.value;
  const filteredBreeds = allBreeds.filter((breed => breed.startsWith(letter)));
  let allLi = document.querySelectorAll('li');
  for(let i = 0; i < allLi.length; i++){
    allLi[i].remove();
  }
  createBreedsFromArray(filteredBreeds);
});