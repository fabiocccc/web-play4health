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
var contactFormDB = firebase.database().ref("video");


//prende i dati dal form		
document.getElementById("inserisciContenutoCalcio").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  var nome = getElementVal("nome");
  var domanda = getElementVal("domanda");
  var corretta = getElementVal("corretta");
  var sbagliata = getElementVal("sbagliata");
  var video = getElementVal("file-ip-1");
  
  verificaValidita(nome, domanda, corretta, sbagliata, video);
  

}

function verificaValidita(nome, domanda, corretta, sbagliata, video) {
	
	var videoOk = 0;
	var nomeOk = 0;
	var domandaOk = 0;
	var correttaOk = 0;
	var sbagliataOk = 0;
	
	//regex nome
	var validNameRegex = /^(?!-)(?!.*-$)[a-zA-Z-]+$/;
	var videoCommenti = sessionStorage.getItem('videoCommenti');
	
	if((video == "") || (videoCommenti == 0)) {
		window.scrollTo(0, 0);
		document.querySelector(".alertImmagineNonInserita").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertImmagineNonInserita").style.display = "none";
	  }, 3000);
		
	}
	else {
		videoOk = 1;
		
	}

	 if (nome != "") {
	  nomeOk = 1;
	   
  }
  
  	 if (corretta != "") {
	  correttaOk = 1;
	   
  }
 
	   	 if (sbagliata != "") {
	  sbagliataOk = 1;
	   
  }
	
	 

	setTimeout(() => {
		 if(nomeOk == 1 && correttaOk == 1 && sbagliataOk == 1 && videoOk == 1) {
			 
			 saveMessages(nome, domanda, corretta, sbagliata);
		 }
	 }, 1000);
	 
}

const saveMessages = (nome, domanda, corretta, sbagliata) => {
	
  document.getElementById("container").style.display = "none";
  document.getElementById("loading").style.display = "";
  
  var file = document.getElementById("file-ip-1").files[0];
  var reader = new FileReader();
  var nomeFile = nome+"$"+domanda+"$"+corretta+"$"+sbagliata;
  
  reader.onload = function() {
    document.getElementById("file-ip-1-preview").src = reader.result;
	
	fetch(reader.result)
.then(response => response.blob())
.then(blob => {
	var storageRef = firebase.storage().ref("videos/");
	var mountainImagesRef = storageRef.child("commenti/"+nomeFile);
	mountainImagesRef.put(file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
  
  var newContactForm = contactFormDB.child("commenti").child(nome);

  newContactForm.set({
    nome: nome,
	nomeContenuto: nomeFile,
	mostra: "si",
	
  });
  
  setTimeout(() => {
	location.href="alertContenutoInserito.html";
  }, 2000)
  
});
})

  };
  reader.readAsDataURL(file);
  
	
  
  
  
  
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