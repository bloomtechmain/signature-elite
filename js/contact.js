/**
 * Signature Elite Group — Contact Form Validation
 * Static site: no backend submission occurs. On successful client-side
 * validation we show a professional confirmation message in place of the
 * form and reset state. Loaded only on contact.html.
 */
(function () {
  "use strict";

  function showFieldError(field, message) {
    const errorEl = document.querySelector(`[data-error-for="${field.id}"]`);
    field.setAttribute("aria-invalid", "true");
    field.classList.add("border-red-500/70");
    field.classList.remove("border-white/15", "border-[#1a1a1a]/15");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove("hidden");
    }
  }

  function clearFieldError(field) {
    const errorEl = document.querySelector(`[data-error-for="${field.id}"]`);
    field.removeAttribute("aria-invalid");
    field.classList.remove("border-red-500/70");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    return /^[0-9+()\-\s]{7,}$/.test(value);
  }

  function validateForm(form) {
    let isValid = true;
    const fields = {
      fullName: form.querySelector("#fullName"),
      phone: form.querySelector("#phone"),
      email: form.querySelector("#email"),
      service: form.querySelector("#service"),
      message: form.querySelector("#message")
    };

    Object.values(fields).forEach((f) => f && clearFieldError(f));

    if (!fields.fullName.value.trim()) {
      showFieldError(fields.fullName, "Please enter your full name.");
      isValid = false;
    }

    if (!fields.phone.value.trim()) {
      showFieldError(fields.phone, "Please enter a phone number.");
      isValid = false;
    } else if (!isValidPhone(fields.phone.value.trim())) {
      showFieldError(fields.phone, "Please enter a valid phone number.");
      isValid = false;
    }

    if (!fields.email.value.trim()) {
      showFieldError(fields.email, "Please enter your email address.");
      isValid = false;
    } else if (!isValidEmail(fields.email.value.trim())) {
      showFieldError(fields.email, "Please enter a valid email address.");
      isValid = false;
    }

    if (!fields.service.value) {
      showFieldError(fields.service, "Please select a service.");
      isValid = false;
    }

    if (!fields.message.value.trim()) {
      showFieldError(fields.message, "Please tell us a little about your project.");
      isValid = false;
    }

    return isValid;
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const successPanel = document.querySelector("[data-contact-success]");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateForm(form)) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      form.classList.add("hidden");
      if (successPanel) {
        successPanel.classList.remove("hidden");
        successPanel.focus();
        successPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => clearFieldError(field));
      field.addEventListener("change", () => clearFieldError(field));
    });
  }

  document.addEventListener("DOMContentLoaded", initContactForm);
})();
