# Brussels Library Explorer

## Projectbeschrijving

Brussels Library Explorer is een interactieve webapplicatie waarmee gebruikers openbare bibliotheken in Brussel kunnen ontdekken.

De applicatie maakt gebruik van de Open Data Brussels API. De gegevens van Nederlandstalige en Franstalige openbare bibliotheken worden gecombineerd in één overzicht. Hierdoor hoeft de gebruiker niet tussen verschillende datasets te zoeken.

De gebruiker kan bibliotheken zoeken, filteren en sorteren. Daarnaast kan een bibliotheek als favoriet worden opgeslagen, kunnen de details van een bibliotheek bekeken worden en kan de locatie rechtstreeks op Google Maps worden geopend.

Dit project werd individueel ontwikkeld voor het vak **Dynamic Web** door mij, Samantha Karengera.

---

# Doel van de applicatie

Het doel van Brussels Library Explorer is om het zoeken naar openbare bibliotheken in Brussel eenvoudiger te maken.

In plaats van verschillende websites of datasets te moeten bekijken, krijgt de gebruiker één overzicht met bibliotheken uit beide taalgroepen.

De applicatie bevat verschillende filters en interactieve functies zodat de gebruiker snel een bibliotheek kan vinden die aan zijn of haar voorkeuren voldoet.

---

# Gebruikte datasets

De applicatie gebruikt twee datasets van **Open Data Brussels**.

## Franstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_francophones_vbx/

## Nederlandstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_neerlandophones_vbx/

De twee datasets worden via de API opgehaald en vervolgens in JavaScript gecombineerd tot één array.
De gegevens worden tijdens het laden van de website opgehaald. 

Voor beide datasets wordt in JavaScript een taal toegevoegd:

- Franstalige dataset → `Franstalig`
- Nederlandstalige dataset → `Nederlandstalig`

Daarna worden beide lijsten samengevoegd.

Elke bibliotheek bevat onder andere:

- Naam
- Adres
- Gemeente
- Postcode
- Taal
- Telefoonnummer
- Google Maps locatie

---

# Functionaliteiten

## Data ophalen en weergeven

De applicatie haalt de bibliotheken automatisch op via de Open Data Brussels API.
De gegevens worden daarna als overzichtelijke kaarten weergegeven.

Elke kaart toont:

- Naam van de bibliotheek
- Adres
- Gemeente
- Postcode
- Taal
- Favorietenknop
- Details-knop
- Kaart-knop

---

## Zoeken

De gebruiker kan zoeken op de naam van een bibliotheek.
De resultaten worden onmiddellijk aangepast wanneer de gebruiker tekst invoert.

---

## Filteren op taal

De gebruiker kan filteren op:

- Alle talen
- Nederlandstalig
- Franstalig

De filter wordt toegepast op de taal die tijdens het ophalen van de API-data aan elke bibliotheek wordt toegevoegd.

---

## Filteren op postcode

De gebruiker kan een postcode selecteren.

De beschikbare postcodes worden automatisch uit de opgehaalde bibliotheken gehaald en in de keuzelijst geplaatst.

Hierdoor bevat de filter alleen postcodes die daadwerkelijk in de dataset voorkomen.

---

## Sorteren

De gebruiker kan de bibliotheken alfabetisch sorteren:

- A-Z
- Z-A

Dit gebeurt met de JavaScript `sort()` methode.

---

## Favorieten

Gebruikers kunnen bibliotheken toevoegen aan hun favorieten door op het hartje te klikken.

De favorieten worden opgeslagen in `localStorage`.

Hierdoor blijven de favoriete bibliotheken bewaard wanneer de gebruiker de pagina verlaat of de browser opnieuw opent.

Op de aparte **Favorieten**-pagina worden de opgeslagen bibliotheken weergegeven.

De gebruiker kan een bibliotheek daar ook weer verwijderen uit de favorieten.

---

## Detailvenster

Elke bibliotheek heeft een knop **Details**.

Wanneer de gebruiker hierop klikt, wordt een detailvenster geopend.

Het detailvenster toont extra informatie zoals:

- Naam
- Adres
- Gemeente
- Postcode
- Taal
- Telefoonnummer
- Link naar Google Maps

Het venster kan gesloten worden met het kruisje of door buiten het venster te klikken.

---

## Google Maps

Elke bibliotheek heeft een **Kaart**-knop.

Deze gebruikt de `google_maps`-informatie uit de dataset.

Wanneer de gebruiker op de knop klikt, wordt de locatie van de bibliotheek geopend in Google Maps.

---

