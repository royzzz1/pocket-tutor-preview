(function () {
  var deck = document.querySelector(".voices-deck");
  if (!deck) return;

  var dragging = false;
  var startX = 0;
  var startScroll = 0;
  var lastX = 0;
  var lastT = 0;
  var velocity = 0;
  var moved = 0;

  function cardStep() {
    var card = deck.querySelector(".voice-card");
    if (!card) return deck.clientWidth;
    var styles = window.getComputedStyle(deck);
    var gap = parseFloat(styles.columnGap || styles.gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }

  function clampIndex(i) {
    var n = deck.querySelectorAll(".voice-card").length;
    return Math.max(0, Math.min(n - 1, i));
  }

  function snapTo(index, behavior) {
    var step = cardStep();
    deck.scrollTo({ left: clampIndex(index) * step, behavior: behavior || "smooth" });
  }

  function currentIndex() {
    var step = cardStep();
    if (!step) return 0;
    return Math.round(deck.scrollLeft / step);
  }

  function onDown(x, e) {
    dragging = true;
    moved = 0;
    velocity = 0;
    startX = lastX = x;
    startScroll = deck.scrollLeft;
    lastT = performance.now();
    deck.classList.add("is-dragging");
    if (e && e.preventDefault) e.preventDefault();
  }

  function onMove(x) {
    if (!dragging) return;
    var now = performance.now();
    var dx = x - startX;
    var dt = now - lastT;
    if (dt > 0) velocity = (x - lastX) / dt;
    lastX = x;
    lastT = now;
    moved = Math.max(moved, Math.abs(dx));
    deck.scrollLeft = startScroll - dx;
  }

  function onUp() {
    if (!dragging) return;
    dragging = false;
    deck.classList.remove("is-dragging");
    var step = cardStep();
    var delta = deck.scrollLeft - startScroll;
    var from = Math.round(startScroll / step);
    var dir = 0;
    // A modest swipe or a flick should advance, so it doesn't feel pinned.
    if (delta > Math.min(48, step * 0.12) || velocity < -0.15) dir = 1;
    else if (delta < -Math.min(48, step * 0.12) || velocity > 0.15) dir = -1;
    snapTo(from + dir, "smooth");
  }

  deck.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    // Let a real touch pan use native scrolling; still handle mouse drag.
    if (e.pointerType === "touch") return;
    try { deck.setPointerCapture(e.pointerId); } catch (err) {}
    onDown(e.clientX, e);
  });

  deck.addEventListener("pointermove", function (e) {
    onMove(e.clientX);
  });

  function endPointer(e) {
    if (e && e.pointerType === "touch") return;
    onUp();
  }

  deck.addEventListener("pointerup", endPointer);
  deck.addEventListener("pointercancel", endPointer);
  deck.addEventListener("lostpointercapture", onUp);

  deck.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  deck.addEventListener("click", function (e) {
    if (moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  deck.addEventListener("wheel", function (e) {
    if (deck.scrollWidth <= deck.clientWidth) return;
    if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
    deck.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive: false });

  window.addEventListener("keydown", function (e) {
    if (!deck.contains(document.activeElement) && document.activeElement !== deck) return;
    if (e.key === "ArrowRight") { e.preventDefault(); snapTo(currentIndex() + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); snapTo(currentIndex() - 1); }
  });
})();
