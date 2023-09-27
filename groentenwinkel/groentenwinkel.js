"use strict";

/*aanmaken keuzelijst*/
leesGroenten();
async function leesGroenten() {
    const response = await fetch("groenten.json")
    if (response.ok) {
        const groenten = await response.json();
        for (const groente of groenten) {
            var opt = document.createElement("option")
            opt.value = groente.prijs;
            opt.setAttribute("id",groente.naam)
            opt.setAttribute("data-naam" , groente.naam )
            opt.innerText = groente.naam + " €" +groente.prijs  + "/" + groente.eenheid;
            document.getElementById("groente").appendChild(opt)
        }
    }
}

/*maken en aanpassen tabel*/
/*controle*/
document.getElementById("toevoegen").onclick = function(){
  
    verbergAlleFoutMeldingen();
    let allesOK = true;
    if (!document.getElementById("groente").checkValidity()) {
        document.getElementById("knopFeedback").hidden = false;
        allesOK = false;
    }
    if (!document.getElementById("aantal").checkValidity()) {
        document.getElementById("knopFeedback2").hidden = false;
        allesOK = false;
    }
    if(allesOK === true){
        verwerkIngave();

    }
}

/*aanmaaken rijen*/
function verwerkIngave(){
const tbody = document.querySelector("tbody");

const tr = tbody.insertRow();

const groenteTd = tr.insertCell();
groenteTd.innerText = document.getElementById("groente").naam;

const aantalTd = tr.insertCell();
aantalTd.innerText = document.getElementById("aantal").value;

const prijsEnkelTd = tr.insertCell();
prijsEnkelTd.innerText = document.getElementById("groente").value;

const teBetalenTd = tr.insertCell();
teBetalenTd.innerText = Number(aantalTd.innerText*prijsEnkelTd.innerText);

const wisimTd = tr.insertCell();
const img = document.createElement("img");
img.src = "vuilbak.png";
wisimTd.appendChild(img);


/*totaalberekenen*/

document.getElementById("totaalprijs").innerText= "€"+1

}
function verbergAlleFoutMeldingen() {
    for (const melding of document.querySelectorAll("span.fout")) {
        melding.hidden = true;
    }
}