const lootByCR = {
    1: [
        ["10 gold pieces", 0.7],
        ["Common potion", 0.4],
        ["Scroll of cantrip", 0.2]
    ],
    2: [
        ["25 gold pieces", 0.8],
        ["Uncommon potion", 0.6],
        ["Scroll of 1st-level spell", 0.4]
    ],
    3: [
        ["50 gold pieces", 0.9],
        ["Rare potion", 0.7],
        ["Scroll of 2nd-level spell", 0.5]
    ],
    4: [
        ["100 gold pieces", 0.95],
        ["Very Rare potion", 0.8],
        ["Scroll of 3rd-level spell", 0.6]
    ],
    5: [
        ["200 gold pieces", 1.0],
        ["Legendary potion", 0.9],
        ["Scroll of 4th-level spell", 0.7]
    ]
    // Add more loot for higher CR values as needed
};

function getRandomItem(lootArray) {
    const random = Math.random();
    let cumulativeProbability = 0;

    for (const [item, probability] of lootArray) {
        cumulativeProbability += probability;
        if (random < cumulativeProbability) {
            return item;
        }
    }

    // If no item was selected, return an empty string
    return "";
}

const crButtons = document.querySelectorAll(".cr-button");
const lootResult = document.getElementById("loot-result");

crButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCR = button.getAttribute("data-cr");
        const lootList = lootByCR[selectedCR] || [["No loot for this CR.", 1]];
        let lootText = "";

        // Generate a random number of random items
        const numberOfItems = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
        for (let i = 0; i < numberOfItems; i++) {
            const randomItem = getRandomItem(lootList);
            if (randomItem) {
                lootText += (i > 0 ? ", " : "") + randomItem;
            }
        }

        lootResult.textContent = `Loot for CR ${selectedCR}: ${lootText}`;
    });
});
