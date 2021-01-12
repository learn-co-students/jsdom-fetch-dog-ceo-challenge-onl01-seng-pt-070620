console.log('%c HI', 'color: firebrick')

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(response => response.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

  function addImage(dogImgUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = dogImgUrl;
    container.appendChild(newImage);
  }