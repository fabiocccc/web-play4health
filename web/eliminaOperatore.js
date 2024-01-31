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
var password = document.getElementById("password");
	
inserisciValoriCampi(username, password);


//prende i dati dal form		
document.getElementById("eliminaAccount").addEventListener("submit", submitForm);


function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("password");
  
  saveMessages(username, password);
  
}

function inserisciValoriCampi(username, password){
	
	var ref = firebase.database().ref("operatori");
	
	let usernameList = [];
	let emailList = [];
	let passwordlList = [];
	let nomeList = [];
	let cognomeList = [];
	
	//username utente loggato
	var usernameUtente = sessionStorage.getItem('operatoreDaEliminare'); 

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
					//password.value = passwordlList[posizione];
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

const saveMessages = (username, password) => {
  var newContactForm = contactFormDB.push();


var usernameUtente = sessionStorage.getItem('operatoreDaEliminare'); 


let usernameList = [];
let passwordList = [];
var trovato;

const promessa = new Promise((resolve, reject) => {
var ref = firebase.database().ref("admin");
ref.on('value', function(snapshot) {
    
		if (snapshot.val().password == password) {
			
	var ref2 = firebase.database().ref("operatori");
	
	ref2.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    
			if(childSnapshot.val().username == usernameUtente) {
								//alert conferma modifica account
			    swal({
				title: "Sei sicuro di voler elimiare l'account?",
				text: "Cliccando su si l'account verrà eliminato",
				icon: "warning",
				buttons: ["Annulla", "Si"],
				
				dangerMode: true,
			})
			.then(function (isOkay) {
				if (isOkay) {
					childSnapshot.ref.remove();
					
					//elimino gli utenti che sono stati creati dall'amministratore che deve essere eliminato
					eliminaUtenti(usernameUtente);
					
					setTimeout(() => {
								//ricarica la pagina con le info dell'utente aggiornate
									location.href="alertEliminazioneOperatore.html";
							  }, 2000);
					
							 
				}
			});
			trovato = 1;
			return false;
			}
	
		});
		

	});
					 
		}
		else if (snapshot.val().username != usernameUtente && snapshot.val().password != password){
			usernameList.push(snapshot.val().username);
			passwordList.push(snapshot.val().password);
		}
		
    
	
resolve(trovato);
});

	
})


promessa.then(trovato => {
	
	if (!usernameList.includes(usernameUtente) && !passwordList.includes(password) && trovato != 1){
	
		trovato = 2;
	}
	
  if(trovato == 2) {
	  document.querySelector(".alertPasswordNonValida").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertPasswordNonValida").style.display = "none";
		  }, 3000);
  }
  
 
}); 

};

function eliminaUtenti(usernameUtente) {
	
		var ref1 = firebase.database().ref("utenti");
	
				ref1.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().operatore == usernameUtente) {
							
							childSnapshot.ref.remove();
							
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
