gae-static
================
Using git push, you can update and host your static HTMl site on Google App Engine (for free with global CDN and all that good stuff).

1. Fork this repository
2. Place your static files inside public folder
3. Change app.yaml to the name of your app and version.
4. Set up "push to deploy" at developers.google.com/console > Source Code > Releases > Create Pipeline pointing to the new repo

Usage Instructions
==================
The site's default text content is located in `public/locales/default/translation.json`. The i18n translation files are located at `public/locales/your-locale/translation.json`.

If you'd like to try a different language without changing your system language, you can set it in a query string. Here's an example for Spanish : **http://localhost:8080/?setLng=es**



