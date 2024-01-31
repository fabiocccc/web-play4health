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

attivitaSvolte();


function attivitaSvolte() {
	

	var ref = firebase.database().ref("utenti");
	let listaUser = [];
	
	//var usernameOperatore = sessionStorage.getItem('username');
	
	new Promise((res, rej) => {
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  
			  
			  listaUser.push(childSnapshot.val().username);
		
			
			
    });
	res([listaUser]);
	
});
	
	
	}).then(([listaUser]) => {


	if(listaUser.length == 0) {
		
		var usernameOperatore = sessionStorage.getItem('statisticheOperatore');
		document.getElementById("header").innerHTML = "Gli operatori non hanno inserito nessun utente";
		
	document.getElementById("progressBar").remove();
	document.getElementById("container").style.display = "";
	document.getElementById("box").style.display = "";
	document.getElementById("btnCSVAmm").style.display = "none";
	
	}

	else if(listaUser.length > 0) {	
	
	document.getElementById("header").innerHTML = "Numero utenti: " + listaUser.length;
	
	var ref = firebase.database().ref("operatori");
	let listaOperatori = [];
	
	new Promise((res, rej) => {
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  
			  
			  listaOperatori.push(childSnapshot.val().username);
		
			
			
    });
	res([listaOperatori]);
	
});
	
	
	}).then(([listaOperatori]) => {	

	document.getElementById("header2").innerHTML = "Numero operatori: " + listaOperatori.length;

	var ref = firebase.database().ref("utenti");
	
	//var usernameDaModificare = sessionStorage.getItem('utenteDaModificare');
	//var usernameOperatore = sessionStorage.getItem('username');
	
	//liste
	let listaAllenati = [];
	let listaAscolta = [];
	let listaCorpo = [];
	let listaCorpoMano = [];
	let listaCorpoScegli = [];
	let listaCorpoViso = [];
	let listaCampo = [];
	let listaCampoRuoli = [];
	let listaMedicoConsiglia = [];
	let listaParlaMedico1 = [];
	let listaParlaMedico2 = [];
	let listaPartiCorpo = [];
	let listaSalute = [];
	let listaScegli = [];
	let listaScriviDifficile = [];
	let listaScriviFacile = [];
	let listaRipeti = [];
	let listaNomeVideo = [];
	let listaVideoVideo = [];
	let listaNomePercosi = [];
	let listaTempoPercorsi = [];
	let listaNomeVideoAllenatiUtente = [];
	
for(var i=0; i<listaUser.length; i++) {
	
	var allenati = 0;
	var ascolta = 0;
	var campo = 0;
	var campoRuoli = 0;
	var corpo = 0;
	var corpoMano = 0;
	var corpoScegli = 0;
	var corpoViso = 0;
	var medicoConsiglia = 0;
	var parlaMedico1 = 0;
	var parlaMedico2 = 0;
	var partiCorpo = 0;
	var salute = 0;
	var scegli = 0;
	var scriviDifficile = 0;
	var scriviFacile = 0;
	var nomeVideo = [];
	var ripeti = 0;
	var nomePercorsi = [];
	var tempoPercorsi = [];
	var videoVisti = 0;
	var numeroUtenti = 0;
	var nomeVideoAllenatiUtenteTemp = []
		
	new Promise((res, rej) => {
		
		
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  if(childSnapshot.val().username == listaUser[i]) {
			  	
				childSnapshot.child("allenati").forEach(function(childSnapshot) {
					allenati = allenati + 1;
					nomeVideoAllenatiUtenteTemp.push(childSnapshot.val().nomeVideo);
				
				});	
				
				childSnapshot.child("ascolta").forEach(function(childSnapshot) {
					ascolta = ascolta + 1;
				
				});	
				
				childSnapshot.child("corpo").forEach(function(childSnapshot) {
					corpo = corpo + 1;
				
				});	
				
				childSnapshot.child("corpo mano").forEach(function(childSnapshot) {
					corpoMano = corpoMano + 1;
				
				});	
				
				childSnapshot.child("corpo scegli").forEach(function(childSnapshot) {
					corpoScegli = corpoScegli + 1;
				
				});	
				
				childSnapshot.child("corpo viso").forEach(function(childSnapshot) {
					corpoViso = corpoViso + 1;
				
				});	
				
				childSnapshot.child("campo").forEach(function(childSnapshot) {
					campo = campo + 1;
				
				});	
				
				childSnapshot.child("campo ruoli").forEach(function(childSnapshot) {
					campoRuoli = campoRuoli + 1;
				
				});	
				
				childSnapshot.child("medico consiglia").forEach(function(childSnapshot) {
					medicoConsiglia = medicoConsiglia + 1;
				
				});	
				
				childSnapshot.child("parla con il medico dialogo1").forEach(function(childSnapshot) {
					parlaMedico1 = parlaMedico1 + 1;
				
				});	
				
				childSnapshot.child("parla con il medico dialogo2").forEach(function(childSnapshot) {
					parlaMedico2 = parlaMedico2 + 1;
				
				});	
				
				childSnapshot.child("parti corpo").forEach(function(childSnapshot) {
					partiCorpo = partiCorpo + 1;
				
				});	
				
				childSnapshot.child("salute").forEach(function(childSnapshot) {
					salute = salute + 1;
				
				});	
				
				childSnapshot.child("scegli").forEach(function(childSnapshot) {
					scegli = scegli + 1;
				
				});	
				
				childSnapshot.child("scrivere difficile").forEach(function(childSnapshot) {
					scriviDifficile = scriviDifficile + 1;
				
				});	
				
				childSnapshot.child("scrivere facile").forEach(function(childSnapshot) {
					scriviFacile = scriviFacile + 1;
				
				});	
				
				childSnapshot.child("ripeti").forEach(function(childSnapshot) {
					ripeti = ripeti + 1;
				
				});	
				
				childSnapshot.child("video").forEach(function(childSnapshot) {
					nomeVideo.push(childSnapshot.val().nomeVideo);
					videoVisti = videoVisti + 1;
				
				});	
				
				
				
					childSnapshot.child("percorsi").child("TimeP1").child("P1E1").forEach(function(childSnapshot) {
						nomePercorsi.push(childSnapshot.val().attivita);
						tempoPercorsi.push(childSnapshot.val().tempo);
					
					});		
					
				
				
				
				
					childSnapshot.child("percorsi").child("TimeP1").child("P1E2").forEach(function(childSnapshot) {
						nomePercorsi.push(childSnapshot.val().attivita);
						tempoPercorsi.push(childSnapshot.val().tempo);
					
					});		
					
				
				
				
				
					childSnapshot.child("percorsi").child("TimeP1").child("P1E3").forEach(function(childSnapshot) {
						nomePercorsi.push(childSnapshot.val().attivita);
						tempoPercorsi.push(childSnapshot.val().tempo);
					
					});		
					
				listaAllenati.push(allenati);
				listaAscolta.push(ascolta);
				listaCorpo.push(corpo);
				listaCorpoMano.push(corpoMano);
				listaCorpoScegli.push(corpoScegli);
				listaCorpoViso.push(corpoViso);
				listaCampo.push(campo);
				listaCampoRuoli.push(campoRuoli);
				listaMedicoConsiglia.push(medicoConsiglia);
				listaParlaMedico1.push(parlaMedico1);
				listaParlaMedico2.push(parlaMedico2);
				listaPartiCorpo.push(partiCorpo);
				listaSalute.push(salute);
				listaScegli.push(scegli);
				listaScriviDifficile.push(scriviDifficile);
				listaScriviFacile.push(scriviFacile);
				listaRipeti.push(ripeti);
				listaNomeVideo.push(nomeVideo);
				listaVideoVideo.push(videoVisti);
				listaNomePercosi.push(nomePercorsi);
				listaTempoPercorsi.push(tempoPercorsi);
				listaNomeVideoAllenatiUtente.push(nomeVideoAllenatiUtenteTemp);
								
			}	

		
    });
	res([listaAllenati, listaNomeVideoAllenatiUtente, listaAscolta, listaCorpo, listaCorpoMano, listaCorpoScegli, listaCorpoViso, listaCampo, listaCampoRuoli, listaMedicoConsiglia, listaParlaMedico1, listaParlaMedico2, listaPartiCorpo, listaSalute, listaScegli, listaScriviDifficile, listaScriviFacile, listaRipeti, listaNomeVideo, listaVideoVideo, listaNomePercosi, listaTempoPercorsi]);
	
});

	

}).then(([listaAllenati, listaNomeVideoAllenatiUtente, listaAscolta, listaCorpo, listaCorpoMano, listaCorpoScegli, listaCorpoViso, listaCampo, listaCampoRuoli, listaMedicoConsiglia, listaParlaMedico1, listaParlaMedico2, listaPartiCorpo, listaSalute, listaScegli, listaScriviDifficile, listaScriviFacile, listaRipeti, listaNomeVideo, listaVideoVideo, listaNomePercosi, listaTempoPercorsi]) => {	
	
	new Promise((res, rej) => {
			
	var elementiJson1 = 0;
	var ref1 = firebase.database().ref("Json1");
				ref1.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().mostra == "si") {
						
						elementiJson1 = elementiJson1 + 1;
						
						}
							});
	res([elementiJson1]);
				});
		
		
	}).then(([elementiJson1]) => {

	new Promise((res, rej) => {
		
		var elementiCorpo = 0;
var elementiSalute = 0;

		var ref2 = firebase.database().ref("Json2");
				ref2.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
						if (childSnapshot.val().mostra == "si") {
						
						if(childSnapshot.val().tipo == "corpo") {
							elementiCorpo = elementiCorpo + 1;
						}
						
						if(childSnapshot.val().tipo == "salute") {
							elementiSalute = elementiSalute + 1;
						}
						
						
						}
							});
res([elementiCorpo, elementiSalute]);
				});	
		
		
		}).then(([elementiCorpo, elementiSalute]) => {	
		
		
		new Promise((res, rej) => {
			
			var videoAllenati = 0;	
			let nomeVideoAllenati = [];
				
				var ref3 = firebase.database().ref("video").child("gesti");
				ref3.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
	
						nomeVideoAllenati.push(childSnapshot.val().ita);
						videoAllenati = videoAllenati + 1;
						
					
							});
							res([videoAllenati, nomeVideoAllenati]);

				});
			
			}).then(([videoAllenati, nomeVideoAllenati]) => {	
			
			
			new Promise((res, rej) => {
				
				var video = 0;	
				let nomeVideoCommenti = [];
				
				var ref4 = firebase.database().ref("video").child("commenti");
				ref4.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
	
						nomeVideoCommenti.push(childSnapshot.val().nome);
						video = video + 1;
						
					
							});
							res([video, nomeVideoCommenti]);
							

				});	
				
				
				}).then(([video, nomeVideoCommenti]) => {	
				
				//alert("commmenti:"+ nomeVideoCommenti);
				//alert("gesti:"+ nomeVideoAllenati);
				
				
				document.getElementById("progressBar").remove();
	document.getElementById("container").style.display = "";
	document.getElementById("box").style.display = "";
	document.getElementById("form-box").style.display = "";
	document.getElementById("form-box1").style.display = "";
	document.getElementById("form-box2").style.display = "";
	document.getElementById("form-box3").style.display = "";
	
				

//inizio ascolta

var percAscolta0 = 0;
var percAscoltaMin50 = 0;
var percAscoltaMaggUgu50 = 0;
var percAscolta100 = 0;

for(var i=0; i<listaAscolta.length; i++) {	

	var percentualeAscolta = (listaAscolta[i]/elementiJson1)*100;
percentualeAscolta = percentualeAscolta + "";

if(percentualeAscolta.length > 3) {

	if(percentualeAscolta.indexOf(".")) {
		var index = percentualeAscolta.indexOf(".");
		percentualeAscolta = percentualeAscolta.substring(0,index);
		
		if(percentualeAscolta == 0) {
			percAscolta0 = percAscolta0 + 1;
		}
		if((percentualeAscolta > 0) && (percentualeAscolta < 50)) {
			percAscoltaMin50 = percAscoltaMin50 + 1;
		}
		if((percentualeAscolta >= 50) && (percentualeAscolta < 100)) {
			percAscoltaMaggUgu50 = percAscoltaMaggUgu50 + 1;
		}
		if(percentualeAscolta >= 100) {
			percAscolta100 = percAscolta100 + 1;
		}
	}
}
	else {
		if(percentualeAscolta == 0) {
			percAscolta0 = percAscolta0 + 1;
		}
		if((percentualeAscolta > 0) && (percentualeAscolta < 50)) {
			percAscoltaMin50 = percAscoltaMin50 + 1;
		}
		if((percentualeAscolta >= 50) && (percentualeAscolta < 100)) {
			percAscoltaMaggUgu50 = percAscoltaMaggUgu50 + 1;
		}
		if(percentualeAscolta >= 100) {
			percAscolta100 = percAscolta100 + 1;
		}
	}

}

document.getElementById("ascolta0").innerHTML = percAscolta0;
document.getElementById("ascolta50").innerHTML = percAscoltaMin50;
document.getElementById("ascolta502").innerHTML = percAscoltaMaggUgu50;
document.getElementById("ascolta100").innerHTML = percAscolta100;

var mediaAscolta = percAscolta100 / listaAscolta.length;
mediaAscolta = mediaAscolta + "";

if(mediaAscolta.length > 3) {

	if(mediaAscolta.indexOf(".")) {
		var indiceAscolta = mediaAscolta.indexOf(".");
		indiceAscolta = indiceAscolta + 3;
		mediaAscolta = mediaAscolta.substring(0, indiceAscolta);
		document.getElementById("ascoltaMedia").innerHTML = mediaAscolta;
	}
}
else {
	document.getElementById("ascoltaMedia").innerHTML = percAscolta100 / listaAscolta.length;
}

//fine ascolta


//inizio ripetere

var percRipetere0 = 0;
var percRipetereMin50 = 0;
var percRipetereMaggUgu50 = 0;
var percRipetere100 = 0;

for(var i=0; i<listaRipeti.length; i++) {

var percentualeRipetere = (listaRipeti[i]/elementiJson1)*100;
percentualeRipetere = percentualeRipetere + "";

if(percentualeRipetere.length > 3) {

	if(percentualeRipetere.indexOf(".")) {
		var index = percentualeRipetere.indexOf(".");
		percentualeRipetere = percentualeRipetere.substring(0,index);
		
		if(percentualeRipetere == 0) {
			percRipetere0 = percRipetere0 + 1;
		}
		if((percentualeRipetere > 0) && (percentualeRipetere < 50)) {
			percRipetereMin50 = percRipetereMin50 + 1;
		}
		if((percentualeRipetere >= 50) && (percentualeRipetere < 100)) {
			percRipetereMaggUgu50 = percRipetereMaggUgu50 + 1;
		}
		if(percentualeRipetere >= 100) {
			percRipetere100 = percRipetere100 + 1;
		}
	}
}
	else {
		
		if(percentualeRipetere == 0) {
			percRipetere0 = percRipetere0 + 1;
		}
		if((percentualeRipetere > 0) && (percentualeRipetere < 50)) {
			percRipetereMin50 = percRipetereMin50 + 1;
		}
		if((percentualeRipetere >= 50) && (percentualeRipetere < 100)) {
			percRipetereMaggUgu50 = percRipetereMaggUgu50 + 1;
		}
		if(percentualeRipetere >= 100) {
			percRipetere100 = percRipetere100 + 1;
		}
		
	}

}

document.getElementById("ripeti0").innerHTML = percRipetere0;
document.getElementById("ripeti50").innerHTML = percRipetereMin50;
document.getElementById("ripeti502").innerHTML = percRipetereMaggUgu50;
document.getElementById("ripeti100").innerHTML = percRipetere100;

var mediaRipeti = percRipetere100 / listaRipeti.length;
mediaRipeti = mediaRipeti + "";

if(mediaRipeti.length > 3) {

	if(mediaRipeti.indexOf(".")) {
		var indiceRipeti = mediaRipeti.indexOf(".");
		indiceRipeti = indiceRipeti + 3;
		mediaRipeti = mediaRipeti.substring(0, indiceRipeti);
		document.getElementById("ripetiMedia").innerHTML = mediaRipeti;
	}
}
else {
	document.getElementById("ripetiMedia").innerHTML = percRipetere100 / listaRipeti.length;
}

//fine ripeti



//inizio scegli

var percScegli0 = 0;
var percScegliMin50 = 0;
var percScegliMaggUgu50 = 0;
var percScegli100 = 0;

for(var i=0; i<listaScegli.length; i++) {

var percentualeScegli = (listaScegli[i]/elementiJson1)*100;
percentualeScegli = percentualeScegli + "";

if(percentualeScegli.length > 3) {

	if(percentualeScegli.indexOf(".")) {
		var index = percentualeScegli.indexOf(".");
		percentualeScegli = percentualeScegli.substring(0,index);
		
		if(percentualeScegli == 0) {
			percScegli0 = percScegli0 + 1;
		}
		if((percentualeScegli > 0) && (percentualeScegli < 50)) {
			percScegliMin50 = percScegliMin50 + 1;
		}
		if((percentualeScegli >= 50) && (percentualeScegli < 100)) {
			percScegliMaggUgu50 = percScegliMaggUgu50 + 1;
		}
		if(percentualeScegli >= 100) {
			percScegli100 = percScegli100 + 1;
		}
	}
}
	else {
		if(percentualeScegli == 0) {
			percScegli0 = percScegli0 + 1;
		}
		if((percentualeScegli > 0) && (percentualeScegli < 50)) {
			percScegliMin50 = percScegliMin50 + 1;
		}
		if((percentualeScegli >= 50) && (percentualeScegli < 100)) {
			percScegliMaggUgu50 = percScegliMaggUgu50 + 1;
		}
		if(percentualeScegli >= 100) {
			percScegli100 = percScegli100 + 1;
		}
	}
}

document.getElementById("scegli0").innerHTML = percScegli0;
document.getElementById("scegli50").innerHTML = percScegliMin50;
document.getElementById("scegli502").innerHTML = percScegliMaggUgu50;
document.getElementById("scegli100").innerHTML = percScegli100;

var mediaScegli = percScegli100 / listaScegli.length;
mediaScegli = mediaScegli + "";

if(mediaScegli.length > 3) {

	if(mediaScegli.indexOf(".")) {
		var indiceScegli = mediaScegli.indexOf(".");
		indiceScegli = indiceScegli + 3;
		mediaScegli = mediaScegli.substring(0, indiceScegli);
		document.getElementById("scegliMedia").innerHTML = mediaScegli;
	}
}
else {
	document.getElementById("scegliMedia").innerHTML = percScegli100 / listaScegli.length;
}

//fine scegli

	
	
//inizio scrivi facile

var percScriviFacile0 = 0;
var percScriviFacileMin50 = 0;
var percScriviFacileMaggUgu50 = 0;
var percScriviFacile100 = 0;

for(var i=0; i<listaScriviFacile.length; i++) {
	
var percentualeScriviFacile = (listaScriviFacile[i]/elementiJson1)*100;
percentualeScriviFacile = percentualeScriviFacile + "";

if(percentualeScriviFacile.length > 3) {

	if(percentualeScriviFacile.indexOf(".")) {
		var index = percentualeScriviFacile.indexOf(".");
		percentualeScriviFacile = percentualeScriviFacile.substring(0,index);
		
		if(percentualeScriviFacile == 0) {
			percScriviFacile0 = percScriviFacile0 + 1;
		}
		if((percentualeScriviFacile > 0) && (percentualeScriviFacile < 50)) {
			percScriviFacileMin50 = percScriviFacileMin50 + 1;
		}
		if((percentualeScriviFacile >= 50) && (percentualeScriviFacile < 100)) {
			percScriviFacileMaggUgu50 = percScriviFacileMaggUgu50 + 1;
		}
		if(percentualeScriviFacile >= 100) {
			percScriviFacile100 = percScriviFacile100 + 1;
		}
		
	}
}
	else {
		
		if(percentualeScriviFacile == 0) {
			percScriviFacile0 = percScriviFacile0 + 1;
		}
		if((percentualeScriviFacile > 0) && (percentualeScriviFacile < 50)) {
			percScriviFacileMin50 = percScriviFacileMin50 + 1;
		}
		if((percentualeScriviFacile >= 50) && (percentualeScriviFacile < 100)) {
			percScriviFacileMaggUgu50 = percScriviFacileMaggUgu50 + 1;
		}
		if(percentualeScriviFacile >= 100) {
			percScriviFacile100 = percScriviFacile100 + 1;
		}
		
	}
}

document.getElementById("scriviFacile0").innerHTML = percScriviFacile0;
document.getElementById("scriviFacile50").innerHTML = percScriviFacileMin50;
document.getElementById("scriviFacile502").innerHTML = percScriviFacileMaggUgu50;
document.getElementById("scriviFacile100").innerHTML = percScriviFacile100;

var mediaScriviFacile = percScriviFacile100 / listaScriviFacile.length;
mediaScriviFacile = mediaScriviFacile + "";

if(mediaScriviFacile.length > 3) {

	if(mediaScriviFacile.indexOf(".")) {
		var indiceScriviFacile = mediaScriviFacile.indexOf(".");
		indiceScriviFacile = indiceScriviFacile + 3;
		mediaScriviFacile = mediaScriviFacile.substring(0, indiceScriviFacile);
		document.getElementById("scriviFacileMedia").innerHTML = mediaScriviFacile;
	}
}
else {
	document.getElementById("scriviFacileMedia").innerHTML = percScriviFacile100 / listaScriviFacile.length;
}

//fine scrivi facile



//inizio scrivi difficile

var percScriviDifficile0 = 0;
var percScriviDifficileMin50 = 0;
var percScriviDifficileMaggUgu50 = 0;
var percScriviDifficile100 = 0;

for(var i=0; i<listaScriviDifficile.length; i++) {

var percentualeScriviDifficile = (listaScriviDifficile[i]/20)*100;
percentualeScriviDifficile = percentualeScriviDifficile + "";
if(percentualeScriviDifficile.length > 3) {

	if(percentualeScriviDifficile.indexOf(".")) {
		var index = percentualeScriviDifficile.indexOf(".");
		percentualeScriviDifficile = percentualeScriviDifficile.substring(0,index);
		
		if(percentualeScriviDifficile == 0) {
			percScriviDifficile0 = percScriviDifficile0 + 1;
		}
		if((percentualeScriviDifficile > 0) && (percentualeScriviDifficile < 50)) {
			percScriviDifficileMin50 = percScriviDifficileMin50 + 1;
		}
		if((percentualeScriviDifficile >= 50) && (percentualeScriviDifficile < 100)) {
			percScriviDifficileMaggUgu50 = percScriviDifficileMaggUgu50 + 1;
		}
		if(percentualeScriviDifficile >= 100) {
			percScriviDifficile100 = percScriviDifficile100 + 1;
		}
	}
}
	else {
		
		if(percentualeScriviDifficile == 0) {
			percScriviDifficile0 = percScriviDifficile0 + 1;
		}
		if((percentualeScriviDifficile > 0) && (percentualeScriviDifficile < 50)) {
			percScriviDifficileMin50 = percScriviDifficileMin50 + 1;
		}
		if((percentualeScriviDifficile >= 50) && (percentualeScriviDifficile < 100)) {
			percScriviDifficileMaggUgu50 = percScriviDifficileMaggUgu50 + 1;
		}
		if(percentualeScriviDifficile >= 100) {
			percScriviDifficile100 = percScriviDifficile100 + 1;
		}
	}

}

document.getElementById("scriviDifficile0").innerHTML = percScriviDifficile0;
document.getElementById("scriviDifficile50").innerHTML = percScriviDifficileMin50;
document.getElementById("scriviDifficile502").innerHTML = percScriviDifficileMaggUgu50;
document.getElementById("scriviDifficile100").innerHTML = percScriviDifficile100;

var mediaScriviDifficile = percScriviDifficile100 / listaScriviDifficile.length;
mediaScriviDifficile = mediaScriviDifficile + "";

if(mediaScriviDifficile.length > 3) {

	if(mediaScriviDifficile.indexOf(".")) {
		var indiceScriviDifficile = mediaScriviDifficile.indexOf(".");
		indiceScriviDifficile = indiceScriviDifficile + 3;
		mediaScriviDifficile = mediaScriviDifficile.substring(0, indiceScriviDifficile);
		document.getElementById("scriviDifficileMedia").innerHTML = mediaScriviDifficile;
	}
}
else {
	document.getElementById("scriviDifficileMedia").innerHTML = percScriviDifficile100 / listaScriviDifficile.length;
}

//fine scrivi difficile



//inizio campo

var percCampo0 = 0;
var percCampoMin50 = 0;
var percCampoMaggUgu50 = 0;
var percCampo100 = 0;

for(var i=0; i<listaCampo.length; i++) {

var percentualeCampo = (listaCampo[i]/11)*100;
percentualeCampo = percentualeCampo + "";
if(percentualeCampo.length > 3) {

	if(percentualeCampo.indexOf(".")) {
		var index = percentualeCampo.indexOf(".");
		percentualeCampo = percentualeCampo.substring(0,index);
		
		if(percentualeCampo == 0) {
			percCampo0 = percCampo0 + 1;
		}
		if((percentualeCampo > 0) && (percentualeCampo < 50)) {
			percCampoMin50 = percCampoMin50 + 1;
		}
		if((percentualeCampo >= 50) && (percentualeCampo < 100)) {
			percCampoMaggUgu50 = percCampoMaggUgu50 + 1;
		}
		if(percentualeCampo >= 100) {
			percCampo100 = percCampo100 + 1;
		}
		
	}
}
	else {
		
		if(percentualeCampo == 0) {
			percCampo0 = percCampo0 + 1;
		}
		if((percentualeCampo > 0) && (percentualeCampo < 50)) {
			percCampoMin50 = percCampoMin50 + 1;
		}
		if((percentualeCampo >= 50) && (percentualeCampo < 100)) {
			percCampoMaggUgu50 = percCampoMaggUgu50 + 1;
		}
		if(percentualeCampo >= 100) {
			percCampo100 = percCampo100 + 1;
		}
		
	}
}

document.getElementById("campo0").innerHTML = percCampo0;
document.getElementById("campo50").innerHTML = percCampoMin50;
document.getElementById("campo502").innerHTML = percCampoMaggUgu50;
document.getElementById("campo100").innerHTML = percCampo100;

var mediaCampo = percCampo100 / listaCampo.length;
mediaCampo = mediaCampo + "";

if(mediaCampo.length > 3) {

	if(mediaCampo.indexOf(".")) {
		var indiceCampo = mediaCampo.indexOf(".");
		indiceCampo = indiceCampo + 3;
		mediaCampo = mediaCampo.substring(0, indiceCampo);
		document.getElementById("campoMedia").innerHTML = mediaCampo;
	}
}
else {
	document.getElementById("campoMedia").innerHTML = percCampo100 / listaCampo.length;
}



//fine campo


//inizio campo ruoli

var percCampoRuoli0 = 0;
var percCampoRuoliMin50 = 0;
var percCampoRuoliMaggUgu50 = 0;
var percCampoRuoli100 = 0;

for(var i=0; i<listaCampoRuoli.length; i++) {

var percentualeCampoRuoli = (listaCampoRuoli[i]/11)*100;
percentualeCampoRuoli = percentualeCampoRuoli + "";
if(percentualeCampoRuoli.length > 3) {

	if(percentualeCampoRuoli.indexOf(".")) {
		var index = percentualeCampoRuoli.indexOf(".");
		percentualeCampoRuoli = percentualeCampoRuoli.substring(0,index);
		
		if(percentualeCampoRuoli == 0) {
			percCampoRuoli0 = percCampoRuoli0 + 1;
		}
		if((percentualeCampoRuoli > 0) && (percentualeCampoRuoli < 50)) {
			percCampoRuoliMin50 = percCampoRuoliMin50 + 1;
		}
		if((percentualeCampoRuoli >= 50) && (percentualeCampoRuoli < 100)) {
			percCampoRuoliMaggUgu50 = percCampoRuoliMaggUgu50 + 1;
		}
		if(percentualeCampoRuoli >= 100) {
			percCampoRuoli100 = percCampoRuoli100 + 1;
		}
		
	}
}
	else {
		if(percentualeCampoRuoli == 0) {
			percCampoRuoli0 = percCampoRuoli0 + 1;
		}
		if((percentualeCampoRuoli > 0) && (percentualeCampoRuoli < 50)) {
			percCampoRuoliMin50 = percCampoRuoliMin50 + 1;
		}
		if((percentualeCampoRuoli >= 50) && (percentualeCampoRuoli < 100)) {
			percCampoRuoliMaggUgu50 = percCampoRuoliMaggUgu50 + 1;
		}
		if(percentualeCampoRuoli >= 100) {
			percCampoRuoli100 = percCampoRuoli100 + 1;
		}
	}
}

document.getElementById("campoRuoli0").innerHTML = percCampoRuoli0;
document.getElementById("campoRuoli50").innerHTML = percCampoRuoliMin50;
document.getElementById("campoRuoli502").innerHTML = percCampoRuoliMaggUgu50;
document.getElementById("campoRuoli100").innerHTML = percCampoRuoli100;

var mediaCampoRuoli = percCampoRuoli100 / listaCampoRuoli.length;
mediaCampoRuoli = mediaCampoRuoli + "";

if(mediaCampoRuoli.length > 3) {

	if(mediaCampoRuoli.indexOf(".")) {
		var indiceCampoRuoli = mediaCampoRuoli.indexOf(".");
		indiceCampoRuoli = indiceCampoRuoli + 3;
		mediaCampoRuoli = mediaCampoRuoli.substring(0, indiceCampoRuoli);
		document.getElementById("campoRuoliMedia").innerHTML = mediaCampoRuoli;
	}
}
else {
	document.getElementById("campoRuoliMedia").innerHTML = percCampoRuoli100 / listaCampoRuoli.length;
}

//fine campo ruoli



//inizio corpo

var percCorpo0 = 0;
var percCorpoMin50 = 0;
var percCorpoMaggUgu50 = 0;
var percCorpo100 = 0;

for(var i=0; i<listaCorpo.length; i++) {

var percentualeCorpo = (listaCorpo[i]/15)*100;
percentualeCorpo = percentualeCorpo + "";
if(percentualeCorpo.length > 3) {

	if(percentualeCorpo.indexOf(".")) {
		var index = percentualeCorpo.indexOf(".");
		percentualeCorpo = percentualeCorpo.substring(0,index);
		
		if(percentualeCorpo == 0) {
			percCorpo0 = percCorpo0 + 1;
		}
		if((percentualeCorpo > 0) && (percentualeCorpo < 50)) {
			percCorpoMin50 = percCorpoMin50 + 1;
		}
		if((percentualeCorpo >= 50) && (percentualeCorpo < 100)) {
			percCorpoMaggUgu50 = percCorpoMaggUgu50 + 1;
		}
		if(percentualeCorpo >= 100) {
			percCorpo100 = percCorpo100 + 1;
		}
	}
}
	else {
		if(percentualeCorpo == 0) {
			percCorpo0 = percCorpo0 + 1;
		}
		if((percentualeCorpo > 0) && (percentualeCorpo < 50)) {
			percCorpoMin50 = percCorpoMin50 + 1;
		}
		if((percentualeCorpo >= 50) && (percentualeCorpo < 100)) {
			percCorpoMaggUgu50 = percCorpoMaggUgu50 + 1;
		}
		if(percentualeCorpo >= 100) {
			percCorpo100 = percCorpo100 + 1;
		}
	}
}	
	
document.getElementById("corpo0").innerHTML = percCorpo0;
document.getElementById("corpo50").innerHTML = percCorpoMin50;
document.getElementById("corpo502").innerHTML = percCorpoMaggUgu50;
document.getElementById("corpo100").innerHTML = percCorpo100;	

var mediaCorpo = percCorpo100 / listaCorpo.length;
mediaCorpo = mediaCorpo + "";

if(mediaCorpo.length > 3) {

	if(mediaCorpo.indexOf(".")) {
		var indiceCorpo = mediaCorpo.indexOf(".");
		indiceCorpo = indiceCorpo + 3;
		mediaCorpo = mediaCorpo.substring(0, indiceCorpo);
		document.getElementById("corpoMedia").innerHTML = mediaCorpo;
	}
}
else {
	document.getElementById("corpoMedia").innerHTML = percCorpo100 / listaCorpo.length;
}
	
//fine corpo


//inizio corpo mano	

var percCorpoMano0 = 0;
var percCorpoManoMin50 = 0;
var percCorpoManoMaggUgu50 = 0;
var percCorpoMano100 = 0;

for(var i=0; i<listaCorpoMano.length; i++) {

var percentualeCorpoMano = (listaCorpoMano[i]/7)*100;
percentualeCorpoMano = percentualeCorpoMano + "";
if(percentualeCorpoMano.length > 3) {

	if(percentualeCorpoMano.indexOf(".")) {
		var index = percentualeCorpoMano.indexOf(".");
		percentualeCorpoMano = percentualeCorpoMano.substring(0,index);
		
		if(percentualeCorpoMano == 0) {
			percCorpoMano0 = percCorpoMano0 + 1;
		}
		if((percentualeCorpoMano > 0) && (percentualeCorpoMano < 50)) {
			percCorpoManoMin50 = percCorpoManoMin50 + 1;
		}
		if((percentualeCorpoMano >= 50) && (percentualeCorpoMano < 100)) {
			percCorpoManoMaggUgu50 = percCorpoManoMaggUgu50 + 1;
		}
		if(percentualeCorpoMano >= 100) {
			percCorpoMano100 = percCorpoMano100 + 1;
		}
		
	}
}
	else {
		if(percentualeCorpoMano == 0) {
			percCorpoMano0 = percCorpoMano0 + 1;
		}
		if((percentualeCorpoMano > 0) && (percentualeCorpoMano < 50)) {
			percCorpoManoMin50 = percCorpoManoMin50 + 1;
		}
		if((percentualeCorpoMano >= 50) && (percentualeCorpoMano < 100)) {
			percCorpoManoMaggUgu50 = percCorpoManoMaggUgu50 + 1;
		}
		if(percentualeCorpoMano >= 100) {
			percCorpoMano100 = percCorpoMano100 + 1;
		}
	}
}

document.getElementById("corpoMano0").innerHTML = percCorpoMano0;
document.getElementById("corpoMano50").innerHTML = percCorpoManoMin50;
document.getElementById("corpoMano502").innerHTML = percCorpoManoMaggUgu50;
document.getElementById("corpoMano100").innerHTML = percCorpoMano100;

var mediaCorpoMano = percCorpoMano100 / listaCorpoMano.length;
mediaCorpoMano = mediaCorpoMano + "";

if(mediaCorpoMano.length > 3) {

	if(mediaCorpoMano.indexOf(".")) {
		var indiceCorpoMano = mediaCorpoMano.indexOf(".");
		indiceCorpoMano = indiceCorpoMano + 3;
		mediaCorpoMano = mediaCorpoMano.substring(0, indiceCorpoMano);
		document.getElementById("corpoManoMedia").innerHTML = mediaCorpoMano;
	}
}
else {
	document.getElementById("corpoManoMedia").innerHTML = percCorpoMano100 / listaCorpoMano.length;	
}

//fine corpo mano


//inizio corpo viso

var percCorpoViso0 = 0;
var percCorpoVisoMin50 = 0;
var percCorpoVisoMaggUgu50 = 0;
var percCorpoViso100 = 0;

for(var i=0; i<listaCorpoViso.length; i++) {

var percentualeCorpoViso = (listaCorpoViso[i]/6)*100;
percentualeCorpoViso = percentualeCorpoViso + "";
if(percentualeCorpoViso.length > 3) {

	if(percentualeCorpoViso.indexOf(".")) {
		var index = percentualeCorpoViso.indexOf(".");
		percentualeCorpoViso = percentualeCorpoViso.substring(0,index);
		
		if(percentualeCorpoViso == 0) {
			percCorpoViso0 = percCorpoViso0 + 1;
		}
		if((percentualeCorpoViso > 0) && (percentualeCorpoViso < 50)) {
			percCorpoVisoMin50 = percCorpoVisoMin50 + 1;
		}
		if((percentualeCorpoViso >= 50) && (percentualeCorpoViso < 100)) {
			percCorpoVisoMaggUgu50 = percCorpoVisoMaggUgu50 + 1;
		}
		if(percentualeCorpoViso >= 100) {
			percCorpoViso100 = percCorpoViso100 + 1;
		}
		
	}
}
	else {
		if(percentualeCorpoViso == 0) {
			percCorpoViso0 = percCorpoViso0 + 1;
		}
		if((percentualeCorpoViso > 0) && (percentualeCorpoViso < 50)) {
			percCorpoVisoMin50 = percCorpoVisoMin50 + 1;
		}
		if((percentualeCorpoViso >= 50) && (percentualeCorpoViso < 100)) {
			percCorpoVisoMaggUgu50 = percCorpoVisoMaggUgu50 + 1;
		}
		if(percentualeCorpoViso >= 100) {
			percCorpoViso100 = percCorpoViso100 + 1;
		}
	}
}

document.getElementById("corpoViso0").innerHTML = percCorpoViso0;
document.getElementById("corpoViso50").innerHTML = percCorpoVisoMin50;
document.getElementById("corpoViso502").innerHTML = percCorpoVisoMaggUgu50;
document.getElementById("corpoViso100").innerHTML = percCorpoViso100;

var mediaCorpoViso = percCorpoViso100 / listaCorpoViso.length;
mediaCorpoViso = mediaCorpoViso + "";

if(mediaCorpoViso.length > 3) {

	if(mediaCorpoViso.indexOf(".")) {
		var indiceCorpoViso = mediaCorpoViso.indexOf(".");
		indiceCorpoViso = indiceCorpoViso + 3;
		mediaCorpoViso = mediaCorpoViso.substring(0, indiceCorpoViso);
		document.getElementById("corpoVisoMedia").innerHTML = mediaCorpoViso;
	}
}
else {
	document.getElementById("corpoVisoMedia").innerHTML = percCorpoViso100 / listaCorpoViso.length;	
}

//fine corpo viso


//inizio corpo scegli

var percCorpoScegli0 = 0;
var percCorpoSceglioMin50 = 0;
var percCorpoScegliMaggUgu50 = 0;
var percCorpoScegli100 = 0;

for(var i=0; i<listaCorpoScegli.length; i++) {

var percentualeCorpoScegli = (listaCorpoScegli[i]/25)*100;
percentualeCorpoScegli = percentualeCorpoScegli + "";
if(percentualeCorpoScegli.length > 3) {

	if(percentualeCorpoScegli.indexOf(".")) {
		var index = percentualeCorpoScegli.indexOf(".");
		percentualeCorpoScegli = percentualeCorpoScegli.substring(0,index);
		
		if(percentualeCorpoScegli == 0) {
			percCorpoScegli0 = percCorpoScegli0 + 1;
		}
		if((percentualeCorpoScegli > 0) && (percentualeCorpoScegli < 50)) {
			percCorpoSceglioMin50 = percCorpoSceglioMin50 + 1;
		}
		if((percentualeCorpoScegli >= 50) && (percentualeCorpoScegli < 100)) {
			percCorpoScegliMaggUgu50 = percCorpoScegliMaggUgu50 + 1;
		}
		if(percentualeCorpoScegli >= 100) {
			percCorpoScegli100 = percCorpoScegli100 + 1;
		}
	}
}
	else {
		if(percentualeCorpoScegli == 0) {
			percCorpoScegli0 = percCorpoScegli0 + 1;
		}
		if((percentualeCorpoScegli > 0) && (percentualeCorpoScegli < 50)) {
			percCorpoSceglioMin50 = percCorpoSceglioMin50 + 1;
		}
		if((percentualeCorpoScegli >= 50) && (percentualeCorpoScegli < 100)) {
			percCorpoScegliMaggUgu50 = percCorpoScegliMaggUgu50 + 1;
		}
		if(percentualeCorpoScegli >= 100) {
			percCorpoScegli100 = percCorpoScegli100 + 1;
		}
	}
}	

document.getElementById("corpoScegli0").innerHTML = percCorpoScegli0;
document.getElementById("corpoScegli50").innerHTML = percCorpoSceglioMin50;
document.getElementById("corpoScegli502").innerHTML = percCorpoScegliMaggUgu50;
document.getElementById("corpoScegli100").innerHTML = percCorpoScegli100;

var mediaCorpoScegli = percCorpoScegli100 / listaCorpoScegli.length;
mediaCorpoScegli = mediaCorpoScegli + "";

if(mediaCorpoScegli.length > 3) {

	if(mediaCorpoScegli.indexOf(".")) {
		var indiceCorpoScegli = mediaCorpoScegli.indexOf(".");
		indiceCorpoScegli = indiceCorpoScegli + 3;
		mediaCorpoScegli = mediaCorpoScegli.substring(0, indiceCorpoScegli);
		document.getElementById("corpoScegliMedia").innerHTML = mediaCorpoScegli;
	}
}
else {
	document.getElementById("corpoScegliMedia").innerHTML = percCorpoScegli100 / listaCorpoScegli.length;
}

//fine corpo scegli
//fine gioca
	
	
//impara	
//inizio parti corpo

var percPartiCorpo0 = 0;
var percPartiCorpoMin50 = 0;
var percPartiCorpoMaggUgu50 = 0;
var percPartiCorpo100 = 0;

for(var i=0; i<listaPartiCorpo.length; i++) {
	
let percentualePartiCorpo = (listaPartiCorpo[i]/elementiCorpo)*100;
percentualePartiCorpo = percentualePartiCorpo + "";

if(percentualePartiCorpo.length > 3) {

	if(percentualePartiCorpo.indexOf(".")) {
		var index = percentualePartiCorpo.indexOf(".");
		percentualePartiCorpo = percentualePartiCorpo.substring(0,index);
		
		if(percentualePartiCorpo == 0) {
			percPartiCorpo0 = percPartiCorpo0 + 1;
		}
		if((percentualePartiCorpo > 0) && (percentualePartiCorpo < 50)) {
			percPartiCorpoMin50 = percPartiCorpoMin50 + 1;
		}
		if((percentualePartiCorpo >= 50) && (percentualePartiCorpo < 100)) {
			percPartiCorpoMaggUgu50 = percPartiCorpoMaggUgu50 + 1;
		}
		if(percentualePartiCorpo >= 100) {
			percPartiCorpo100 = percPartiCorpo100 + 1;
		}
		
	}
}
	else {
		if(percentualePartiCorpo == 0) {
			percPartiCorpo0 = percPartiCorpo0 + 1;
		}
		if((percentualePartiCorpo > 0) && (percentualePartiCorpo < 50)) {
			percPartiCorpoMin50 = percPartiCorpoMin50 + 1;
		}
		if((percentualePartiCorpo >= 50) && (percentualePartiCorpo < 100)) {
			percPartiCorpoMaggUgu50 = percPartiCorpoMaggUgu50 + 1;
		}
		if(percentualePartiCorpo >= 100) {
			percPartiCorpo100 = percPartiCorpo100 + 1;
		}
	}
}	

document.getElementById("partiCorpo0").innerHTML = percPartiCorpo0;
document.getElementById("partiCorpo50").innerHTML = percPartiCorpoMin50;
document.getElementById("partiCorpo502").innerHTML = percPartiCorpoMaggUgu50;
document.getElementById("partiCorpo100").innerHTML = percPartiCorpo100;

var mediaPartiCorpo = percPartiCorpo100 / listaPartiCorpo.length;
mediaPartiCorpo = mediaPartiCorpo + "";

if(mediaPartiCorpo.length > 3) {

	if(mediaPartiCorpo.indexOf(".")) {
		var indicePartiCorpo = mediaPartiCorpo.indexOf(".");
		indicePartiCorpo = indicePartiCorpo + 3;
		mediaPartiCorpo = mediaPartiCorpo.substring(0, indicePartiCorpo);
		document.getElementById("partiCorpoMedia").innerHTML = mediaPartiCorpo;
	}
}
else {
	document.getElementById("partiCorpoMedia").innerHTML = percPartiCorpo100 / listaPartiCorpo.length;
}	
	
//fine parti corpo	
	
	
//inizio allenati
var percAllenati0 = 0;
var percAllenatiMin50 = 0;
var percAllenatiMaggUgu50 = 0;
var percAllenati100 = 0;

for(var i=0; i<listaAllenati.length; i++) {
	
var percentualeAllenati = (listaAllenati[i]/videoAllenati)*100;
percentualeAllenati = percentualeAllenati + "";

if(percentualeAllenati.length > 3) {

if(percentualeAllenati.indexOf(".")) {
		var index = percentualeAllenati.indexOf(".");
		percentualeAllenati = percentualeAllenati.substring(0,index);
		
		if(percentualeAllenati == 0) {
			percAllenati0 = percAllenati0 + 1;
		}
		if((percentualeAllenati > 0) && (percentualeAllenati < 50)) {
			percAllenatiMin50 = percAllenatiMin50 + 1;
		}
		if((percentualeAllenati >= 50) && (percentualeAllenati < 100)) {
			percAllenatiMaggUgu50 = percAllenatiMaggUgu50 + 1;
		}
		if(percentualeAllenati >= 100) {
			percAllenati100 = percAllenati100 + 1;
		}
		
	}
}
else {
	if(percentualeAllenati == 0) {
			percAllenati0 = percAllenati0 + 1;
		}
		if((percentualeAllenati > 0) && (percentualeAllenati < 50)) {
			percAllenatiMin50 = percAllenatiMin50 + 1;
		}
		if((percentualeAllenati >= 50) && (percentualeAllenati < 100)) {
			percAllenatiMaggUgu50 = percAllenatiMaggUgu50 + 1;
		}
		if(percentualeAllenati >= 100) {
			percAllenati100 = percAllenati100 + 1;
		}
}
}

document.getElementById("allenati0").innerHTML = percAllenati0;
document.getElementById("allenati50").innerHTML = percAllenatiMin50;
document.getElementById("allenati502").innerHTML = percAllenatiMaggUgu50;
document.getElementById("allenati100").innerHTML = percAllenati100;

var mediaAllenati = percAllenati100 / listaAllenati.length;
mediaAllenati = mediaAllenati + "";

if(mediaAllenati.length > 3) {

	if(mediaAllenati.indexOf(".")) {
		var indiceAllenati = mediaAllenati.indexOf(".");
		indiceAllenati = indiceAllenati + 3;
		mediaAllenati = mediaAllenati.substring(0, indiceAllenati);
		document.getElementById("allenatiMedia").innerHTML = mediaAllenati;
	}
}
else {
	document.getElementById("allenatiMedia").innerHTML = percAllenati100 / listaAllenati.length;
}

//fine allenati


//inizio salute
var percSalute0 = 0;
var percSaluteMin50 = 0;
var percSaluteMaggUgu50 = 0;
var percSalute100 = 0;

for(var i=0; i<listaSalute.length; i++) {

var percentualeSalute = (listaSalute[i]/elementiSalute)*100;
percentualeSalute = percentualeSalute + "";

if(percentualeSalute.length > 3) {

if(percentualeSalute.indexOf(".")) {
		var index = percentualeSalute.indexOf(".");
		percentualeSalute = percentualeSalute.substring(0,index);
		
		if(percentualeSalute == 0) {
			percSalute0 = percSalute0 + 1;
		}
		if((percentualeSalute > 0) && (percentualeSalute < 50)) {
			percSaluteMin50 = percSaluteMin50 + 1;
		}
		if((percentualeSalute >= 50) && (percentualeSalute < 100)) {
			percSaluteMaggUgu50 = percSaluteMaggUgu50 + 1;
		}
		if(percentualeSalute >= 100) {
			percSalute100 = percSalute100 + 1;
		}
	}
}
	else {
		if(percentualeSalute == 0) {
			percSalute0 = percSalute0 + 1;
		}
		if((percentualeSalute > 0) && (percentualeSalute < 50)) {
			percSaluteMin50 = percSaluteMin50 + 1;
		}
		if((percentualeSalute >= 50) && (percentualeSalute < 100)) {
			percSaluteMaggUgu50 = percSaluteMaggUgu50 + 1;
		}
		if(percentualeSalute >= 100) {
			percSalute100 = percSalute100 + 1;
		}
	}
}

document.getElementById("salute0").innerHTML = percSalute0;
document.getElementById("salute50").innerHTML = percSaluteMin50;
document.getElementById("salute502").innerHTML = percSaluteMaggUgu50;
document.getElementById("salute100").innerHTML = percSalute100;

var mediaSalute = percSalute100 / listaSalute.length;
mediaSalute = mediaSalute + "";

if(mediaSalute.length > 3) {

	if(mediaSalute.indexOf(".")) {
		var indiceSalute = mediaSalute.indexOf(".");
		indiceSalute = indiceSalute + 3;
		mediaSalute = mediaSalute.substring(0, indiceSalute);
		document.getElementById("saluteMedia").innerHTML = mediaSalute;
	}
}
else {
	document.getElementById("saluteMedia").innerHTML = percSalute100 / listaSalute.length;
}

//fine salute


//inizio medico consiglia

var percMedico0 = 0;
var percMedicoMin50 = 0;
var percMedicoMaggUgu50 = 0;
var percMedico100 = 0;

for(var i=0; i<listaMedicoConsiglia.length; i++) {
	
var percentualeMedico = (listaMedicoConsiglia[i]/6)*100;
percentualeMedico = percentualeMedico + "";

if(percentualeMedico.length > 3) {

if(percentualeMedico.indexOf(".")) {
		var index = percentualeMedico.indexOf(".");
		percentualeMedico = percentualeMedico.substring(0,index);
		
		if(percentualeMedico == 0) {
			percMedico0 = percMedico0 + 1;
		}
		if((percentualeMedico > 0) && (percentualeMedico < 50)) {
			percMedicoMin50 = percMedicoMin50 + 1;
		}
		if((percentualeMedico >= 50) && (percentualeMedico < 100)) {
			percMedicoMaggUgu50 = percMedicoMaggUgu50 + 1;
		}
		if(percentualeMedico >= 100) {
			percMedico100 = percMedico100 + 1;
		}
	}
}
	else {
		if(percentualeMedico == 0) {
			percMedico0 = percMedico0 + 1;
		}
		if((percentualeMedico > 0) && (percentualeMedico < 50)) {
			percMedicoMin50 = percMedicoMin50 + 1;
		}
		if((percentualeMedico >= 50) && (percentualeMedico < 100)) {
			percMedicoMaggUgu50 = percMedicoMaggUgu50 + 1;
		}
		if(percentualeMedico >= 100) {
			percMedico100 = percMedico100 + 1;
		}
	}
}
	
document.getElementById("medico0").innerHTML = percMedico0;
document.getElementById("medico50").innerHTML = percMedicoMin50;
document.getElementById("medico502").innerHTML = percMedicoMaggUgu50;
document.getElementById("medico100").innerHTML = percMedico100;

var mediaMedico = percMedico100 / listaMedicoConsiglia.length;
mediaMedico = mediaMedico + "";

if(mediaMedico.length > 3) {

	if(mediaMedico.indexOf(".")) {
		var indiceMedico = mediaMedico.indexOf(".");
		indiceMedico = indiceMedico + 3;
		mediaMedico = mediaMedico.substring(0, indiceMedico);
		document.getElementById("medicoMedia").innerHTML = mediaMedico;
	}
}
else {
	document.getElementById("medicoMedia").innerHTML = percMedico100 / listaMedicoConsiglia.length;
}

//fine medico consiglia	
	

	
//inizio parla medico1

var percMedico10 = 0;
var percMedico1Min50 = 0;
var percMedico1MaggUgu50 = 0;
var percMedico1100 = 0;

for(var i=0; i<listaParlaMedico1.length; i++) {

var percentualeParlaMedico1 = (listaParlaMedico1[i]/6)*100;
percentualeParlaMedico1 = percentualeParlaMedico1 + "";

if(percentualeParlaMedico1.length > 3) {

if(percentualeParlaMedico1.indexOf(".")) {
		var index = percentualeParlaMedico1.indexOf(".");
		percentualeParlaMedico1 = percentualeParlaMedico1.substring(0,index);
		
		if(percentualeParlaMedico1 == 0) {
			percMedico10 = percMedico10 + 1;
		}
		if((percentualeParlaMedico1 > 0) && (percentualeParlaMedico1 < 50)) {
			percMedico1Min50 = percMedico1Min50 + 1;
		}
		if((percentualeParlaMedico1 >= 50) && (percentualeParlaMedico1 < 100)) {
			percMedico1MaggUgu50 = percMedico1MaggUgu50 + 1;
		}
		if(percentualeParlaMedico1 >= 100) {
			percMedico1100 = percMedico1100 + 1;
		}
	}
}
else {
	if(percentualeParlaMedico1 == 0) {
			percMedico10 = percMedico10 + 1;
		}
		if((percentualeParlaMedico1 > 0) && (percentualeParlaMedico1 < 50)) {
			percMedico1Min50 = percMedico1Min50 + 1;
		}
		if((percentualeParlaMedico1 >= 50) && (percentualeParlaMedico1 < 100)) {
			percMedico1MaggUgu50 = percMedico1MaggUgu50 + 1;
		}
		if(percentualeParlaMedico1 >= 100) {
			percMedico1100 = percMedico1100 + 1;
		}
}
}	
	
document.getElementById("parlaMedico10").innerHTML = percMedico10;
document.getElementById("parlaMedico150").innerHTML = percMedico1Min50;
document.getElementById("parlaMedico1502").innerHTML = percMedico1MaggUgu50;
document.getElementById("parlaMedico1100").innerHTML = percMedico1100;

var mediaParlaMedico1 = percMedico1100 / listaParlaMedico1.length;
mediaParlaMedico1 = mediaParlaMedico1 + "";

if(mediaParlaMedico1.length > 3) {

	if(mediaParlaMedico1.indexOf(".")) {
		var indiceParlaMedico1 = mediaParlaMedico1.indexOf(".");
		indiceParlaMedico1 = indiceParlaMedico1 + 3;
		mediaParlaMedico1 = mediaParlaMedico1.substring(0, indiceParlaMedico1);
		document.getElementById("parlaMedico1Media").innerHTML = mediaParlaMedico1;
	}
}
else {
	document.getElementById("parlaMedico1Media").innerHTML = percMedico1100 / listaParlaMedico1.length;
}	
	
//fine parla medico1	
	
	
//inizio parla medico2	

var percMedico20 = 0;
var percMedico2Min50 = 0;
var percMedico2MaggUgu50 = 0;
var percMedico2100 = 0;

for(var i=0; i<listaParlaMedico2.length; i++) {
	
var percentualeParlaMedico2 = (listaParlaMedico2[i]/6)*100;
percentualeParlaMedico2 = percentualeParlaMedico2 + "";

if(percentualeParlaMedico2.length > 3) {

if(percentualeParlaMedico2.indexOf(".")) {
		var index = percentualeParlaMedico2.indexOf(".");
		percentualeParlaMedico2 = percentualeParlaMedico2.substring(0,index);
		
		if(percentualeParlaMedico2 == 0) {
			percMedico20 = percMedico20 + 1;
		}
		if((percentualeParlaMedico2 > 0) && (percentualeParlaMedico2 < 50)) {
			percMedico2Min50 = percMedico2Min50 + 1;
		}
		if((percentualeParlaMedico2 >= 50) && (percentualeParlaMedico2 < 100)) {
			percMedico2MaggUgu50 = percMedico2MaggUgu50 + 1;
		}
		if(percentualeParlaMedico2 >= 100) {
			percMedico2100 = percMedico2100 + 1;
		}
		
	}
}
else {
		if(percentualeParlaMedico2 == 0) {
			percMedico20 = percMedico20 + 1;
		}
		if((percentualeParlaMedico2 > 0) && (percentualeParlaMedico2 < 50)) {
			percMedico2Min50 = percMedico2Min50 + 1;
		}
		if((percentualeParlaMedico2 >= 50) && (percentualeParlaMedico2 < 100)) {
			percMedico2MaggUgu50 = percMedico2MaggUgu50 + 1;
		}
		if(percentualeParlaMedico2 >= 100) {
			percMedico2100 = percMedico2100 + 1;
		}
		
	}
}

document.getElementById("parlaMedico20").innerHTML = percMedico20;
document.getElementById("parlaMedico250").innerHTML = percMedico2Min50;
document.getElementById("parlaMedico2502").innerHTML = percMedico2MaggUgu50;
document.getElementById("parlaMedico2100").innerHTML = percMedico2100;

var mediaParlaMedico2 = percMedico2100 / listaParlaMedico2.length;
mediaParlaMedico2 = mediaParlaMedico2 + "";

if(mediaParlaMedico2.length > 3) {

	if(mediaParlaMedico2.indexOf(".")) {
		var indiceParlaMedico2 = mediaParlaMedico2.indexOf(".");
		indiceParlaMedico2 = indiceParlaMedico2 + 3;
		mediaParlaMedico2 = mediaParlaMedico2.substring(0, indiceParlaMedico2);
		document.getElementById("parlaMedico2Media").innerHTML = mediaParlaMedico2;
	}
}
else {
	document.getElementById("parlaMedico2Media").innerHTML = percMedico2100 / listaParlaMedico2.length;
}	

//fine parla medico2
  
  
  
 //conto per ogni video commenti del db quante volte è stato visto dagli utenti
 
 let listaCont = []; //lista che conterrà le occorrenze di ogni video
 var cont = 0;
 
 for(var z=0; z<nomeVideoCommenti.length; z++) {
	 
	 cont = 0;
	 
	 for(var i=0; i<listaNomeVideo.length; i++) {
		 
		 if(listaNomeVideo[i].length > 0) {
			 
			 for(var j=0; j<listaNomeVideo[i].length; j++) {
				 
				 if(nomeVideoCommenti[z] == listaNomeVideo[i][j]) {
					 cont = cont + 1;
				 }
				 
			 }
			 
			 
		 }
	}
listaCont.push(cont); 
}
	  
 var table = document.createElement("table");  //makes a table element for the page
 //table.style.border = "1px solid";
    let innerT = "";
    
    innerT += "<tr class='firstRow'><th><div align=center>Titolo</div></th><th><div align=center>Utenti</div></th></tr>";  //adds the first row that contains the sections for the table

    for (var i = 0; i < nomeVideoCommenti.length; i++)  //loops through the array 
    {
        //add info from the array into this
        innerT += "<tr><td align=center>" + nomeVideoCommenti[i] + "</td><td border=1px align=center>"+ listaCont[i] + "</td></tr>";
    }
    table.innerHTML = innerT;
    
    document.getElementById("video").appendChild(table);

	
	
 //lista con i percorsi del db
 
 let listaNomePercorsiDb = [];
 listaNomePercorsiDb.push("il gioco del calcio episodio 1");
 listaNomePercorsiDb.push("il gioco del calcio episodio 2");
 listaNomePercorsiDb.push("il gioco del calcio episodio 3");
  
  //conto per ogni percorso del db quante volte è stato completato dagli utenti
 
 let listaContPercorsi = []; //lista che conterrà le occorrenze di ogni video
 var contPercorsi = 0;
 
 for(var z=0; z<listaNomePercorsiDb.length; z++) {
	 
	 contPercorsi = 0;
	 
	 for(var i=0; i<listaNomePercosi.length; i++) {
		 
		 if(listaNomePercosi[i].length > 0) {
			 
			 for(var j=0; j<listaNomePercosi[i].length; j++) {
				 
				 if(listaNomePercorsiDb[z] == listaNomePercosi[i][j]) {
					 contPercorsi = contPercorsi + 1;
				 }
				 
			 }
			 
			 
		 }
	}
listaContPercorsi.push(contPercorsi); 
} 

  
 
  var tableP = document.createElement("table");  //makes a table element for the page
    let innerTP = "";
    
    innerTP += "<tr class='firstRow'><th><div align=center>Nome</div></th><th><div align=center>Utenti</div></th></tr>";  //adds the first row that contains the sections for the table

    for (var i = 0; i < listaNomePercorsiDb.length; i++)  //loops through the array 
    {
        //add info from the array into this
        innerTP += "<tr><td align=center>" + listaNomePercorsiDb[i] + "</td><td align=center>"+ listaContPercorsi[i] + "</td></tr>";
    }
    tableP.innerHTML = innerTP;
    
    document.getElementById("percorsi").appendChild(tableP);
				
			//alert(document.getElementById("ascolta0").innerText);	
				
				
				});
			
			});
		
		
		});
	
	
	   });
	
});

	}
	
	});
	}
});

	
}


 
    
