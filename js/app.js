var HEIGHT = window.innerHeight;
var formHeight;
var size = HEIGHT + "px";

function getSize(){
	formHeight = document.getElementById("plate-form").offsetHeight;
	document.getElementById("fill").style.minHeight = size;
	document.getElementById("fill").style.maxHeight = size;
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {

	HEIGHT = window.innerHeight;
	size = HEIGHT + "px";

    formHeight = document.getElementById("plate-form").offsetHeight;
    document.getElementById("fill").style.minHeight = size;
	document.getElementById("fill").style.maxHeight = size;
}

function generatePlate(){
	//document.getElementById("plate").style.display = "inline";
	var country_options = document.getElementById("country-form");
	var country = country_options.options[country_options.selectedIndex].value;
	document.getElementById("country").innerHTML = country_options.options[country_options.selectedIndex].label;
	var plate_content = document.getElementById("content-form").value;

	minMarginLeft = 26;
	for(i = 0; i < 7; ++i){
		document.getElementById("c" + (i+1).toString()).innerHTML = plate_content[i];
		document.getElementById("c" + (i+1).toString()).style.marginLeft = ( minMarginLeft + i * 46 ).toString() + "mm";
	}

	document.getElementById("country-flag").src = "img/country/" + country + "/" + country + ".png";
}