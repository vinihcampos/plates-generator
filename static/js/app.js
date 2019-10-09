var HEIGHT = window.innerHeight;
var formHeight;
var size = HEIGHT + "px";

function getSize(){
	formHeight = document.getElementById("plate-form").offsetHeight;
	document.getElementById("fill").style.minHeight = size;
	document.getElementById("fill").style.maxHeight = size;
	window.addEventListener('resize', onWindowResize, false);

	// plate parameters
	var plateWidth = document.getElementById("plate").offsetWidth;
	var plateHeight = 0.325 * plateWidth;

	document.getElementById("plate").style.height = plateHeight + "px";
	document.getElementById("plate").style.borderRadius = 0.0175*plateWidth + "px";
	document.getElementById("plate").style.borderRadius = 0.0175*plateWidth + "px";
	document.getElementById("plate").style.padding = 0.0025*plateWidth + "px";
	document.getElementById("plate").style.backgroundSize = plateWidth + "px " + plateHeight + "px"; 

	// strip parameters
	document.getElementById("strip").style.width = 0.965*plateWidth + "px";
	document.getElementById("strip").style.height = 0.075*plateWidth + "px";
	document.getElementById("strip").style.marginLeft = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.marginRight = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.marginTop = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.borderTopLeftRadius = 0.0075*plateWidth + "px";
	document.getElementById("strip").style.borderTopRightRadius = 0.0075*plateWidth + "px";

	// mercosul parameters
	document.getElementById("mercosul").style.width = 0.08*plateWidth + "px";
	document.getElementById("mercosul").style.height = 0.06*plateWidth + "px";
	document.getElementById("mercosul").style.marginTop = 0.0075*plateWidth + "px";
	document.getElementById("mercosul").style.marginLeft = 0.0375*plateWidth + "px";

	// country parameters
	document.getElementById("country").style.height = 0.03*plateWidth + "px";
	document.getElementById("country").style.paddingTop = 0.025*plateWidth + "px";
	document.getElementById("country").style.fontSize = 0.0375*plateWidth + "px";

	// country flag parameters
	document.getElementById("country-flag").style.width = 0.0775*plateWidth + "px";
	document.getElementById("country-flag").style.height = 0.0575*plateWidth + "px";
	document.getElementById("country-flag").style.marginTop = 0.01*plateWidth + "px";
	document.getElementById("country-flag").style.marginRight = 0.0075*plateWidth + "px";
	document.getElementById("country-flag").style.borderRadius = 0.0075*plateWidth + "px";

	// content parameters
	document.getElementById("content").style.width = 0.965*plateWidth + "px";
	document.getElementById("content").style.height = 0.215*plateWidth + "px";
	document.getElementById("content").style.marginLeft = 0.0175*plateWidth + "px";
	document.getElementById("content").style.marginRight = 0.0175*plateWidth + "px";
	document.getElementById("content").style.marginBottom = 0.0175*plateWidth + "px";
	document.getElementById("content").style.borderBottomLeftRadius = 0.0075*plateWidth + "px";
	document.getElementById("content").style.borderBottomRightadius = 0.0075*plateWidth + "px";

	// waves parameters
	document.getElementById("waves").style.width = 0.965*plateWidth + "px";
	document.getElementById("waves").style.marginTop = 0.155*plateWidth + "px";

	// br parameters
	document.getElementById("br").style.fontSize = 0.052*plateWidth + "px";
	document.getElementById("br").style.marginTop = 0.1425*plateWidth + "px";
	document.getElementById("br").style.marginLeft = 0.005*plateWidth + "px";

	// text parameters
	var texts = document.getElementsByClassName("text");

	for (var i = 0; i < texts.length; i++) {
		texts[i].style.width = 0.115*plateWidth + "px";
		texts[i].style.marginTop = -0.1*plateWidth + "px";
		texts[i].style.fontSize = 0.271*plateWidth + "px";
		texts[i].style.backgroundSize = plateWidth + "px " + plateHeight + "px";
	}

	var minMarginLeft = 0.065*plateWidth;
	for(i = 0; i < 7; ++i){
		document.getElementById("c" + (i+1).toString()).style.marginLeft = ( minMarginLeft + i * 0.115*plateWidth ).toString() + "px";
	}
}

