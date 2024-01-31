  const firebaseConfig = {
    apiKey: "AIzaSyBzTTNxVplDsUmCAhcHDxTiH8dCmOQbWiM",
    authDomain: "play4health-abdc1.firebaseapp.com",
    databaseURL: "https://play4health-abdc1-default-rtdb.firebaseio.com",
    projectId: "play4health-abdc1",
    storageBucket: "play4health-abdc1.appspot.com",
    messagingSenderId: "18095889051",
    appId: "1:18095889051:web:159ecaf663b46f9b1f043e",
    measurementId: "G-QX9RGZ1YM2"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("operatori");


var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var nome = document.getElementById("name");
var cognome = document.getElementById("surname");
	
inserisciValoriCampi(username, email, password, nome, cognome);


//prende i dati dal form		
document.getElementById("modificaDati").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");
  var nome = getElementVal("name");
  var cognome = getElementVal("surname");
  
  validaDatiModificati(email, password, username, nome, cognome);
  
  
}

function inserisciValoriCampi(username, email, password, nome, cognome){
	
	var ref = firebase.database().ref("operatori");
	
	let usernameList = [];
	let emailList = [];
	let passwordlList = [];
	let nomeList = [];
	let cognomeList = [];
	
	
	//credenziali utente loggato
	var usernameUtente = sessionStorage.getItem('username'); 
	var emailUtente = sessionStorage.getItem('email'); 
	
var trovato = 0;
const promessa = new Promise((resolve, reject) => {	
	//leggo i dati per assegnarli ai campi che verranno modificati
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  usernameList.push(childSnapshot.val().username);
		  emailList.push(childSnapshot.val().email);
		  passwordlList.push(childSnapshot.val().password);
		  nomeList.push(childSnapshot.val().nome);
		  cognomeList.push(childSnapshot.val().cognome);
		  
		  	if(usernameList.includes(usernameUtente)) {
					
					var posizione = usernameList.indexOf(usernameUtente);
					
					username.value = usernameUtente;
					email.value = emailUtente;			
					password.value = passwordlList[posizione];
					nome.value = nomeList[posizione];
					cognome.value = cognomeList[posizione];
					
					trovato = 1;
				}
				
    });
	
resolve(trovato);

});

})

promessa.then(trovato => {
  if (trovato == 1) {
	  document.getElementById("progressBar").style.display = "none";
	  document.getElementById("container").style.display = "";
  }
  
});

	//occhio per mostra password
const togglePassword = document.querySelector('#togglePassword');
const password2 = document.querySelector('#password');
  
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});	  
			


	
}

function validaDatiModificati(email, password, username, nome, cognome) {
	
	//regex email
	var validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	//regex password
	var validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	
	//regex nome
	var validNameRegex = /^(?!-)(?!.*-$)[a-zA-Z-]+$/;
	
	var nomeValido = 0; //il nome rispetta la regex
	var cognomeValido = 0; //il cognome rispetta la regex
	var emailValida = 0; //la mail rispetta la regex
	var passwordValida = 0; //la password rispetta la regex
	var usernameNonUsato = 0; //l'username è utilizzato
	var emailNonUsata = 0; //l'email è utilizzata
	
//verifico se il nome rispetta la regex	

	if (!nome.match(validNameRegex)) {
	  
	  document.querySelector(".alertNomeNonValido").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertNomeNonValido").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 nomeValido = 1;
	 }


//verifico se il cognome rispetta la regex		 

	 if (!cognome.match(validNameRegex)) {
	  
	  document.querySelector(".alertCognomeNonValido").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertCognomeNonValido").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 cognomeValido = 1;
	 }
	 
	 
//verifico se la mail rispetta la regex	 

	if (!email.match(validEmailRegex)) {
	  
	  document.querySelector(".alertEmailNonValida").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertEmailNonValida").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 emailValida = 1;
	 }
	 
  
//verifico se la password rispetta la regex	   

  if (!password.match(validPasswordRegex)) {
	  
	  document.querySelector(".alertPasswordNonValida").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertPasswordNonValida").style.display = "none";
	  }, 3000);
	  
	  
	 }
	 else {
		 passwordValida = 1;
	 }
	

	//credenziali utente loggato
	var usernameUtente = sessionStorage.getItem('username'); 
	var emailUtente = sessionStorage.getItem('email'); 
	
