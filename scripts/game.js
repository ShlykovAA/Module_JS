const cells = document.querySelectorAll("#field td");
const gameScoreTable = document.querySelector(".div_for_game_score");
const newGameBtn = document.getElementById("new_game");
let counter = 0;

function startGame(cells) {
  counter = 0;
  for (let cell of cells) {
    cell.addEventListener("click", clickOn);
  }
};

function clearCells() {
  for (let cell of cells) {
    cell.removeEventListener("click", clickOn);
  }
};

function clickOn(event) {
  if (counter % 2 === 0) {
    event.target.innerText = "X";
  } else {
    event.target.innerText = "O";
  }
  event.target.removeEventListener("click", clickOn);
  addWinnerToGameScore();
  counter++;
};

function addWinnerToGameScore() {
  const createNewTeg = document.createElement("h3");
  if (isVictory(cells)) {
    createNewTeg.innerText = counter % 2 === 0 ? 'Winner sing "X"' : 'Winner sing "O"';
    gameScoreTable.append(createNewTeg);
    clearCells();
  } else if (counter === 8) {
    createNewTeg.innerText = "Draw, no one winner";
    gameScoreTable.append(createNewTeg);
    clearCells();
  }
};

function isVictory(cells) {
  if (
    cells[0].innerText === cells[1].innerText &&
    cells[1].innerText === cells[2].innerText &&
    cells[0].innerText !== ""
  ) {
    return true;
  } else if (
    cells[3].innerText === cells[4].innerText &&
    cells[4].innerText === cells[5].innerText &&
    cells[3].innerText !== ""
  ) {
    return true;
  } else if (
    cells[6].innerText === cells[7].innerText &&
    cells[7].innerText === cells[8].innerText &&
    cells[6].innerText !== ""
  ) {
    return true;
  } else if (
    cells[0].innerText === cells[3].innerText &&
    cells[3].innerText === cells[6].innerText &&
    cells[0].innerText !== ""
  ) {
    return true;
  } else if (
    cells[1].innerText === cells[4].innerText &&
    cells[4].innerText === cells[7].innerText &&
    cells[1].innerText !== ""
  ) {
    return true;
  } else if (
    cells[2].innerText === cells[5].innerText &&
    cells[5].innerText === cells[8].innerText &&
    cells[2].innerText !== ""
  ) {
    return true;
  } else if (
    cells[0].innerText === cells[4].innerText &&
    cells[4].innerText === cells[8].innerText &&
    cells[0].innerText !== ""
  ) {
    return true;
  } else if (
    cells[2].innerText === cells[4].innerText &&
    cells[4].innerText === cells[6].innerText &&
    cells[2].innerText !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

newGameBtn.addEventListener("click", (event) => {
  for (let cell of cells) {
    cell.innerText = "";
  }
  startGame(cells);
});

startGame(cells);
