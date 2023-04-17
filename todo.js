function newElement() {
  // add new element
  // Comments in code is a bad practice
  // Change func name and split this code into smaller functions

  const ul = document.getElementById("ul_list");
  const li = document.createElement("li");
  const inputText = document.getElementById("text_input").value;
  if (inputText === "") {
    alert("Input is empty!!!");
  } else {
    li.innerText = inputText;
    ul.append(li);
    document.getElementById("text_input").value = "";
  }

  // add close button

  const span = document.createElement("span");
  span.innerText = "\u00D7";
  span.className = "close";
  li.append(span);

  span.addEventListener("click", (event) => {
    li.remove();
  });

  // add checked class

  li.addEventListener("click", (event) => {
    event.target.classList.toggle("checked");
  });
}

const addBtn = document.querySelector(".add_btn");
addBtn.addEventListener("click", (event) => {
  newElement();
});
// Don't create a new function if you don't need it
// Also don't pass arguments if you don't use them
// addBtn.addEventListener("click", newElement);

// Consider using a class here
// In constructor find element and add event listener
// In methods do other logic
