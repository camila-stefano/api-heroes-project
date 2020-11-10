const url = "https://www.superheroapi.com/api.php/3751862458158758/";
const container = document.getElementsByClassName("gallery__container");

const maxHeroes = 12;

function getRandomHeroID() {
  return Math.floor(Math.random() * (731 - 1)) + 1;
}

for (let i = 0; i < maxHeroes; i++) {
  fetch(url + getRandomHeroID())
    .then((response) => response.json())
    .then((hero) => {
      console.log(hero);
      // Creo contenedor padre
      const card = document.createElement("div");
      card.className = "card";
      // Creo imagen
      const image = document.createElement("img");
      image.className = "card__image";
      image.setAttribute("src", hero.image.url);
      //Creo div info
      const info = document.createElement("div");
      info.className = "card__info";
      // Creo el titulo
      const title = document.createElement("h1");
      title.className = "card__title";
      title.innerText = hero.name;
      // Creo contenedor para mas info
      const fullname = document.createElement("p");
      fullname.className = "card__fullname";
      fullname.innerHTML = `
      <p>Publisher: ${hero.biography.publisher}
      <p>Primera aparición: ${hero.biography["first-appearance"]}</p>`;

      card.appendChild(image);
      info.appendChild(title);
      info.appendChild(fullname);
      card.appendChild(info);
      container[0].appendChild(card);
    });
}
