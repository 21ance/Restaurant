export const pageHeader = (() => {
  const header = document.createElement("header");
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");

  homeLink.textContent = "HOME";
  menuLink.textContent = "MENU";
  contactLink.textContent = "CONTACT US";

  header.append(homeLink, menuLink, contactLink);
  content.append(header);

  return { homeLink, menuLink, contactLink };
})();
