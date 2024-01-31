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
	
inserisciValoriCampi();


//prende i dati dal form		
document.getElementById("modificaDati").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  var password = getElementVal("password");
  
  validaDatiModificati(password);
  
}

function inserisciValoriCampi(){
	
	var ref = firebase.database().ref("admin");

	
var trovato = 0;
const promessa = new Promise((resolve, reject) => {	
	//leggo i dati per assegnarli ai campi che verranno modificati
	ref.on('value', function(snapshot) {
		
		document.getElementById("password").value = snapshot.val().password;
		trovato = 1;
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

function validaDatiModificati(password) {
	 
	 //regex password
	var validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	
	var passwordValida = 0;
  
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
	
	    
	if(passwordValida == 1) {
	  
	  saveMessages(password);

  }
  
}

const saveMessages = (password) => {

  var updateData = {
    password: password,
}

				//effettua modifiche
				var ref = firebase.database().ref("admin");
				ref.on('value', function(snapshot) {
					
						
						if (snapshot.val().admin != "") {
							
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
									  
								snapshot.ref.update(updateData);

								var ok = 0;
								
								res([ok]);
							  
							  }).then(([ok]) => {	
									location.href="alertModificaAmministratore.html";
								});
								
							}
						});
						return false;

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