import { pageHeader } from "./common";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

export function initialize() {
  loadHomePage();
}

pageHeader.homeLink.addEventListener("click", (e) => {
  emptyPage();
  loadHomePage();
});

pageHeader.menuLink.addEventListener("click", (e) => {
  emptyPage();
  loadMenuPage();
});

pageHeader.contactLink.addEventListener("click", (e) => {
  emptyPage();
  loadContactPage();
});

function emptyPage() {
  let children = content.childElementCount;
  for (let i = 0; i < children - 1; i++) {
    content.removeChild(content.lastChild);
  }
}
