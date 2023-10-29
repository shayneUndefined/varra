function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

diceTypes.forEach(diceType => {
  const dice = document.getElementById(diceType);
  dice.addEventListener('click', () => {
    const result = rollDice(parseInt(diceType.substring(1)));
    dice.textContent = `${diceType}: ${result}`;
  });
});
