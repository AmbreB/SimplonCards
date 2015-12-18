"use strict"
$(document).ready (function(){
	$.getJSON("https://s.idsympa.com/u-13.json", function(data){
		var template = $("#template").html();
		var info = Mustache.to_html(template, data);
		$("body").html(info);
	})
});