//controllo se il nome utente è già stato utilizzato

var ref = firebase.database().ref("operatori");
let usernameList = [];
let emailList = [];
var cont = 0;
ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      
	   //non inserisco nelle liste l'username e la mail dell'utente loggato
			if(childSnapshot.val().username == usernameUtente && childSnapshot.val().email == emailUtente) {
					
			}
			else {
				usernameList.push(childSnapshot.val().username);
				emailList.push(childSnapshot.val().email);
			}
 
    });

});

		if(usernameList.includes(username)) {
		document.querySelector(".alertUsernameGiaUsato").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertUsernameGiaUsato").style.display = "none";
		  }, 3000);
	}
	
	else {
		usernameNonUsato = 1;
	}
	
	
	if(emailList.includes(email)) {
		
		document.querySelector(".alertEmailGiaRegistrata").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertEmailGiaRegistrata").style.display = "none";
		  }, 3000);
	}
	else {
		emailNonUsata = 1;
	}
	  cont = cont + 1;
	  
	  
	if(nomeValido == 1 && cognomeValido == 1 && emailValida == 1 && passwordValida == 1 && usernameNonUsato == 1 && emailNonUsata == 1) {
	  
	  saveMessages(username, email, password, nome, cognome, usernameUtente, emailUtente);

  }
  
}

const saveMessages = (username, email, password, nome, cognome, usernameUtente, emailUtente) => {
  var newContactForm = contactFormDB.push();

  var updateData = {
  username: username,
    email: email,
    password: password,
	nome: nome,
	cognome: cognome,
}

				//effettua modifiche
				var ref = firebase.database().ref("operatori");
				ref.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().username == usernameUtente) {
							
							//alert conferma modifica dati

							swal({
							title: "Sei sicuro di voler salvare le modifiche?",
							text: "Cliccando su si le modifiche verranno salvate",
							icon: "warning",
							buttons: ["Annulla", "Si"],
							
							dangerMode: true,
						})
						.then(function (isOkay) {
							if (isOkay) {
								
								new Promise((res, rej) => {
									
									  document.getElementById("container").style.display = "none";
									  document.getElementById("loading").style.display = "";
									  
									childSnapshot.ref.update(updateData);
								
								if(usernameUtente != username) {
									//modifico username utente loggato se lo user viene modificato
									sessionStorage.setItem('username', username);
									
									//modifica nome amministratore anche negli utenti associati
									
							modificaUtenti(usernameUtente);
						  
									
								}
								
								if(emailUtente != email) {
									//modifico email utente loggato se la mail viene modificata
									sessionStorage.setItem('email', email);
								}
								
								sessionStorage.setItem('cognome', cognome);
								sessionStorage.setItem('nome', nome);
								
								var ok = 0;
								
								res([ok]);
								
								}).then(([ok]) => {	
									location.href="alertModificaAmm.html";
								});
		
							}
						});
						return false;

						}
						
					});

				});
					

};

function modificaUtenti(usernameVecchio) {
	
	var usernameUtente = sessionStorage.getItem('username');
	
	 var updateData = {
		 
		 operatore:usernameUtente,
	 }
	
	var ref1 = firebase.database().ref("utenti");
				ref1.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().operatore == usernameVecchio) {
							
							childSnapshot.ref.update(updateData);
							
						}
						
						
				});
			});
	
}

function effettuaLogout() {
	
//alert conferma log out
	swal({
	title: "Sei sicuro di voler effettuare il logout?",
	text: "Cliccando su si verrai disconnesso",
	icon: "warning",
	buttons: ["Annulla", "Si"],
							
	dangerMode: true,
	})
	.then(function (isOkay) {
		if (isOkay) {
			
			//rimuovo i dati della sessione
			sessionStorage.clear();
			
			//alert conferma logout
			location.href="alertLogout.html";
		}
	});
	return false;
	
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};