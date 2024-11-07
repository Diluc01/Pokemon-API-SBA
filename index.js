import * as Carousel from "./Carousel.js";

const API_KEY =
  "live_iQEVPsxwsssjMyr9P3zzlqjVYLklOpCXJwFdx4cshkqKSIKRjqSpNJYyCaoC5jsx";
const rootElement = document.getElementById("container");
const largeContainer = document.getElementById("large-img");

async function getAllDogs() {
  const response = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10&api_key=" + API_KEY
  );
  const jsonData = await response.json();
  console.log(jsonData);
  jsonData.forEach(async (dogPic) => {
    const response2 = await fetch(
      "https://api.thedogapi.com/v1/images/" + dogPic.id
    );
    const imageData = await response2.json();
    const imageNode = Carousel.createCarouselItem(
      dogPic.url,
      imageData.description,
      dogPic.id
    );
    Carousel.appendCarousel(imageNode);
    const imageElement = document.createElement("img");
    // imageElement.setAttribute("src", dogPic.url);
    // imageElement.classList.add("thumbnail");
    // imageElement.addEventListener("click", () => {
    //   const largeImage = document.createElement("img");
    //   largeImage.setAttribute("src", dogPic.url);
    //   largeContainer.innerHTML = "";
    //   largeContainer.appendChild(largeImage);
    // });
    rootElement.appendChild(imageElement);
  });
}

getAllDogs();