//create a user-defined function to download CSV file   
function download_csv_file() {  

	//create CSV file data in an array  
var csvFileData = [  
   ['Ascolta', '0%', document.getElementById("ascolta0").innerText],  
   ['Ascolta', '<50%', document.getElementById("ascolta50").innerText],  
   ['Ascolta', '>=50%', document.getElementById("ascolta502").innerText],  
   ['Ascolta', '100%', document.getElementById("ascolta100").innerText],  
   ['Ascolta', 'media completamento', document.getElementById("ascoltaMedia").innerText],
   [''],
   ['Ripeti', '0%', document.getElementById("ripeti0").innerText],  
   ['Ripeti', '<50%', document.getElementById("ripeti50").innerText],  
   ['Ripeti', '>=50%', document.getElementById("ripeti502").innerText],  
   ['Ripeti', '100%', document.getElementById("ripeti100").innerText],  
   ['Ripeti', 'media completamento', document.getElementById("ripetiMedia").innerText]  
   
]; 
  
    //define the heading for each row of the data  
    var csv = 'Attività,Completamento, Utenti\n';  
      
    //merge the data with CSV  
    csvFileData.forEach(function(row) {  
	//csv = "a";
            csv += row.join(',');  
            csv += "\n";  
    });  
   
    //display the created CSV data on the web browser   
    //document.write(csv);  
  
     
    var hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    hiddenElement.target = '_blank';  
      
    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'Play4Health.csv';  
    hiddenElement.click();  
}