## About-pagina

De About-pagina geeft informatie over:

- Het doel van Brussels Library Explorer
- De gebruikte datasets
- De belangrijkste functionaliteiten
- De gebruikte databron

---

## Contactpagina

De Contactpagina bevat een eenvoudig contactformulier.

Het formulier bevat:

- Naam
- E-mailadres
- Bericht

De velden zijn verplicht en het e-mailadres wordt gecontroleerd met HTML-formuliervalidatie.

Na het versturen wordt een eenvoudige bevestiging getoond.

---

## Responsive design

De website is ontworpen zodat de inhoud ook op kleinere schermen bruikbaar blijft.

De kaarten, navigatie, filters en detailvensters worden aangepast aan verschillende schermformaten met behulp van CSS media queries.

---

# Gebruikte technologieën

## Front-end

- HTML5
- CSS3
- JavaScript ES6

## Data

- Open Data Brussels API
- JSON
- Fetch API

## Opslag

- LocalStorage

## Versiebeheer

- Git
- GitHub

---

# JavaScript-concepten

Voor dit project zijn verschillende JavaScript-concepten uit de cursus toegepast.

## DOM manipulatie

De DOM wordt gebruikt om HTML-elementen te selecteren en dynamisch aan te passen.

Voorbeelden:

- Bibliotheken op de pagina plaatsen
- Bibliotheekkaarten dynamisch maken
- Filters uitlezen
- Het detailvenster openen en sluiten
- Favorieten weergeven
- Gebruikersinput verwerken

Er wordt onder andere gebruikgemaakt van:

```javascript
document.getElementById()

document.getElementById()

---

# Installatie en gebruik
## Vereisten

Voor dit project heb je nodig:

- Visual Studio Code
- Een webbrowser
- De extensie Live Server
- Een internetverbinding voor de Open Data Brussels API

---

## 1. Repository clonen

Open een terminal en gebruik:

git clone https://github.com/samanthakarengera/brusselslibraryexplorer


## 2. Project openen

Open de gedownloade map BrusselsLibraryExplorer in Visual Studio Code.

## 3. Live Server installeren

Open in Visual Studio Code het Extensions-menu en zoek naar Live Server.

Installeer deze extensie.

## 4. Website starten

Open het bestand index.html.

Klik met de rechtermuisknop op het bestand en kies Open with Live Server.

De website wordt daarna automatisch geopend in de browser.

---

## De website gebruiken
### Homepagina

Op de homepagina worden alle bibliotheken uit beide datasets weergegeven.

De gebruiker kan:

- Zoeken op de naam van een bibliotheek.
- Filteren op taal.
- Filteren op postcode.
- Sorteren op naam.
- Een bibliotheek toevoegen aan favorieten.
- Details van een bibliotheek bekijken.
- De locatie van een bibliotheek openen in Google Maps.

---

### Favorieten

Klik in de navigatie op Favorieten.

Hier worden alle opgeslagen favoriete bibliotheken weergegeven.

Een bibliotheek kan verwijderd worden met de knop Verwijderen.

---

### Details

Klik bij een bibliotheek op Details.

Er verschijnt een detailvenster met extra informatie.

Het venster kan gesloten worden met het kruisje of door buiten het venster te klikken.

---

### Kaart

Klik op Kaart om de locatie van een bibliotheek in Google Maps te openen.

---

### Contact

Op de Contactpagina kan de gebruiker een naam, e-mailadres en bericht invullen.

---

# GitHub

De volledige broncode van het project staat op GitHub:

https://github.com/samanthakarengera/brusselslibraryexplorer

Tijdens de ontwikkeling werd gewerkt met meerdere duidelijke commits.

---

# Bronnen
## Open Data Brussels

De bibliotheekgegevens zijn afkomstig van Open Data Brussels:

https://opendata.brussels.be/

Franstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_francophones_vbx/

Nederlandstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_neerlandophones_vbx/

Franstalige bibliotheken API

https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_francophones_vbx/records?limit=100

Nederlandstalige bibliotheken API

https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bibliotheques_publiques_neerlandophones_vbx/records?limit=100

---

## Google Maps

De Google Maps-links worden gebruikt om de locatie van een bibliotheek te openen.

De links naar de locaties komen rechtstreeks uit de gebruikte Open Data Brussels dataset.

---

## ChatGPT

ChatGPT werd gebruikt als ondersteuning tijdens de ontwikkeling van het project voor:

- Debugging
- CSS-problemen
- Local Storage
- Responsive design
- Opschonen van code
- README-documentatie
- Checklist bijhouden

---