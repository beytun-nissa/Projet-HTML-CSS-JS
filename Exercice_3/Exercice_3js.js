//En temps normale un formulaire en HTML: envoie les données et  recharge la page 
//maintenant preventDefault() vient bloquer le comportement normale du formulaire 
//Donc pas de rechargement et dans ce cas notre javascript pourra s'executer nice

const valider=document.getElementById("bouton");
function recuperer_champ(event){ 
// "Donne-moi les infos sur l’événement qui vient de se produire" event=événement
   event.preventDefault();  //Empeche l'envoi du formulaire

let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let age=document.getElementById("age");
let sexe=document.querySelector("input[name='sexe']:checked");
let loisir=document.querySelectorAll("input[name='loisir']:checked");
let pays=document.getElementById("pays");
let commentaire=document.getElementById ("commentaire");

	if (nom.value==="" || prenom.value===""){alert("Veuillez remplir tous les champs");
		}else {
			alert("Formulaire bien envoyé");
		}
		
console.log(nom.value);
console.log(prenom.value);
console.log(sexe.value);
console.log(age.value);
console.log(commentaire.value);
//pUISQue checkbox donne plusieurs valeurs donc on doit recuperer dabord les element et les mettre dans une liste avant de pouvoir les affichés
let les_loisirs_choisis=[];
loisir.forEach(l => les_loisirs_choisis.push(l.value)); //push=ajouter dans un tableau
console.log(les_loisirs_choisis);
console.log(pays.value);

let resultat=document.getElementById("monblk") 

resultat.innerHTML="<h3>Résultat :</h3>"+"<p>Nom:"+nom.value + "</p>"+ 
 "<p>Prénom:"+prenom.value+ "</p>"+
 "<p>Age:"+age.value+ "</p>"+
 "<p>Sexe:"+sexe.value+ "</p>"+
 "<p>Loisir:"+les_loisirs_choisis.join(",")+ "</p>"+
 "<p>Pays:"+pays.value+ "</p>"+
 "<p>Commentaire:"+commentaire.value+ "</p>";
 

}

//On a 2 façons de récupérer une valeur :
//  Avec id (le plus simple) ----   getElementById("---")
// Avec name (souvent pour groupes)----- querySelector("input[name='sexe']:checked")

