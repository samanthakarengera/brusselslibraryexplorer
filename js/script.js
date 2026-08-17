const frUrl =
    "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_francophones_vbx/records?limit=100";

const nlUrl =
    "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_neerlandophones_vbx/records?limit=100";

let bibliotheken = [];


//API

async function laadBibliotheken() {

    try {

        const antwoordFr = await fetch(frUrl);
        const antwoordNl = await fetch(nlUrl);

        const frData = await antwoordFr.json();
        const nlData = await antwoordNl.json();


        const fr = frData.results.map(bib => ({

            naam: bib.name_nl,
            adres: bib.address_nl,
            gemeente: bib.municipality_nl,
            postcode: bib.postalcode,
            telefoon: bib.phone,
            website: bib.url_nl,
            maps: bib.google_maps,
            taal: "Franstalig"

        }));


        const nl = nlData.results.map(bib => ({

            naam: bib.name_nl,
            adres: bib.address_nl,
            gemeente: bib.municipality_nl,
            postcode: bib.postalcode,
            telefoon: bib.phone,
            website: bib.url_nl,
            maps: bib.google_maps,
            taal: "Nederlandstalig"

        }));


        bibliotheken = [...fr, ...nl];

        vulPostcodes();
        filterBibliotheken();

    }

    catch (fout) {

        console.log("Fout bij ophalen van data:", fout);

    }

}


laadBibliotheken();


//BIBLIOTHEKEN TONEN 

function toonBibliotheken(lijst) {

    const container = document.getElementById("bibliotheken");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    if (lijst.length === 0) {

        container.innerHTML =
            "<p>Geen bibliotheken gevonden.</p>";

        return;

    }


    lijst.forEach(bib => {

        const favorieten =
            JSON.parse(localStorage.getItem("favorieten")) || [];

        const isFavoriet = favorieten.some(
            favoriet => favoriet.naam === bib.naam
        );


        const hartje = isFavoriet ? "❤️" : "♡";


        container.innerHTML +=
            '<div class="kaart">' +

                '<h3>' + bib.naam + '</h3>' +

                '<p><strong>Adres:</strong> ' +
                    bib.adres +
                '</p>' +

                '<p><strong>Gemeente:</strong> ' +
                    bib.gemeente +
                '</p>' +

                '<p><strong>Postcode:</strong> ' +
                    bib.postcode +
                '</p>' +

                '<p><strong>Taal:</strong> ' +
                    bib.taal +
                '</p>' +

                '<div class="knoppen">' +

                    '<button class="favoriet" ' +
                        'data-naam="' + bib.naam + '">' +
                        hartje +
                    '</button>' +

                    '<button class="details" data-naam="' + bib.naam + '">' +
                        'Details' +
                    '</button>' +

                    '<a href="' + bib.maps + '" target="_blank">' +
                        '<button>Kaart</button>' +
                    '</a>' +

                '</div>' +

            '</div>';

    });


    voegFavorietEventsToe();

}


// ================= POSTCODES =================

function vulPostcodes() {

    const select =
        document.getElementById("postcode");

    if (!select) {
        return;
    }

    select.innerHTML =
        '<option value="alles">Alle postcodes</option>';


    const lijst = [];


    bibliotheken.forEach(bib => {

        if (
            bib.postcode &&
            !lijst.includes(bib.postcode)
        ) {

            lijst.push(bib.postcode);

        }

    });


    lijst.sort();


    lijst.forEach(code => {

        select.innerHTML +=
            '<option value="' + code + '">' +
                code +
            '</option>';

    });

}


// ================= FILTEREN =================

function filterBibliotheken() {

    let resultaat = [...bibliotheken];


    // Zoeken

    const zoekElement =
        document.getElementById("zoek");

    if (zoekElement) {

        const zoek =
            zoekElement.value.toLowerCase();


        if (zoek !== "") {

            resultaat = resultaat.filter(bib =>

                bib.naam.toLowerCase().includes(zoek)

            );

        }

    }

    const taalElement =
        document.getElementById("taal");

    if (taalElement) {

        const taal = taalElement.value;


        if (taal !== "alles") {
            resultaat = resultaat.filter(bib =>
                bib.taal === taal
            );
        }

    }


    const postcodeElement =
        document.getElementById("postcode");

    if (postcodeElement) {

        const postcode =
            postcodeElement.value;


        if (postcode !== "alles") {

            resultaat = resultaat.filter(bib =>

                bib.postcode === postcode

            );

        }

    }


    // Sorteren

    const sorterenElement =
        document.getElementById("sorteren");


    if (sorterenElement) {

        const sorteren =
            sorterenElement.value;


        resultaat.sort((a, b) => {

            if (sorteren === "az") {

                return a.naam.localeCompare(b.naam);

            }

            return b.naam.localeCompare(a.naam);

        });

    }


    toonBibliotheken(resultaat);
    voegFavorietEventsToe();
    voegDetailEventsToe();

}


// ================= FAVORIETEN =================

