"use strict";
let keuze = (0);

document.getElementById("blad").onclick = function () { verander1(); keuzePc(); }

document.getElementById("steen").onclick = function () { verander2(); keuzePc(); }
document.getElementById("schaar").onclick = function () { verander3(); keuzePc(); }

function verander1() {
    keuze = 1;
}
function verander2() {
    keuze = 2;
}
function verander3() {
    keuze = 3;
}
function keuzePc() {
    const kpc = Math.floor((Math.random() * 3) + 1)
    const img = document.getElementById("afbeelding");
    if (kpc === 1) { img.src = `blad.png`; }
    if (kpc === 2) { img.src = `steen.png`; }
    if (kpc === 3) { img.src = `schaar.png`; }

if(keuze === 1 && kpc === 2 || keuze === 2 && kpc === 3 || keuze === 3 && kpc === 1 ){document.getElementById("uitslag").innerText = ("gewonnen");}
if(keuze === 2 && kpc === 1 || keuze === 3 && kpc === 2 || keuze === 1 && kpc === 3 ){ document.getElementById("uitslag").innerText = ("verloren");}
if(keuze === 1 && kpc === 1 || keuze === 2 && kpc === 2 || keuze === 3 && kpc === 3 ){  document.getElementById("uitslag").innerText = ("gelijk");}
}

