# Brussels Library Explorer

## Projectbeschrijving

Brussels Library Explorer is een interactieve webapplicatie waarmee gebruikers bibliotheken in Brussel kunnen ontdekken.

De applicatie gebruikt open data van de stad Brussel en toont informatie over zowel Nederlandstalige als Franstalige openbare bibliotheken.

Gebruikers kunnen bibliotheken zoeken, filteren en sorteren om snel een geschikte locatie te vinden.

Dit project werd gemaakt voor het vak Dynamic Web.

---

# Gebruikte datasets

De applicatie gebruikt twee datasets van Open Data Brussels:

## Franstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_francophones_vbx/

## Nederlandstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_neerlandophones_vbx/


De twee datasets worden gecombineerd zodat de gebruiker één overzicht krijgt van Brusselse bibliotheken.

Elke bibliotheek bevat informatie zoals:

- Naam
- Adres
- Postcode
- Taal
- Locatiegegevens

---

# Functionaliteiten

## Momenteel beschikbaar

✅ Data ophalen via API  
✅ Twee datasets combineren  
✅ Bibliotheken weergeven als kaarten  
✅ Zoeken op bibliotheeknaam  
✅ Filteren op taal:
- Nederlandstalig
- Franstalig
- Alle talen
✅ Filteren op postcode  
✅ Automatisch beschikbare postcodes tonen


## Nog geplande functies

- Favorieten opslaan
- Detailpagina/detailvenster voor bibliotheken
- Sorteren op naam A-Z en Z-A
- Taalkeuze Nederlands/Frans/Engels
- Contactpagina
- Responsive verbeteringen voor mobiele toestellen


---

# Gebruikte technologieën

## Front-end

- HTML5
- CSS3
- JavaScript

## Data

- Open Data Brussels API
- JSON

## Opslag

- LocalStorage (wordt gebruikt voor favorieten)

## Versiebeheer

- GitHub

---

# Projectstructuur

```
BrusselsLibraryExplorer

│
├── index.html
│
├── favorites.html
│
├── about.html
│
├── contact.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
└── README.md
```

---

# Installatie

## 1. Repository downloaden

Clone de repository:

```
git clone https://github.com/samanthakarengera/brusselslibraryexplorer 
```

## 2. Open het project

Open de map in Visual Studio Code.

## 3. Start de website

Gebruik bijvoorbeeld de extensie:

```
Live Server
```

in Visual Studio Code.

De website opent daarna in de browser.

---

# JavaScript concepten gebruikt

## DOM manipulatie

Elementen worden geselecteerd en aangepast via JavaScript.

Voorbeelden:

- Bibliotheken toevoegen aan de pagina
- Filters aanpassen
- Kaarten genereren


## Fetch API

De data wordt opgehaald via:

```javascript
fetch()
```

De API geeft JSON-data terug die wordt verwerkt in JavaScript.


## Async/Await

Omdat de API-oproepen tijd nodig hebben wordt gewerkt met:

```javascript
async function
await
```


## Arrays

De bibliotheekgegevens worden opgeslagen in arrays.

Gebruikte methodes:

- map()
- filter()
- sort()
- forEach()


## Template literals

De HTML-kaarten worden dynamisch gemaakt met:

```javascript
`${waarde}`
```


# Bronvermelding

Open Data Brussels:
https://opendata.brussels.be/

ChatGPT werd gebruikt als ondersteuning bij:
- structuur van de code
- debugging
- documentatie

Alle code werd aangepast en begrepen tijdens de ontwikkeling van het project.