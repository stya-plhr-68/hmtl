function successMessage() {
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var pet = document.getElementById("pet").value;
	
	
	
	if(first_name === "lamprianna" && last_name === "nana" && pet === "dog") {
		alert("Succed");
		window.location.href = "home.html";
	}
	else {
		alert("Wrong password. Please try again.");	
	}
		
	
	
}

function pinkSuccess() {
	var Username = document.getElementById("Username").value;
	var Password = document.getElementById("Password").value;
	
	
	
	
	if(Username === "lamprianna" && Password === "nana") {
		alert("Succed");		
	}
	else {
		alert("Wrong password. Please try again.");	
	}
		
	
	
}