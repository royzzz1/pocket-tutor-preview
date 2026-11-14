/* UI and type entrances only. Do not animate hero, section art, banner, or stickers. */
(function (global) {
  "use strict";

  var SELECTOR = "[data-enter]";
  var CONTROLS = ".cta, .cta-order, .cta-ghost, .cta-nav-signin, .cta-nav-order, .voices-nav";

  function reduced() {
    return !!(global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  function show(el) {
    el.style.opacity = "";
    el.style.translate = "";
    el.classList.add("is-entered");
  }

  function enter(nodes) {
    var anime = global.anime;
    if (!anime || typeof anime.animate !== "function") {
      nodes.forEach(show);
      return;
    }
    anime.animate(nodes, {
      opacity: [0, 1],
      translateY: { from: "16px", to: "0px" },
      duration: 700,
      ease: "out(3)",
      delay: typeof anime.stagger === "function" ? anime.stagger(70) : 0
    });
    nodes.forEach(function (el) { el.classList.add("is-entered"); });
  }

  function watch() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
    if (!nodes.length) return;
    if (reduced() || !global.IntersectionObserver) {
      nodes.forEach(show);
      return;
    }
    document.documentElement.classList.add("js-motion");
    var io = new IntersectionObserver(function (entries) {
      var batch = [];
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        if (!entry.target.classList.contains("is-entered")) batch.push(entry.target);
      });
      if (batch.length) enter(batch);
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (el) { io.observe(el); });
  }

  function press(el, scale) {
    var anime = global.anime;
    if (!anime || typeof anime.animate !== "function" || reduced()) return;
    anime.animate(el, { scale: scale, duration: scale < 1 ? 120 : 180, ease: "out(2)" });
  }

  function bindControls() {
    if (reduced()) return;
    document.querySelectorAll(CONTROLS).forEach(function (el) {
      if (el.dataset.motionBound) return;
      el.dataset.motionBound = "1";
      el.addEventListener("pointerdown", function (event) {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        press(el, 0.97);
      });
      ["pointerup", "pointercancel", "pointerleave"].forEach(function (name) {
        el.addEventListener(name, function () { press(el, 1); });
      });
    });
  }

  function start() {
    watch();
    bindControls();
  }

  ready(start);
})(window);
