const pokemon = document.getElementById('pokemon');
const species = document.getElementById('species');
const type = document.getElementById('type');
const abilities = document.getElementById('abilites');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');


const tableBody = document.querySelector("table").querySelector("tbody");
const newRow = document.createElement("tr");
// const cell_1 = document.createElement("td");
// cell_1.textContent = "Charzard";
tableBody.appendChild(newRow);
