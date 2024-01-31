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

	var usernameDaModificare = sessionStorage.getItem('utenteDaModificare');
	
	new Promise((res, rej) => {
	ref.on('value', function(snapshot) {
		
		snapshot.forEach(function(childSnapshot) {
		  if(childSnapshot.val().username == usernameDaModificare) {
				
				childSnapshot.child("allenati").forEach(function(childSnapshot) {
					allenati = allenati + 1;
				
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
					
				
				
			}			
    });
	res([allenati, ascolta, corpo, corpoMano, corpoScegli, corpoViso, campo, campoRuoli, medicoConsiglia, parlaMedico1, parlaMedico2, partiCorpo, salute, scegli, scriviDifficile, scriviFacile, ripeti, nomeVideo, videoVisti, nomePercorsi, tempoPercorsi]);
	
});

}).then(([allenati, ascolta, corpo, corpoMano, corpoScegli, corpoViso, campo, campoRuoli, medicoConsiglia, parlaMedico1, parlaMedico2, partiCorpo, salute, scegli, scriviDifficile, scriviFacile, ripeti, nomeVideo, videoVisti, nomePercorsi, tempoPercorsi]) => {	
	
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
				
				var ref3 = firebase.database().ref("video").child("gesti");
				ref3.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
	
						
						videoAllenati = videoAllenati + 1;
						
					
							});
							res([videoAllenati]);

				});
			
			}).then(([videoAllenati]) => {	
			
			
			new Promise((res, rej) => {
				
				var video = 0;	
				
				var ref4 = firebase.database().ref("video").child("commenti");
				ref4.on('value', function(snapshot) {
					snapshot.forEach(function(childSnapshot) {
						
	
						
						video = video + 1;
						
					
							});
							res([video]);
							

				});	
				
				
				}).then(([video]) => {	
				
				document.getElementById("progressBar").remove();
	document.getElementById("container").style.display = "";
	document.getElementById("box").style.display = "";
	document.getElementById("form-box").style.display = "";
	document.getElementById("form-box1").style.display = "";
	document.getElementById("form-box2").style.display = "";
	document.getElementById("form-box3").style.display = "";

var percentualeAscolta = (ascolta/elementiJson1)*100;
percentualeAscolta = percentualeAscolta + "";

if(percentualeAscolta.length > 3) {

	if(percentualeAscolta.indexOf(".")) {
		var index = percentualeAscolta.indexOf(".");
		percentualeAscolta = percentualeAscolta.substring(0,index);
		var divAscolta = document.getElementById("percAscolta").innerHTML = percentualeAscolta+"% / 100%";
		
		if(percentualeAscolta > 100) {
			var divAscolta = document.getElementById("percAscolta").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divAscolta = document.getElementById("percAscolta").innerHTML = percentualeAscolta+"% / 100%";
		
		if(percentualeAscolta > 100) {
			var divAscolta = document.getElementById("percAscolta").innerHTML = 100+"% / 100%";
		}
	}



var percentualeRipetere = (ripeti/elementiJson1)*100;
percentualeRipetere = percentualeRipetere + "";

if(percentualeRipetere.length > 3) {

	if(percentualeRipetere.indexOf(".")) {
		var index = percentualeRipetere.indexOf(".");
		percentualeRipetere = percentualeRipetere.substring(0,index);
		var divRipetere = document.getElementById("percRipeti").innerHTML = percentualeRipetere+"% / 100%";
		
		if(percentualeRipetere > 100) {
			var divRipetere = document.getElementById("percRipeti").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divRipetere = document.getElementById("percRipeti").innerHTML = percentualeRipetere+"% / 100%";
		
		if(percentualeRipetere > 100) {
			var divRipetere = document.getElementById("percRipeti").innerHTML = 100+"% / 100%";
		}
	}



var percentualeScegli = (scegli/elementiJson1)*100;
percentualeScegli = percentualeScegli + "";

if(percentualeScegli.length > 3) {

	if(percentualeScegli.indexOf(".")) {
		var index = percentualeScegli.indexOf(".");
		percentualeScegli = percentualeScegli.substring(0,index);
		var divScegli = document.getElementById("percScegli").innerHTML = percentualeScegli+"% / 100%";
		
		if(percentualeScegli > 100) {
			var divScegli = document.getElementById("percScegli").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divScegli = document.getElementById("percScegli").innerHTML = percentualeScegli+"% / 100%";
		
		if(percentualeScegli > 100) {
			var divScegli = document.getElementById("percScegli").innerHTML = 100+"% / 100%";
		}
	}
	
	
var percentualeScriviFacile = (scriviFacile/elementiJson1)*100;
percentualeScriviFacile = percentualeScriviFacile + "";

if(percentualeScriviFacile.length > 3) {

	if(percentualeScriviFacile.indexOf(".")) {
		var index = percentualeScriviFacile.indexOf(".");
		percentualeScriviFacile = percentualeScriviFacile.substring(0,index);
		var divFacile = document.getElementById("percScriviFacile").innerHTML = percentualeScriviFacile+"% / 100%";
		
		if(percentualeScriviFacile > 100) {
			var divFacile = document.getElementById("percScriviFacile").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divFacile = document.getElementById("percScriviFacile").innerHTML = percentualeScriviFacile+"% / 100%";
		
		if(percentualeScriviFacile > 100) {
			var divFacile = document.getElementById("percScriviFacile").innerHTML = 100+"% / 100%";
		}
	}



var percentualeScriviDifficile = (scriviDifficile/20)*100;
percentualeScriviDifficile = percentualeScriviDifficile + "";
if(percentualeScriviDifficile.length > 3) {

	if(percentualeScriviDifficile.indexOf(".")) {
		var index = percentualeScriviDifficile.indexOf(".");
		percentualeScriviDifficile = percentualeScriviDifficile.substring(0,index);
		var divDifficile = document.getElementById("percScriviDifficile").innerHTML = percentualeScriviDifficile+"% / 100%";
		
		if(percentualeScriviDifficile > 100) {
			var divDifficile = document.getElementById("percScriviDifficile").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divDifficile = document.getElementById("percScriviDifficile").innerHTML = percentualeScriviDifficile+"% / 100%";
		
		if(percentualeScriviDifficile > 100) {
			var divDifficile = document.getElementById("percScriviDifficile").innerHTML = 100+"% / 100%";
		}
	}



var percentualeCampo = (campo/11)*100;
percentualeCampo = percentualeCampo + "";
if(percentualeCampo.length > 3) {

	if(percentualeCampo.indexOf(".")) {
		var index = percentualeCampo.indexOf(".");
		percentualeCampo = percentualeCampo.substring(0,index);
		var divCampo = document.getElementById("percCampo").innerHTML = percentualeCampo+"% / 100%";
		
		if(percentualeCampo > 100) {
			var divCampo = document.getElementById("percCampo").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCampo = document.getElementById("percCampo").innerHTML = percentualeCampo+"% / 100%";
		
		if(percentualeCampo > 100) {
			var divCampo = document.getElementById("percCampo").innerHTML = 100+"% / 100%";
		}
	}


var percentualeCampoRuoli = (campoRuoli/11)*100;
percentualeCampoRuoli = percentualeCampoRuoli + "";
if(percentualeCampoRuoli.length > 3) {

	if(percentualeCampoRuoli.indexOf(".")) {
		var index = percentualeCampoRuoli.indexOf(".");
		percentualeCampoRuoli = percentualeCampoRuoli.substring(0,index);
		var divCampoRuoli = document.getElementById("percCampoRuoli").innerHTML = percentualeCampoRuoli+"% / 100%";
		
		if(percentualeCampoRuoli > 100) {
			var divCampoRuoli = document.getElementById("percCampoRuoli").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCampoRuoli = document.getElementById("percCampoRuoli").innerHTML = percentualeCampoRuoli+"% / 100%";
		
		if(percentualeCampoRuoli > 100) {
			var divCampoRuoli = document.getElementById("percCampoRuoli").innerHTML = 100+"% / 100%";
		}
	}


var percentualeCorpo = (corpo/15)*100;
percentualeCorpo = percentualeCorpo + "";
if(percentualeCorpo.length > 3) {

	if(percentualeCorpo.indexOf(".")) {
		var index = percentualeCorpo.indexOf(".");
		percentualeCorpo = percentualeCorpo.substring(0,index);
		var divCorpo = document.getElementById("percCorpo").innerHTML = percentualeCorpo+"% / 100%";
		
		if(percentualeCorpo > 100) {
			var divCorpo = document.getElementById("percCorpo").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCorpo = document.getElementById("percCorpo").innerHTML = percentualeCorpo+"% / 100%";
		
		if(percentualeCorpo > 100) {
			var divCorpo = document.getElementById("percCorpo").innerHTML = 100+"% / 100%";
		}
	}


var percentualeCorpoMano = (corpoMano/7)*100;
percentualeCorpoMano = percentualeCorpoMano + "";
if(percentualeCorpoMano.length > 3) {

	if(percentualeCorpoMano.indexOf(".")) {
		var index = percentualeCorpoMano.indexOf(".");
		percentualeCorpoMano = percentualeCorpoMano.substring(0,index);
		var divCorpoMano = document.getElementById("percCorpoMano").innerHTML = percentualeCorpoMano+"% / 100%";
		
		if(percentualeCorpoMano > 100) {
			var divCorpoMano = document.getElementById("percCorpoMano").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCorpoMano = document.getElementById("percCorpoMano").innerHTML = percentualeCorpoMano+"% / 100%";
		
		if(percentualeCorpoMano > 100) {
			var divCorpoMano = document.getElementById("percCorpoMano").innerHTML = 100+"% / 100%";
		}
	}



var percentualeCorpoViso = (corpoViso/6)*100;
percentualeCorpoViso = percentualeCorpoViso + "";
if(percentualeCorpoViso.length > 3) {

	if(percentualeCorpoViso.indexOf(".")) {
		var index = percentualeCorpoViso.indexOf(".");
		percentualeCorpoViso = percentualeCorpoViso.substring(0,index);
		var divCorpoViso = document.getElementById("percCorpoViso").innerHTML = percentualeCorpoViso+"% / 100%";
		
		if(percentualeCorpoViso > 100) {
			var divCorpoViso = document.getElementById("percCorpoViso").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCorpoViso = document.getElementById("percCorpoViso").innerHTML = percentualeCorpoViso+"% / 100%";
		
		if(percentualeCorpoViso > 100) {
			var divCorpoViso = document.getElementById("percCorpoViso").innerHTML = 100+"% / 100%";
		}
	}



var percentualeCorpoScegli = (corpoScegli/25)*100;
percentualeCorpoScegli = percentualeCorpoScegli + "";
if(percentualeCorpoScegli.length > 3) {

	if(percentualeCorpoScegli.indexOf(".")) {
		var index = percentualeCorpoScegli.indexOf(".");
		percentualeCorpoScegli = percentualeCorpoScegli.substring(0,index);
		var divCorpoScegli = document.getElementById("percCorpoScegli").innerHTML = percentualeCorpoScegli+"% / 100%";
		
		if(percentualeCorpoScegli > 100) {
			var divCorpoScegli = document.getElementById("percCorpoScegli").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divCorpoScegli = document.getElementById("percCorpoScegli").innerHTML = percentualeCorpoScegli+"% / 100%";
		
		if(percentualeCorpoScegli > 100) {
			var divCorpoScegli = document.getElementById("percCorpoScegli").innerHTML = 100+"% / 100%";
		}
	}
	
//impara	
var i = 0;
var j = 0;
var k = 0
var z = 0;
var y = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;


  if (i == 0) {
	  
	  if(percentualeAscolta > 100) {
			i = 1;
			var elem1 = document.getElementById("ascolta");
			var width = 1;
			var id1 = setInterval(frame, 10);
			function frame() {
			  if (width >= 100) {
				clearInterval(id1);
				i = 0;
			  } else {
				width++;
				elem1.style.width = width + "%";
			  }
			}
		}
		else {
			i = 1;
			var elem1 = document.getElementById("ascolta");
			var width = 1;
			var id1 = setInterval(frame, 10);
			function frame() {
			  if (width >= percentualeAscolta) {
				clearInterval(id1);
				i = 0;
			  } else {
				width++;
				elem1.style.width = width + "%";
			  }
			}
		}
  }
  


  if (j == 0) {
	  
	  if(percentualeRipetere > 100) {
		  j = 1;
    var elem2 = document.getElementById("ripeti");
    var width1 = 1;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width1 >= 100) {
        clearInterval(id2);
        j = 0;
      } else {
        width1++;
        elem2.style.width = width1 + "%";
      }
    }
	  }
	  
	  else {
	j = 1;
    var elem2 = document.getElementById("ripeti");
    var width1 = 1;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width1 >= percentualeRipetere) {
        clearInterval(id2);
        j = 0;
      } else {
        width1++;
        elem2.style.width = width1 + "%";
      }
    }
	  }
   
  }
  
  
    if (k == 0) {
		
		if(percentualeScegli > 100) {
			k = 1;
    var elem3 = document.getElementById("scegli");
    var width2 = 1;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width2 >= 100) {
        clearInterval(id3);
        k = 0;
      } else {
        width2++;
        elem3.style.width = width2 + "%";
      }
    }
		}
		
		else {
			k = 1;
    var elem3 = document.getElementById("scegli");
    var width2 = 1;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width2 >= percentualeScegli) {
        clearInterval(id3);
        k = 0;
      } else {
        width2++;
        elem3.style.width = width2 + "%";
      }
    }
		}
    
  }
  
  if (z == 0) {
	  
	  if(percentualeScriviFacile > 100) {
		  z = 1;
    var elem4 = document.getElementById("scriviFacile");
    var width3 = 1;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width3 >= 100) {
        clearInterval(id4);
        z = 0;
      } else {
        width3++;
        elem4.style.width = width3 + "%";
      }
    }
	  }
	  
	  else {
		   z = 1;
    var elem4 = document.getElementById("scriviFacile");
    var width3 = 1;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width3 >= percentualeScriviFacile) {
        clearInterval(id4);
        z = 0;
      } else {
        width3++;
        elem4.style.width = width3 + "%";
      }
    }
	  }
	  
	  
   
  }
  
  if (y == 0) {
	  
	  if(percentualeScriviDifficile > 100) {
		      y = 1;
    var elem5 = document.getElementById("scriviDifficile");
    var width4 = 1;
    var id5 = setInterval(frame5, 10);
    function frame5() {
      if (width4 >= 100) {
        clearInterval(id5);
        y = 0;
      } else {
        width4++;
        elem5.style.width = width4 + "%";
      }
    }
	  }
	  else {
		  y = 1;
    var elem5 = document.getElementById("scriviDifficile");
    var width4 = 1;
    var id5 = setInterval(frame5, 10);
    function frame5() {
      if (width4 >= percentualeScriviDifficile) {
        clearInterval(id5);
        y = 0;
      } else {
        width4++;
        elem5.style.width = width4 + "%";
      }
    }
	  }
	  
    
  }
  
  if (a == 0) {
	  
	  if(percentualeCampo > 100) {
		  
		  a = 1;
    var elem6 = document.getElementById("campo");
    var width5 = 1;
    var id6 = setInterval(frame6, 10);
    function frame6() {
      if (width5 >= 100) {
        clearInterval(id6);
        a = 0;
      } else {
        width5++;
        elem6.style.width = width5 + "%";
      }
    }
	  }
	  
	  else {
		   a = 1;
    var elem6 = document.getElementById("campo");
    var width5 = 1;
    var id6 = setInterval(frame6, 10);
    function frame6() {
      if (width5 >= percentualeCampo) {
        clearInterval(id6);
        a = 0;
      } else {
        width5++;
        elem6.style.width = width5 + "%";
      }
    }
	  }
    
  }
  
    if (b == 0) {
		
		if(percentualeCampoRuoli > 100) {
			b = 1;
    var elem7 = document.getElementById("campoRuoli");
    var width6 = 1;
    var id7 = setInterval(frame7, 10);
    function frame7() {
      if (width6 >= 100) {
        clearInterval(id7);
        b = 0;
      } else {
        width6++;
        elem7.style.width = width6 + "%";
      }
    }
		}
		else {
			b = 1;
    var elem7 = document.getElementById("campoRuoli");
    var width6 = 1;
    var id7 = setInterval(frame7, 10);
    function frame7() {
      if (width6 >= percentualeCampoRuoli) {
        clearInterval(id7);
        b = 0;
      } else {
        width6++;
        elem7.style.width = width6 + "%";
      }
    }
		}
    
  }
  
  if (c == 0) {
	  
	  if(percentualeCorpo > 100) {
		  c = 1;
    var elem8 = document.getElementById("corpo");
    var width7 = 1;
    var id8 = setInterval(frame8, 10);
    function frame8() {
      if (width7 >= 100) {
        clearInterval(id8);
        c = 0;
      } else {
        width7++;
        elem8.style.width = width7 + "%";
      }
    }
	  }
	  else {
		  c = 1;
    var elem8 = document.getElementById("corpo");
    var width7 = 1;
    var id8 = setInterval(frame8, 10);
    function frame8() {
      if (width7 >= percentualeCorpo) {
        clearInterval(id8);
        c = 0;
      } else {
        width7++;
        elem8.style.width = width7 + "%";
      }
    }
	  }
    
  }
  
  if (d == 0) {
	  
	  if(percentualeCorpoMano > 100) {
		  d = 1;
    var elem9 = document.getElementById("corpoMano");
    var width8 = 1;
    var id9 = setInterval(frame9, 10);
    function frame9() {
      if (width8 >= 100) {
        clearInterval(id9);
        d = 0;
      } else {
        width8++;
        elem9.style.width = width8 + "%";
      }
    }
	  }
	  else {
		  d = 1;
    var elem9 = document.getElementById("corpoMano");
    var width8 = 1;
    var id9 = setInterval(frame9, 10);
    function frame9() {
      if (width8 >= percentualeCorpoMano) {
        clearInterval(id9);
        d = 0;
      } else {
        width8++;
        elem9.style.width = width8 + "%";
      }
    }
	  }
    
  }
  
  
  if (e == 0) {
	  
	  if(percentualeCorpoViso > 100) {
		  e = 1;
    var elem10 = document.getElementById("corpoViso");
    var width9 = 1;
    var id10 = setInterval(frame10, 10);
    function frame10() {
      if (width9 >= 100) {
        clearInterval(id10);
        e = 0;
      } else {
        width9++;
        elem10.style.width = width9 + "%";
      }
    }
	  }
	  else {
		   e = 1;
    var elem10 = document.getElementById("corpoViso");
    var width9 = 1;
    var id10 = setInterval(frame10, 10);
    function frame10() {
      if (width9 >= percentualeCorpoViso) {
        clearInterval(id10);
        e = 0;
      } else {
        width9++;
        elem10.style.width = width9 + "%";
      }
    }
	  }
	  
  }
  
  if (f == 0) {
	  
	  if(percentualeCorpoScegli > 100) {
		   f = 1;
    var elem11 = document.getElementById("corpoScegli");
    var width10 = 1;
    var id11 = setInterval(frame11, 10);
    function frame11() {
      if (width10 >= 100) {
        clearInterval(id11);
        f = 0;
      } else {
        width10++;
        elem11.style.width = width10 + "%";
      }
    }
	  }
		 else  {
	f = 1;
    var elem11 = document.getElementById("corpoScegli");
    var width10 = 1;
    var id11 = setInterval(frame11, 10);
    function frame11() {
      if (width10 >= percentualeCorpoScegli) {
        clearInterval(id11);
        f = 0;
      } else {
        width10++;
        elem11.style.width = width10 + "%";
      }
    }
		 }
   
  }
  
 
 var numeroStelle = document.getElementsByClassName("stella");
 var numeroStelleGrigie = document.getElementsByClassName("stellaGrigia");
 
 var listaPercentualiImpara = [];
  
  if(percentualeAscolta >= 100) {
	  listaPercentualiImpara.push(percentualeAscolta);
  }
  if(percentualeRipetere >= 100) {
	  listaPercentualiImpara.push(percentualeRipetere);
  }
    if(percentualeScegli >= 100) {
	  listaPercentualiImpara.push(percentualeScegli);
  }
  
    if((percentualeScriviFacile >= 100) && (percentualeScriviDifficile >= 100)) {
	  listaPercentualiImpara.push(percentualeScriviFacile);
  }
  
   if((percentualeCampo >= 100) && (percentualeCampoRuoli >= 100)) {
	  listaPercentualiImpara.push(percentualeCampo);
  }
  
  if((percentualeCorpo >= 100) && (percentualeCorpoMano >= 100) && (percentualeCorpoViso >= 100) && (percentualeCorpoScegli >= 100)) {
	  listaPercentualiImpara.push(percentualeCorpo);
  }
  
  var stelleGialle = 0;
  for(var i=0; i<listaPercentualiImpara.length; i++) {
	  
	  numeroStelle[i].style.display = "";
	  stelleGialle = stelleGialle + 1;
  }
  

  if(stelleGialle < 6) {
	  var stelleGrigie = 6 - stelleGialle;
	  for(var i=0; i<stelleGrigie; i++) {
		  numeroStelleGrigie[i].style.display = "";
	  }
  }



let percentualePartiCorpo = (partiCorpo/elementiCorpo)*100;
percentualePartiCorpo = percentualePartiCorpo + "";

if(percentualePartiCorpo.length > 3) {

	if(percentualePartiCorpo.indexOf(".")) {
		var index = percentualePartiCorpo.indexOf(".");
		percentualePartiCorpo = percentualePartiCorpo.substring(0,index);
		var divPartiCorpo = document.getElementById("percPartiCorpo").innerHTML = percentualePartiCorpo+"% / 100%";
		
		if(percentualePartiCorpo > 100) {
			var divPartiCorpo = document.getElementById("percPartiCorpo").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divPartiCorpo = document.getElementById("percPartiCorpo").innerHTML = percentualePartiCorpo+"% / 100%";
		
		if(percentualePartiCorpo > 100) {
			var divPartiCorpo = document.getElementById("percPartiCorpo").innerHTML = 100+"% / 100%";
		}
	}
	
var percentualeAllenati = (allenati/videoAllenati)*100;
percentualeAllenati = percentualeAllenati + "";

if(percentualeAllenati.length > 3) {

if(percentualeAllenati.indexOf(".")) {
		var index = percentualeAllenati.indexOf(".");
		percentualeAllenati = percentualeAllenati.substring(0,index);
		var divAllenati = document.getElementById("percAllenati").innerHTML = percentualeAllenati+"% / 100%";
		
		if(percentualeAllenati > 100) {
			var divAllenati = document.getElementById("percAllenati").innerHTML = 100+"% / 100%";
		}
	}
}
else {
	var divAllenati = document.getElementById("percAllenati").innerHTML = percentualeAllenati+"% / 100%";
	
	if(percentualeAllenati > 100) {
			var divAllenati = document.getElementById("percAllenati").innerHTML = 100+"% / 100%";
		}
}

var percentualeSalute = (salute/elementiSalute)*100;
percentualeSalute = percentualeSalute + "";

if(percentualeSalute.length > 3) {

if(percentualeSalute.indexOf(".")) {
		var index = percentualeSalute.indexOf(".");
		percentualeSalute = percentualeSalute.substring(0,index);
		var divSalute = document.getElementById("percSalute").innerHTML = percentualeSalute+"% / 100%";
		
		if(percentualeSalute > 100) {
			var divSalute = document.getElementById("percSalute").innerHTML = 100+"% / 100%";
		}
	}
}
	else {
		var divSalute = document.getElementById("percSalute").innerHTML = percentualeSalute+"% / 100%";
		
		if(percentualeSalute > 100) {
			var divSalute = document.getElementById("percSalute").innerHTML = 100+"% / 100%";
		}
	}

	
var percentualeMedico = (medicoConsiglia/6)*100;
percentualeMedico = percentualeMedico + "";

if(percentualeMedico.length > 3) {

if(percentualeMedico.indexOf(".")) {
		var index = percentualeMedico.indexOf(".");
		percentualeMedico = percentualeMedico.substring(0,index);
		var divConsiglia = document.getElementById("percConsiglia").innerHTML = percentualeMedico+"% / 100%";
		
		if(percentualeMedico > 100) {
			var divConsiglia = document.getElementById("percConsiglia").innerHTML = 100+"% / 100%";
		}
	}
	
	
}
	else {
		var divConsiglia = document.getElementById("percConsiglia").innerHTML = percentualeMedico+"% / 100%";
		
		if(percentualeMedico > 100) {
			var divConsiglia = document.getElementById("percConsiglia").innerHTML = 100+"% / 100%";
		}
	}

	
	
var percentualeParlaMedico1 = (parlaMedico1/6)*100;
percentualeParlaMedico1 = percentualeParlaMedico1 + "";

if(percentualeParlaMedico1.length > 3) {

if(percentualeParlaMedico1.indexOf(".")) {
		var index = percentualeParlaMedico1.indexOf(".");
		percentualeParlaMedico1 = percentualeParlaMedico1.substring(0,index);
		var divMedico1 = document.getElementById("percMedico1").innerHTML = percentualeParlaMedico1+"% / 100%";
		
		if(percentualeParlaMedico1 > 100) {
			var divMedico1 = document.getElementById("percMedico1").innerHTML = 100+"% / 100%";
		}
	}
}
else {
	var divMedico1 = document.getElementById("percMedico1").innerHTML = percentualeParlaMedico1+"% / 100%";
	
	if(percentualeParlaMedico1 > 100) {
			var divMedico1 = document.getElementById("percMedico1").innerHTML = 100+"% / 100%";
		}
}
	
	
	
	
var percentualeParlaMedico2 = (parlaMedico2/6)*100;
percentualeParlaMedico2 = percentualeParlaMedico2 + "";

if(percentualeParlaMedico2.length > 3) {

if(percentualeParlaMedico2.indexOf(".")) {
		var index = percentualeParlaMedico2.indexOf(".");
		percentualeParlaMedico2 = percentualeParlaMedico2.substring(0,index);
		var divMedico2 = document.getElementById("percMedico2").innerHTML = percentualeParlaMedico2+"% / 100%";
		
		if(percentualeParlaMedico2 > 100) {
			var divMedico2 = document.getElementById("percMedico2").innerHTML = 100+"% / 100%";
		}
		
	}
}
else {
		var divMedico2 = document.getElementById("percMedico2").innerHTML = percentualeParlaMedico2+"% / 100%";
		
		if(percentualeParlaMedico2 > 100) {
			var divMedico2 = document.getElementById("percMedico2").innerHTML = 100+"% / 100%";
		}
		
	}

	
//gioca
var g = 0;
var h = 0;
var o = 0;
var l = 0;
var m = 0;
var n = 0;


if (g == 0) {
	
	if(percentualePartiCorpo > 100) {
		g = 1;
    var elem12 = document.getElementById("partiCorpo");
    var width11 = 1;
    var id12 = setInterval(frame12, 10);
    function frame12() {
      if (width11 >= 100) {
        clearInterval(id12);
        g = 0;
      } else {
        width11++;
        elem12.style.width = width11 + "%";
      }
    }
	}
	
	else {
		g = 1;
    var elem12 = document.getElementById("partiCorpo");
    var width11 = 1;
    var id12 = setInterval(frame12, 10);
    function frame12() {
      if (width11 >= percentualePartiCorpo) {
        clearInterval(id12);
        g = 0;
      } else {
        width11++;
        elem12.style.width = width11 + "%";
      }
    }
	}
  }
  
  
  
  if (h == 0) {
	  
	  if(percentualeAllenati > 100) {
		  h = 1;
    var elem13 = document.getElementById("allenati");
    var width12 = 1;
    var id13 = setInterval(frame13, 10);
    function frame13() {
      if (width12 >= 100) {
        clearInterval(id13);
        h = 0;
      } else {
        width12++;
        elem13.style.width = width12 + "%";
      }
    }
	  }
	  else {
		  h = 1;
    var elem13 = document.getElementById("allenati");
    var width12 = 1;
    var id13 = setInterval(frame13, 10);
    function frame13() {
      if (width12 >= percentualeAllenati) {
        clearInterval(id13);
        h = 0;
      } else {
        width12++;
        elem13.style.width = width12 + "%";
      }
    }
	  }
	  
    
  }


if (o == 0) {
	
	if(percentualeSalute > 100) {
		o = 1;
    var elem14 = document.getElementById("salute");
    var width13 = 1;
    var id14 = setInterval(frame14, 10);
    function frame14() {
      if (width13 >= 100) {
        clearInterval(id14);
        o = 0;
      } else {
        width13++;
        elem14.style.width = width13 + "%";
      }
    }
	}
	else {
		o = 1;
    var elem14 = document.getElementById("salute");
    var width13 = 1;
    var id14 = setInterval(frame14, 10);
    function frame14() {
      if (width13 >= percentualeSalute) {
        clearInterval(id14);
        o = 0;
      } else {
        width13++;
        elem14.style.width = width13 + "%";
      }
    }
	}
    
  }


if (l == 0) {
	
	if(percentualeMedico > 100) {
		 l = 1;
    var elem15 = document.getElementById("consiglia");
    var width14 = 1;
    var id15 = setInterval(frame15, 10);
    function frame15() {
      if (width14 >= 100) {
        clearInterval(id15);
        l = 0;
      } else {
        width14++;
        elem15.style.width = width14 + "%";
      }
    }
	}
	else {
		 l = 1;
    var elem15 = document.getElementById("consiglia");
    var width14 = 1;
    var id15 = setInterval(frame15, 10);
    function frame15() {
      if (width14 >= percentualeMedico) {
        clearInterval(id15);
        l = 0;
      } else {
        width14++;
        elem15.style.width = width14 + "%";
      }
    }
	}
	
   
  }
  
  
  if (m == 0) {
	  
	  if(percentualeParlaMedico1 > 100) {
		  m = 1;
    var elem16 = document.getElementById("medico1");
    var width15 = 1;
    var id16 = setInterval(frame16, 10);
    function frame16() {
      if (width15 >= 100) {
        clearInterval(id16);
        m = 0;
      } else {
        width15++;
        elem16.style.width = width15 + "%";
      }
    }
	  }
	  else {
		   m = 1;
    var elem16 = document.getElementById("medico1");
    var width15 = 1;
    var id16 = setInterval(frame16, 10);
    function frame16() {
      if (width15 >= percentualeParlaMedico1) {
        clearInterval(id16);
        m = 0;
      } else {
        width15++;
        elem16.style.width = width15 + "%";
      }
    }
	  }

    
  }
  
  
    if (n == 0) {
		
		if(percentualeParlaMedico2 > 100) {
			 n = 1;
    var elem17 = document.getElementById("medico2");
    var width16 = 1;
    var id17 = setInterval(frame17, 10);
    function frame17() {
      if (width16 >= 100) {
        clearInterval(id17);
        n = 0;
      } else {
        width16++;
        elem17.style.width = width16 + "%";
      }
    }
		}
		else {
			n = 1;
    var elem17 = document.getElementById("medico2");
    var width16 = 1;
    var id17 = setInterval(frame17, 10);
    function frame17() {
      if (width16 >= percentualeParlaMedico2) {
        clearInterval(id17);
        n = 0;
      } else {
        width16++;
        elem17.style.width = width16 + "%";
      }
    }
		}
   
  }

 var numeroStelle1 = document.getElementsByClassName("stella1");
 var numeroStelleGrigie1 = document.getElementsByClassName("stellaGrigia1");
 
 var listaPercentualiGioca = [];
  
  if(percentualeSalute >= 100) {
	  listaPercentualiGioca.push(percentualeSalute);
  }
  if(percentualeAllenati >= 100) {
	  listaPercentualiGioca.push(percentualeAllenati);
  }
    if(percentualePartiCorpo >= 100) {
	  listaPercentualiGioca.push(percentualePartiCorpo);
  }
  
   if(percentualeMedico >= 100) {
	  listaPercentualiGioca.push(percentualeMedico);
  }
  
  if((percentualeParlaMedico2 >= 100) && (percentualeParlaMedico1 >= 100)) {
	  listaPercentualiGioca.push(percentualeCorpo);
  }
  
   var stelleGialle1 = 0;

  
  for(var i=0; i<listaPercentualiGioca.length; i++) {
	  
	  numeroStelle1[i].style.display = "";
	  stelleGialle1 = stelleGialle1 + 1;
  }
  
    if(stelleGialle1 < 5) {
	  var stelleGrigie1 = 5 - stelleGialle1;
	  
	  for(var i=0; i<stelleGrigie1; i++) {
		  numeroStelleGrigie1[i].style.display = "";
	  }
  }
  
  if(nomeVideo.length == 0) {
	  newdiv = document.createElement('div');
	  divIdName = '501';
            newdiv.setAttribute('id',divIdName);
            newdiv.innerHTML = '<div align="right">'+videoVisti+' / '+video+'</div>'+'<br>'+"Non ha guardato nessun video" +'<br>'+'<br>';
			
document.getElementById("video").appendChild(newdiv);
  }
  
    if(nomePercorsi.length == 0) {
		newdiv = document.createElement('div');
	  divIdName = '5001';
            newdiv.setAttribute('id',divIdName);
            newdiv.innerHTML = "Non ha completato nessun percorso" +'<br>'+'<br>';
			
document.getElementById("percorsi").appendChild(newdiv);
  }
  
  
 var numeroStelleVideo = document.getElementsByClassName("stellaVideo");
 var numeroStelleGrigie1 = document.getElementsByClassName("stellaGrigiaVideo");
 
  var percentualeVideo = videoVisti/video;

  if((percentualeVideo >= 0.33) && (percentualeVideo < 0.66)) {
	  
	  for(var i=0; i<1; i++) {
		  numeroStelleVideo[i].style.display = "";
	  }
	  for(var i=0; i<2; i++) {
		  numeroStelleGrigie1[i].style.display = "";
	  }
	  
	  
  }
  
  if((percentualeVideo >= 0.66) && (percentualeVideo < 1)) {
		  
		  for(var i=0; i<2; i++) {
			numeroStelleVideo[i].style.display = "";
		  }
		  for(var i=0; i<1; i++) {
		    numeroStelleGrigie1[i].style.display = "";
		  }
	  
		  //2stelle
		  
	  }
	  
  if(percentualeVideo == 1) {
			  for(var i=0; i<3; i++) {
				numeroStelleVideo[i].style.display = "";
			}
		  }
		  
   if(percentualeVideo == 0) {
			  for(var i=0; i<3; i++) {
				numeroStelleGrigie1[i].style.display = "";
			}
		  }

  
  
  for(var i=0; i<nomeVideo.length; i++) {
	  
  newdiv = document.createElement('div');
            divIdName = '50'+i;
            newdiv.setAttribute('id',divIdName);
			if(i==0) {
	//video
//videoVisti	
				newdiv.innerHTML = 
'<div align="right">'+videoVisti+' / '+video+'</div>'+'<br>'+
					'<p>'+'Titolo:  '+nomeVideo[i]+'</p>'+
					"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+	
			'<br>';
			}
			else {
				newdiv.innerHTML = 
					'<p>'+'Titolo:  '+nomeVideo[i]+'</p>'+
					"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+
			'<br>';
			}
            
document.getElementById("video").appendChild(newdiv);
  }
  
  
  for(var i=0; i<nomePercorsi.length; i++) {
	  
	  newdiv1 = document.createElement('div');
            divIdName = '5'+i;
            newdiv1.setAttribute('id',divIdName);
            newdiv1.innerHTML = 
				
				
				
					'<p>'+nomePercorsi[i]+ " " + "tempo:" + " "+tempoPercorsi[i]+'</p>'+
					"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+
					
				
			'<br>';
document.getElementById("percorsi").appendChild(newdiv1);
  }
				
				
				
				
				});
			
			});
		
		
		});
	
	
	   });
	
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

const getElementVal = (id) => {
  return document.getElementById(id).value;
};