"use strict";
let teller = 0;
const groenteLijst = document.getElementById("tbody");
/*aanmaken keuzelijst*/
leesGroenten();
async function leesGroenten() {
    const response = await fetch("groenten.json")
    if (response.ok) {
        const groenten = await response.json();
        for (const groente of groenten) {
            var opt = document.createElement("option")
            opt.value = groente.naam;
            opt.dataset.prijs = groente.prijs;
            opt.innerText = groente.naam + " €" + groente.prijs + "/" + groente.eenheid;
            document.getElementById("groente").appendChild(opt)
        }
    }
}

/*maken en aanpassen tabel*/

document.getElementById("toevoegen").onclick = function () {
    const groente = document.getElementById("groente").value;
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
    if (allesOK === true) {
        const gevondenLijstitem = zoekListItemMetGroente(groente);
        if (gevondenLijstitem === null) {
          
            verwerkIngave(groente);
        } else {
            verhoogAantal(gevondenLijstitem);
        }
       
        totaalprijs();
        
    }
}

/*zoeken in lijst naar item*/
function zoekListItemMetGroente(groente) {
    const lijstMetGroenten = groenteLijst.querySelectorAll("tr")
    for (const tr of lijstMetGroenten) {
        if (groente === tr.dataset.naam) {
            return tr
        }
    }
    return null
}

/*aanmaaken rijen*/
function verwerkIngave() {

    
    const tbody = document.querySelector("tbody");

    const tr = tbody.insertRow();

    const groenteTd = tr.insertCell();
    groenteTd.innerText = document.getElementById("groente").value

    const aantalTd = tr.insertCell();
    aantalTd.innerText = document.getElementById("aantal").value;
    aantalTd.setAttribute("data-prijs", document.getElementById("aantal").value)

    const prijsEnkelTd = tr.insertCell();
    const  groent = document.getElementById("groente")
    const gekozenOption = groent.options[groent.selectedIndex]; 
    const prijs = gekozenOption.dataset.prijs; 
    prijsEnkelTd.innerText = prijs

    const teBetalenTd = tr.insertCell();
    teBetalenTd.innerText = Number(aantalTd.innerText * prijsEnkelTd.innerText);


    const wisimTd = tr.insertCell();
    const img = document.createElement("img");
    img.src = "vuilbak.png";
    wisimTd.appendChild(img);
}

/*rij wijzigen*/
function verhoogAantal() {
    li.dataset.aantal = Number(li.dataset.aantal) + 1;
    li.innerText = li.dataset.naam + li.dataset.aantal
}

/*totaalberekenen*/
function totaalprijs() {
    const lijst = tabel.querySelectorAll("tr")
    for (const lijstlijn of lijst) {


        teller++
    }

    document.getElementById("totaalprijs").innerText = "€" + teller;
}

/*controle*/
function verbergAlleFoutMeldingen() {
    for (const melding of document.querySelectorAll("span.fout")) {
        melding.hidden = true;
    }
}
