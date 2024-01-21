import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

let searchInputEl;
let cardEls;
document.addEventListener("DOMContentLoaded", function () {
  cardEls = document.querySelectorAll(".card");
  searchInputEl = document.querySelector("#search-input");
  searchInputEl.addEventListener("input", function (event) {
    const searchText = event.target.value;
    cardEls.forEach((cardEl) => {
      const cardTitle = cardEl.querySelector("h5").textContent;
      if (cardTitle.includes(searchText)) {
        cardEl.closest(".col-4").classList.remove("d-none");
      } else {
        cardEl.closest(".col-4").classList.add("d-none");
      }
    });
  });
});
