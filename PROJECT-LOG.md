# Signature Elite Group — Website Build Log

**Date:** 2026-09-21

## Summary

Built a complete 4-page static website for Signature Elite Group (premium
cleaning + construction company) from a reference screenshot, using HTML5,
Tailwind CSS (CDN), and vanilla JavaScript — no frameworks, no backend.

## What was built

- **Pages:** `index.html`, `about.html`, `services.html`, `contact.html`
- **Shared assets:** `css/styles.css`, `js/main.js`, `js/modal.js`,
  `js/contact.js`, `js/images.js` (centralized image registry)
- **Design system:** black / warm-white / gold accent palette, Playfair
  Display + Inter typography, sticky/blurring header, scroll-reveal
  animations, reduced-motion support
- **Service modal system:** full-screen popup for Cleaning and Construction
  (opened from Home, Services, and the nav dropdown) with an inline "Request
  a Quote" form — no page navigation, no scrolling required on common
  screen sizes, closes via ESC / backdrop click / close button
- **Contact form:** client-side validation with inline errors and a success
  state (static site — no data is actually submitted anywhere)
- **Leadership section:** CEO profile (Amila Silva) added to the homepage
  with photo, bio, and pull-quote

## Revisions made during review

1. Fixed a real bug: the service modal's backdrop-click-to-close didn't
   work because the centering wrapper sat visually on top of the backdrop
2. Replaced several mismatched/low-quality stock photos (caught a banana
   image on the Services hero, a portrait on "Renovations," etc.) after a
   full visual audit of every image on the site
3. Trimmed the homepage so it's a teaser, not a duplicate of About/Services
   (removed the "Why Choose Us" strip and "Our Work" gallery from Home)
4. Redesigned the service modal to fit within the viewport without
   scrolling, and changed "Request a Quote" from a link to Contact into an
   inline quote form inside the modal
5. Widened the page container padding scale (`sm:px-8 lg:px-10 xl:px-12`)
   across all four pages
6. Removed the repeated "Ready to Raise Your Standards?" CTA section from
   Home, About, and Services (kept the Contact page as the single
   dedicated conversion page)
7. Resized oversized split-layout images (Home intro, service cards, CEO
   photo, About story/approach) from tall portrait crops to shorter,
   paragraph-proportional ratios — left Services page untouched per request
8. Fixed the CEO photo crop (was cutting off his head after the resize) by
   switching to a square crop anchored to the top of the image
9. Added a full-bleed hero image to the Contact page to match About/Services
10. Fixed a real accessibility/layout bug: the four header nav links (Home,
    About, Services, Contact) weren't vertically aligned — traced to a CSS
    line-box quirk on the Services dropdown wrapper and fixed at the root
11. Fixed footer separation twice — first attempt (`ink` → `ink-soft`) was
    too subtle to read as a boundary; second pass uses a clearly distinct
    `charcoal` shade plus a visible neutral divider line
12. Fixed a real regression: a CSS rule meant only for short mobile
    viewports was also firing on short-but-wide desktop windows (browser
    zoom / OS display scaling), collapsing the modal image to a sliver —
    scoped the rule to mobile widths only
13. Restyled the "Why Clients Choose Us" section (About) and both service
    divisions (Services) so the text content sits in a white/black content
    box against the section's dark/light background, instead of plain text
    directly on the section color

## Verification

Every round of changes was checked with an automated Playwright test suite
covering: console/page errors, horizontal overflow at 1920/1440/1366/390/375px,
modal open/close via all three methods, mobile nav, and contact form
validation + success state — all passing with zero errors as of the latest
change.

## Known placeholders (update before going live)

- Phone number, email, and address in the header/footer/contact page are
  placeholders (`+61 (0) 00 000 000`, `info@signatureelitegroup.com.au`)
- Social media links in the footer point to `#`
- Privacy Policy / Terms & Conditions links point to `#` (pages not built)
- All photography is royalty-free stock (Unsplash) — swap via
  `js/images.js` when real project/team photography is available
