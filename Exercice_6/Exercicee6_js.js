//on creer une liste ou on va mettre les utilisateur  let users=[]; 
//Puisqu'on doit enregistrer les données dans un navigateur web on utilise maintenant localStorage
let users=JSON.parse(localStorage.getItem("users"))||[];

//selectionner un utilisateur
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
	if (nomuser.length<2 || prenomuser.length<3){
		return alert("nom ou prenom invalide");
	}
	
	//on creer un objet utilisateur pour stocker nom prenom et les autres informations:
	let user={
		nom:nomuser,
		prenom:prenomuser,
		taches:[],
		archive:false
	};
	 
	//on met les details de chaque utilisateur dans la liste users
	users.push(user);
	//Pour sauvegarder
	localStorage.setItem("users", JSON.stringify(users));
	
	console.log(users);
	//Appel à la fonction 
	Afficher_user();
	
	nom.value="";
	prenom.value="";
	
} 


function Afficher_user(){
	
	let body=document.getElementById("tbody");
	let body2=document.getElementById("tbody2");
	body.innerHTML=""; //On reinitialise
	body2.innerHTML=""; //On reinitialise
	
	users.forEach((user,index)=> { //foreach permet de parcourir le tableau users index=incice de lelement
		
		// if(user.archive) return;  //l'utilisateur archiver disparait du tableau mais reste dans users
		let tr1=document.createElement("tr");
		let td1=document.createElement("td");
		let td2=document.createElement("td");
		
		//On met nom et prenom dans les colonnes td1 et td2
		td1.textContent=user.nom;
		td2.textContent=user.prenom;

		//Ensuite on ajoute les colonnes td1 et td2 dans la ligne tr1
		tr1.appendChild(td1);
		
		tr1.appendChild(td2);	
	
	
	//---------------------------------------------
	// Suppprimer un utilisateur:
	//---------------------------------------------
	let btnsup=document.createElement("button");
	btnsup.textContent="Supprimer";
	btnsup.classList.add("btn-supprimer");
	
	btnsup.onclick=function(e){
		e.stopPropagation(); //empeche le clique sur la ligne
		users.splice(index,1); //supprime "1" element du tableau a la position index 
					// ICI users.remove() ne marche pas car users nest pas un element html mais plutot un obet
					
					
		localStorage.setItem("users", JSON.stringify(users));
		
		Afficher_user(); // metre a jour le tableau
	};
	let tdsup=document.createElement("td");
	tdsup.appendChild(btnsup);
	tr1.appendChild(tdsup);
	
	//--------------------------------------------------
	// Modifier un utilisateur:
	//---------------------------------------------------
	let btnmodifier=document.createElement("button");
	 btnmodifier.innerText="Modifier";
	 btnmodifier.classList.add("btn-modifier");
	 
	//Action du bouton modifier
	btnmodifier.onclick=function(){
		let nouvnom=prompt("Nouveau nom:",user.nom);
		let nouvprenom=prompt("Nouveau prenom:",user.prenom);
		
		//On recupere le nom et le prenom Modifier !!!("if (nouvnom)"...permet de conserver les meme nom ou prenom Si l'utilisateur clique sur annuler
		if (nouvnom) user.nom=nouvnom;
		if (nouvprenom) user.prenom=nouvprenom;
		
		localStorage.setItem("users", JSON.stringify(users));
		//appel à la fonction Afficheruser pour reinitialiser le tableau apres modification
		Afficher_user();
	}
	//On veut Ajouter le bouton cree (bouton modifier) dans le tableau
	//on creer dabord 
	let tdbouton=document.createElement("td");
	tdbouton.appendChild(btnmodifier);

	tr1.appendChild(tdbouton);
	
	
	//---------------------------------------------------
	// Archiver un utilisateur:
	//---------------------------------------------------
	let btnArchiv=document.createElement("button");
			// btnArchiv.innerText="Archiver";
	if (user.archive === true) {
		btnArchiv.innerText = "Désarchiver";
		btnArchiv.classList.add("btn-desarchiver");
	} else {
		btnArchiv.innerText = "Archiver";
		btnArchiv.classList.add("btn-archiver");
	}
		
	//Action du bouton Archive
	btnArchiv.onclick=function(event){
		event.stopPropagation();
		
		user.archive=!user.archive;
		
		localStorage.setItem("users", JSON.stringify(users));
		Afficher_user();
	}
	
	let tdarchiv=document.createElement("td");
	tdarchiv.appendChild(btnArchiv);
	// tdbouton.appendChild(btnArchiv);
	tr1.appendChild(tdarchiv);

	//En fin on ajoute la ligne tr1 dans le body
	if(user.archive) { body2.appendChild(tr1);
			
		}else{
			body.appendChild(tr1);
		};
	
	//---------------------------------------------------
	// TAches  utilisateur:
	//---------------------------------------------------
	
	let btntache=document.createElement("button");
	btntache.textContent="les taches";
	btntache.classList.add("btn-tache");
	
	btntache.addEventListener("click",function(event){
    event.stopPropagation(); // évite sélection double inutile

    currentUser = user;
    // console.log("Utilisateur sélectionné :", currentUser);

    afficher_tache(); // affiche ses tâches
	});
	
	let tdtache=document.createElement("td");
	tdtache.appendChild(btntache);
	tr1.appendChild(tdtache);
	//on va creer une fonction pour rendre cliquable les utilisateurs
	tdtache.onclick=function(e){
		e.stopPropagation();
		currentUser=user;
		console.log("l'utilisateur selectionner est:");
		afficher_tache();

	}
	
	});

};
	function ajouter_tache(){
		if (currentUser===null){
			alert("Veuillez selection un utilisateur:");
			return;
		}
		
		let tache=document.getElementById("tache");
		let les_taches=tache.value;
		
			if (les_taches.length<3){
				return alert("saisi invalide");
				}
	
		
		//On créér l'objet tache pour pouvoir regrouper plusieurs informations
		let tacheobjet={
			texte:les_taches,
			
		}
		//Ici On va lier la tache à l'utilisateur
		currentUser.taches.push(tacheobjet);
		
		console.log(currentUser.taches);
		
		tache.value="";
		
		afficher_tache();
	}


