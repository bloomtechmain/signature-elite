/**
 * Signature Elite Group — Global Site Behaviour
 * Handles sticky header state, mobile navigation, scroll-reveal animation
 * and the footer year. Loaded on every page.
 */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Sticky header: solid once the page has scrolled past the hero fold
     --------------------------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    const setState = () => {
      if (window.scrollY > 24) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    setState();
    window.addEventListener("scroll", setState, { passive: true });
  }

  /* ---------------------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const panel = document.querySelector("[data-mobile-nav]");
    const closeBtn = document.querySelector("[data-nav-close]");
    if (!toggle || !panel) return;

    const openNav = () => {
      panel.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("modal-open");
      const firstLink = panel.querySelector("a");
      if (firstLink) window.setTimeout(() => firstLink.focus(), 350);
    };

    const closeNav = () => {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("modal-open");
      toggle.focus();
    };

    toggle.addEventListener("click", () => {
      const isOpen = panel.classList.contains("is-open");
      isOpen ? closeNav() : openNav();
    });

    if (closeBtn) closeBtn.addEventListener("click", closeNav);

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        closeNav();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal via IntersectionObserver
     --------------------------------------------------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
     Footer year
     --------------------------------------------------------------------- */
  function initFooterYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
     Hero panel parallax — subtle drift on the floating translucent hero
     panel as the user scrolls past it. Capped and damped; skipped under
     prefers-reduced-motion.
     --------------------------------------------------------------------- */
  function initHeroParallax() {
    const panel = document.querySelector("[data-hero-panel]");
    if (!panel) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const MAX_DRIFT = 40;
    let ticking = false;

    const update = () => {
      const drift = Math.min(window.scrollY * 0.15, MAX_DRIFT);
      panel.style.transform = `translateY(${drift}px)`;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
    initFooterYear();
    initHeroParallax();
  });
})();
