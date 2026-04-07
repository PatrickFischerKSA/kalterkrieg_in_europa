# kalterkrieg_in_europa

Interaktive Lernlandschaft zum Kalten Krieg und zur deutschen Teilung.

## Enthalten

- 6 didaktisch geordnete Stationen
- eingebundene Dropbox-Videos
- lokale PDFs, DOCX-Dateien und MP3s im Projekt
- Lehrpersonenmodus mit Zeitbedarf, Diagnosefokus und Fehlvorstellungen
- Sofortkorrektur fuer:
  - Single Choice
  - Mehrfachauswahl
  - kurze Freitextantworten mit Synonymerkennung
  - offene Transferfragen mit strengerer Struktur- und Materialpruefung

## Start

Die Lernlandschaft ist eine statische Web-App. `index.html` direkt im Browser oeffnen oder den Ordner ueber einen einfachen lokalen Server ausliefern.

## GitHub Pages

- Repo-Name: `kalterkrieg_in_europa`
- Alle lokalen Verweise sind relativ und damit GitHub-Pages-tauglich.
- Fuer die Startseite sind `assets/favicon.svg`, `assets/social-preview.svg` und `404.html` angelegt.
- Es wird kein Backend benoetigt.

## Struktur

- `index.html`: Layout der Lernlandschaft
- `styles.css`: Gestaltung
- `data.js`: Module, Materialien und Fragen
- `app.js`: Navigation, Fortschritt, Sofortkorrektur, Synonymerkennung
- `assets/materials/`: lokale PDFs und DOCX-Dateien
- `assets/audio/`: lokale MP3-Dateien