function tableToCSV() {
 
            // Variable to store the final csv data
            var csv_data = [];
 
            // Get each row data
            var rows = document.getElementsByTagName('tr');
            for (var i = 0; i < rows.length; i++) {
 
                // Get each column data
                var cols = rows[i].querySelectorAll('td,th');
 
                // Stores each csv row data
                var csvrow = [];
                for (var j = 0; j < cols.length; j++) {
 
                    // Get the text data of each cell
                    // of a row and push it to csvrow
                    csvrow.push(cols[j].innerHTML);
                }
 
                // Combine each column value with comma
                csv_data.push(csvrow.join(","));
            }
 
            // Combine each row data with new line character
            csv_data = csv_data.join('\n');
 
            // Call this function to download csv file  
            downloadCSVFile(csv_data);
 
}
 
        function downloadCSVFile(csv_data) {
 
            // Create CSV file object and feed
            // our csv_data into it
            CSVFile = new Blob([csv_data], {
                type: "text/csv"
            });
 
            // Create to temporary link to initiate
            // download process
            var temp_link = document.createElement('a');
 
            // Download csv file
            temp_link.download = "GfG.csv";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;
 
            // This link should not be displayed
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);
 
            // Automatically click the link to
            // trigger download
            temp_link.click();
            document.body.removeChild(temp_link);
        }
		
		function downloadCSV(csv, filename) {  
    var csvFile;  
    var downloadLink;  
     var universalBOM = "\uFEFF";
    //define the file type to text/csv  
    csvFile = new Blob([csv], {type: 'text/csv;charset=UTF-8'});  
    downloadLink = document.createElement("a");  
	
    downloadLink.download = filename;  
    //downloadLink.href = window.URL.createObjectURL(csvFile);  
	downloadLink.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM+csv));
    downloadLink.style.display = "none";  
  
    document.body.appendChild(downloadLink);  
    downloadLink.click();  
}  
  
