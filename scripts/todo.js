const noteList = document.getElementById("ul_list");
const addButton = document.querySelector(".add_btn");

function createNewElement() {
  const newTegLi = document.createElement("li");
  const newTegSpan = createCloseButton();
  newTegLi.innerText = currentTextInInput();
  newTegLi.append(newTegSpan);
  noteList.append(newTegLi);
  newTegSpan.addEventListener("click", () => {
    newTegLi.remove();
  });
  newTegLi.addEventListener("click", (event) => {
    event.target.classList.toggle("checked");
  });
  document.getElementById("text_input").value = "";
};

function createCloseButton(){
  const newSpan = document.createElement("span");
  newSpan.innerText = "\u00D7";
  newSpan.className = "close";
  return newSpan;
};

function currentTextInInput() {
  return document.getElementById("text_input").value;
};

addButton.addEventListener("click", () => {
  if (currentTextInInput() === "") {
    alert("Input is empty!!!");
  } else {
    createNewElement();
  }
});
