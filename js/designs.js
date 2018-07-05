const submitGrid = document.querySelector'input[type="submit"]');
// Event listener calls makeGrid() fn on click event
submitGrid.addEventListener("click", makeGrid);

// Construct table selector element
const canvas = document.querySelector("#pixelCanvas");

// Select color input
const colorSelected = document.querySelector("#colorPicker");
colorSelected.addEventListener("change", colorSelection);

function colorSelection() {
    let colorPicked = colorSelected.value;
    canvas.style.color = colorPicked;
    return colorPicked;
}

// Create interactive canvas grid
function makeGrid(event) {    
    
    canvas.innerHTML = '';
    // Select size input
    const row = parseInt(document.querySelector("#inputHeight").value);
    const col = parseInt(document.querySelector("#inputWidth").value);
    event.preventDefault();
    for (let i = 0; i < row; i++) {
        let newRow = document.querySelector("#pixelCanvas").insertRow();
        for (let j = 0; j < col; j++) {
            newRow.insertCell();
        }
    }

    document.getElementById('pixelCanvas').addEventListener("click", function(event) {
        if(event.target && event.target.nodeName == "TD") {
            event.target.style.backgroundColor = colorSelection();
        }
    });
}