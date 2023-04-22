// game field

const cells = document.querySelectorAll('#field td');

// game

function startGame(cells) {
    let counter = 0;
    const isVictory = (cells) => {
        if (cells[0].innerText === cells[1].innerText && cells[1].innerText === cells[2].innerText && cells[0].innerText !== '') {
            return true;
        } else if (cells[3].innerText === cells[4].innerText && cells[4].innerText === cells[5].innerText && cells[3].innerText !== '') {
            return true;
        } else if (cells[6].innerText === cells[7].innerText && cells[7].innerText === cells[8].innerText && cells[6].innerText !== '') {
            return true;
        } else if (cells[0].innerText === cells[3].innerText && cells[3].innerText === cells[6].innerText && cells[0].innerText !== '') {
            return true;
        } else if (cells[1].innerText === cells[4].innerText && cells[4].innerText === cells[7].innerText && cells[1].innerText !== '') {
            return true;
        } else if (cells[2].innerText === cells[5].innerText && cells[5].innerText === cells[8].innerText && cells[2].innerText !== '') {
            return true;
        } else if (cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText && cells[0].innerText !== '') {
            return true;
        } else if (cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText && cells[2].innerText !== '') {
            return true;
        } else {
            return false;
        }
    };
    const clickOn = (event) => {
        const elem = document.querySelector('.div_for_game_score')
        const newTeg = document.createElement('h3');
        if (counter%2 === 0) {
                event.target.innerText = 'X';
        } else {
                event.target.innerText = 'O';
        }
        event.target.removeEventListener('click', clickOn)
        if (isVictory(cells)) {
            newTeg.innerText = counter%2 === 0 ? 'Winner sing "X"' : 'Winner sing "O"';
            elem.append(newTeg);
            for (let cell of cells) {
                cell.removeEventListener('click', clickOn);
            };
        } else if (counter === 8) {
            newTeg.innerText = 'Draw, no one winner';
            elem.append(newTeg);
            for (let cell of cells) {
                cell.removeEventListener('click', clickOn);
            };
        }
        counter++;
    }
    for (let cell of cells) {
        cell.addEventListener('click', clickOn)
    }
    
};

startGame(cells);

// new game

const newGameBtn = document.getElementById('new_game');

newGameBtn.addEventListener('click', (event) => {
    for (let cell of cells) {
        cell.innerText = '';
    }
    startGame(cells);
});
