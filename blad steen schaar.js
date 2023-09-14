"use strict";
let keuze = 0;

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.onclick = verwerkkeuze;
}
function verwerkkeuze (){
    keuze = Number(this.dataset.nr);
    keuzePc();

}
function keuzePc() {
    const afbeeldingen = [ "blad","steen","schaar"]
    const uitslag= document.getElementById("uitslag")
    const kpc = Math.floor((Math.random() * 3) + 1)
    const img = document.getElementById("afbeelding");
    img.src = `${afbeeldingen[kpc-1]}.png`;

    if (keuze === 1 && kpc === 2 || keuze === 2 && kpc === 3 || keuze === 3 && kpc === 1) { uitslag.innerText = "gewonnen"; }
    if (keuze === 2 && kpc === 1 || keuze === 3 && kpc === 2 || keuze === 1 && kpc === 3) { uitslag.innerText = "verloren"; }
    if (keuze === kpc) { uitslag.innerText = "gelijk"; }
}

