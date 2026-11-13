/* Hero illustration: a slight follow on mouse (near moves more).
   The art is enlarged so the motion never shows a raw edge.
   prefers-reduced-motion or a coarse pointer: stay still.
   Do not copy a quilted / multi-cutout depth parallax. */
(function () {
  var canvas = document.querySelector(".canvas");
  var layer = document.querySelector(".canvas-motion");
  if (!canvas || !layer) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hover = window.matchMedia("(hover: hover) and (pointer: fine)");
  var max = 18;
  var tx = 0, ty = 0, cx = 0, cy = 0;
  var ticking = false;

  function enabled() {
    return !reduce.matches && hover.matches;
  }

  function apply() {
    layer.style.transform = "translate(" + cx.toFixed(2) + "px, " + cy.toFixed(2) + "px)";
  }

  function tick() {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    apply();
    if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.05 && enabled()) {
      requestAnimationFrame(tick);
    } else {
      ticking = false;
      if (!enabled()) {
        cx = cy = tx = ty = 0;
        layer.style.transform = "";
      }
    }
  }

  function startTick() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(tick);
  }

  function onMove(e) {
    if (!enabled()) return;
    var r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    tx = -x * max;
    ty = -y * max;
    startTick();
  }

  function onLeave() {
    tx = 0;
    ty = 0;
    startTick();
  }

  function bind() {
    canvas.removeEventListener("mousemove", onMove);
    canvas.removeEventListener("mouseleave", onLeave);
    if (enabled()) {
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
    } else {
      tx = ty = cx = cy = 0;
      ticking = false;
      layer.style.transform = "";
    }
  }

  if (reduce.addEventListener) {
    reduce.addEventListener("change", bind);
    hover.addEventListener("change", bind);
  }
  bind();
})();