//user-defined function to export the data to CSV file format  
function exportTableToCSV(filename) {  
   //declare a JavaScript variable of array type  
   var csv = [];  
   var rows = document.querySelectorAll("table tr");  
   var cont = 0;
   var contaSpazi = 2;
   //alert(document.querySelectorAll("table tr").length);
   
   //var tabella = document.querySelectorAll("table");
   var numOperatori = document.getElementById("header2").innerHTML;
   csv.push(numOperatori);
   
   var numUtenti = document.getElementById("header").innerHTML;
   csv.push(numUtenti);
   csv.push("\n");
   
   //merge the whole data in tabular form   
   for(var i=0; i<rows.length; i++) {
	   
if(i!=0) {
   if((i%7 == 0) && i<120)  {
	csv.push("\n");
	contaSpazi = contaSpazi + 1;
}
   }
if(csv.includes("Nome,Utenti"))  {
	  
	  if(cont == 0) {
		  cont = cont + 1;
		  var j = i - 1;
		  var pos = j + contaSpazi;
		  csv.splice(pos, 0, "\n");
		  
	  }

}

    var row = [], cols = rows[i].querySelectorAll("td, th");  
    for( var j=0; j<cols.length; j++)  
		
       row.push(cols[j].innerText);  
	   
    csv.push(row.join(","));  
   }   
 
   downloadCSV(csv.join("\n"), filename);  
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