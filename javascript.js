let mainDiv = document.querySelector("#main");
let gridDiameter = document.querySelector("#gridDiameter");

function askDiameter() {
  let diameter = 0;
  while (isNaN(diameter) || diameter <= 0 || diameter > 100) {
    diameter = parseInt(
      prompt("Chosse a diameter for the Grid between 1 and 100 squares.")
    );
  }

  return diameter;
}

gridDiameter.addEventListener("click", () => createGrid(askDiameter()));

function createGrid(squaresPerSide) {
  mainDiv.innerHTML = "";
  for (i = 1; i <= squaresPerSide; i++) {
    let divVert = document.createElement("div");
    divVert.classList.add("divVert");
    mainDiv.appendChild(divVert);

    for (f = 1; f <= squaresPerSide; f++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.cssText = "filter: brightness(50%);";
        
      });
      divVert.appendChild(square);
    }
  }
}
