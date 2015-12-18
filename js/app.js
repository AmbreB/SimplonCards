"use strict"
$(document).ready (function(){
	$.getJSON(config.url, function(data){
		var template = $("#template").html();
		var info = Mustache.to_html(template, {users:data});
		/* 
		on va plutot mettre notre contenu dans un élément cible
		histoire d'avoir une partie de la page statique
		 */
		$("#main").html(info);
	});
});