
/**
 * Körs när DOM har laddats. Startar applikationen genom att antingen ladda en sparad scen 
 * eller starta från början.
 */

window.addEventListener("DOMContentLoaded", main);


// Här sätts lagrar jag active scene och tools
let activeScene = "";
let tools = [];

/**
 * Huvudfunktion som laddar den sparade scenen eller startar från början.
 */

function main() {
    
    const savedScene = localStorage.getItem("activeScene");
    // här laddar jag in scenen som är sparad
    if (savedScene) {
        loadScene(savedScene);
    } else {
        loadStartingSecne();
    }
}

/**
 * Laddar rätt scen baserat på ett sparat scen-namn.
 * @param {string} savedScene - Namnet på den scen som ska laddas.
 */

function loadScene(savedScene) {
    // här laddar den in rätt scene beroande på vilken scene som är lagrad på local storage
    switch (savedScene) {
        case "starting":
            loadStartingSecne();
            break;
        case "hall":
            loadHotelHallScene();
            break;
        case "car":
            loadGoToCarScene();
            break;
        case "Kitchen":
            loadKitchenScene();
            break;
        case "loaf":
            loadLoafScene();
            break;
        case "leave":
            loadLeaveScene();
            break;
        case "goodEnding":
            loadGoodEndingScene();
            break;
    
        default:
            loadStartingSecne();
            break;
    }
}

/**
 * Laddar startsidan och sätter den aktiva scenen till "starting".
 */

function loadStartingSecne() {
    // denna funktionen ser till att att bort allt så jag kan lägga till allt på nytt
    removeContent()
    activeScene = "starting";
    // Denna funktion ser till att ladda om save scene som ser till att spara den nuvarande activa scenen
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Du står utanför ett varmt och mysigt hotell, det börjar bli kallt. Vad gör du?";
    knapp1.innerText = "Jag går in i hotellet";
    knapp2.innerText = "Ne, jag går tillbaka till min bil.";
    knapp1.onclick = loadHotelHallScene;
    knapp2.onclick = loadGoToCarScene;
    document.getElementById("backGround").style.backgroundImage = "url('Realspökhus.jpg')";
    choices.append(text, knapp1, knapp2);
}

/**
 * Laddar hotellsalsscenen och sätter den aktiva scenen till "hall".
 */

function loadHotelHallScene() {
    removeContent()
    activeScene = "hall";
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const text = document.createElement("p")
    text.innerText = "Du är i en väldigt fin och extremt mysig hall. Du hör röster från köket vad gör du?";
    knapp1.innerText = "Jag går till köket";
    knapp2.innerText = "Jag springer ut ur hotellet";
    knapp1.onclick = loadKitchenScene;
    knapp2.onclick = loadStartingSecne;
    document.getElementById("backGround").style.backgroundImage = "url('Hall.webp')";
    choices.appendChild(text)
    choices.appendChild(knapp1);
    choices.appendChild(knapp2);
}

/**
 * Laddar bilscenen och sätter den aktiva scenen till "car".
 */

function loadGoToCarScene() {
    removeContent()
    activeScene = "car";
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Här har du en bil, vill du dra härifrån?";
    knapp1.innerText = "Ja, ta mig härifån";
    knapp2.innerText = "Nej, jag vill tilbaka till hotellet";
    knapp1.onclick = loadLeaveScene;
    knapp2.onclick = loadStartingSecne;
    document.getElementById("backGround").style.backgroundImage = "url('Hauntedbil.webp')";
    choices.appendChild(text)
    choices.appendChild(knapp1);
    choices.appendChild(knapp2);
}

/**
 * Laddar köksscenen och sätter den aktiva scenen till "Kitchen".
 */

function loadKitchenScene() {
    removeContent()
    activeScene = "Kitchen";
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const btn = document.createElement("button");
    const knapphammare = document.createElement("button")
    const text = document.createElement("p");
    text.innerText = "Du kommer till köket, men ser inte mycket. Du känner att det luktar illa lite längre bort som verkar leda till vinden. Vad gör du?";
    knapp1.innerText = "Går up till vinden."
    knapp2.innerText = "Går tillbaka till hallen."
    btn.innerHTML = "Du ser en kniv, ta med den?";
    knapphammare.innerText = "Du ser en hammare, ta med den?"
    knapp1.onclick = loadLoafScene;
    knapp2.onclick = loadHotelHallScene;
    btn.onclick = getKnife;
    knapphammare.onclick = getHammer;
    document.getElementById("backGround").style.backgroundImage = "url('Hauntedkök.webp')";
    choices.append(text, knapp1, knapp2, btn, knapphammare);
}   

