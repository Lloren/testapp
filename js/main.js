"use strict"


function startup(){

	alert("geo load");
	navigator.geolocation.getCurrentPosition(function (pos){
		alert(pos);
	}, function (error){
		alert(error);
	});
}

$(function (){
});