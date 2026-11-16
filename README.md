# sproutyard.com

The website for SproutYard: we build and buy software.

The site is plain HTML and CSS in `site/`, with no build step. GitHub Actions
publishes `site/` to GitHub Pages on every push to `main`.

| Path | Contents |
| --- | --- |
| `site/index.html` | Home page |
| `site/contact.js` | Sends the contact form without leaving the page |
| `site/kids.html` | Kids apps privacy policy (`/kids`) |
| `site/mighty-timer.html` | Redirect to Mighty Timer on the App Store |
| `site/home.html`, `about.html`, `contact.html`, `cart.html` | Redirects for old URLs |
| `site/404.html` | Not-found page |
| `site/styles.css` | All styles |
| `site/assets/` | Logo and product icons |
| `site/fonts/` | Geist and Geist Mono, under the SIL Open Font License |

## Contact form

The form posts to [Web3Forms](https://web3forms.com). The access key in
`site/index.html` is public by design: it only lets visitors send messages to
the inbox it was registered for.

## Local preview

```sh
npx serve site
```

## License

© Sprout Yard Mobile Inc. All rights reserved. The fonts in `site/fonts/` are
licensed separately under the SIL Open Font License.
