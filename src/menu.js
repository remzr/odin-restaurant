//Call to load home content
export function loadMenu() {
    //Get header and main
    const headerContent = document.getElementById("header");
    const bodyContent = document.getElementById("content");

    //Replace with new
    headerContent.replaceWith(nav);
    bodyContent.replaceWith(content);
}

//Create header
const nav = document.createElement("header");

nav.innerHTML = `
        <nav>
            <button id="navButtonHome" class="nav-button">Home</button>
            <button id="navButtonMenu" class="nav-button nav-active">Menu</button>
            <button id="navButtonAbout" class="nav-button">About</button>
        </nav>
    `;

//Create main content    
const content = document.createElement("div");
content.id = "content";

content.innerHTML = `
        <main>
            <h1>OUR MENU</h1>
            <p><strong>Flan</strong></p>
            <p>Baked custard dessert topped with a layer of caramel sauce</p>
            <br>
            <p><strong>Nutella Cake</strong></p>
            <p>Cake, but made with Nutella.</p>
            <br>
            <p><strong>Fondue</strong></p>
            <p>Not a fondue, but its still on the menu. Don't ask why.</p>
            <br>        
        </main>
`;