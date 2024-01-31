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


  var ita = getElementVal("ita");
  var eng = getElementVal("eng");
  var fra = getElementVal("fra");
  var video = getElementVal("file-ip-1");
  
  verificaValidita(ita, eng, fra, video);
  

}

function verificaValidita(ita, eng, fra, video) {
	
	var videoOk = 0;
	var itaOk = 0;
	var engOk = 0;
	var fraOk = 0;
	
	//regex nome
	var validNameRegex = /^(?!-)(?!.*-$)[a-zA-Z-]+$/;
	var videoGesti = sessionStorage.getItem('videoGesti');
	
	if((video == "") || (videoGesti == 0)) {
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

	 if (ita != "") {
	  
	    itaOk = 1;
  }
  
   if (eng != "") {
	  
	    engOk = 1;
  }
 
	  if (fra != "") {
	  
	    fraOk = 1;
  } 

	setTimeout(() => {
		 if(itaOk == 1 && engOk == 1 && fraOk == 1 && videoOk == 1) {
			 
			 saveMessages(ita, fra, eng);
		 }
	 }, 1000);
	 
}

const saveMessages = (ita, fra, eng) => {
	
  document.getElementById("container").style.display = "none";
  document.getElementById("loading").style.display = "";
  
  var file = document.getElementById("file-ip-1").files[0];
  var reader = new FileReader();
  var nomeFile = ita+"$"+fra+"$"+eng;
  
  reader.onload = function() {
    document.getElementById("file-ip-1-preview").src = reader.result;
	
	fetch(reader.result)
.then(response => response.blob())
.then(blob => {
	var storageRef = firebase.storage().ref("videos/");
	var mountainImagesRef = storageRef.child("gesti/"+nomeFile);
	mountainImagesRef.put(file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
  
  var newContactForm = contactFormDB.child("gesti").child(ita);

  newContactForm.set({
    ita: ita,
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