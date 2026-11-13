/* Scripted tutoring session. No mic, camera, or model APIs. */
const STEPS = [
  { id: "idle", phase: "闲", kind: "face", mouth: "flat" },
  { id: "listen", phase: "听", kind: "face", mouth: "smile", listening: true },
  { id: "eq", phase: "讲", kind: "line", text: "2x + 3 = 11" },
  { id: "yi", phase: "讲", kind: "glyph", glyphKey: "glyph.move", glyph: "Move", tile: "yellow" },
  { id: "jian", phase: "讲", kind: "glyph", glyphKey: "glyph.sub", glyph: "Sub", tile: "amber" },
  { id: "twox", phase: "讲", kind: "line", text: "2x = 8" },
  { id: "div", phase: "讲", kind: "line", textKey: "kid.div2", text: "Divide both sides by 2" },
  { id: "x4", phase: "讲", kind: "line", text: "x = 4" },
  { id: "yan", phase: "讲", kind: "glyph", glyphKey: "glyph.check", glyph: "Check", tile: "leaf" },
  { id: "check", phase: "讲", kind: "line", text: "2×4 + 3 = 11" },
  { id: "practice", phase: "练", kind: "practice", problem: "3 + x = 7", correct: "x = 4", options: ["x = 4", "x = 3"] },
  { id: "result", phase: "练", kind: "result", problem: "3 + x = 7", answer: "x = 4", score: "3 / 4" },
  { id: "done", phase: "完", kind: "done", textKey: "kid.done", text: "Parents will see a summary of this session" }
];

const PHASE_I18N = {
  闲: "phase.idle",
  听: "phase.listen",
  讲: "phase.teach",
  练: "phase.practice",
  完: "phase.done"
};

const CAPTION_I18N = {
  闲: "caption.idle",
  听: "caption.listen",
  讲: "caption.teach",
  练: "caption.practice",
  完: "caption.done"
};

function tr(key, fallback) {
  return (window.PocketI18n && PocketI18n.t(key)) || fallback;
}

function lineText(step) {
  return step.textKey ? tr(step.textKey, step.text) : step.text;
}

function glyphText(step) {
  return step.glyphKey ? tr(step.glyphKey, step.glyph) : step.glyph;
}

function $(sel, root = document) { return root.querySelector(sel); }

function renderFace(mouth) {
  return `<div class="face" data-mouth="${mouth}" aria-hidden="true">
    <span class="eye left"></span><span class="eye right"></span>
    <span class="mouth"></span>
  </div>`;
}

function render(step) {
  const screen = $("#screen");
  const bezel = $("#bezel");
  const slab = $("#slab");
  const caption = $("#device-caption");
  const phase = $("#phase-label");
  const nextBtn = $("#next-btn");
  if (!screen) return;
  screen.dataset.tile = "";
  screen.removeAttribute("data-tile");
  const listening = !!step.listening;
  if (bezel) bezel.dataset.listening = listening ? "true" : "false";
  if (slab) slab.dataset.listening = listening ? "true" : "false";
  document.body.dataset.phase = step.phase;
  document.body.dataset.step = step.id;
  if (phase) phase.textContent = tr(PHASE_I18N[step.phase], step.phase);
  if (caption) caption.textContent = tr(CAPTION_I18N[step.phase], "");
  if (nextBtn) {
    nextBtn.hidden = step.kind === "practice" || step.kind === "done" || (step.kind === "face" && step.phase === "闲");
    nextBtn.textContent = step.phase === "听" ? tr("kid.startTeach", "Start the lesson") : tr("kid.nextBtn", "Next");
  }

  if (step.kind === "face") {
    screen.innerHTML = renderFace(step.mouth);
    return;
  }
  if (step.kind === "glyph") {
    screen.dataset.tile = step.tile;
    screen.innerHTML = `<p class="glyph">${glyphText(step)}</p>`;
    return;
  }
  if (step.kind === "line") {
    screen.innerHTML = `<p class="line">${lineText(step)}</p>`;
    return;
  }
  if (step.kind === "practice") {
    const buttons = step.options.map((opt) =>
      `<button type="button" class="choice" data-answer="${opt}">${opt}</button>`
    ).join("");
    screen.innerHTML = `<div class="practice">
      <p class="problem">${step.problem}</p>
      <div class="choices">${buttons}</div>
    </div>`;
    screen.querySelectorAll(".choice").forEach((btn) => {
      btn.addEventListener("click", () => onAnswer(btn.dataset.answer));
    });
    return;
  }
  if (step.kind === "result") {
    screen.innerHTML = `<div class="practice">
      <p class="problem">${step.problem}</p>
      <span class="choice" data-state="ok">${step.answer}</span>
      <span class="score">${step.score}</span>
    </div>`;
    return;
  }
  if (step.kind === "done") {
    screen.innerHTML = `<div class="done">
      ${renderFace("smile")}
      <p class="line">${lineText(step)}</p>
      <a href="parent.html">${tr("kid.seeSummary", "See this summary")}</a>
    </div>`;
  }
}

let index = 0;

function setIndex(i) {
  index = Math.max(0, Math.min(i, STEPS.length - 1));
  const step = STEPS[index];
  render(step);
  const url = new URL(location.href);
  url.searchParams.set("step", step.id);
  history.replaceState({ step: step.id }, "", url);
}

function next() {
  const step = STEPS[index];
  if (step.kind === "practice") return;
  if (index < STEPS.length - 1) setIndex(index + 1);
}

function onAnswer(value) {
  const step = STEPS[index];
  if (step.kind !== "practice") return;
  if (value === step.correct) {
    setIndex(index + 1);
    return;
  }
  document.querySelectorAll(".choice").forEach((btn) => {
    if (btn.dataset.answer === value) btn.dataset.state = "miss";
  });
}

function startFromQuery() {
  const id = new URL(location.href).searchParams.get("step") || "idle";
  const i = STEPS.findIndex((s) => s.id === id);
  setIndex(i >= 0 ? i : 0);
}

function bind() {
  const press = document.getElementById("press");
  const wheel = document.getElementById("wheel");
  const nextBtn = document.getElementById("next-btn");
  if (press) {
    press.addEventListener("click", () => {
      const step = STEPS[index];
      if (step.phase === "闲") setIndex(1);
      else next();
    });
  }
  if (wheel) wheel.addEventListener("click", next);
  if (nextBtn) nextBtn.addEventListener("click", next);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (document.activeElement && document.activeElement.classList.contains("choice")) return;
      if (e.target === document.body || e.target === press || e.target === wheel || e.target === nextBtn || e.target.id === "screen") {
        e.preventDefault();
        const step = STEPS[index];
        if (step.phase === "闲") setIndex(1);
        else next();
      }
    }
  });
}

window.Tutor = { STEPS, setIndex, next, startFromQuery, goto: (id) => {
  const i = STEPS.findIndex((s) => s.id === id);
  if (i >= 0) setIndex(i);
} };

document.addEventListener("pocket-tutor:lang", () => {
  if (STEPS[index]) render(STEPS[index]);
});

document.addEventListener("DOMContentLoaded", () => {
  bind();
  startFromQuery();
});
