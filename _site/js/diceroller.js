function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];
const historyList = document.getElementById('history-list');
const totalDisplay = document.getElementById('total');
const clearButton = document.getElementById('clear-button');
const rollCounts = {};

diceTypes.forEach(diceType => {
  const dice = document.getElementById(diceType);
  dice.textContent = `${diceType}: 0`; // Initialize roll counts
  dice.addEventListener('click', () => {
    const result = rollDice(parseInt(diceType.substring(1)));
    addToHistory(`${diceType}: ${result}`);
    updateRollCount(diceType);
  });
});

clearButton.addEventListener('click', () => {
  clearHistory();
  clearRollCounts();
});

function addToHistory(entry) {
  const li = document.createElement('li');
  li.textContent = entry + ",  ";
  historyList.appendChild(li);
  totalDisplay.textContent = parseInt(totalDisplay.textContent) + parseInt(entry.split(': ')[1]);
}

function updateRollCount(die) {
  rollCounts[die] = (rollCounts[die] || 0) + 1;
  const dice = document.getElementById(die);
  dice.textContent = `${die}: ${rollCounts[die]}`;
}

function clearHistory() {
  historyList.innerHTML = '';
  totalDisplay.textContent = '0';
}

function clearRollCounts() {
  for (const dieType in rollCounts) {
    rollCounts[dieType] = 0;
    const dice = document.getElementById(dieType);
    dice.textContent = `${dieType}: 0`;
  }
}
