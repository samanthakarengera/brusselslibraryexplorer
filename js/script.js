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

        console.log(bibliotheken);

        toonBibliotheken(bibliotheken);
        vulGemeenten();

    }

    catch (fout) {

        console.log("Fout:", fout);

    }

}

laadBibliotheken();

function toonBibliotheken(lijst) {

    const container = document.getElementById("bibliotheken");

    container.innerHTML = "";

    lijst.forEach(bib => {

        const naam =
            bib.name_nl ||
            bib.name_fr ||
            bib.naam ||
            "Geen naam";

        const gemeente =
            bib.municipality_nl ||
            bib.municipality_fr ||
            bib.gemeente ||
            "-";

        const adres =
            bib.address_nl ||
            bib.address_fr ||
            bib.adres ||
            "-";

        container.innerHTML += `

        <div class="kaart">

            <h3>${naam}</h3>

            <p><strong>Adres:</strong> ${adres}</p>

            <p><strong>Gemeente:</strong> ${gemeente}</p>

            <p><strong>Taal:</strong> ${bib.taal}</p>

            <div class="knoppen">

                <button>Details</button>

            </div>

        </div>

        `;

    });

}

function vulGemeenten() {

    const gemeente = document.getElementById("gemeente");

    const lijst = [];

    bibliotheken.forEach(bib => {

        const naam =
            bib.municipality_nl ||
            bib.municipality_fr;

        if (naam && !lijst.includes(naam)) {

            lijst.push(naam);

        }

    });

    lijst.sort();

    lijst.forEach(item => {

        gemeente.innerHTML +=
            `<option value="${item}">${item}</option>`;

    });

}