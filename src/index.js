// index.js
import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

//Reapplies event listeners to nav buttons
function eventDist() {
    let elements = document.querySelectorAll(".nav-button");
    
    elements.forEach((element) => {
        element.addEventListener("click", function() {navClick(element.id)});
        //console.log(element.onClick);
    });
};

//Clickevent for nav buttons -> reloads site with selected content
function navClick(target) {

    if (target == "navButtonHome") {
        loadHome();
        eventDist();
    } else if (target == "navButtonMenu") {
        loadMenu();
        eventDist();
    } else {
        loadAbout();
        eventDist();
    };
};

loadHome();
eventDist();