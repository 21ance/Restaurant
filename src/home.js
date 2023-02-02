function loadMainText() {
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  const h1Subtext = document.createElement("p");
  const btnMenu = document.createElement("button");

  btnMenu.classList.add("button-menu");

  h1.textContent = "Pizzarino";
  h1Subtext.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum autem rem beatae nemo dignissimos consequatur explicabo dolor, amet iusto voluptatum ratione vero, repudiandae tenetur est incidunt animi harum non?";
  btnMenu.textContent = "Check our menu";

  main.append(h1, h1Subtext, btnMenu);

  return main;
}

function loadMainImage() {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");

  return imageContainer;
}

function loadSocials() {
  const socialContainer = document.createElement("div");
  const span = document.createElement("span");
  const icons = document.createElement("div");
  const facebook = document.createElement("ion-icon");
  const twitter = document.createElement("ion-icon");
  const instagram = document.createElement("ion-icon");
  const youtube = document.createElement("ion-icon");

  facebook.setAttribute("name", "logo-facebook");
  twitter.setAttribute("name", "logo-twitter");
  instagram.setAttribute("name", "logo-instagram");
  youtube.setAttribute("name", "logo-youtube");

  icons.classList.add("icons");
  socialContainer.classList.add("social");

  span.textContent = "Follow us on socials:";

  icons.append(facebook, twitter, instagram, youtube);
  socialContainer.append(span, icons);

  return socialContainer;
}

export function loadHomePage() {
  content.append(loadMainText(), loadMainImage(), loadSocials());
}
