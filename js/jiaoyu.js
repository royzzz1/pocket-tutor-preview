/* Keep stacked cards just under the sticky section title, so each previous card leaves a visible step. */
(function () {
  function setBase() {
    var section = document.querySelector(".jiaoyu");
    var header = document.querySelector(".jiaoyu-header");
    if (!section || !header) return;
    var h = Math.ceil(header.getBoundingClientRect().height);
    if (h > 0) section.style.setProperty("--jiaoyu-base", h + "px");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setBase);
  } else {
    setBase();
  }
  window.addEventListener("resize", setBase);
  document.addEventListener("pocket-tutor:lang", setBase);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setBase).catch(function () {});
  }
})();
