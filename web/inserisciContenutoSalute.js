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
var contactFormDB = firebase.database().ref("Json2");


//prende i dati dal form		
document.getElementById("inserisciContenutoCalcio").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var ita = getElementVal("ita");
  var eng = getElementVal("eng");
  var fra = getElementVal("fra");
  var img = getElementVal("file-ip-1");
  
  var sugg1 = getElementVal("sugg1");
  var sugg2 = getElementVal("sugg2");
  var sugg3 = getElementVal("sugg3");
  
  //mostra
  //svolto
  
  verificaValidita(ita, eng, fra, img, sugg1, sugg2, sugg3);
  
}

function verificaValidita(ita, eng, fra, img, sugg1, sugg2, sugg3) {
	
	var imgOk = 0;
	var itaOk = 0;
	var engOk = 0;
	var fraOk = 0;
	
    var sugg1Ok = 0;
	var sugg2Ok = 0;
	var sugg3Ok = 0;
	var immagineSalute = sessionStorage.getItem('immagineSalute');
	
	if((img == "") || (immagineSalute == 0)){
		window.scrollTo(0, 0);
		document.querySelector(".alertImmagineNonInserita").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertImmagineNonInserita").style.display = "none";
	  }, 3000);
		
	}
	else {
		
		if(immagineSalute == 1) {
			imgOk = 1;
		
			//converti in stringa
			var stringa;
		
			var file = document.getElementById("file-ip-1").files;
			var strImage;
			var immagine = document.getElementById("file-ip-1-preview");
			
		 
		  //var filesSelected = immagine[i].files;
			if (file.length > 0) {
			 var fileToLoad = file[0];
			 var fileReader = new FileReader();
			 
			fileReader.onload = function(fileLoadedEvent) {
			var srcData = fileLoadedEvent.target.result; // <--- data: base64
			
			immagine.src = srcData;
			
			strImage = srcData.replace(/^data:image\/[a-z]+;base64,/, "");
			//resolve(strImage);
			
			var doubleQuotes = '"';
			stringa = doubleQuotes.concat(strImage);
			
			stringa = stringa.concat(doubleQuotes);
		  }  
		  
		  
			fileReader.readAsDataURL(fileToLoad);
		  }
		}
		
	
	
	}	
	

		
	 
		
	
	
	//regex nome
	var validNameRegex = /^(?!-)(?!.*-$)[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
	

	 if (!ita.match(validNameRegex)) {
	  
	  document.querySelector(".alertNomeItaliano").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertNomeItaliano").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 itaOk = 1;
	 }
	 
	 
	 if (!eng.match(validNameRegex)) {
	  
	  document.querySelector(".alertNomeInglese").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertNomeInglese").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 engOk = 1;
	 }
	 
	 if (!fra.match(validNameRegex)) {
	  
	  document.querySelector(".alertNomeFrancese").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertNomeFrancese").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 fraOk = 1;
	 }
	 
	 	 if (!sugg1.match(validNameRegex)) {
	  
	  document.querySelector(".alertSugg1").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertSugg1").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 sugg1Ok = 1;
	 }
	 
	 	 	 if (!sugg2.match(validNameRegex)) {
	  
	  document.querySelector(".alertSugg2").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertSugg2").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 sugg2Ok = 1;
	 }
	 
	 	 	 if (!sugg3.match(validNameRegex)) {
	  
	  document.querySelector(".alertSugg3").style.display = "block";
	   
	   //   remove the alert
	  setTimeout(() => {
		document.querySelector(".alertSugg3").style.display = "none";
	  }, 3000);
	   
  }
  else {
		 sugg3Ok = 1;
	 }
	 
	 
	setTimeout(() => {
		 if(itaOk == 1 && engOk == 1 && fraOk == 1 && sugg1Ok == 1 && imgOk == 1 && sugg2Ok == 1 && sugg3Ok == 1) {
			 
			 saveMessages(ita, eng, fra, stringa, sugg1, sugg2, sugg3);
		 }
	 }, 1000);
	 
}

const saveMessages = (ita, eng, fra, stringa, sugg1, sugg2, sugg3) => {
	
  document.getElementById("container").style.display = "none";
  document.getElementById("loading").style.display = "";
	
  var nomeCorrettoContenuto = ita.toLowerCase();
	
  var newContactForm = contactFormDB.child(nomeCorrettoContenuto);

  newContactForm.set({
    ita: ita,
	eng: eng,
	fra: fra,
	img: stringa,
	mostra: "si",
	sug1: sugg1,
	sug2: sugg2,
	sug3: sugg3,
	svolto: false,
	tipo: "salute"
  });
  
   setTimeout(() => {
	  
	  location.href="alertContenutoInserito.html";
	  
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