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
document.getElementById("login").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getElementVal("email");
  var password = getElementVal("password");

  effettuaLogin(email, password);
  
}

function effettuaLogin(email, password) {
	
	var credenzialiCorrette = 0; //le credenziali non sono corrette
	
//cerco l'utente per effettuare il login

var ref = firebase.database().ref("operatori");
let passwordList = [];
let emailList = [];
var abilitato;

var username;
var nome;
var cognome;

ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      passwordList.push(childSnapshot.val().password);
	  emailList.push(childSnapshot.val().email);
	  
		if(childSnapshot.val().email == email && childSnapshot.val().password == password) {
							username = childSnapshot.val().username;
							abilitato = childSnapshot.val().abilitato;
							nome = childSnapshot.val().nome;
							cognome = childSnapshot.val().cognome;
		}
 
    });

	if((passwordList.includes(password)) && (emailList.includes(email))) {
			
			credenzialiCorrette = 1;
			
			if(credenzialiCorrette == 1 && abilitato == "abilitato") {
				//salvo lo user dell'utente
				sessionStorage.setItem('loggato', 1);
				sessionStorage.setItem('username', username);
				sessionStorage.setItem('email', email);
				sessionStorage.setItem('nome', nome);
				sessionStorage.setItem('cognome', cognome);
				location.href="alertLoginSuccesso.html";
			}
			else if(abilitato != "abilitato") {
				document.querySelector(".alertUtenteNonAbilitato").style.display = "block";
			   
			   //   remove the alert
				  setTimeout(() => {
					document.querySelector(".alertUtenteNonAbilitato").style.display = "none";
				  }, 3000);
			}
			

	}
	
	else {
		document.querySelector(".alertCredenzialiNonValide").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertCredenzialiNonValide").style.display = "none";
		  }, 3000);
	}

});

	

}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};