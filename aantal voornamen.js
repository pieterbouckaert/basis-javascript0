"use strict";
const voornamenlijst = document.getElementById("voornamen");
const voornaamInput = document.getElementById("voornaam");
document.getElementById("toevoegen").onclick = function () {

    const naam = voornaamInput.value;
    const gevondenListitem = zoekListItemMetNaam(naam);
    if (gevondenListitem === null) {
        voegNaamtoe(naam);
    } else {
        verhoogAantal(gevondenListitem);
    }
};


function verhoogAantal(li) {
    li.dataset.aantal = Number(li.dataset.aantal) + 1;
    li.innerText = li.dataset.naam + li.dataset.aantal
}

function zoekListItemMetNaam(naam) {
    const listMetLi = voornamenlijst.querySelectorAll("li")
    for (const li of listMetLi) {
        if (naam === li.dataset.naam) {
            return li
        }
    }
    return null
}
function voegNaamtoe(naam) {
    const li = document.createElement("li");
    li.dataset.naam = naam;
    li.dataset.aantal = 1;
    li.innerText = li.dataset.naam + "1";
    document.getElementById("voornamen").appendChild(li);
}
function reset() {
    const voornaamInput = document.getElementById("voornaam");
    voornaamInput.value = "";
    voornaamInput.focus();
}