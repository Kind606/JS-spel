window.addEventListener("DOMContentLoaded", main);



let activeScene = "";
let tools = [];


function main() {

    const savedScene = localStorage.getItem("activeScene");

    if (savedScene) {
        loadScene(savedScene);
    } else {
        loadStartingSecne();
    }
}

function loadScene(savedScene) {
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

function loadStartingSecne() {
    removeContent()
    activeScene = "starting";
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

function getKnife() {
    if (!tools.includes("kniv")) {
        tools.push("kniv");
        renderTools();
    }
}

function getHammer() {
    if (!tools.includes("hammare")) {
        tools.push("hammare");
        renderTools();
    }
}

function renderTools() {
    const toolsContainer = document.querySelector(".tools");
    
    toolsContainer.innerText = "";

    for (const tool of tools) {
        const button = document.createElement("button");
        button.innerText = tool;
        toolsContainer.appendChild(button);
        button.onclick = function() {
            useTool(tool);
        }
    }
}

function useTool(tool) {
    if (activeScene === "loaf" /* && tool === "knife" */) {
        loadGoodEndingScene();
    }
    
}

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


function removeContent() {
    document.querySelector(".choices").innerHTML = "";
}

function removeKnife() {
    const indexOfKnife = tools.indexOf("knife");
    tools.splice(indexOfKnife, 1);
    renderTools();

}

function removeTools() {
    tools = []
    renderTools();
}

function saveScene() {
    localStorage.setItem("activeScene", activeScene);
}