function Ajouter(){
	let input=document.getElementById("saisi");  // On chrche l'élément HTML qui a l'ID "saisi";
	let texte=input.value; //On recupere ce que l'utilisateur a saisi;
	
	if (texte===""){ 
	alert("Veuillez saisir un texte!");
		return;
	}
	
	
	let li=document.createElement("li"); // On cree un élément de liste (ligne <li></li>)
	li.textContent=texte;  //on met le texte recupérer dans cet element
	
	//on cree un bouton pour supprimer
		let btn=document.createElement("button");
		btn.textContent="supprimer";
		btn.onclick=function(){
			li.remove();
		};
		li.appendChild(btn);

	
	let liste=document.getElementById("liste"); //On chrche l'élément HTML qui a l'ID "liste" le ul
	liste.appendChild(li); //On ajoute le nouvel élément li à la liste ul 
	
	input.value=""; //On vide le champ de saisie après avoir ajouté l’élément.

}

let btn=document.creatElement("button");
	btn.textContent="supprimer";

btn.onclick=function(){
	li.remove;
}

li.appendChild(bnt)