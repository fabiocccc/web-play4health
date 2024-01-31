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
var contactFormDB = firebase.database().ref("utenti");

document.getElementById("registrazioneUtente").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var nomeOk = 0;
  var immagineOk = 0;
  var nominativoOk = 0;
  var codiceStpOk = 0;
  
  	const promessa = new Promise((resolve, reject) => {
	
	let usernameList = []; //lista utenti presenti nel db

	var ref = firebase.database().ref("utenti");
	
		ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  usernameList.push(childSnapshot.val().username);
	
});
	resolve(usernameList);	  	
    });


	
})

  
  	const promessa2 = new Promise((resolve, reject) => {
	
	let imageList = []; //lista immagini utenti presenti nel db

	var ref = firebase.database().ref("utenti");
	
		ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  imageList.push(childSnapshot.val().immagine);
	
});
	resolve(imageList);	  	
    });


	
})

promessa.then(usernameList => {
	  
		  var user = document.getElementById("utenteNuovo").value;
		  
		  var regexLowerCase = /^[a-z 0-9]+$/;
		  
			if(usernameList.includes(user)) {
				window.scrollTo(0, 0);
				document.querySelector(".alertUsernameGiaUsato").style.display = "block";
	   
			   //   remove the alert
				  setTimeout(() => {
					document.querySelector(".alertUsernameGiaUsato").style.display = "none";
				  }, 3000);
				
			}
			else {
				
				if((user.match(regexLowerCase)) && (user.indexOf(' ') == -1)) {
					nomeOk = 1;
				}
				else {
					window.scrollTo(0, 0);
					document.querySelector(".alertCaratteriMaiuscoli").style.display = "block";
		   
				   //   remove the alert
					  setTimeout(() => {
						document.querySelector(".alertCaratteriMaiuscoli").style.display = "none";
					  }, 3000);
				}
			}
			
			var nominativo = document.getElementById("nominativo").value;
			var regexNominativo = /^([^0-9]*)$/; //per non prendere i numeri
			var regexStp = /[`~,.<>;':"/[\]|{}()=_+-]/; //per non prendere i caratteri speciali
			
			if(nominativo.match(regexNominativo)) {
				nominativoOk = 1;
			}
			else {
				window.scrollTo(0, 0);
				document.querySelector(".alertNominativoNumeri").style.display = "block";
	   
			   //   remove the alert
				  setTimeout(() => {
					document.querySelector(".alertNominativoNumeri").style.display = "none";
				  }, 3000);
			}
			
			var codiceStp = document.getElementById("stp").value;
			//alert(codiceStp);
			
			if(codiceStp.length > 0) {				
					
					if(!codiceStp.match(regexStp)) {
						
							if(codiceStp.length == 16) {
							  codiceStpOk = 1;
						}
						
									else if(((codiceStp.length < 16) && (codiceStp.length >0)) || (codiceStp.length > 16)){
											window.scrollTo(0, 0);
											document.querySelector(".alertCodiceNon16").style.display = "block";
							   
									   //   remove the alert
										  setTimeout(() => {
											document.querySelector(".alertCodiceNon16").style.display = "none";
										  }, 3000);
										}
					}
					else {
						window.scrollTo(0, 0);
						document.querySelector(".alertCodiceStpSpeciali").style.display = "block";
	   
			   //   remove the alert
				  setTimeout(() => {
					document.querySelector(".alertCodiceStpSpeciali").style.display = "none";
				  }, 3000);
					}

			}
			else if(codiceStp.length == 0) {
				codiceStpOk = 1;
			}
		
			
		  
promessa2.then(imageList => {
	
	var imgUser = sessionStorage.getItem('immagineUtente');
	var immagineVuota = 0;
			 	
			if((document.getElementById("file-ip-1-preview").getAttribute('src') == "") || (imgUser == 0)) {
				window.scrollTo(0, 0);
				document.querySelector(".alertPasswordNonInserita").style.display = "block";
		   
				   //   remove the alert
					  setTimeout(() => {
						document.querySelector(".alertPasswordNonInserita").style.display = "none";
					  }, 3000);
					  
					  
			}
			
			else if(imgUser == 1) {
						//converto la stringa in base 64	
			
			 const fileToBase64 = new Promise((resolve, reject) => {

			  var strImage;

				var filesSelected = document.getElementById("file-ip-1").files;
		
				if (filesSelected.length > 0) {
				 var fileToLoad = filesSelected[0];
				 var fileReader = new FileReader();
				
				 
				fileReader.onload = function(fileLoadedEvent) {
				var srcData = fileLoadedEvent.target.result; // <--- data: base64
			
				document.getElementById("file-ip-1-preview").src = srcData;
				document.getElementById("file-ip-1-preview").style.display = 'block';

				strImage = srcData.replace(/^data:image\/[a-z]+;base64,/, "");
			
				resolve(strImage);
			   
			  }  
				fileReader.readAsDataURL(fileToLoad);
			  }
				  
			  

			 })
			 
			 
			 fileToBase64.then(strImage => {
				
					 if(imageList.includes(strImage)) {
						window.scrollTo(0, 0);
						document.querySelector(".alertPasswordNonValida").style.display = "block";
			   
					   //   remove the alert
						  setTimeout(() => {
							document.querySelector(".alertPasswordNonValida").style.display = "none";
						  }, 3000);
						  
						immagineUsata = 1;
						
					}
					
					else {
						 immagineOk = 1;
					 }
					
					 
if((nomeOk == 1) && (immagineOk == 1) && (immagineVuota == 0) && (nominativoOk == 1) && (codiceStpOk == 1)){
                       
                       //inserisci nel db
					  
					   registraUtente(strImage, user, nominativo, codiceStp);
			   }
 
					  
				
		   
		 });
			}




	
	
		  
		
	})
  
	
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

const registraUtente = (strImage, user, nominativo, codiceStp) => {
	
	document.getElementById("container").style.display = "none";
	document.getElementById("loading").style.display = "";
									  
	//username utente amministratore che sta effettuando l'inserimento
	
	var usernameUtente = sessionStorage.getItem('username');
	
	var userVera = user.toLowerCase();
		
		var newContactForm = contactFormDB.push();

		  newContactForm.set({
			username: userVera,
			immagine: strImage,
			operatore: usernameUtente,
			nominativo: nominativo,
			codiceStp: codiceStp
		  });
		
	setTimeout(() => {
			location.href="alertRegistrazioneUtenti.html";
		  }, 2000);
  
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};