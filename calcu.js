function clear_screen(value) {
	// body...

	document.getElementById('screen').value=document.getElementById('screen').value.substring(0,document.getElementById('screen').value.length-1);
}

function btnclick(value) {
	// body...
	document.getElementById('screen').value +=value;
}

function ONscreen(argument) {
	// body...
	    document.getElementById('screen').value="";
}
function result(value) {
	// body...
	document.getElementById('screen').value=eval(document.getElementById('screen').value);
}
