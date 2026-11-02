const skipLink = document.querySelector(".skip-link");
const main = document.getElementById("contenido");

if (skipLink && main) {
  skipLink.addEventListener("click", () => {
    main.focus();
  });
}