function onWindowResize() {
	HEIGHT = window.innerHeight;
	size = HEIGHT + "px";

    formHeight = document.getElementById("plate-form").offsetHeight;
    document.getElementById("fill").style.minHeight = size;
	document.getElementById("fill").style.maxHeight = size;

	// plate parameters
	var plateWidth = document.getElementById("plate").offsetWidth;
	var plateHeight = 0.325 * plateWidth;

	document.getElementById("plate").style.height = plateHeight + "px";
	document.getElementById("plate").style.borderRadius = 0.0175*plateWidth + "px";
	document.getElementById("plate").style.borderRadius = 0.0175*plateWidth + "px";
	document.getElementById("plate").style.padding = 0.0025*plateWidth + "px";
	document.getElementById("plate").style.backgroundSize = plateWidth + "px " + plateHeight + "px"; 

	// strip parameters
	document.getElementById("strip").style.width = 0.965*plateWidth + "px";
	document.getElementById("strip").style.height = 0.075*plateWidth + "px";
	document.getElementById("strip").style.marginLeft = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.marginRight = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.marginTop = 0.0175*plateWidth + "px";
	document.getElementById("strip").style.borderTopLeftRadius = 0.0075*plateWidth + "px";
	document.getElementById("strip").style.borderTopRightRadius = 0.0075*plateWidth + "px";

	// mercosul parameters
	document.getElementById("mercosul").style.width = 0.08*plateWidth + "px";
	document.getElementById("mercosul").style.height = 0.06*plateWidth + "px";
	document.getElementById("mercosul").style.marginTop = 0.0075*plateWidth + "px";
	document.getElementById("mercosul").style.marginLeft = 0.0375*plateWidth + "px";

	// country parameters
	document.getElementById("country").style.height = 0.03*plateWidth + "px";
	document.getElementById("country").style.paddingTop = 0.025*plateWidth + "px";
	document.getElementById("country").style.fontSize = 0.0375*plateWidth + "px";

	// country flag parameters
	document.getElementById("country-flag").style.width = 0.0775*plateWidth + "px";
	document.getElementById("country-flag").style.height = 0.0575*plateWidth + "px";
	document.getElementById("country-flag").style.marginTop = 0.01*plateWidth + "px";
	document.getElementById("country-flag").style.marginRight = 0.0075*plateWidth + "px";
	document.getElementById("country-flag").style.borderRadius = 0.0075*plateWidth + "px";

	// content parameters
	document.getElementById("content").style.width = 0.965*plateWidth + "px";
	document.getElementById("content").style.height = 0.215*plateWidth + "px";
	document.getElementById("content").style.marginLeft = 0.0175*plateWidth + "px";
	document.getElementById("content").style.marginRight = 0.0175*plateWidth + "px";
	document.getElementById("content").style.marginBottom = 0.0175*plateWidth + "px";
	document.getElementById("content").style.borderBottomLeftRadius = 0.0075*plateWidth + "px";
	document.getElementById("content").style.borderBottomRightadius = 0.0075*plateWidth + "px";

	// waves parameters
	document.getElementById("waves").style.width = 0.965*plateWidth + "px";
	document.getElementById("waves").style.marginTop = 0.155*plateWidth + "px";

	// br parameters
	document.getElementById("br").style.fontSize = 0.052*plateWidth + "px";
	document.getElementById("br").style.marginTop = 0.1425*plateWidth + "px";
	document.getElementById("br").style.marginLeft = 0.005*plateWidth + "px";

	// text parameters
	var texts = document.getElementsByClassName("text");

	for (var i = 0; i < texts.length; i++) {
		texts[i].style.width = 0.115*plateWidth + "px";
		texts[i].style.marginTop = -0.1*plateWidth + "px";
		texts[i].style.fontSize = 0.271*plateWidth + "px";
		texts[i].style.backgroundSize = plateWidth + "px " + plateHeight + "px";
	}

	var minMarginLeft = 0.065*plateWidth;
	for(i = 0; i < 7; ++i){
		document.getElementById("c" + (i+1).toString()).style.marginLeft = ( minMarginLeft + i * 0.115*plateWidth ).toString() + "px";
	}
}

function generatePlate(){
	var country_options = document.getElementById("country-form");
	var country = country_options.options[country_options.selectedIndex].value;
	document.getElementById("country").innerHTML = country_options.options[country_options.selectedIndex].label;
	var plate_content = document.getElementById("content-form").value;

	var plateWidth = document.getElementById("plate").offsetWidth;
	var plateHeight = document.getElementById("plate").offsetHeight;

	var minMarginLeft = 0.065*plateWidth;
	for(i = 0; i < 7; ++i){
		document.getElementById("c" + (i+1).toString()).innerHTML = plate_content[i];
		document.getElementById("c" + (i+1).toString()).style.marginLeft = ( minMarginLeft + i * 0.115*plateWidth ).toString() + "px";
	}

	document.getElementById("country-flag").src = "/static/img/country/" + country + "/" + country + ".png";

	var node = document.getElementById('plate');

	domtoimage.toBlob(node, {width: plateWidth, height: plateHeight, quality: 0.95}).then(function (blob) {
        saveAs(blob, 'plate.jpg');
    });
}