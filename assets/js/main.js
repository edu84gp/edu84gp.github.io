const root = document.documentElement;
const skipLink = document.querySelector(".skip-link");
const main = document.getElementById("contenido");
const themeToggle = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (skipLink && main) {
  skipLink.addEventListener("click", () => {
    main.focus();
  });
}

function readStoredTheme() {
  try {
    const value = localStorage.getItem("tema");
    return value === "light" || value === "dark" ? value : null;
  } catch (error) {
    return null;
  }
}

function applyTheme(theme) {
  const dark = theme === "dark";
  root.dataset.theme = theme;

  if (themeToggle) {
    const label = dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = dark ? "#0b1120" : "#f7f8fa";
  }
}

if (themeToggle) {
  applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("tema", next);
    } catch (error) {
      return;
    }
  });
}

systemTheme.addEventListener("change", (event) => {
  if (readStoredTheme()) {
    return;
  }
  applyTheme(event.matches ? "dark" : "light");
});
