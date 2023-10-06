"use strict";


/*aanmaken keuzelijst*/
leesCursussen();
async function leesCursussen() {
    const response = await fetch("cursussen.json")
    if (response.ok) {
        const cursussen = await response.json();
        for (const cursus of cursussen) {
            var opt = document.createElement("option")
            opt.value = cursus.naam;
            opt.dataset.prijs = cursus.prijs;
            opt.dataset.duurtijd = cursus.duurtijd
            opt.innerText = cursus.naam
            document.getElementById("cursus").appendChild(opt)
        }
    }
}
/*info keuze cursus*/
document.getElementById("cursus").onchange = function () {
    if (cursus.options[cursus.selectedIndex].value === "") {
        document.getElementById("cursusDetail").hidden = true
    } else {
        document.getElementById("cursusDetail").hidden = false
        const gekozenOption = cursus.options[cursus.selectedIndex];
        const duurtijd = gekozenOption.dataset.duurtijd;
        const prijs = gekozenOption.dataset.prijs;
        document.getElementById("duurtijd").innerText = duurtijd
        document.getElementById("prijsCursus").innerText = "€" + prijs
    }
}


/*controle gegevens*/
document.getElementById("verzenden").onclick = function () {
    persoongegevensControle();
    bestelgegevensControle()

}
var delayInMilliseconds = 1000;
setTimeout(function () {
    bestelgegevens();


}, delayInMilliseconds);



/*aanmaken houtlijst*/
leesHout();
async function leesHout() {
    const response = await fetch("houtsoorten.json")
    if (response.ok) {
        const houtsoorten = await response.json();
        for (const hout of houtsoorten) {
            var houtsoort = document.createElement("div")
            var tekst = document.createElement("label")
            var checkbox = document.createElement("input")
            var aantalingaveclass = document.createElement("div")
            var aantalingave = document.createElement("div")
            var textvlak = document.createElement("input")
            var houteenheid = document.createElement("span")
            houtsoort.classList.add("control-group")
            tekst.classList.add("control-label")
            tekst.innerText = hout.naam + " "
            checkbox.id = "chk_" + hout.naam + "";
            checkbox.type = "checkbox"
            aantalingaveclass.classList.add("controls")
            aantalingave.classList.add("input-append")
            textvlak.classList.add("inpbox")
            textvlak.classList.add("input-mini")
            textvlak.toggleAttribute("required")
            textvlak.type = "number"
            textvlak.min = "1"
            textvlak.id = hout.naam;
            textvlak.name = hout.naam;
            textvlak.toggleAttribute("disabled")
            houteenheid.classList.add("add-on")
            houteenheid.innerText = hout.eenheid

            document.getElementById("houtsoorten").appendChild(houtsoort)
            houtsoort.append(tekst)
            tekst.append(checkbox)
            houtsoort.append(aantalingaveclass)
            aantalingaveclass.append(aantalingave)
            aantalingave.append(textvlak)
            aantalingave.append(houteenheid)
        }
    }
}


function persoongegevensControle() {
    document.getElementById("persoonBoodschappen").hidden = true;
    const persoonBoodschappenLijst = document.querySelector('#persoonBoodschappenLijst');
    wisAllChildNodes(persoonBoodschappenLijst);

    if (!document.getElementById("naam").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutNaam = document.createElement("li")
        foutNaam.innerText = "geef een naam in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutNaam)
    }
    if (!document.getElementById("voornaam").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutVoornaam = document.createElement("li")
        foutVoornaam.innerText = "geef een voornaam in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutVoornaam)
    }
    if (!document.getElementById("straat").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutStraat = document.createElement("li")
        foutStraat.innerText = "geef een straat in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutStraat)
    }
    if (!document.getElementById("huisnummer").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutHuisnummer = document.createElement("li")
        foutHuisnummer.innerText = "geef een huisnummer in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutHuisnummer)
    }
    if (!document.getElementById("gemeente").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutGemeente = document.createElement("li")
        foutGemeente.innerText = "kies een gemeente"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutGemeente)
    }
    if (!document.getElementById("telefoon").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutTelefoon = document.createElement("li")
        foutTelefoon.innerText = "geef een telefoonnummer in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutTelefoon)
    }
    if (!document.getElementById("email").checkValidity()) {
        document.getElementById("persoonBoodschappen").hidden = false;
        var foutEmail = document.createElement("li")
        foutEmail.innerText = "geef een e-mail in"
        document.getElementById("persoonBoodschappenLijst").appendChild(foutEmail)
    }
}

function bestelgegevensControle() {
    document.getElementById("bestelBoodschappen").hidden = true;
    const bestelBoodschappenLijst = document.querySelector('#bestelBoodschappenLijst');
    wisAllChildNodes(bestelBoodschappenLijst);
    
    if (!document.getElementById("bangkirai").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutBangkirai = document.createElement("li")
        foutBangkirai.innerText = " bangkirai tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutBangkirai)
    }
    if (!document.getElementById("beukenhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutBeukenhout = document.createElement("li")
        foutBeukenhout.innerText = "beukenhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutBeukenhout)
    }
    if (!document.getElementById("dennenhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutDennenhout = document.createElement("li")
        foutDennenhout.innerText = "dennenhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutDennenhout)
    }
    if (!document.getElementById("eikenhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutEeikenhout = document.createElement("li")
        foutEeikenhout.innerText = "eikenhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutEeikenhout)
    }
    if (!document.getElementById("kastanjehout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutKastanjehout = document.createElement("li")
        foutKastanjehout.innerText = "kastanjehout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutKastanjehout)
    }
    if (!document.getElementById("lindehout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutLindehout = document.createElement("li")
        foutLindehout.innerText = "lindehout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutLindehout)
    }
    if (!document.getElementById("notenhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutNotenhout = document.createElement("li")
        foutNotenhout.innerText = "notenhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutNotenhout)
    }
    if (!document.getElementById("rubberhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutRubberhout = document.createElement("li")
        foutRubberhout.innerText = "rubberhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutRubberhout)
    }
    if (!document.getElementById("cederhout").checkValidity()) {
        document.getElementById("bestelBoodschappen").hidden = false;
        var foutCederhout = document.createElement("li")
        foutCederhout.innerText = "cederhout tik een posetief getal"
        document.getElementById("bestelBoodschappenLijst").appendChild(foutCederhout)
    }
}

function bestelgegevens() {
    document.getElementById("chk_bangkirai").onchange = function () {
        document.getElementById("bangkirai").disabled = !this.checked
    }
    document.getElementById("chk_beukenhout").onchange = function () {
        document.getElementById("beukenhout").disabled = !this.checked
    }
    document.getElementById("chk_dennenhout").onchange = function () {
        document.getElementById("dennenhout").disabled = !this.checked
    }
    document.getElementById("chk_eikenhout").onchange = function () {
        document.getElementById("eikenhout").disabled = !this.checked
    }
    document.getElementById("chk_kastanjehout").onchange = function () {
        document.getElementById("kastanjehout").disabled = !this.checked
    }
    document.getElementById("chk_lindehout").onchange = function () {
        document.getElementById("lindehout").disabled = !this.checked
    }
    document.getElementById("chk_notenhout").onchange = function () {
        document.getElementById("notenhout").disabled = !this.checked
    }
    document.getElementById("chk_rubberhout").onchange = function () {
        document.getElementById("rubberhout").disabled = !this.checked
    }
    document.getElementById("chk_cederhout").onchange = function () {
        document.getElementById("cederhout").disabled = !this.checked
    }
}

function wisAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}







