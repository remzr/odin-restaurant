// index.js
import "./styles.css";
import { greeting } from "./greeting.js";

import catImage from "./img/profile-picture.jpg";
   
const image = document.createElement("img");
image.src = catImage;
   
document.body.img.appendChild(image);

console.log(greeting);