/**
 * Hämtar en kniv och lägger till den i verktygslistan.
 */

function getKnife() {
    // denna if satsen kollar om tools arrayen har en variable som heter "kniv" är med i arrayen om inte så lägger den till den.
    if (!tools.includes("kniv")) {
        tools.push("kniv");
        // denna funktion ser till att efter kniv har pushats in så laddar den in en knapp till html så att den blir synlig och användbar
        renderTools();
    }
}

/**
 * Hämtar en hammare och lägger till den i verktygslistan.
 */

function getHammer() {
    // samma som getKnife
    if (!tools.includes("hammare")) {
        tools.push("hammare");
        renderTools();
    }
}

/**
 * Renderar verktyg som knappar baserat på listan `tools`.
 */

function renderTools() {
    const toolsContainer = document.querySelector(".tools");
    
    toolsContainer.innerText = "";
    // här ser den till att ge en knapp till varje sak som är med i arrayen
    for (const tool of tools) {
        const button = document.createElement("button");
        button.innerText = tool;
        toolsContainer.appendChild(button);
        button.onclick = function() {
            useTool(tool);
        }
    }
}

/**
 * Använder ett verktyg beroende på den aktuella scenen.
 * @param {string} tool - Verktyget som ska användas.
 */

function useTool(tool) {
    // denna funktion ser till att du bara kan använda kniven eller hammaren när du är på "loaf" scenen
    if (activeScene === "loaf" /* && tool === "knife" */) {
        loadGoodEndingScene();
    }
    else alert("Du kan inte använda detta verktyg än!")
    
}

/**
 * Laddar vindscenen och sätter den aktiva scenen till "loaf".
 */

function loadLoafScene() {
    removeContent();
    activeScene = "loaf";
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "du kommer upp till vinden och ser en kropp ligga där, efter en stund känner du en kall vind bakom dig som att någon står och andas dig i nacken, Vad gör du?";
    knapp1.innerText = "vänder dig om."
    knapp2.innerText = "springer ner tll köket."
    knapp1.onclick = loadLeaveScene;
    knapp2.onclick = loadKitchenScene;
    document.getElementById("backGround").style.backgroundImage = "url('Hauntedvind.webp')";
    choices.appendChild(text)
    choices.appendChild(knapp1);
    choices.appendChild(knapp2);
}

/**
 * Laddar lämnascenen och sätter den aktiva scenen till "leave".
 */

function loadLeaveScene() {
    removeTools()
    removeContent()
    activeScene = "leave";
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Du är död, synd för dig. Vill du spela igen?";
    knapp1.innerText = "Ja, jag vill spela igen!"
    knapp1.onclick = loadStartingSecne;
    document.getElementById("backGround").style.backgroundColor = "black";
    document.getElementById("backGround").style.backgroundImage = null;
    choices.appendChild(text)
    choices.appendChild(knapp1);
}

/**
 * Laddar braslutscenen och sätter den aktiva scenen till "goodEnding".
 */

function loadGoodEndingScene() {
    removeTools()
    removeContent()
    activeScene = "goodEnding"
    saveScene();
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Du klara det yay!"
    knapp1.innerText = "Ja, jag vill spela igen!"
    document.getElementById("backGround").style.backgroundColor = "black";
    document.getElementById("backGround").style.backgroundImage = null;
    knapp1.onclick = loadStartingSecne;
    choices.appendChild(text)
    choices.appendChild(knapp1);
}

/**
 * Tömmer allt innehåll.
 */

function removeContent() {
    // detta är funktionen som ser till att allt inom choices diven töms
    document.querySelector(".choices").innerHTML = "";
}


function removeKnife() {
    const indexOfKnife = tools.indexOf("knife");
    tools.splice(indexOfKnife, 1);
    renderTools();

}

/**
 * Tömmer allt innehåll i arrayen.
 */

function removeTools() {
    // denna tar bort allt i arrayen och sedan kallar på renderTools så att det updateras
    tools = []
    renderTools();
}

/**
 * Sparar den aktiva scenen.
 */

function saveScene() {
    // denna funktion ser till att spara active scenen så du kan kalla på den i main funktionen
    localStorage.setItem("activeScene", activeScene);
}