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

const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });

//prende i dati dal form		
document.getElementById("inserisciOperatore").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getElementVal("email");
  var password = getElementVal("password");
  var username = getElementVal("username");
  var nome = getElementVal("name");
  var cognome = getElementVal("surname");
  
  var valido = 0; //non valido
  
  valido = controllaValidita(email, password, nome, cognome);
  
  if(valido == 1) {
	  credenzialiUtilizzate(email, password, username, nome, cognome);
  }

  
  
}

function controllaValidita(email, password, nome, cognome) {
	
	//regex email
	var validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	//regex password
	var validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	
	//regex nome
	var validNameRegex = /^(?!-)(?!.*-$)[a-zA-Z-]+$/;
	
	var valido = 0; //non valido
	
	var emailValida = 0; //email non valida
	
	var passwordValida = 0; //password non valida
	
	var nomeValido = 0; //il nome rispetta la regex
	var cognomeValido = 0; //il cognome rispetta la regex
	
	
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
	 
	 if((emailValida == 1 && passwordValida == 1) && (nomeValido == 1 && 	cognomeValido == 1)){
		 
		 valido = 1;
		 
	 }
	 
	 return valido;
	
}

function credenzialiUtilizzate(email, password, username, nome, cognome) {
	
	var emailUtilizzata = 0; //email non utlizzata
	var usernameUtilizzato = 0; //username non utlizzato
	
//cerco la mail per verificare se sia presente

var ref = firebase.database().ref("operatori");

ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
	  
		if(childSnapshot.val().email == email) {
				emailUtilizzata = 1;
							
		}
		
		if(childSnapshot.val().username == username) {
				usernameUtilizzato = 1;
							
		}
 
    });
/*
	if((passwordList.includes(password)) && (emailList.includes(email))) {
			
			credenzialiCorrette = 1;
			
			if(credenzialiCorrette == 1) {
				//salvo lo user dell'utente
				sessionStorage.setItem('username', username);
				sessionStorage.setItem('email', email);
				location.href="alertLoginSuccesso.html";
			}
			

	}
	
	*/
	

});


setTimeout(() => {

if(emailUtilizzata == 1) {
	
	document.querySelector(".alertEmailGiaRegistrata").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertEmailGiaRegistrata").style.display = "none";
		  }, 3000);
}

if(usernameUtilizzato == 1) {
	
	document.querySelector(".alertUsernameGiaUsato").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertUsernameGiaUsato").style.display = "none";
		  }, 3000);
}

else if((emailUtilizzata == 0) && (usernameUtilizzato == 0)){
	
	
	inserisciOperatore(email, password, username, nome, cognome);
	
}

}, 1000);	

}

const inserisciOperatore = (email, password, username, nome, cognome) => {
  
  document.getElementById("container").style.display = "none";
  document.getElementById("loading").style.display = "";
  
  var emailVera = email.toLowerCase();
  
  var newContactForm = contactFormDB.push();

  newContactForm.set({
	nome: nome,
	cognome: cognome,
    username: username,
    email: emailVera,
    password: password,
	abilitato: "abilitato",
  });
  
  	setTimeout(() => {
			location.href="alertOperatoreInserito.html";
		  }, 2000);
		  
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