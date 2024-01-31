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
  duration: 1400,
  color: '#008000',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0);  // Number from 0.0 to 1.0

selezionaOperatori();

function selezionaOperatori() {
	
	//username amministratore loggato
	//var usernameUtente = sessionStorage.getItem('username');
	
	new Promise((res, rej) => {
	
	var ref = firebase.database().ref("operatori");
	let usernameList = [];
	let statoList = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			
			
		
			usernameList.push(childSnapshot.val().username);
			statoList.push(childSnapshot.val().abilitato)
		  	   
		});
		res([usernameList, statoList]);

	});
	
}).then(([usernameList, statoList]) => {
	
	if (usernameList.length>0) {
		 
	  document.getElementById("progressBar").style.display = "none";
	  document.getElementById("no-lista").style.display = "none";
	  document.getElementById("lista").style.display = "";
	   document.getElementById("view_main").style.display = "";
  }
  else if(usernameList.length == 0) {
	 
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
		
	for(var i=0; i<usernameList.length; i++) {
			
		
			//var src1= Math.floor(Math.random() * 3);
			newdiv = document.createElement('div');
            divIdName = '50'+i;
            newdiv.setAttribute('id',divIdName);
            newdiv.innerHTML = '<div class="view_item">'+
				'<div class="vi_left">'+
					'<img id="img'+i+'" src="">'+	
				'</div>'+
				'<div class="vi_right">'+
					'<p class="title">'+'username:  '+usernameList[i]+'</p>'+
					'<p class="title">'+'stato:  '+statoList[i]+'</p>'+
					'<button type="submit" id="btn'+i+'" class="btn" onclick="ModificaDatiOperatore('+i+');">'+'Modifica'+'</button>'+
					"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+
					'<button type="submit" id="btnc'+i+'" class="btn" onclick="EliminaOperatore('+i+');">'+'Cancella'+'</button>'+ //passo posizione
				'</div>'+
			'</div>'+'<br>'+'<br>';
			
			//alert("id img:" + "img"+i);
			
            document.getElementById("listView").appendChild(newdiv);
			
	}
	document.getElementById("progressBar").style.display = "none";
	document.getElementById("wrapper").style.display = "";
	

});	
	

	
}



//passo la posizione perchè l'array in onclick non riuscivo a passarlo, cosi come anche userList[i]
function EliminaOperatore(posizione) {
	
	const promessa = new Promise((resolve, reject) => {	
	var ref = firebase.database().ref("operatori");
	let usernameList = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    
			usernameList.push(childSnapshot.val().username);
	
		});
		
resolve(usernameList);
	});
	
})


promessa.then(usernameList => {
	
	sessionStorage.setItem('operatoreDaEliminare', usernameList[posizione]);
	location.href="eliminaOperatore.html";
	
});	
	
	
}

function ModificaDatiOperatore(posizione) {
	
	const promessa = new Promise((resolve, reject) => {	
	var ref = firebase.database().ref("operatori");
	let usernameList = [];
	
	ref.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		    
			usernameList.push(childSnapshot.val().username);
	
		});
		
resolve(usernameList);
	});
	
})


promessa.then(usernameList => {
	
	sessionStorage.setItem('operatoreDaModificare', usernameList[posizione]);
	location.href="modificaDatiOperatore.html";
	
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

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");
  var nome = getElementVal("name");
  var cognome = getElementVal("surname");
  
  
  
  
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

const getElementVal = (id) => {
  return document.getElementById(id).value;
};