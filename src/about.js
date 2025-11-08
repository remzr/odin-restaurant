//Call to load about content
export function loadAbout() {
    //Get header and main
    const headerContent = document.getElementById("header");
    const bodyContent = document.getElementById("content");

    //Replace with new
    headerContent?.replaceWith?.(nav);
    bodyContent?.replaceWith?.(content);
}

//Create header
const nav = document.createElement("header");

nav.innerHTML = `
        <nav>
            <button id="navButtonHome" class="nav-button">Home</button>
            <button id="navButtonMenu" class="nav-button">Menu</button>
            <button id="navButtonAbout" class="nav-button nav-active">About1</button>
        </nav>
    `;

//Create main content    
const content = document.createElement("div");
content.id = "content";

content.innerHTML = `
        <main>
            <h1>ABOUT</h1>
            <p><strong>We love food and want to provide you with the best experience we can offer.</strong></p>
            <p>Dessert does not have to a sideshow.</p>
            <br>
            <p><strong>House of Sweets</strong></p>
            <p>Dessertstrasse 40</p>
            <p>2502 Biel</p>
            <br>
            <p><strong>+41 79 333 22 11</strong></p>      
        </main>
`;