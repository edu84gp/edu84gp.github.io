const root = document.documentElement;
const skipLink = document.querySelector(".skip-link");
const main = document.getElementById("contenido");
const themeToggle = document.querySelector(".theme-toggle");
const themeStatus = document.getElementById("theme-status");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const themeNames = {
  auto: "automático",
  light: "claro",
  dark: "oscuro"
};

if (skipLink && main) {
  skipLink.addEventListener("click", () => {
    main.focus();
  });
}

function readStoredMode() {
  try {
    const value = localStorage.getItem("tema");
    return value === "light" || value === "dark" ? value : null;
  } catch (error) {
    return null;
  }
}

function resolveTheme(mode) {
  if (mode === "light" || mode === "dark") {
    return mode;
  }
  return systemTheme.matches ? "dark" : "light";
}

function nextMode(mode) {
  const systemMode = systemTheme.matches ? "dark" : "light";
  const opposite = systemMode === "dark" ? "light" : "dark";

  if (mode === "auto") {
    return opposite;
  }
  if (mode === systemMode) {
    return "auto";
  }
  return systemMode;
}

function applyTheme(mode, announce = false) {
  const theme = resolveTheme(mode);
  const next = nextMode(mode);
  root.dataset.theme = theme;
  root.dataset.themeMode = mode;

  if (themeToggle) {
    const label = `Tema ${themeNames[mode]}. Cambiar a tema ${themeNames[next]}`;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = theme === "dark" ? "#0b1120" : "#f7f8fa";
  }

  if (announce && themeStatus) {
    themeStatus.textContent = `Tema ${themeNames[mode]}`;
  }
}

if (themeToggle) {
  applyTheme(readStoredMode() || "auto");

  themeToggle.addEventListener("click", () => {
    const current = root.dataset.themeMode || "auto";
    const next = nextMode(current);
    applyTheme(next, true);

    try {
      if (next === "auto") {
        localStorage.removeItem("tema");
      } else {
        localStorage.setItem("tema", next);
      }
    } catch (error) {
      return;
    }
  });
}

systemTheme.addEventListener("change", () => {
  if (readStoredMode()) {
    return;
  }
  applyTheme("auto");
});
