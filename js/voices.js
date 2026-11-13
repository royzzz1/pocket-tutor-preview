(function () {
  var deck = document.querySelector(".voices-deck");
  var prev = document.querySelector(".voices-prev");
  var next = document.querySelector(".voices-next");
  if (!deck || !prev || !next) return;

  var cards = deck.querySelectorAll(".voice-card");
  if (!cards.length) return;
  var index = 0;

  function go(n, behavior) {
    index = Math.max(0, Math.min(cards.length - 1, n));
    var left = cards[index].offsetLeft;
    deck.scrollTo({ left: left, behavior: behavior || "smooth" });
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
  }

  prev.addEventListener("click", function () { go(index - 1); });
  next.addEventListener("click", function () { go(index + 1); });
  window.addEventListener("resize", function () { go(index, "auto"); });
  go(0, "auto");
})();
