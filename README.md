# kalterkrieg_in_europa

Interaktive Lernlandschaft zum Kalten Krieg und zur deutschen Teilung.

Statische GitHub-Pages-Lernumgebung mit 6 Stationen, Freischaltlogik, Sofortkorrektur und passwortgeschütztem Lehrer*innenzugang.

## Enthalten

- 6 didaktisch geordnete Stationen
- eingebundene Dropbox-Videos
- lokale PDFs, DOCX-Dateien und MP3s im Projekt
- Lehrpersonenmodus mit Zeitbedarf, Diagnosefokus und Fehlvorstellungen
- Modulfreischaltung: Das nächste Modul wird erst ab 60 % im vorangehenden Modul geöffnet
- Lehrer*innenzugang mit Passwort: `kalter_krieg`
- Sofortkorrektur für:
  - Single Choice
  - Mehrfachauswahl
  - kurze Freitextantworten mit Synonymerkennung
  - offene Transferfragen mit strengerer Struktur- und Materialprüfung

## Start

Die Lernlandschaft ist eine statische Web-App. `index.html` direkt im Browser öffnen oder den Ordner über einen einfachen lokalen Server ausliefern.

## GitHub Pages

- Repo-Name: `kalterkrieg_in_europa`
- Alle lokalen Verweise sind relativ und damit GitHub-Pages-tauglich.
- Für die Startseite sind `assets/favicon.svg`, `assets/social-preview.svg` und `404.html` angelegt.
- Es wird kein Backend benötigt.
- Deployment erfolgt über `.github/workflows/pages.yml`.

## Release-Stand

- Version: `v1.0.0`
- Stand: erste vollständige Deploy-Version mit Freischaltmechanismus und Lehrer*innenzugang

## Struktur

- `index.html`: Layout der Lernlandschaft
- `styles.css`: Gestaltung
- `data.js`: Module, Materialien und Fragen
- `app.js`: Navigation, Fortschritt, Sofortkorrektur, Synonymerkennung
- `.github/workflows/pages.yml`: automatisches GitHub-Pages-Deployment
- `assets/materials/`: lokale PDFs und DOCX-Dateien
- `assets/audio/`: lokale MP3-Dateien
