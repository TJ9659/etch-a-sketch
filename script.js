const container = document.querySelector("#grid-container");
const gridButton = document.querySelector("#grid-button");
const resetButton = document.querySelector('#reset-button');
const defaultButton = document.querySelector('#default-button');
const rgbButton = document.querySelector('#rgb-button');
let size = 16;
let grid;
let colorDefault = true;

/*  this is a function to return random rgb values as per extra credit
    1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
*/
function random_rgba() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function changeColor() {
  if (colorDefault === false) {
    return `background-color: ${random_rgba()}`;
  }
  return `background-color: black`;
}


function createGrid(rows, columns) {

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < columns; j++) {
      const column = document.createElement("div");
      column.classList.add("column");

      column.addEventListener('mouseover', () => {
        column.setAttribute("style", changeColor());
      })
      row.appendChild(column)
    }

    container.appendChild(row);
  }
}

createGrid(16, 16);

gridButton.addEventListener("click", (e) => {
  size = prompt("What size do you want the grid to be ? Example: 1-100");


  if (isNaN(size)) {
    alert("Ensure you enter a valid number between 1-100.")
  }
  else if (size > 100) {
    alert("Can't be over 100!");
  } else if (size <= 0 || size === '') {
    alert("Can't be under 0, or empty.");
  } else {
    container.replaceChildren();
    createGrid(size, size)
  }
})

resetButton.addEventListener('click', (e) => {
  container.replaceChildren();
  createGrid(size, size)
})


// to avoid unnecessary changes
defaultButton.addEventListener("click", (e) => {
  if (colorDefault === true) {
    return;
  }
  colorDefault = true;
})

rgbButton.addEventListener("click", (e) => {
  if (colorDefault === false) {
    return;
  }
  colorDefault = false;
})