function afficher_tache(){
	let listache=document.getElementById("tbodytache");
	tbodytache.innerHTML="";
	// alert("la liste des taches est:",listache);
	
	currentUser.taches.forEach((tache,index)=>{
		
	let trtache=document.createElement("tr");
	//texte
	let tdtache=document.createElement("td");
	tdtache.textContent=tache.texte;
	
	trtache.appendChild(tdtache);
	
	// on va creer une fonction pour rendre cliquable les utilisateurs
	// tr1.onclick=function(){
		 // currentUser=user;
		 // console.log("l'utilisateur selectionner est:");
		// Afficher_user();

	// }
	
	//---------------------------------------------
	// Suppprimer Tache:
	//---------------------------------------------
	
	let bsup=document.createElement("button");
	bsup.textContent="Supprimer";
	bsup.classList.add("bsup");
	
	bsup.onclick=function(e) {
		e.stopPropagation()
		currentUser.taches.splice(index,1);
		
		localStorage.setItem("users", JSON.stringify(users));
		afficher_tache();
	};
	let tdsup=document.createElement("td");
	tdsup.appendChild(bsup);
	trtache.appendChild(tdsup);
	
	//listache.appendChild(trtache);
	
	
	//---------------------------------------------
	// Modifier Tache:
	//---------------------------------------------
	let bmod=document.createElement("button");
	bmod.textContent="Modifier";
	
	bmod.classList.add("bouton_mmodtache");
	
	bmod.onclick=function(e){
		e.stopPropagation()
		let nouvtache=prompt("Modifier Tache:",tache.texte);
		
		if (nouvtache){
			tache.texte=nouvtache;
			localStorage.setItem("users", JSON.stringify(users));
			afficher_tache()
		}
		
		
	}
		let tdmod=document.createElement("td")
		tdmod.appendChild(bmod);
		trtache.appendChild(tdmod);
		
		
		
		listache.appendChild(trtache)
		
	});
	
};
Afficher_user();