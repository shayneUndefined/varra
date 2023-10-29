{% assign data = site.data.npcRoller %}

const speciesOptions = {{ data.speciesOptions[] }};
const genderOptions = [ {{ data.genderOptions }} ];
const classOptions = [ {{ data.classOptions }} ];
const sizeOptions = [ {{ data.sizeOptions }} ];
const backgroundOptions = [ {{ data.backgroundOptions }} ];
const motivations = [ {{ data.motivationsOptions }} ];
const flaws = [ {{ data.flawsOptions }} ];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomCharacter() {
    const species = getRandomElement(speciesOptions);
    const alignment = getRandomElement(alignmentOptions);
    const height = getRandomElement(heightOptions);
    const skintone = getRandomElement(skintoneOptions);
    const hair = getRandomElement(hairOptions);
    const weapon = getRandomElement(weaponOptions);

    document.getElementById("species").textContent = species;
    document.getElementById("alignment").textContent = alignment;
    document.getElementById("height").textContent = height;
    document.getElementById("skintone").textContent = skintone;
    document.getElementById("hair").textContent = hair;
    document.getElementById("weapon").textContent = weapon;
}

document.getElementById('generateCharacter').addEventListener('click', generateRandomCharacter);
generateRandomCharacter(); // Generate a character on page load


