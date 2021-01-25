console.log('%c HI', 'color: firebrick');

let breeds = [];

window.addEventListener("DOMContentLoaded", function(event)
{
  window.fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response)
  {
    return response.json();
  }).then(function(json)
  {
    for (let i = 0; i < json.message.length; i++)
    {
      const img = document.createElement("img");
      img.src = json.message[i];
      document.body.append(img);
    }
  });
  
  const fetchBreeds = window.fetch("https://dog.ceo/api/breeds/list/all").then(function(response)
  {
    return response.json();
  }).then(function(json)
  {
    for (const property in json.message)
    {
      const ul = document.getElementById("dog-breeds");
      const li = document.createElement("li");
      li.innerText = property;
      breeds.push(li.innerText);
      li.style.cursor = "pointer";
      li.addEventListener("click", function()
      {
        li.style.color = "pink";
      });
      ul.append(li);
    }
  });
  
  document.getElementById("breed-dropdown").addEventListener("change", function(event)
  {
    const ul = document.getElementById("dog-breeds");
    const allLi = document.querySelectorAll("li");
    for (let i = 0; i < allLi.length; i++)
    {
      allLi[i].remove();
    }
    for (let i = 0; i < breeds.length; i++)
    {
      if (breeds[i].startsWith(event.target.value))
      {
        const li = document.createElement("li");
        li.innerText = breeds[i];
        li.style.cursor = "pointer";
        li.addEventListener("click", function()
        {
          li.style.color = "pink";
        });
        ul.append(li);
      }
    }
  });
});