const container = document.querySelector("#grid-container");
const gridButton = document.querySelector("#grid-button");
const resetButton = document.querySelector('#reset-button');
let size = 16;
let grid;

function createGrid(rows, columns) {

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < columns; j++) {
      const column = document.createElement("div");
      column.classList.add("column");

      column.addEventListener('mouseover', () => {
        column.classList.add("hover-column");
      })
      row.appendChild(column)
    }

    container.appendChild(row);
  }
}

createGrid(16, 16);

gridButton.addEventListener("click", (e) => {
    size = prompt("What size do you want the grid to be ?");

    if(size > 100){
        alert("Can't be over 100!");
    }else if(size <= 0 || size === ''){
        alert("Can't be under 0 or empty!");
    }else{
        container.replaceChildren();
        createGrid(size, size)
       
    }
})

resetButton.addEventListener('click', (e) => {
  container.replaceChildren();
  createGrid(size, size)
})