// JavaScript Document

//Trigger event on button click
document.getElementById("background-button").onclick = function () {
	
	//Generate random RGB color
	var rgbColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	
	//Select the body background
	var bodyBackground = document.querySelector("#bodyBackground");
	
	//Assign the random color to the CSS backgroundColor and inject into the body tag
	bodyBackground.style.backgroundColor = rgbColor;
};

// NEXT: Display the color in text on the page?
