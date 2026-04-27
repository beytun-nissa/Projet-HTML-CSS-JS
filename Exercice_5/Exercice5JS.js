function etat(){
	let sombre = document.getElementById("sombre");

	if (sombre.style.backgroundColor === "black") {
		sombre.style.backgroundColor = "white";
		sombre.style.color = "black";
		bouton.textContent="Mode Sombre";
	} else {
		sombre.style.backgroundColor = "black";
		sombre.style.color = "white";
		bouton.textContent="Mode Claire";
	}
}



