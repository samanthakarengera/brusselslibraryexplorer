# Brussels Library Explorer

## Projectbeschrijving

Brussels Library Explorer is een interactieve webapplicatie waarmee gebruikers openbare bibliotheken in Brussel kunnen ontdekken.

De applicatie maakt gebruik van de Open Data Brussels API en combineert zowel de Nederlandstalige als de Franstalige bibliotheken in één overzicht. Hierdoor hoeft de gebruiker niet tussen verschillende datasets te zoeken.

Gebruikers kunnen bibliotheken zoeken, filteren en sorteren om sneller de gewenste bibliotheek te vinden.

Dit project werd ontwikkeld voor het vak **Dynamic Web**.

---

# Gebruikte datasets

De applicatie gebruikt twee datasets van Open Data Brussels.

## Franstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_francophones_vbx/

## Nederlandstalige bibliotheken

https://opendata.brussels.be/explore/dataset/bibliotheques_publiques_neerlandophones_vbx/

De twee datasets worden tijdens het laden samengevoegd tot één lijst met bibliotheken.

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

## Beschikbaar

- ✅ Data ophalen via de Open Data Brussels API
- ✅ Twee datasets combineren tot één overzicht
- ✅ Bibliotheken weergeven als kaarten
- ✅ Zoeken op naam
- ✅ Filteren op taal
  - Alle talen
  - Nederlandstalig
  - Franstalig
- ✅ Filteren op postcode
- ✅ Automatisch alle beschikbare postcodes laden
- ✅ Sorteren op naam (A-Z en Z-A)
- ✅ Bibliotheken openen in Google Maps
- ✅ Favorieten opslaan

## Nog te ontwikkelen

- Detailvenster met extra informatie
- About-pagina
- Contactpagina
- Taalkeuze (Nederlands, Frans en Engels)
- Responsive verbeteringen
- Themawisselaar (licht/donker)

---

# Gebruikte technologieën

## Front-end

- HTML5
- CSS3
- JavaScript (ES6)

## Data

- Open Data Brussels API
- JSON
- Fetch API

## Versiebeheer

- Git
- GitHub

---


# Installatie

## Repository downloaden

Clone de repository.

```bash
git clone https://github.com/samanthakarengera/brusselslibraryexplorer
```

## Project openen

Open de map in Visual Studio Code.

## Website starten

Gebruik de extensie **Live Server**.

De website opent automatisch in de browser.

---

# JavaScript-concepten

## DOM manipulatie

Gebruikt voor:

- Bibliotheken weergeven
- Dynamisch kaarten maken
- Filters aanpassen
- Gebruikersinput verwerken

## Fetch API

De bibliotheekgegevens worden opgehaald via de Open Data Brussels API met:

```javascript
fetch()
```

## Async & Await

Omdat gegevens online worden opgehaald, wordt gebruikgemaakt van:

```javascript
async
await
```

## Arrays

De gegevens worden opgeslagen in arrays.

Gebruikte methodes:

- map()
- filter()
- sort()
- forEach()

## Template literals

Kaarten worden dynamisch opgebouwd met template literals.

```javascript
`${waarde}`
```

## Events

Gebruikte events:

- input
- change
- click

---

# Installatievereisten

- Visual Studio Code
- Live Server extensie
- Internetverbinding (voor de API)

---

# Bronvermelding

Open Data Brussels

https://opendata.brussels.be/

Gebruikte datasets:

- Nederlandstalige bibliotheken
- Franstalige bibliotheken

ChatGPT werd gebruikt als ondersteuning bij:

- JavaScript (soms)
- debugging
- documentatie
