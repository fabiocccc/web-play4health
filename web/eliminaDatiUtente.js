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
var nominativo = document.getElementById("nominativo");
var codiceStp = document.getElementById("stp");	
	
inserisciValoriCampi(username, password, nominativo, codiceStp);


//prende i dati dal form		
document.getElementById("eliminaAccount").addEventListener("submit", submitForm);


function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("password");
 
  saveMessages(username, password);
  
}

function inserisciValoriCampi(username, password, nominativo, codiceStp){
	
	let usernameList = [];
	let passwordlList = [];
	
	var immagine = document.getElementById("passwordUtente");
	
	//username utente loggato
	var usernameUtente = sessionStorage.getItem('username'); 
	
	//username utente da eliminare
	var utenteDaEliminare = sessionStorage.getItem('utenteDaEliminare');

	username.value = utenteDaEliminare;
	
	//
	
	var trovato = 0;
const promessa = new Promise((resolve, reject) => {	
var ref = firebase.database().ref("utenti");
	//assegna la password(immagine) all'utente di cui voglio modificare le informazioni
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
			if(childSnapshot.val().username == utenteDaEliminare) {
				
				var str = 'data:image/png;base64,';
					var strTotale = str.concat(childSnapshot.val().immagine);
					
					immagine.src = strTotale;
					
					nominativo.value = childSnapshot.val().nominativo;
					codiceStp.value = childSnapshot.val().codiceStp;
					
					trovato = 1;
			}
		
				
    });
	
resolve(trovato);

});

})

promessa.then(trovato => {
	
	if(trovato == 1) {
		
		document.getElementById("progressBar").style.display = "none";
document.getElementById("container").style.display = "";

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
	
});	
	//
	
	  
		
}

const saveMessages = (username, password) => {
  var newContactForm = contactFormDB.push();


var usernameUtente = sessionStorage.getItem('username');


let usernameList = [];
let passwordList = [];
var trovato;

const promessa = new Promise((resolve, reject) => {
var ref = firebase.database().ref("operatori");
ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
		
		if (childSnapshot.val().username == usernameUtente && childSnapshot.val().password == password) {
			
			trovato = 1;
			
	 			 
		}
		else if (childSnapshot.val().username != usernameUtente && childSnapshot.val().password != password){
			usernameList.push(childSnapshot.val().username);
			passwordList.push(childSnapshot.val().password);
		}
		
    });
	
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
  
  if(trovato == 1) {
	  
	  var utenteDaEliminare = sessionStorage.getItem('utenteDaEliminare');
	  
	  var ref = firebase.database().ref("utenti");
	ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
		
		if (childSnapshot.val().username == utenteDaEliminare){
			
				//alert conferma modifica account
			    swal({
				title: "Sei sicuro di voler elimare l'account?",
				text: "Cliccando su si l'account verrà eliminato",
				icon: "warning",
				buttons: ["Annulla", "Si"],
				
				dangerMode: true,
			})
			.then(function (isOkay) {
				if (isOkay) {
					childSnapshot.ref.remove();
					sessionStorage.setItem('utenteDaEliminare', "");
					location.href="alertEliminazioneUtente.html";
							 
				}
			});
			return false;
	 			 
		}
		
    });
	
});
	  
  }
  
 
}); 





};

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
