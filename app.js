const root = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");

function setLang(lang) {
  root.lang = lang;
  document.querySelectorAll("[data-es]").forEach((el) => {
    const value = el.getAttribute("data-" + lang);
    if (value != null) {
      el.textContent = value;
    }
  });
  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  try {
    localStorage.setItem("vxgm-lang", lang);
  } catch (err) {}
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let saved = "es";
try {
  saved = localStorage.getItem("vxgm-lang") || "es";
} catch (err) {}
setLang(saved);

document.body.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealEls = document.querySelectorAll("[data-reveal]");

if (!reduceMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}
