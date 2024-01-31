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

document.getElementById("wrapper").style.display = "none";

var bar = new ProgressBar.Circle(progressBar, {
  strokeWidth: 3,
  easing: 'easeInOut',
  duration: 2000,
  color: '#008000',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0);  // Number from 0.0 to 1.0

mostraContenuti();

document.getElementById("listaGesti").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //var username = getElementVal("username");
  //var password = getElementVal("password");
  
  const promessa = new Promise((resolve, reject) => {
  	var ref = firebase.database().ref("video").child("gesti");
	let nomeContenuto = [];
	let nome = [];
	let stato = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			
			nome.push(childSnapshot.val().ita);

		});
		resolve(nome);

	});

	
})

promessa.then(nome => {
  var vuoto = 0;
  let visibilita = [];
  for(var i=0; i<nome.length; i++) {
	  //alert(nome[i]);
    var mostra = document.getElementById('mostra'+i);
	var nonMostrare = document.getElementById('nonMostrare'+i);
	
	if(mostra.checked) {
		
		visibilita.push("si");
	}
	else if(nonMostrare.checked) {
		
		visibilita.push("no");
	}
	else if((!mostra.checked) && (!nonMostrare.checked)) {
		window.scrollTo(0, 0);
		document.querySelector(".alertNonSpuntato").style.display = "block";
	   
			   //   remove the alert
				  setTimeout(() => {
					document.querySelector(".alertNonSpuntato").style.display = "none";
				  }, 3000);
				  vuoto = 1;
				  
	
	}
	
	
	  
  }
  
   if(vuoto == 0) {
	  
	  saveMessages(nome, visibilita);
  }
  
  });
  
}

const saveMessages = (nome, visibilita) => {
	
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("loading").style.display = "";
	
  var newContactForm = contactFormDB.push();
  
  for(var i=0; i<nome.length; i++) {
	  //alert(nome[i].toLowerCase());
	  //alert(visibilita[i]);
	    var nomeCorrettoContenuto = nome[i];
var vis = visibilita[i];

  var updateData = {
	mostra:vis,
}

				//effettua modifiche
				//var ref = firebase.database().ref("Json2").child(nomeCorrettoContenuto);
				var ref = firebase.database().ref("video").child("gesti").child(nomeCorrettoContenuto);
				ref.on('value', function(snapshot) {
					
					snapshot.ref.update(updateData);
				});	
				/*
					ref.on('value', function(snapshot) {
						
							//alert conferma modifica dati

							swal({
							title: "Sei sicuro di voler salvare le modifiche?",
							text: "Cliccando su si le modifiche verranno salvate",
							icon: "warning",
							buttons: ["Annulla", "Si"],
							
							dangerMode: true,
						})
						.then(function (isOkay) {
							
								snapshot.ref.update(updateData);

								 setTimeout(() => {
								//ricarica la pagina con le info dell'utente aggiornate
									location.href="../html/alertModificaContenuto.html";
							  }, 2000);
								
							
						});
						return false;
					
					});
					*/
  }
  
   setTimeout(() => {
								//ricarica la pagina con le info dell'utente aggiornate
									location.href="alertModificaContenuto.html";
							  }, 2000);
  
	


};

