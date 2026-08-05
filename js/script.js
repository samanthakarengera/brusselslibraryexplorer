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

        console.log(fout);

    }

}

laadBibliotheken();

function toonBibliotheken(lijst) {

    const container = document.getElementById("bibliotheken");

    container.innerHTML = "";

    if (lijst.length == 0) {

        container.innerHTML = "<p>Geen bibliotheken gevonden.</p>";
        return;

    }

    lijst.forEach((bib, index) => {

        container.innerHTML += `

        <div class="kaart">

            <h3>${bib.naam}</h3>

            <p><strong>Adres:</strong> ${bib.adres}</p>

            <p><strong>Gemeente:</strong> ${bib.gemeente}</p>

            <p><strong>Postcode:</strong> ${bib.postcode}</p>

            <p><strong>Taal:</strong> ${bib.taal}</p>
          
            <div class="knoppen">

            <button class="details" data-id="${index}">
             Details
            </button>

             <a href="${bib.maps}" target="_blank">

            <button>Google Maps</button>

             </a>

</div>

        </div>

        `;

    });

}

function vulPostcodes() {

    const select = document.getElementById("postcode");

    select.innerHTML = `
        <option value="alles">Alle postcodes</option>
    `;

    let lijst = [];

    bibliotheken.forEach(bib => {

        if (!lijst.includes(bib.postcode)) {

            lijst.push(bib.postcode);

        }

    });

    lijst.sort();

    lijst.forEach(code => {

        select.innerHTML += `
            <option value="${code}">
                ${code}
            </option>
        `;

    });

}

function filterBibliotheken() {

    let resultaat = [...bibliotheken];

    const zoek =
        document.getElementById("zoek").value.toLowerCase();

    if (zoek != "") {

        resultaat = resultaat.filter(bib =>

            bib.naam.toLowerCase().includes(zoek)

        );

    }

    const taal =
        document.getElementById("taal").value;

    if (taal != "alles") {

        resultaat = resultaat.filter(bib =>

            bib.taal == taal

        );

    }

    const postcode =
        document.getElementById("postcode").value;

    if (postcode != "alles") {

        resultaat = resultaat.filter(bib =>

            bib.postcode == postcode

        );

    }

    const sorteren =
        document.getElementById("sorteren").value;

    resultaat.sort((a, b) => {

        if (sorteren == "az") {

            return a.naam.localeCompare(b.naam);

        }

        return b.naam.localeCompare(a.naam);

    });

    toonBibliotheken(resultaat);

}

document.getElementById("zoek")
.addEventListener("input", filterBibliotheken);

document.getElementById("taal")
.addEventListener("change", filterBibliotheken);

document.getElementById("postcode")
.addEventListener("change", filterBibliotheken);

document.getElementById("sorteren")
.addEventListener("change", filterBibliotheken);