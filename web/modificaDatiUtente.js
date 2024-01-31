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
var immagine = document.getElementById("password");
var nominativo = document.getElementById("nominativo");
var codiceStp = document.getElementById("stp");

	
inserisciValoriCampi(username, immagine, nominativo, stp);


//prende i dati dal form		
document.getElementById("modificaDati").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  var imgUser = sessionStorage.getItem('immagineUtenteModifica');
 
  if(imgUser == null) {
	  sessionStorage.setItem('immagineUtenteModifica', 2); //il bottone per cambiare immagine non è stato cliccato
	  imgUser = 2;
  }
  
   else if(imgUser == 0) {
		sessionStorage.setItem('immagineUtenteModifica', 2);
		imgUser = 2;
		  
    }

  var username = getElementVal("username");
  
  var immagine = document.getElementById("password");
  
  if(!immagine.src.includes("data:image/png;")) {
  
 // const promessa = new Promise((resolve, reject) => {
	 //bottone per caricare immagine
    var file = document.getElementById("file-ip-1").files;
	var strImage;
 
  //var filesSelected = immagine[i].files;
    if (file.length > 0) {
     var fileToLoad = file[0];
     var fileReader = new FileReader();
     
    fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
	
	immagine.src = srcData;
	
    strImage = srcData.replace(/^data:image\/[a-z]+;base64,/, "");
    //resolve(strImage);
	validaDatiModificati(strImage, username);
  }  
  
  
    fileReader.readAsDataURL(fileToLoad);
  }
  
	  
 // })  
 /* 
  promessa.then(strImage => {
  
  //var str = 'data:image/png;base64,';
  //var strTotale = str.concat();
  alert("fuori onload"+immagine.src);
  var immagineStringa = strImage;
  alert("promessa:"+immagineStringa);
  validaDatiModificati(immagineStringa, username);
  
});
*/	  
	  
  }
  else {
	  
	 
	  if((imgUser == 1) || (imgUser == 2)) {
		  var srcData = immagine.src;
	  strImage = srcData.replace(/^data:image\/[a-z]+;base64,/, "");
	  validaDatiModificati(strImage, username);
	  //sessionStorage.setItem('immagineUtenteModifica', null);
	  }
	  else if(imgUser == 3) {
				  sessionStorage.setItem('immagineUtenteModifica', 2); //immagine non png
	  }
	  
  }
  

  
  
  
  
  
  
}

function inserisciValoriCampi(username, immagine, nominativo, stp){
	
	var ref = firebase.database().ref("utenti");
	
	let usernameList = [];
	let imageList = []; 
	let nominativoList = [];
	let codiceStpList = [];
	
	var imgUser = sessionStorage.getItem('immagineUtenteModifica');
	
	//credenziali utente da modificare
	var usernameDaModificare = sessionStorage.getItem('utenteDaModificare');
	
var trovato = 0;
const promessa = new Promise((resolve, reject) => {	
	//assegna la password(immagine) all'utente di cui voglio modificare le informazioni
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  usernameList.push(childSnapshot.val().username);
		  imageList.push(childSnapshot.val().immagine);
		  nominativoList.push(childSnapshot.val().nominativo);
		  codiceStpList.push(childSnapshot.val().codiceStp);
		  
		  	if(usernameList.includes(usernameDaModificare)) {
					
					var posizione = usernameList.indexOf(usernameDaModificare);
					username.value = usernameDaModificare;

					var str = 'data:image/png;base64,';
					var strTotale = str.concat(imageList[posizione]);
					immagine.src = strTotale;
					
					nominativo.value = nominativoList[posizione];
					codiceStp.value = codiceStpList[posizione];
					
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
	  
	  //validaDatiModificati(immagine, username);
	  
  }
  
});

	
}

function validaDatiModificati(immagine, username) {
	
	var immagineNonUsata = 0; //l'immagine è utilizzata
	var usernameNonUsato = 0; //l'username è utilizzato
	
    var nominativo = document.getElementById("nominativo").value;
    var codiceStp = document.getElementById("stp").value;
  
//credenziali utente da modificare
	var usernameDaModificare = sessionStorage.getItem('utenteDaModificare');
	
//controllo se il nome utente è già stato utilizzato

var ref = firebase.database().ref("utenti");
let usernameList = [];
let imageList = [];

ref.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      
			if(childSnapshot.val().username == usernameDaModificare) {
					
			}
			else {
				usernameList.push(childSnapshot.val().username);
				imageList.push(childSnapshot.val().immagine);
			}
 
    });

});

		if(usernameList.includes(username)) {
			window.scrollTo(0, 0);
		document.querySelector(".alertUsernameGiaUsato").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertUsernameGiaUsato").style.display = "none";
		  }, 3000);
	}
	
	else {
		usernameNonUsato = 1;
	}
	
	if(imageList.includes(immagine)) {
		window.scrollTo(0, 0);
		document.querySelector(".alertPasswordNonValida").style.display = "block";
	   
	   //   remove the alert
		  setTimeout(() => {
			document.querySelector(".alertPasswordNonValida").style.display = "none";
		  }, 3000);
	}
	else {
		immagineNonUsata = 1;
	}
	
	var regexNominativo = /^([^0-9]*)$/; //per non prendere i numeri
	var regexStp = /[`~,.<>;':"/[\]|{}()=_+-]/; //per non prendere i caratteri speciali
	var nominativoOk = 0;
	var codiceStpOk = 0;
			
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
	  
	  
	if(usernameNonUsato == 1 && immagineNonUsata == 1 && nominativoOk == 1 && codiceStpOk == 1) {
	  
	  saveMessages(usernameDaModificare, immagine, username, nominativo, codiceStp);

  }
  
}

const saveMessages = (usernameDaModificare, immagine, username, nominativo, codiceStp) => {
  var newContactForm = contactFormDB.push();

  var updateData = {
	username: username,
    immagine: immagine,
	nominativo: nominativo,
	codiceStp: codiceStp
}

				//effettua modifiche
				var ref = firebase.database().ref("utenti");
				ref.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().username == usernameDaModificare) {
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
								
								childSnapshot.ref.update(updateData);
								
								if(usernameDaModificare != username) {
									//modifico username utente se lo user viene modificato
									sessionStorage.setItem('utenteDaModificare', username);
								}
								
								//ricarica la pagina con le info dell'utente aggiornate
								location.href="alertModificaUtente.html";
							}
						});
						return false;

						}
						
					});

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