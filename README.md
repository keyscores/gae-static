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

The background image, background video and redirect link are defined per HTML file in the body tag's attributes.

```
<body
	data-background-image="bg-keyscores.jpg"
	data-background-video="desktop-keyscores"
	data-redirect-link="https://demo.keyscores.com/ecommerce/default/autologin/c2573a3251800fd18a3c4c8f6c501a462cb6bd40?_next=/ecommerce/default/dashboard/14/%3FshowIntro=1">
```


- `data-background-image` - Filename of the background image to be used on small screens. This file is expected to reside in `public/img/`

- `data-background-video` - Filename (without extension) of the background video to be used on small screens. This file is expected to reside in `public/video/` and the allowed formats are .webm and .mp4.

- `data-redirect-link` - The link to redirect to once email form submission is complete.
