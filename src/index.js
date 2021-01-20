console.log('%c HI', 'color: firebrick')

function fetchImg() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImg(json));
}

function renderImg(images) {
  
  console.log("images", images)
  
  const contain = document.querySelector('dog-image-container')
  images.forEach(img =>{
  let newImage = document.createElement('img');
  newImage.innerHTML = `<img src="${img}">`
  contain.appendChild(newImage);
  
})}


document.addEventListener('DOMContentLoaded', function() {
  fetchImg()
})
