function newFormItem(name, placeholder, inputType) {
  const formEntry = document.createElement("div");
  const formLabel = document.createElement(`label`);
  const formInput = document.createElement(`${inputType}`);

  if (inputType == "textarea") {
    formInput.rows = 5;
    formEntry.classList.add("text-block");
  }

  formEntry.classList.add("form-entry");

  formLabel.textContent = `${name}`;
  formInput.placeholder = `${placeholder}`;

  formEntry.append(formLabel, formInput);
  return formEntry;
}

function loadContactBox() {
  const form = document.createElement("form");
  const formTitle = document.createElement("span");
  const btnSubmit = document.createElement("button");

  formTitle.classList.add("contact-us");
  btnSubmit.classList.add("submit-inquiry");

  formTitle.textContent = "Contact Us";
  btnSubmit.textContent = "Submit";

  form.append(
    formTitle,
    newFormItem("Name", "Enter your name", "input"),
    newFormItem("Email", "Enter your email", "input"),
    newFormItem("Inquiry", "What's your inquiry?", "textarea"),
    btnSubmit
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return form;
}

export function loadContactPage() {
  content.append(loadContactBox());
}
