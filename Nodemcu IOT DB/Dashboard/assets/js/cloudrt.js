var config = {
  apiKey: "AIzaSyDNlMegNUrshD4o5_juTaLHKEl57VyepCw",
    authDomain: "counter-2020-quantumlabs.firebaseapp.com",
    databaseURL: "https://counter-2020-quantumlabs.firebaseio.com",
    projectId: "counter-2020-quantumlabs",
    storageBucket: "",
    messagingSenderId: "926946221222",
    appId: "1:926946221222:web:bf1f89ade533626c56e867"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  
  var otem;
  var atem;
  var pluse;
  var weight;
 

  database.ref().on("value", function(snap){
	  
	otem = snap.val().FRIOT.otemp+"°C";
	atem = snap.val().FRIOT.atemp+"°C";
	pluse = snap.val().FRIOT.pluse+"bpm";
	weight = snap.val().FRIOT.weight+"Kg";
	
	
	$(".Temperature").text(atem);
	$(".Humidity").text(otem);
	$(".RotateCount").text(pluse);
	$(".IncubationDay").text(weight);
	
	
  });
  
});