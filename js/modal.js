/**
 * Signature Elite Group — Service Modal System
 * Reusable, accessible full-screen modal for presenting service detail
 * without navigating to a separate page. Triggered by any element carrying
 * [data-service-modal="cleaning"] or [data-service-modal="construction"].
 *
 * Content is deliberately compact so the modal fits within the viewport
 * without internal scrolling on common screen sizes, and "Request a Quote"
 * swaps the panel to an inline quote form rather than navigating away.
 */
(function () {
  "use strict";

  const ICON = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    building: '<rect x="4" y="3" width="16" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
    sofa: '<path d="M4 12V8a2 2 0 012-2h12a2 2 0 012 2v4"/><path d="M2 12a2 2 0 014 0v3h12v-3a2 2 0 014 0v6H2z"/>',
    window: '<rect x="4" y="3" width="16" height="18"/><path d="M12 3v18M4 12h16"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    hammer: '<path d="M14 6l4 4M3 21l9-9M11 4l7 7-3 3-7-7z"/>',
    tower: '<path d="M3 21h18M6 21V8l6-5 6 5v13"/><path d="M10 21v-5h4v5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 005 5L21 13l-8 8-4-4 8-8z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 2 4 5"/>',
    leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19l8-8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    dollar: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.500-1.500-2.500-1.500-1.400 0-2.500.8-2.500 2s1 1.700 2.500 2 2.500.8 2.500 2-1.100 2-2.500 2c-1 0-2-.5-2.500-1.500M12 6v2M12 16v2"/>',
    badge: '<path d="M12 3l2.500 2.200 3.300-.4.800 3.200 2.900 1.700-1.300 3 1.300 3-2.900 1.700-.8 3.200-3.300-.4L12 21l-2.500-2.200-3.300.4-.8-3.200L2.500 14.300l1.300-3-1.300-3 2.900-1.700.8-3.200 3.300.4z"/><path d="M9 12l2 2 4-4"/>',
    star: '<path d="M12 3l2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z"/>',
    coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.700 3.100 3 7 3s7-1.300 7-3V6M5 12v6c0 1.700 3.100 3 7 3s7-1.300 7-3v-6"/>',
    fuel: '<path d="M4 21V4a1 1 0 011-1h8a1 1 0 011 1v17M3 21h12M14 9h3a2 2 0 012 2v6a1.500 1.500 0 003 0V8l-3-3M6 8h6"/>',
    chart: '<path d="M3 21h18M6 17v-5M11 17V8M16 17v-8M21 17V4"/>',
    land: '<path d="M3 20l5-9 4 6 3-4 6 7z"/><circle cx="17" cy="6" r="2"/>',
    handshake: '<path d="M3 12l5-5 4 2 4-2 5 5-8 8z"/><path d="M9 14l2 2"/>',
    ruler: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>'
  };

  const SERVICE_DATA = {
    cleaning: {
      eyebrow: "Signature Elite Cleaning",
      title: "Professional Cleaning Solutions",
      image: SE_IMG.modal.cleaning.main,
      caption: "Cleaner spaces. Healthier environments. Brighter tomorrows.",
      description:
        "Professional cleaning services for commercial, residential and industrial spaces.",
      services: [
        "Residential Cleaning",
        "Commercial Cleaning",
        "Strata Cleaning",
        "Industrial Cleaning",
        "End of Lease Cleaning",
        "Carpet & Upholstery",
        "Window Cleaning",
        "Specialised Cleaning"
      ],
      benefits: ["Trained & Vetted Staff", "Consistent Quality", "Flexible Scheduling", "Fully Insured"],
      badges: ["Quality Service|badge","Trained & Insured Team|shield","Eco-Friendly Products|leaf","100% Satisfaction Guarantee|star"],
      cards: [
        { title: "Residential Cleaning", blurb: "Regular, deep & end of lease cleaning for your home.", icon: "home" },
        { title: "Commercial Cleaning", blurb: "Offices, retail, medical & corporate spaces.", icon: "building" },
        { title: "Strata Cleaning", blurb: "Body corporates, common areas & building maintenance.", icon: "pin" },
        { title: "Industrial Cleaning", blurb: "Warehouses, factories & large facilities.", icon: "factory" },
        { title: "End of Lease Cleaning", blurb: "Get your bond back with our detailed cleaning.", icon: "key" },
        { title: "Carpet & Upholstery", blurb: "Refresh and restore your carpets, lounges & furniture.", icon: "sofa" },
        { title: "Window Cleaning", blurb: "Crystal clear views, inside and out.", icon: "window" },
        { title: "Specialised Cleaning", blurb: "Post-construction, hoarding and more.", icon: "sparkle" }
      ],
      servicesTitle: "Comprehensive Cleaning Solutions",
      ctaText: "Tell us about your space and we'll put together a tailored quote.",
      whyTitle: "We go beyond cleaning — we deliver peace of mind.",
      why: ["Experienced & Trained Team|users|Skilled professionals who care.","Eco-Friendly Products|leaf|Safe for your family, team and the planet.","Flexible Scheduling|clock|After hours, weekends and one-off bookings.","Competitive Pricing|dollar|Quality service at great value.","100% Satisfaction Guarantee|badge|Your happiness is our priority."],
      investIntro: "Join a trusted brand with proven systems and a growing portfolio of opportunities.",
      invest: ["Franchise Opportunities|handshake|Own a Signature Elite Cleaning franchise and be part of a nationally recognised brand.","Property Investment|home|Residential & commercial property investment opportunities with strong rental returns.","Business Investment|chart|Invest in established businesses with growth potential.","Land Development|land|Buy, develop and build for long-term value.","Passive Income Options|coins|Explore managed investment packages and wealth building strategies."]
    },
    construction: {
      eyebrow: "Signature Elite Construction",
      title: "Professional Construction Solutions",
      image: SE_IMG.modal.construction.main,
      caption: "Stronger foundations. Lasting structures. Built with precision.",
      description:
        "We deliver high-quality construction and renovation services with a focus on craftsmanship, reliability and customer satisfaction.",
      services: [
        "Luxury Homes",
        "Townhouse Developments",
        "Renovations",
        "Commercial Projects"
      ],
      benefits: ["Precision Delivery", "Licensed & Compliant", "Dedicated Project Management", "Quality Craftsmanship"],
      badges: ["Quality Craftsmanship|badge","Licensed & Insured|shield","On-Time Delivery|clock","Satisfaction Guaranteed|star"],
      cards: [
        { title: "New Homes & Custom Builds", blurb: "Bespoke homes designed and built around your vision.", icon: "home" },
        { title: "Renovations & Extensions", blurb: "Kitchens, bathrooms, extensions and full-home makeovers.", icon: "hammer" },
        { title: "Commercial Construction", blurb: "Fit-outs and commercial builds for business success.", icon: "tower" },
        { title: "Project Management", blurb: "Planning, coordination and delivery from start to finish.", icon: "users" }
      ],
      servicesTitle: "Construction Services",
      ctaText: "Tell us about your project and we'll arrange a free consultation and quote.",
      whyTitle: "The Signature Elite Advantage",
      why: [
        "Premium Quality & Craftsmanship|badge|Built to last, with attention to every detail.",
        "Trusted & Reliable|shield|On time, on budget, every time.",
        "End-to-End Support|handshake|From planning to completion and beyond.",
        "Investment Expertise|chart|Guiding you to smart, sustainable growth.",
        "Dedicated Team|users|Experienced professionals who care about your vision."
      ],
      investIntro: "We offer a range of investment opportunities to help you grow your wealth and create long-term financial freedom.",
      invest: [
        "Property Development|home|Land subdivision, unit development and capital growth.",
        "Fuel Station|fuel|Established and new opportunities across key locations.",
        "Childcare Business|users|Growing demand, strong returns and long-term stability.",
        "Other Business Investments|chart|Diversify your portfolio and build multiple income streams.",
        "Land & Property Subdivision|land|Create value through land, development and future growth."
      ]
    }
  };

  let activeTriggerEl = null;
  let modalRoot = null;
  let currentKey = null;
  let introTimer = null;
  const INTRO_MS = 5000;

  function enterPage() {
    if (!modalRoot) return;
    window.clearTimeout(introTimer);
    introTimer = null;
    modalRoot.panel.querySelector(".service-modal-card").classList.add("is-page");
  }

  function startIntro() {
    const card = modalRoot.panel.querySelector(".service-modal-card");
    window.clearTimeout(introTimer);
    card.classList.remove("is-page");
    card.querySelector("[data-modal-content]").scrollTop = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      card.classList.add("is-page");
      return;
    }
    introTimer = window.setTimeout(enterPage, INTRO_MS);
  }

  function buildModal() {
    const overlay = document.createElement("div");
    overlay.className = "service-modal-overlay";
    overlay.setAttribute("data-modal-overlay", "");

    const panel = document.createElement("div");
    panel.className = "service-modal-panel";
    panel.setAttribute("data-modal-panel", "");

    panel.innerHTML = `
      <div class="service-modal-card relative w-full h-full overflow-hidden"
           role="dialog" aria-modal="true" aria-labelledby="serviceModalTitle" tabindex="-1">
        <button type="button" data-modal-close aria-label="Close dialog"
          class="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 flex items-center justify-center text-white/70 hover:text-[#D8B44A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div data-modal-brandbar class="service-modal-brandbar">
          <img data-brandbar-logo src="" alt="" />
          <span data-brandbar-name></span>
        </div>

        <div class="service-modal-grid h-full">
          <div data-modal-image-wrap class="service-modal-logocol relative bg-black flex items-center justify-center cursor-pointer" title="Skip intro">
            <img data-modal-image src="" alt="" class="service-modal-logo" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>
            <div data-modal-caption-wrap class="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
              <div class="w-8 h-px bg-gold mb-3"></div>
              <p data-modal-caption class="text-white text-sm sm:text-base font-serif italic leading-snug"></p>
            </div>
          </div>

          <div data-modal-content class="service-modal-content relative flex flex-col min-h-0 h-full overflow-y-auto">
            <!-- DETAILS VIEW -->
            <div data-view="details" class="w-full">
              <section class="sm-band sm-hero" data-modal-hero>
                <div class="sm-inner">
                  <p data-modal-eyebrow class="eyebrow text-xs sm:text-sm uppercase mb-4"></p>
                  <h2 id="serviceModalTitle" data-modal-title class="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"></h2>
                  <div class="gold-rule mb-6"></div>
                  <p data-modal-description class="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"></p>
                  <div data-modal-badges class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-9 max-w-3xl"></div>
                  <button type="button" data-open-quote class="btn-gold inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase">Enquire Now</button>
                </div>
              </section>

              <section class="sm-band sm-services">
                <div class="sm-inner">
                  <p class="sm-eyebrow">Our Services</p>
                  <h3 data-modal-services-title class="sm-heading"></h3>
                  <div data-modal-cards class="grid grid-cols-2 xl:grid-cols-4 gap-4"></div>
                </div>
              </section>

              <section class="sm-band sm-why">
                <div class="sm-inner">
                  <p class="sm-eyebrow">Why Choose Us</p>
                  <h3 data-modal-why-title class="sm-heading text-white"></h3>
                  <div data-modal-why class="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-7"></div>
                </div>
              </section>

              <section class="sm-band sm-invest" data-modal-invest-wrap>
                <div class="sm-inner">
                  <p class="sm-eyebrow">Investment Opportunities</p>
                  <h3 class="sm-heading text-white">Build Your Future</h3>
                  <p data-modal-invest-intro class="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"></p>
                  <div data-modal-invest class="grid grid-cols-2 xl:grid-cols-5 gap-4"></div>
                </div>
              </section>

              <section class="sm-band sm-cta">
                <div class="sm-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <h3 class="font-serif text-2xl sm:text-3xl text-[#0B0B0B] leading-tight mb-2">Ready to get started?</h3>
                    <p data-modal-cta-text class="text-[#0B0B0B]/75 text-sm sm:text-base"></p>
                  </div>
                  <button type="button" data-open-quote class="sm-cta-btn inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase shrink-0">Enquire Now</button>
                </div>
              </section>
            </div>

            <!-- QUOTE VIEW -->
            <div data-view="quote" hidden class="px-8 sm:px-12 lg:px-16 pt-28 pb-12 w-full max-w-2xl mx-auto my-auto">
              <button type="button" data-back-to-details class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-white/60 hover:text-[#D8B44A] transition-colors mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back
              </button>
              <p class="eyebrow text-[11px] uppercase mb-2">Request a Quote</p>
              <h2 data-quote-title class="font-serif text-xl sm:text-2xl text-white leading-tight mb-5"></h2>

              <form data-modal-quote-form novalidate>
                <div class="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <input type="text" data-mq-name placeholder="Full Name *" class="w-full bg-white/[0.06] border border-white/25 text-white placeholder-white/45 px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors" />
                    <p data-mq-error="name" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                  </div>
                  <div>
                    <input type="tel" data-mq-phone placeholder="Phone *" class="w-full bg-white/[0.06] border border-white/25 text-white placeholder-white/45 px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors" />
                    <p data-mq-error="phone" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                  </div>
                </div>
                <div class="mb-3">
                  <input type="email" data-mq-email placeholder="Email Address *" class="w-full bg-white/[0.06] border border-white/25 text-white placeholder-white/45 px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors" />
                  <p data-mq-error="email" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                </div>
                <div data-mq-service-field class="mb-3">
                  <select data-mq-service class="w-full bg-white/[0.06] border border-white/25 text-white px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors">
                    <option value="" class="text-ink">Service Type *</option>
                  </select>
                  <p data-mq-error="service" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                </div>
                <div class="mb-4">
                  <textarea data-mq-message rows="3" placeholder="Additional notes about your tasks" class="w-full bg-white/[0.06] border border-white/25 text-white placeholder-white/45 px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors resize-none"></textarea>
                  <p data-mq-error="message" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                </div>
                <button type="submit" class="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase">
                  Contact Us Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
            </div>

            <!-- SUCCESS VIEW -->
            <div data-view="success" hidden class="text-center px-8 pt-28 pb-12 w-full max-w-2xl mx-auto my-auto">
              <span class="mx-auto mb-5 w-12 h-12 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <h3 class="font-serif text-white text-xl sm:text-2xl mb-3">Thank You.</h3>
              <p class="text-[#A5A5A5] text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Your request has been prepared successfully. Since this is a preview site, no message was actually sent — please contact us directly by phone or email.
              </p>
              <button type="button" data-modal-close class="btn-outline inline-flex items-center justify-center px-7 py-3 text-xs font-semibold uppercase">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    return { overlay, panel };
  }

  function showView(name) {
    if (!modalRoot) return;
    const { panel } = modalRoot;
    panel.querySelectorAll("[data-view]").forEach((el) => {
      el.hidden = el.getAttribute("data-view") !== name;
    });
  }

  function populate(key) {
    const data = SERVICE_DATA[key];
    if (!data || !modalRoot) return;

    const { panel } = modalRoot;
    panel.querySelector("[data-modal-image]").src = data.image.src;
    panel.querySelector("[data-modal-image]").alt = data.image.alt;
    panel.querySelector("[data-modal-caption]").textContent = data.caption;
    panel.querySelector("[data-modal-eyebrow]").textContent = data.eyebrow;
    panel.querySelector("[data-modal-title]").textContent = data.title;
    panel.querySelector("[data-modal-description]").textContent = data.description;
    panel.querySelector("[data-quote-title]").textContent = data.eyebrow;

    const quoteBtn = panel.querySelector("[data-open-quote]");
    quoteBtn.hidden = false;
    quoteBtn.style.display = "";

    const isCleaning = key === "cleaning";
    const serviceField = panel.querySelector("[data-mq-service-field]");
    if (serviceField) {
      serviceField.hidden = !isCleaning;
      serviceField.style.display = isCleaning ? "" : "none";
    }

    const svg = (name, color, size) =>
      `<svg class="shrink-0" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name]}</svg>`;

    panel.querySelector("[data-modal-badges]").innerHTML = data.badges
      .map((x) => {
        const [label, icon] = x.split("|");
        return `<div class="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 leading-snug">${svg(icon, "#D8B44A", 24)}<span>${label}</span></div>`;
      })
      .join("");

    const photo = (title) => {
      const p = SE_IMG.stock[title];
      return p ? `<img src="${p.src}" alt="${p.alt}" loading="lazy" class="w-full h-32 sm:h-36 object-cover" />` : "";
    };

    panel.querySelector("[data-modal-services-title]").textContent = data.servicesTitle;
    panel.querySelector("[data-modal-hero]").style.backgroundImage =
      `linear-gradient(180deg, rgba(8,12,20,0.78), rgba(8,12,20,0.88)), url("${SE_IMG.stock["hero:" + key].src}")`;
    panel.querySelector("[data-modal-cta-text]").textContent = data.ctaText;
    panel.querySelector("[data-brandbar-logo]").src = data.image.src;
    panel.querySelector("[data-brandbar-name]").textContent = data.eyebrow;

    panel.querySelector("[data-modal-cards]").innerHTML = data.cards
      .map(
        (c) => `
        <div class="sm-card">
          ${photo(c.title)}
          <div class="p-4">
            <div class="mb-2">${svg(c.icon, "#C9A227", 22)}</div>
            <h4 class="text-white text-sm font-semibold mb-1">${c.title}</h4>
            <p class="text-white/65 text-xs leading-relaxed">${c.blurb}</p>
          </div>
        </div>`
      )
      .join("");

    panel.querySelector("[data-modal-why-title]").textContent = data.whyTitle;
    panel.querySelector("[data-modal-why]").innerHTML = data.why
      .map((x) => {
        const [t, icon, d] = x.split("|");
        return `<div class="flex items-start gap-4"><span class="sm-why-icon">${svg(icon, "#D8B44A", 24)}</span><div><p class="text-white text-sm sm:text-base font-semibold leading-snug">${t}</p><p class="text-white/70 text-xs sm:text-sm leading-relaxed mt-1">${d}</p></div></div>`;
      })
      .join("");

    const investWrap = panel.querySelector("[data-modal-invest-wrap]");
    investWrap.hidden = !data.invest.length;
    panel.querySelector("[data-modal-invest-intro]").textContent = data.investIntro || "";
    panel.querySelector("[data-modal-invest]").innerHTML = data.invest
      .map((x) => {
        const [t, icon, d] = x.split("|");
        return `<div class="sm-card sm-card-gold">${photo(t)}<div class="p-4">${svg(icon, "#C9A227", 22)}<h4 class="text-white text-sm font-semibold mt-2 mb-1">${t}</h4><p class="text-white/65 text-xs leading-relaxed">${d}</p></div></div>`;
      })
      .join("");

    const serviceSelect = panel.querySelector("[data-mq-service]");
    if (serviceSelect) {
      serviceSelect.innerHTML =
        `<option value="" class="text-ink">Service Type *</option>` +
        data.services.map((s) => `<option value="${s}" class="text-ink">${s}</option>`).join("");
    }
  }

  function clearQuoteForm() {
    if (!modalRoot) return;
    const { panel } = modalRoot;
    const form = panel.querySelector("[data-modal-quote-form]");
    if (!form) return;
    form.reset();
    panel.querySelectorAll("[data-mq-error]").forEach((el) => {
      el.textContent = "";
      el.classList.add("hidden");
    });
    panel.querySelectorAll("[data-modal-quote-form] input, [data-modal-quote-form] select, [data-modal-quote-form] textarea").forEach((f) => {
      f.classList.remove("border-red-500/70");
      f.removeAttribute("aria-invalid");
    });
  }

  function validateQuoteForm(panel) {
    let valid = true;
    const name = panel.querySelector("[data-mq-name]");
    const phone = panel.querySelector("[data-mq-phone]");
    const email = panel.querySelector("[data-mq-email]");
    const serviceField = panel.querySelector("[data-mq-service-field]");
    const service = serviceField && !serviceField.hidden ? panel.querySelector("[data-mq-service]") : null;
    const message = panel.querySelector("[data-mq-message]");

    const setError = (field, key, msg) => {
      const errorEl = panel.querySelector(`[data-mq-error="${key}"]`);
      field.classList.add("border-red-500/70");
      field.setAttribute("aria-invalid", "true");
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.classList.remove("hidden");
      }
      valid = false;
    };

    if (!name.value.trim()) setError(name, "name", "Please enter your name.");
    if (!phone.value.trim()) setError(phone, "phone", "Please enter a phone number.");
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setError(email, "email", "Please enter a valid email.");
    }
    if (service && !service.value.trim()) setError(service, "service", "Please select a service type.");

    return valid;
  }

  function getFocusable(container) {
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => el.offsetParent !== null);
  }

  function trapFocus(e) {
    if (!modalRoot) return;
    const { panel } = modalRoot;
    if (e.key === "Tab") {
      const focusable = getFocusable(panel);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    } else if (e.key === "Escape") {
      closeModal();
    }
  }

  function openModal(key, triggerEl) {
    if (!SERVICE_DATA[key]) return;
    if (!modalRoot) modalRoot = buildModal();

    currentKey = key;
    populate(key);
    clearQuoteForm();
    showView("details");
    startIntro();
    activeTriggerEl = triggerEl || null;

    const { overlay, panel } = modalRoot;
    document.body.classList.add("modal-open");
    overlay.classList.add("is-open");
    panel.classList.add("is-open");

    document.addEventListener("keydown", trapFocus);
    panel.addEventListener("click", handleBackdropClick);

    try {
      history.replaceState(null, "", location.pathname + "?service=" + key);
    } catch (_) {}

    const card = panel.querySelector(".service-modal-card");
    window.setTimeout(() => card.focus(), 50);
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function closeModal() {
    if (!modalRoot) return;
    const { overlay, panel } = modalRoot;
    overlay.classList.remove("is-open");
    panel.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", trapFocus);
    panel.removeEventListener("click", handleBackdropClick);
    window.clearTimeout(introTimer);

    try {
      history.replaceState(null, "", location.pathname);
    } catch (_) {}

    if (activeTriggerEl) {
      activeTriggerEl.focus();
      activeTriggerEl = null;
    }
  }

  function init() {
    const deepLinked = new URLSearchParams(location.search).get("service");
    if (deepLinked && SERVICE_DATA[deepLinked]) openModal(deepLinked, null);

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-service-modal]");
      if (trigger) {
        e.preventDefault();
        openModal(trigger.getAttribute("data-service-modal"), trigger);
        return;
      }

      if (e.target.closest("[data-modal-image-wrap]")) { enterPage(); return; }

      const closeBtn = e.target.closest("[data-modal-close]");
      if (closeBtn) {
        e.preventDefault();
        closeModal();
        return;
      }

      const openQuoteBtn = e.target.closest("[data-open-quote]");
      if (openQuoteBtn) {
        e.preventDefault();
        enterPage();
        showView("quote");
        const nameField = modalRoot.panel.querySelector("[data-mq-name]");
        if (nameField) window.setTimeout(() => nameField.focus(), 50);
        return;
      }

      const backBtn = e.target.closest("[data-back-to-details]");
      if (backBtn) {
        e.preventDefault();
        showView("details");
        return;
      }
    });

    document.addEventListener("submit", (e) => {
      const form = e.target.closest("[data-modal-quote-form]");
      if (!form || !modalRoot) return;
      e.preventDefault();

      const { panel } = modalRoot;
      panel.querySelectorAll("[data-mq-error]").forEach((el) => {
        el.textContent = "";
        el.classList.add("hidden");
      });
      panel.querySelectorAll("[data-modal-quote-form] input, [data-modal-quote-form] select, [data-modal-quote-form] textarea").forEach((f) => {
        f.classList.remove("border-red-500/70");
        f.removeAttribute("aria-invalid");
      });

      if (!validateQuoteForm(panel)) return;

      showView("success");
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
