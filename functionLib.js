function clickthen() {
    alert("You are learning how to call JavaScript function in html");
}
// JavaScript Document



function clickthen1() {
	
	var htmlcode = "<h1>Hello, world!</h1><p>This is some HTML code.</p>";
	
	document.getElementById("output").innerHTMl = htmlCode;
	<!-- output: ID -->
}

	
function routeplan_time() {
    var result = parseFloat(document.getElementById('StHour').value);
	
	document.getElementById('fin').innerHTML = "FinalTime: " + result;
//	document.getElementById('fin').innerHTML = "FinalTime: " + result;
	
	
}	


function saveToFile() {
    var content = parseFloat(document.getElementById('StHour').value);
    var filename = "example.txt";

    var blob = new Blob([content], { type: 'text/plain' });

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

