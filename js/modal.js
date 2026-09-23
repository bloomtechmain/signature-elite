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

  const SERVICE_DATA = {
    cleaning: {
      eyebrow: "Signature Elite Cleaning",
      title: "Professional Cleaning Solutions",
      image: SE_IMG.modal.cleaning.main,
      caption: "Cleaner spaces. Healthier environments. Brighter tomorrows.",
      description:
        "Meticulous, reliable cleaning for commercial, residential and industrial spaces across Victoria — delivered by trained teams to a consistent, professional standard.",
      services: [
        "Commercial & office cleaning",
        "Residential cleaning",
        "End-of-lease cleaning",
        "Deep cleaning",
        "Window cleaning",
        "Carpet & upholstery",
        "Sanitisation",
        "Post-construction cleaning"
      ],
      benefits: ["Trained & Vetted Staff", "Consistent Quality", "Flexible Scheduling", "Fully Insured"]
    },
    construction: {
      eyebrow: "Signature Elite Construction",
      title: "Professional Construction Solutions",
      image: SE_IMG.modal.construction.main,
      caption: "Stronger foundations. Lasting structures. Built with precision.",
      description:
        "Residential and commercial construction, renovation and property improvement delivered with precision, integrity and disciplined project management.",
      services: [
        "Residential construction",
        "Commercial construction",
        "Renovations & extensions",
        "Property improvements",
        "Project management",
        "Site maintenance",
        "Fit-outs & refurbishments",
        "Compliance & inspections"
      ],
      benefits: ["Precision Delivery", "Licensed & Compliant", "Dedicated Project Management", "Quality Craftsmanship"]
    }
  };

  let activeTriggerEl = null;
  let modalRoot = null;
  let currentKey = null;

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

        <div class="grid md:grid-cols-[2fr_3fr] h-full">
          <div data-modal-image-wrap class="relative h-40 sm:h-56 md:h-full shrink-0">
            <img data-modal-image src="" alt="" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>
            <div class="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
              <div class="w-8 h-px bg-gold mb-3"></div>
              <p data-modal-caption class="text-white text-sm sm:text-base font-serif italic leading-snug"></p>
            </div>
          </div>

          <div data-modal-content class="relative flex flex-col justify-center min-h-0 h-full overflow-y-auto p-8 sm:p-10 lg:p-14 xl:p-16">
            <!-- DETAILS VIEW -->
            <div data-view="details" class="max-w-2xl">
              <p data-modal-eyebrow class="eyebrow text-xs sm:text-sm uppercase mb-3"></p>
              <h2 id="serviceModalTitle" data-modal-title class="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4"></h2>
              <div class="gold-rule mb-5"></div>
              <p data-modal-description class="text-[#A5A5A5] text-sm sm:text-base leading-relaxed mb-6"></p>

              <h3 class="text-white text-xs uppercase tracking-[0.15em] mb-3">Key Services</h3>
              <ul data-modal-services class="grid grid-cols-2 gap-x-8 gap-y-2 mb-6"></ul>

              <div data-modal-optional>
                <h3 class="text-white text-xs uppercase tracking-[0.15em] mb-3">Why Choose Us</h3>
                <div data-modal-benefits class="grid grid-cols-2 gap-x-8 gap-y-2 mb-7"></div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/10">
                <button type="button" data-open-quote class="btn-gold inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase">
                  Request a Quote
                </button>
                <a href="services.html" class="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-white/60 hover:text-[#D8B44A] transition-colors px-2 py-3.5">
                  View All Services
                </a>
              </div>
            </div>

            <!-- QUOTE VIEW -->
            <div data-view="quote" hidden>
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
                <div class="mb-4">
                  <textarea data-mq-message rows="3" placeholder="Tell us about your project *" class="w-full bg-white/[0.06] border border-white/25 text-white placeholder-white/45 px-3.5 py-3 text-sm focus:border-[#C9A227] focus:bg-white/[0.09] outline-none transition-colors resize-none"></textarea>
                  <p data-mq-error="message" class="text-red-400 text-[11px] mt-1 hidden" role="alert"></p>
                </div>
                <button type="submit" class="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase">
                  Submit Request
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
            </div>

            <!-- SUCCESS VIEW -->
            <div data-view="success" hidden class="text-center py-6">
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
    quoteBtn.hidden = key !== "cleaning";

    const servicesList = panel.querySelector("[data-modal-services]");
    servicesList.innerHTML = data.services
      .map(
        (s) => `
        <li class="flex items-start gap-2.5 text-[#F7F6F2]/90 text-sm sm:text-base leading-snug">
          <svg class="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A227" stroke-width="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${s}</span>
        </li>`
      )
      .join("");

    const benefitsWrap = panel.querySelector("[data-modal-benefits]");
    benefitsWrap.innerHTML = data.benefits
      .map(
        (b) => `
        <div class="flex items-start gap-2.5 text-sm sm:text-base leading-snug">
          <svg class="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D8B44A" stroke-width="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="text-[#D8B44A] font-medium">${b}</span>
        </div>`
      )
      .join("");
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
    panel.querySelectorAll("[data-modal-quote-form] input, [data-modal-quote-form] textarea").forEach((f) => {
      f.classList.remove("border-red-500/70");
      f.removeAttribute("aria-invalid");
    });
  }

  function validateQuoteForm(panel) {
    let valid = true;
    const name = panel.querySelector("[data-mq-name]");
    const phone = panel.querySelector("[data-mq-phone]");
    const email = panel.querySelector("[data-mq-email]");
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
    if (!message.value.trim()) setError(message, "message", "Please add a short message.");

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
    activeTriggerEl = triggerEl || null;

    const { overlay, panel } = modalRoot;
    document.body.classList.add("modal-open");
    overlay.classList.add("is-open");
    panel.classList.add("is-open");

    document.addEventListener("keydown", trapFocus);
    panel.addEventListener("click", handleBackdropClick);

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

    if (activeTriggerEl) {
      activeTriggerEl.focus();
      activeTriggerEl = null;
    }
  }

  function init() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-service-modal]");
      if (trigger) {
        e.preventDefault();
        openModal(trigger.getAttribute("data-service-modal"), trigger);
        return;
      }

      const closeBtn = e.target.closest("[data-modal-close]");
      if (closeBtn) {
        e.preventDefault();
        closeModal();
        return;
      }

      const openQuoteBtn = e.target.closest("[data-open-quote]");
      if (openQuoteBtn) {
        e.preventDefault();
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
      panel.querySelectorAll("[data-modal-quote-form] input, [data-modal-quote-form] textarea").forEach((f) => {
        f.classList.remove("border-red-500/70");
        f.removeAttribute("aria-invalid");
      });

      if (!validateQuoteForm(panel)) return;

      showView("success");
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
