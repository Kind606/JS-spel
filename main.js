window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartingSecne();
}

function loadStartingSecne() {
    removeContent()
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
    choices.appendChild(text);
    choices.appendChild(knapp1);
    choices.appendChild(knapp2);
}

function loadHotelHallScene() {
    removeContent()
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
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Här har du en bill, vill du dra härifrån?";
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
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const knapp2 = document.createElement("button");
    const btn = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Du kommer till köket, men ser inget. Du känner att det luktar illa lite längre bort som verkar leda till vinden. Vad gör du?";
    knapp1.innerText = "Går up till vinden."
    knapp2.innerText = "Går tillbaka till hallen."
    btn.innerHTML = "Du ser en kniv, ta med den?";
    knapp1.onclick = loadLoafScene;
    knapp2.onclick = loadHotelHallScene;
    document.getElementById("backGround").style.backgroundImage = "url('Hauntedkök.webp')";
    choices.appendChild(text)
    choices.appendChild(knapp1);
    choices.appendChild(knapp2);
    choices.appendChild(btn);
}   

function loadLoafScene() {
    removeContent()
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
    removeContent()
    const choices = document.querySelector(".choices");
    const knapp1 = document.createElement("button");
    const text = document.createElement("p");
    text.innerText = "Du är död, synd för dig. Vill du spela igen?";
    knapp1.innerText = "Ja, jag vill spela igen!"
    knapp1.onclick = loadGoToCarScene;
    document.getElementById("backGround").style.backgroundColor = "black";
    document.getElementById("backGround").style.backgroundImage = null;
    choices.appendChild(text)
    choices.appendChild(knapp1);
}


function removeContent() {
    document.querySelector(".choices").innerHTML = "";
}