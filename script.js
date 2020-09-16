const statusDisplay = document.querySelector('.game-status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn.`;

function onCellClicked(clickedCellEvent) {
    /* Get the HTML element */
    const clickedCell = clickedCellEvent.target;
    /* Get the cell's index */
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    /* Check to see if the cell has already been clicked or if the game is over */
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    /* Update the game state and HTML element */
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    /* Check to see if someone won */
    const winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let roundWon = false;
    for (let i = 0; i <= winningStates.length; i++) {
        /* Get the current win states game state values */
        const winState = winningStates[i];
        let gameState1stVal = gameState[winState[0]];
        let gameState2ndVal = gameState[winState[1]];
        let gameState3rdVal = gameState[winState[2]];
        /* If any of those values are not set then the win state is impossible */
        if (gameState1stVal === '' || gameState2ndVal === '' || gameState3rdVal === ''){
            continue;
        }
        /* Check if the same player set those values */
        if (a === b && b === c)
        {
            roundWon = true;
            break;
        }
    }
    /* If someone won then update the messages */
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    /* Check to see if the game was a draw */
    let roundDraw = !gameState.includes('')
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    /* Change the current player */
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function onRestartGameClicked() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', onCellClicked));
document.querySelector('.game-restart').addEventListener('click', onRestartGameClicked);