function mostraContenuti() {
	
	//username amministratore loggato
	//var usernameUtente = sessionStorage.getItem('username');
	
	new Promise((res, rej) => {
	var ref = firebase.database().ref("video").child("gesti");
	let nomeContenuto = [];
	let nomeIta = [];
	let stato = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			
			nomeContenuto.push(childSnapshot.val().nomeContenuto);
			nomeIta.push(childSnapshot.val().ita);
		  	stato.push(childSnapshot.val().mostra);  
			
			
		});
		
res([nomeContenuto, nomeIta, stato]);
	});
	
}).then(([nomeContenuto, nomeIta, stato]) => {
  

		
	//var storageRef = firebase.storage().ref("videos/");
	//var mountainImagesRef = storageRef.child("gesti/"+nomeFile);
	


//setTimeout(() => {
	
	
	if (nomeIta.length>0) {
		 
	  document.getElementById("progressBar").style.display = "none";
	  document.getElementById("no-lista").style.display = "none";
	  document.getElementById("lista").style.display = "";
	   document.getElementById("view_main").style.display = "";
  }
  else if(nomeIta.length == 0) {
	 
	  document.getElementById("progressBar").style.display = "none";
	  document.getElementById("lista").style.display = "none";
	  document.getElementById("no-lista").style.display = "";
	  document.getElementById("view_main").style.display = "none";
  }
	 var i=0;
        var num_stud=5;
        var newdiv;
		var newdiv2;
		var newdiv3;
        var divIdName;
		
		//const base64Data = "aGV5IHRoZXJl";
		//const base64 = await fetch(base64Data);
		//let listaImmagini = ['../immagini/geometrica.png', '../immagini/lol.png', '../immagini/radice.png'];
		
	for(var i=0; i<nomeIta.length; i++) {
			var statoContenuto = stato[i];
		
			//var src1= Math.floor(Math.random() * 3);
			newdiv = document.createElement('div');
            divIdName = '50'+i;
            newdiv.setAttribute('id',divIdName);
			
			if(i==0) {
				newdiv.innerHTML = '<br>'+'<center>'+"Selezionare i video da rendere visibili"+'</center>'+
				'<center>'+'<br>'+'<div class="alertNonSpuntato">'+"Uno o più video non sono stati spuntati"+'</div>'+'</center>'+'<br>'+
				'<div class="view_item">'+
				'<div class="vi_left">'+
					'<video id="img'+i+'" src="" width="320" height="240">'+	
				'</div>'+
				'<div class="vi_right">'+
					'<p class="title">'+'Titolo:  '+nomeIta[i]+'</p>'+
					'<div >'+
					
  '<input type="checkbox" name="mostra" id="mostra'+i+'" onclick="controllaMostra('+i+');" >'+ " Visibile"+'</input>'+'<br>'+
  '<input type="checkbox" name="nonMostrare" id="nonMostrare'+i+'" onclick="controllaNonMostra('+i+');" >'+ " Nascosto"+'</input>'+'<br>'+
  '</div>'+
					
				'</div>'+
			'</div>'+'<br>'+'<br>';
			}
			else {
				 newdiv.innerHTML = '<div class="view_item">'+
				'<div class="vi_left">'+
					'<video id="img'+i+'" src="" width="320" height="240">'+	
				'</div>'+
				'<div class="vi_right">'+
					'<p class="title">'+'Titolo:  '+nomeIta[i]+'</p>'+
					'<div >'+
					
  '<input type="checkbox" name="mostra" id="mostra'+i+'" onclick="controllaMostra('+i+');" >'+ " Visibile"+'</input>'+'<br>'+
  '<input type="checkbox" name="nonMostrare" id="nonMostrare'+i+'" onclick="controllaNonMostra('+i+');" >'+ " Nascosto"+'</input>'+'<br>'+
  '</div>'+
					
				'</div>'+
			'</div>'+'<br>'+'<br>';
			}
           
			
			
			
			
           document.getElementById("listView").appendChild(newdiv);
		   assegnaStato(statoContenuto, i);
			
	}
	document.getElementById("progressBar").style.display = "none";
	document.getElementById("wrapper").style.display = "";
	
	for(var i=0; i<nomeIta.length; i++) {
			
			inserisciVideo(nomeContenuto[i], i);	
	  
	}
				
	
	
	
	
	

// }, 10000);	
	
});
	
}

function controllaMostra(i) {
	
	var mostra = document.getElementById('mostra'+i);
	var nonMostrare = document.getElementById('nonMostrare'+i);
	
	if(mostra.checked) {
		
		mostra.checked = true;
		nonMostrare.checked = false;
	}
	
	
	
}

function controllaNonMostra(i) {
	
	var mostra = document.getElementById('mostra'+i);
	var nonMostrare = document.getElementById('nonMostrare'+i);
	
	if(nonMostrare.checked) {
		nonMostrare.checked = true;
		mostra.checked = false;
	}
	
}

function assegnaStato(stato, i) {
	
	var mostra = document.getElementById('mostra'+i);
	var nonMostrare = document.getElementById('nonMostrare'+i);
	
	if(stato == "si") {
		mostra.checked = true;
	}
	
	if(stato == "no") {
		nonMostrare.checked = true;
	}
	
	
}

function inserisciVideo(path, i) {
	
	var storage = firebase.storage();
			var gsReference = storage.refFromURL("gs://play4health-abdc1.appspot.com/videos/gesti/"+path);
			
			
			gsReference.getDownloadURL()
			  .then((url) => {
				 
				var xhr = new XMLHttpRequest();
				xhr.responseType = 'blob';
				xhr.onload = (event) => {
				  var blob = xhr.response;
				  
				  var img = document.getElementById('img'+i);
		img.setAttribute('src', url); 
				  
				};
				xhr.open('GET', url);
				xhr.send();

			
			  })
			  .catch((error) => {
				// Handle any errors
			  });

	
}


function ModificaVisibilaContenuto(elemento) {
	
	const promessa = new Promise((resolve, reject) => {	
	var ref = firebase.database().ref("video").child("gesti");
	let nomiContenuti = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    
			nomiContenuti.push(childSnapshot.val().ita);
	
		});
		
resolve(nomiContenuti);
	});
})	

promessa.then(nomiContenuti => {
	
	sessionStorage.setItem('contenuto', nomiContenuti[elemento]);
	location.href="modificaContenutoGesti.html";
	
});	

	

}

// reference your database
var contactFormDB = firebase.database().ref("operatori");


var li_links = document.querySelectorAll(".links ul li");
var view_wraps = document.querySelectorAll(".view_wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

li_links.forEach(function(link){
	link.addEventListener("click", function(){
		li_links.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		view_wraps.forEach(function(view){
			view.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";
		}
	})
})

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