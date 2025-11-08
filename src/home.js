//Call to load home content
export function loadHome() {
    //Get header and main
    const headerContent = document.getElementById("header");
    const bodyContent = document.getElementById("content");

    //Replace with new
    headerContent?.replaceWith?.(nav);
    bodyContent?.replaceWith?.(content);
}

//Import image
import homeImage from "./img/dessert-1.jpg";

//Create header
const nav = document.createElement("div");
nav.id = "header";

nav.innerHTML = `
        <nav>
            <button id="navButtonHome" class="nav-button nav-active">Home</button>
            <button id="navButtonMenu" class="nav-button">Menu</button>
            <button id="navButtonAbout" class="nav-button">About</button>
        </nav>
    `;

//Create main content    
const content = document.createElement("div");
content.id = "content";

content.innerHTML = `
        <aside>
            <img src="${homeImage}" width="400px">
            <p>We have flans.</p>
        </aside>
        <main>
            <h1>THE HOUSE OF SWEETS</h1>
            <p><strong>Dessert lovers assemble.</strong></p>
            <p>A plate of melting sugar to share for your friends or munch all by yourself. We don't judge.</p>
        </main>
`;