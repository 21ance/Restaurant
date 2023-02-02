import { pageHeader } from "./common";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";

export function initialize() {
  loadHomePage();
}

pageHeader.homeLink.addEventListener("click", (e) => {
  removeChildren();
  loadHomePage();
});

pageHeader.menuLink.addEventListener("click", (e) => {
  removeChildren();
  console.log(e);
  loadMenuPage();
});

pageHeader.contactLink.addEventListener("click", (e) => {
  removeChildren();
  console.log(e);
});

function removeChildren() {
  let children = content.childElementCount;
  for (let i = 0; i < children - 1; i++) {
    content.removeChild(content.lastChild);
  }
}
