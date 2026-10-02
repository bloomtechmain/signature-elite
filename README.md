# Signature Elite Group website

Static site (HTML + Tailwind CDN + vanilla JS). No build step.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Structure
    index.html, about.html, services.html, contact.html
    css/styles.css        shared styles (service popup, bands, header/footer)
    js/images.js          image registry (logos, stock photos, per-card images)
    js/modal.js           service popups (content in SERVICE_DATA)
    js/main.js            nav, reveal animations, forms
    assets/logo|images|videos   files used by the site
    docs/PROJECT-LOG.md   build history
    _unused/              files not referenced by the site (review, then delete)

## Direct links to the service popups
    services.html?service=cleaning
    services.html?service=construction

After editing js/ or css/ files, bump the `?v=` number in the four HTML pages.
