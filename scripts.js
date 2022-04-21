// Select size input
let canvasHeight = document.getElementById("inputHeight").value,
	canvasWidth = document.getElementById("inputWidth").value,
	canvasTable = document.querySelector("#pixelCanvas"),
	submitBtn = document.querySelector(".submit-btn");

// grid making function
function makeGrid(canvasHeight, canvasWidth) {
	canvasHeight = document.getElementById("inputHeight");
	canvasWidth = document.getElementById("inputWidth");

	for (let i = 0; i < canvasHeight.value; i++) {
		let pixelRow = canvasTable.insertRow(i); //creates a row after the first loop

		for (let x = 0; x < canvasWidth.value; x++) {
			let pixelCell = pixelRow.insertCell(x); //creates cells inside the row

			//color picking function 
			pixelCell.addEventListener("click", () => {
				let colorPicker = document.getElementById("colorPicker"); // selects color picked by user
				pixelCell.style.cssText = `background: ${colorPicker.value}`; //sets the background to the value of the color picked by user

				let selectedCell = document.querySelector("#selectedCell"),
					selectedColor = document.querySelector("#selectedColor");

				selectedCell.textContent = `Selected Cell: Row - ${parseInt(i + 1)}, Column - ${parseInt(x + 1)}`; //shows the current cell clicked by user
				selectedColor.textContent = "Selected Color: " + colorPicker.value; //shows the current color selected by user	
			});
		}
	}
}

// declaration of grid making function 
makeGrid(canvasHeight, canvasWidth);

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener("click", function (e) {
	e.preventDefault();  //prevents page from reloading when creating the grid.

	let canvasHeight = document.getElementById("inputHeight").value;
	let canvasWidth = document.getElementById("inputWidth").value;
	canvasTable.firstChild.remove();
	makeGrid(canvasHeight, canvasWidth); 
});

