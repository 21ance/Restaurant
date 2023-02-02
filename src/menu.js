function newMenu(name, description, price) {
  const menuItems = document.createElement("div");
  const menuName = document.createElement("span");
  const menuDesc = document.createElement("p");
  const menuPrice = document.createElement("span");

  menuItems.classList.add("menu-item");
  menuName.classList.add("menu-name");
  menuPrice.classList.add("price");

  menuName.textContent = name;
  menuDesc.textContent = description;
  menuPrice.textContent = price;

  menuItems.append(menuName, menuDesc, menuPrice);
  return menuItems;
}

const menu = document.createElement("div");
const pizzaList = document.createElement("div");
const pastaList = document.createElement("div");

const pizzaBg = document.createElement("div");
const pastaBg = document.createElement("div");

menu.classList.add("menu");
pizzaList.classList.add("pizza-list");
pastaList.classList.add("pasta-list");

pizzaBg.classList.add("pizza-bg");
pastaBg.classList.add("pasta-bg");

// https://www.southernliving.com/food/dish/pizza/most-popular-pizza-toppings
pizzaList.append(
  newMenu(
    "Pepperoni",
    "Poll after poll, pepperoni always tops the list of America's favorite pizza toppings. When it doubt, you can't go wrong with a classic.",
    "$20.00"
  ),
  newMenu(
    "Mushrooms",
    "This earthy topping can be divisive in the kitchen, but many agree that it fits right in on a pizza, and this breakfast recipe is a perfect excuse to try eggs on a pizza. Spoiler: You're going to love it.",
    "$22.00"
  ),
  newMenu(
    "Extra Cheese",
    "Who doesn't love a little extra cheese for the perfect cheese-pull picture? We sure do. You might want to check with your local pizza joint to see how much cheese actually comes with an 'extra cheese' order, because apparently, it's hotly debated.",
    "$25.00"
  ),
  newMenu(
    "Spinach",
    "Spinach is a delicious way to add a little green to your pizza. Another popular green found on pizzas is arugula. Unlike spinach, which is usually cooked with the pizza, arugula is placed fresh on top of the pizza for a fresh, peppery pop.",
    "$18.00"
  )
);

//https://www.southernliving.com/food/pasta/pasta-casserole-recipes
pastaList.append(
  newMenu(
    "Heavenly Chicken Lasagna",
    "Get ready to delight in the creamy finish, with four cheeses melting into the dish with rich Alfredo sauce, sautéed onions, sliced mushrooms, chopped spinach, and chicken.",
    "$15.00"
  ),
  newMenu(
    "Creamy Kale and Pasta Bake",
    "Who knew kale could taste this good? Put your lush greens from the farmers' market to use this season with this creamy bake with loads of gooey cheese and tender kale.",
    "$10.00"
  ),
  newMenu(
    "Mac and Cheese with Ham",
    "Set any supper or potluck up for success with this mouthwateringly smoky recipe full of a creamy smoked Gouda and Cheddar sauce, corkscrew pasta, and chopped smoked ham.",
    "$13.00"
  )
);

menu.append(pizzaList, pizzaBg, pastaList, pastaBg);
export function loadMenuPage() {
  console.log("menu");
  content.append(menu);
}