function voegFavorietToe(naam) {

    const bibliotheek =
        bibliotheken.find(bib => bib.naam === naam);
    if (!bibliotheek) {
        return;
    }


    let favorieten =
        JSON.parse(localStorage.getItem("favorieten")) || [];


    const bestaatAl =
        favorieten.some(
            bib => bib.naam === naam
        );


    if (bestaatAl) {

        favorieten =
            favorieten.filter(
                bib => bib.naam !== naam
            );

    }

    else {

        favorieten.push(bibliotheek);

    }


    localStorage.setItem(
        "favorieten",
        JSON.stringify(favorieten)
    );


    filterBibliotheken();

}


function voegFavorietEventsToe() {

    const knoppen =
        document.querySelectorAll(".favoriet");


    knoppen.forEach(knop => {

        knop.addEventListener("click", function () {

            const naam =
                this.dataset.naam;

            voegFavorietToe(naam);

        });

    });

}


// ================= FAVORIETEN PAGINA =================

function toonFavorieten() {

    const container =
        document.getElementById("favorieten");
    if (!container) {
        return;
    }


    const favorieten =
        JSON.parse(localStorage.getItem("favorieten")) || [];
    container.innerHTML = "";


    if (favorieten.length === 0) {

        container.innerHTML =
            '<div class="geen-favorieten">' +

                '<h3>Je hebt nog geen favorieten.</h3>' +

                '<p>' +
                    'Ga naar de homepagina om een ' +
                    'bibliotheek toe te voegen.' +
                '</p>' +

            '</div>';

        return;

    }


    favorieten.forEach(bib => {

        container.innerHTML +=

            '<div class="kaart">' +

                '<h3>' + bib.naam + '</h3>' +

                '<p><strong>Adres:</strong> ' +
                    bib.adres +
                '</p>' +

                '<p><strong>Gemeente:</strong> ' +
                    bib.gemeente +
                '</p>' +

                '<p><strong>Postcode:</strong> ' +
                    bib.postcode +
                '</p>' +

                '<p><strong>Taal:</strong> ' +
                    bib.taal +
                '</p>' +

                '<div class="knoppen">' +

                    '<a href="' + bib.maps +
                        '" target="_blank">' +

                        '<button>Kaart</button>' +

                    '</a>' +

                    '<button class="verwijder" ' +
                        'data-naam="' + bib.naam + '">' +

                        'Verwijderen' +

                    '</button>' +

                '</div>' +

            '</div>';

    });


    voegVerwijderEventsToe();

}


function voegVerwijderEventsToe() {

    const knoppen =
        document.querySelectorAll(".verwijder");


    knoppen.forEach(knop => {

        knop.addEventListener("click", function () {

            const naam =
                this.dataset.naam;


            let favorieten =
                JSON.parse(
                    localStorage.getItem("favorieten")
                ) || [];


            favorieten =
                favorieten.filter(
                    bib => bib.naam !== naam
                );


            localStorage.setItem(
                "favorieten",
                JSON.stringify(favorieten)
            );


            toonFavorieten();

        });

    });

}


// EVENTS 

const zoek =
    document.getElementById("zoek");

if (zoek) {
    zoek.addEventListener(
        "input",
        filterBibliotheken
    );
}


const taal =
    document.getElementById("taal");

if (taal) {
    taal.addEventListener(
        "change",
        filterBibliotheken
    );
}


const postcode =
    document.getElementById("postcode");

if (postcode) {
    postcode.addEventListener(
        "change",
        filterBibliotheken
    );
}


const sorteren =
    document.getElementById("sorteren");

if (sorteren) {
    sorteren.addEventListener(
        "change",
        filterBibliotheken
    );
}


toonFavorieten();


// ================= DETAIL VENSTER =================

function voegDetailEventsToe() {

    const knoppen =
        document.querySelectorAll(".details");


    knoppen.forEach(knop => {

        knop.addEventListener("click", function () {

            const naam =
                this.dataset.naam;


            const bibliotheek =
                bibliotheken.find(
                    bib => bib.naam === naam
                );


            if (!bibliotheek) {
                return;
            }
            document.getElementById("detailNaam").textContent =
                bibliotheek.naam;
            document.getElementById("detailAdres").textContent =
                bibliotheek.adres;
            document.getElementById("detailGemeente").textContent =
                bibliotheek.gemeente;
            document.getElementById("detailPostcode").textContent =
                bibliotheek.postcode;
            document.getElementById("detailTaal").textContent =
                bibliotheek.taal;
            document.getElementById("detailTelefoon").textContent =
                bibliotheek.telefoon || "Niet beschikbaar";
            document.getElementById("detailKaart").href =
                bibliotheek.maps;
            document.getElementById("detailVenster").style.display =
                "flex";

        });

    });

}

const sluiten =
    document.getElementById("sluiten");


if (sluiten) {

    sluiten.addEventListener("click", function () {

        document.getElementById("detailVenster").style.display =
            "none";

    });

}


// Sluiten wnr je naast het venster klikt

const detailVenster =
    document.getElementById("detailVenster");

if (detailVenster) {

    detailVenster.addEventListener("click", function(event) {

        if (event.target === detailVenster) {

            detailVenster.style.display = "none";

        }

    });

}