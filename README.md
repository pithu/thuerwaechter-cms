# thuerwaechter.de

Monorepo (lerna) mit zwei Paketen:

- `packages/react`: Website (React + Snowpack). Lädt die Inhalte zur Laufzeit von Sanity.
- `packages/cms`: Sanity Studio zum Pflegen der Inhalte (Projekt `7shyam02`, Dataset `production`).

## Bauen

```bash
npm install
npm run build            # baut beide Pakete
```

Ergebnis der Website: `packages/react/build/` (inkl. `.htaccess`, per `postbuild` kopiert).

Lokal ansehen:

```bash
cd packages/react
npm start                        # Dev-Server mit Hot Reload
npx serve build -l 8080          # fertigen Build testen
```

Port 8080 verwenden: Sanity erlaubt nur freigegebene Origins (CORS), sonst dreht der Lade-Spinner endlos.

## Seite aktualisieren

| Änderung | Was tun |
|---|---|
| **Inhalte** im Sanity Studio | Nichts, die Seite lädt sie live. |
| **Code** in `packages/react` | `npm run build`, dann den **Inhalt** von `packages/react/build/` per FTP ins Web-Root des Hetzner-Webspace laden (versteckte Dateien einblenden, damit `.htaccess` mitgeht). Hochladen: `.htaccess`, `index.html`, `js/`, `css/`, `blumenwiese.jpg`, `landbit-logo.svg`. **Nicht** hochladen: `_snowpack/` und `dist/` (ungebündelte Zwischenstände, werden nicht genutzt). Alte Dateien in `js/` und `css/` können vorher gelöscht werden. |
| **Schema** in `packages/cms` | `npm run deploy` im Root (Sanity-Login nötig). |

## Hosting

- Hetzner-Webspace, DNS in konsoleH. `thuerwaechter.de` und `www` zeigen auf `213.133.104.45`.
- `.htaccess` leitet auf `https://www.thuerwaechter.de` weiter.
- Neue Domains/Ports bei Sanity unter manage.sanity.io → API → CORS origins freigeben.
