/* Sign in and Order stay visible, but do not connect an account or take payment. */
(function (global) {
  "use strict";

  function t(key) {
    return (global.PocketI18n && global.PocketI18n.t) ? global.PocketI18n.t(key) : key;
  }

  function toast() {
    var el = document.getElementById("chrome-status");
    if (el) return el;
    el = document.createElement("div");
    el.id = "chrome-status";
    el.className = "chrome-status";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.hidden = true;
    document.body.appendChild(el);
    return el;
  }

  function show(key, anchor) {
    var el = toast();
    el.textContent = t(key);
    el.hidden = false;
    if (anchor && anchor.getBoundingClientRect) {
      var box = anchor.getBoundingClientRect();
      el.style.top = Math.round(box.bottom + 10) + "px";
      el.style.right = Math.max(16, Math.round(window.innerWidth - box.right)) + "px";
      el.style.left = "auto";
    } else {
      el.style.top = "";
      el.style.right = "";
      el.style.left = "";
    }
    clearTimeout(show.timer);
    show.timer = setTimeout(function () { el.hidden = true; }, 4000);
  }

  function bind() {
    document.querySelectorAll(".cta-nav-signin").forEach(function (btn) {
      if (btn.dataset.chromeBound) return;
      btn.dataset.chromeBound = "1";
      btn.setAttribute("type", "button");
      btn.setAttribute("aria-haspopup", "true");
      btn.addEventListener("click", function () {
        show("nav.signin.note", btn);
      });
    });
    document.querySelectorAll("[data-order-pending]").forEach(function (btn) {
      if (btn.dataset.chromeBound) return;
      btn.dataset.chromeBound = "1";
      btn.setAttribute("type", "button");
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        show("order.pending", btn);
      });
    });
  }

  function onLang() {
    var el = document.getElementById("chrome-status");
    if (el && !el.hidden && el.textContent) {
      /* Keep the visible note in the current language if it is still up. */
      if (/sign|登录|account|账号/i.test(el.textContent) || (global.PocketI18n && el.textContent === global.PocketI18n.t("nav.signin.note"))) {
        el.textContent = t("nav.signin.note");
      } else {
        el.textContent = t("order.pending");
      }
    }
  }

  function start() {
    bind();
    document.addEventListener("pocket-tutor:lang", onLang);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})(window);
