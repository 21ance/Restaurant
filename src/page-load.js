import { pageHeader } from "./header";
import { loadHomePage } from "./home";

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
});

pageHeader.contactLink.addEventListener("click", (e) => {
  removeChildren();
  console.log(e);
});

function removeChildren() {
  let children = pageHeader.content.childElementCount;
  for (let i = 0; i < children - 1; i++) {
    pageHeader.content.removeChild(pageHeader.content.lastChild);
  }
}
