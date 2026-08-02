const frUrl =
"https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_francophones_vbx/records?limit=100";

const nlUrl =
"https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_neerlandophones_vbx/records?limit=100";

let bibliotheken = [];

async function laadBibliotheken() {

    try {

        const antwoordFr = await fetch(frUrl);
        const antwoordNl = await fetch(nlUrl);

        const frData = await antwoordFr.json();
        const nlData = await antwoordNl.json();

        const fr = frData.results.map(bib => ({
            ...bib,
            taal: "Franstalig"
        }));

        const nl = nlData.results.map(bib => ({
            ...bib,
            taal: "Nederlandstalig"
        }));

        bibliotheken = [...fr, ...nl];
        vulPostcodes();
        filterBibliotheken();

    }

    catch (fout) {

        console.log("Fout:", fout);

    }

}

laadBibliotheken();

// Bibliotheken tonen

function toonBibliotheken(lijst) {

    const container = document.getElementById("bibliotheken");

    container.innerHTML = "";

    lijst.forEach(bib => {

        const naam =
            bib.name_nl ||
            bib.name_fr ||
            bib.naam ||
            "Geen naam";

        const adres =
            bib.address_nl ||
            bib.address_fr ||
            bib.adres ||
            "-";

        const postcode =
            bib.postalcode ||
            bib.code_postal_postcode ||
            "-";

        container.innerHTML += `

        <div class="kaart">

            <h3>${naam}</h3>

            <p><strong>Adres:</strong> ${adres}</p>

            <p><strong>Postcode:</strong> ${postcode}</p>

            <p><strong>Taal:</strong> ${bib.taal}</p>

            <div class="knoppen">

                <button>Details</button>

            </div>

        </div>

        `;

    });

}

// Postcodes vullen

function vulPostcodes() {

    const select = document.getElementById("postcode");

    const lijst = [];

    bibliotheken.forEach(bib => {

        const code =
            bib.postalcode ||
            bib.code_postal_postcode;

        if (code && !lijst.includes(code)) {

            lijst.push(code);

        }

    });

    lijst.sort();

    lijst.forEach(code => {

        select.innerHTML +=
            `<option value="${code}">${code}</option>`;

    });

}

// Filteren en sorteren


function filterBibliotheken() {

    let resultaat = [...bibliotheken];

    // Zoekfunctie

    const zoek =
        document.getElementById("zoek").value.toLowerCase();

    if (zoek != "") {

        resultaat = resultaat.filter(bib => {

            const naam =
                bib.name_nl ||
                bib.name_fr ||
                "";

            return naam.toLowerCase().includes(zoek);

        });

    }

    // Taal

    const taal =
        document.getElementById("taal").value;

    if (taal != "alles") {

        resultaat = resultaat.filter(bib =>

            bib.taal == taal

        );

    }

    // Postcode

    const postcode =
        document.getElementById("postcode").value;

    if (postcode != "alles") {

        resultaat = resultaat.filter(bib => {

            const code =
                bib.postalcode ||
                bib.code_postal_postcode;

            return code == postcode;

        });

    }

    // Sorteren

    const sorteren =
        document.getElementById("sorteren").value;

    resultaat.sort((a, b) => {

        const naamA =
            a.name_nl ||
            a.name_fr ||
            "";

        const naamB =
            b.name_nl ||
            b.name_fr ||
            "";

        if (sorteren == "az") {

            return naamA.localeCompare(naamB);

        }

        return naamB.localeCompare(naamA);

    });

    toonBibliotheken(resultaat);

}
// Events

document.getElementById("zoek")
.addEventListener("input", filterBibliotheken);

document.getElementById("taal")
.addEventListener("change", filterBibliotheken);

document.getElementById("postcode")
.addEventListener("change", filterBibliotheken);

document.getElementById("sorteren")
.addEventListener("change", filterBibliotheken);