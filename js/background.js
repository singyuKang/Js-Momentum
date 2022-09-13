// const images =["0.jpeg", "1.jpeg", "2.jpeg","3.jpeg"];
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const conatiner = document.createElement("div");

const bgImage = document.createElement("img");
const overText = document.createElement("span");
overText.innerText = "over Text";
bgImage.className = "bgImg";

conatiner.appendChild(bgImage);
conatiner.appendChild(overText);

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";
document.body.appendChild(bgImage);
