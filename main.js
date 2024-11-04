window.addEventListener("DOMContentLoaded", main);

function main() {
    const knapp1 = document.getElementById("knapp1");
    const knapp2 = document.getElementById("knapp2");
    loadStartingSecne();
}

function loadStartingSecne() {
    knapp1.onclick = loadHotelHallScene;
    knapp2.onclick = loadGoToCarScene;
    document.getElementById("backGround").style.backgroundImage = "url('Realspökhus.jpg')";
    document.querySelector(".choice-text").innerText = "Du står utanför ett varmt och mysigt hotell, det börjar bli kallt. Vad gör du?";
}

function loadHotelHallScene() {
    knapp1.onclick = loadKitchenScene;
    knapp2.onclick = loadStartingSecne;
    document.getElementById("backGround").style.backgroundImage = "url('Hall.webp')";
    document.querySelector(".choice-text").innerText = "Hej, detta är ett test.";
    knapp1.innerText = "Val 1"
    knapp2.innerText = "Val 2"
}
 
function loadGoToCarScene() {

}

function loadKitchenScene() {

}