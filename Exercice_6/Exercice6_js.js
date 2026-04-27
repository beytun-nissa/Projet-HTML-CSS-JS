//on creer une liste ou on va mettre les utilisateur
let users=[];
//selectionner un untilisateur
let currentUser=null;

//Creation de la fonction AJouter utilisateur
function ajouter_user(event){
	event.preventDefault(); 
	
	let nom=document.getElementById("nom");
	let prenom=document.getElementById("prenom");
	
	let nomuser=nom.value; //on recupere le texte nom
	let prenomuser=prenom.value; //on recupere le texte prenom
	
	//si l'ulisateur ne saisi pas les deux ca na marchera pas
	if (nomuser==="" || prenomuser==="")return;
	
	
	
	
	
	

	
	 
	
	
	// console.log(users);


	
	
	//En fin on ajoute la ligne tr1 dans le body
	body.appendChild(tr1);
	
	
	//Modifier utlisateur
	let btn_modifier_user=document.createElement("button");
	btn_modifier_user.innerText="Modifier";

	btn_modifier_user.onclick=function(){
		let nouvnom=prompt("nouveau nom:",user.nom);
		let nouvprenom=prompt("nouveau nom:",user.prenom);
		
		user.nom=nouvnom;
		user.prenom=nouvprenom;
	}
}
//-----------------------------------------------------

function ajouter_tache(){
	if (currentUser===null){
		alert("Veuillez selection un utilisateur:");
		return;
	}
	
	let tache=document.getElementById("tache");
	let les_taches=tache.value;
	
	//On créér l'objet tache pour pouvoir regrouper plusieurs informations
	let tacheobjet={
		texte:les_taches,
		
	}
	//Ici On va lier la tache à l'utilisateur
	currentUser.taches.push(tacheobjet);
	
	console.log(currentUser.taches);
	
	tache.value="";
	
	
}


function afficher_tache(){
	let listache=document.getElementById("tbodytache");
	listache.innerHTML="";
	alert("la liste des taches est:",listache);
	
}

//POur faire deux tableau archiver et desarchhiver 

let body=document.getElementById("tbody");
let body2=document.getElementById("tbody2");


//En fin on ajoute la ligne tr1 dans le body
	body.appendChild(tr1);
	
	if(user.archive) { body2.appendChild(tr1);
			
		}else{
			body.appendChild(tr1);
		};
		
		/////affecter
		function ajouter_tache(){
		if (currentUser===null){
			alert("Veuillez selection un utilisateur:");
			return;
		}
		
		let tache=document.getElementById("tache");
		let les_taches=tache.value;
		
		//On créér l'objet tache pour pouvoir regrouper plusieurs informations
		let tacheobjet={
			texte:les_taches,
			
		}
		//Ici On va lier la tache à l'utilisateur
		let btnaff=document.createElement("button");
		btnaff.textContent="Aff";
		btnaff.onclick=function(){
		
		currentUser.taches.push(tacheobjet);
		
		console.log(currentUser.taches);
		
		tache.value="";
		
		let tdaf=document.createElement("td");
		tdaf.appendChild(btnaff);
		trtache.appendChild(tdaf);
		}
		afficher_tache();
	}