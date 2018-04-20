$(document).ready(function() {
			
	streamArr = ["twitch", "freecodecamp", "youroverwatch", "dunkstream", "overwatchpit"];
	idArr = [12826,79776140,127142436,40397064,150251506];
	clientId = "kltamf2pgn6a45sisomg4rpywf88xb"
	url = "https://api.twitch.tv/kraken/channels/"
	url2 = "https://api.twitch.tv/kraken/streams/"
	url3 = "https://www.twitch.tv/"


//twitch channel and stream info
			
	$.ajax({
		type: 'GET',
		url: url + streamArr[0],
		headers: {
			'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
				 },
		//upon success, do this		 
		success: function(data) {
			$(".streamInfo").html("<div class='streamBox'><div class='row'><div class='col-md-2'><img src='" + data.logo + "'></div><div class='col-md-6'><h3>" + data.display_name +"</h3><p><i>" + data.status + "</i></p><p>Last Updated: " + data.updated_at+ "</div><div class='col-md-2' id='streamStatus'></div></div></div>");
					
				$.ajax({
					type: 'GET',
					url: url2 + streamArr[0],
					headers: {
					   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
					 },
					success: function(data) {
					   
					   if(data.stream === null) {
						   $("#streamStatus").html("Channel Offline");
					   }
					   else {
					   	$("#streamStatus").html("<p><a href='" + data.stream.channel.url + "'>Streaming now!</p><p><img src='" + data.stream.preview.medium + "'><p>" + data.stream.game + "</p></a>");
					   } 
					   //end second ajax success function  
					 }
					 //end second ajax call
					});   
				//end main ajax success function  
				 },
		
		
		//error function
		error: function (jqXHR, textStatus, errorThrown) {
			var msg = "Something went wrong.";
				if (jqXHR.status === 0) {
				   msg = "Not connected to the internet";
				   } 
				else if (jqXHR.status == 404) {
				   msg = "Page not found. [404]";
				         } 
				else if (jqXHR.status == 500) {
				   msg = "Internal Server Error [500].";
				         } 
				else if (exception === 'parsererror') {
				   msg = "Requested JSON parse failed.";
				         } 
				else if (exception === 'timeout') {
				   msg = "Time out error.";
				         } 
				else if (exception === 'abort') {
				   msg = "Ajax request aborted.";
				         } 
				else {
				   msg = "Uncaught Error.\n" + jqXHR.responseText;
				         }
				$("streamInfo").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + msg +"</h3></div><div class='col-md-2' id='streamStatus'></div></div></div>");
				console.log(msg);
				//end error function

				 }
				 //end main ajax call
	});
			
			
	//fcc channel and stream info
			
	$.ajax({
		type: 'GET',
		url: url + streamArr[1],
		headers: {
			'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
				 },
		success: function(data) {
			$(".streamInfo2").html("<div class='streamBox'><div class='row'><div class='col-md-2'><img src='" + data.logo + "'></div><div class='col-md-6'><h3>" + data.display_name +"</h3><p><i>" + data.status + "</i></p><p>Last Updated: " + data.updated_at+ "</div><div class='col-md-2' id='streamStatus2'></div></div></div>");
					
			$.ajax({
					 type: 'GET',
					 url: url2 + streamArr[1],
					 headers: {
					   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
					 },
					 success: function(data) {
					   
					   if(data.stream === null) {
						   $("#streamStatus2").html("Channel Offline");
					   }
					   else {
					   	$("#streamStatus2").html("<p><a href='" + data.stream.channel.url + "'>Streaming now!</p><p><img src='" + data.stream.preview.medium + "'><p>" + data.stream.game + "</p></a>");
					   }   
					   //end second ajax success function
					 }
					 //end second ajax call
					});
					
			//end main ajax success function
			},
		
		//error function
		error: function (jqXHR, textStatus, errorThrown) {
			var msg = "Something went wrong.";
				if (jqXHR.status === 0) {
				   msg = "Not connected to the internet";
				   } 
				else if (jqXHR.status == 404) {
				   msg = "Page not found. [404]";
				         } 
				else if (jqXHR.status == 500) {
				   msg = "Internal Server Error [500].";
				         } 
				else if (exception === 'parsererror') {
				   msg = "Requested JSON parse failed.";
				         } 
				else if (exception === 'timeout') {
				   msg = "Time out error.";
				         } 
				else if (exception === 'abort') {
				   msg = "Ajax request aborted.";
				         } 
				else {
				   msg = "Uncaught Error.\n" + jqXHR.responseText;
				         }
				$("streamInfo2").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + msg +"</h3></div><div class='col-md-2' id='streamStatus'></div></div></div>");
				console.log(msg);
				//end error function
				}
		//end main ajax call
		});			
				
	//youroverwatch channel and stream info
				
	$.ajax({
	 type: 'GET',
	 url: url + streamArr[2],
	 headers: {
	   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
	 },
	 success: function(data) {
	   $(".streamInfo3").html("<div class='streamBox'><div class='row'><div class='col-md-2'><img src='" + data.logo + "'></div><div class='col-md-6'><h3>" + data.display_name +"</h3><p><i>" + data.status + "</i></p><p>Last Updated: " + data.updated_at+ "</div><div class='col-md-2' id='streamStatus3'></div></div></div>");
		
		$.ajax({
		 type: 'GET',
		 url: url2 + streamArr[3],
		 headers: {
		   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
		 },
		 success: function(data) {
		   
		   if(data.stream === null) {
			   $("#streamStatus3").html("Channel Offline");
		   }
		   else {
		   	$("#streamStatus3").html("<p><a href='" + data.stream.channel.url + "'>Streaming now!</p><p><img src='" + data.stream.preview.medium + "'><p>" + data.stream.game + "</p></a>");
		   } 
		   //end second ajax success function  
		 }
		 //end second ajax call
	});	
	//end main ajax success function
	},
	
	//error function
	error: function (jqXHR, textStatus, errorThrown) {
		var msg = "Something went wrong.";
			if (jqXHR.status === 0) {
			   msg = "Not connected to the internet";
			   } 
			else if (jqXHR.status == 404) {
			   msg = "Page not found. [404]";
			         } 
			else if (jqXHR.status == 500) {
			   msg = "Internal Server Error [500].";
			         } 
			else if (exception === 'parsererror') {
			   msg = "Requested JSON parse failed.";
			         } 
			else if (exception === 'timeout') {
			   msg = "Time out error.";
			         } 
			else if (exception === 'abort') {
			   msg = "Ajax request aborted.";
			         } 
			else {
			   msg = "Uncaught Error.\n" + jqXHR.responseText;
			         }
			$("streamInfo3").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + msg +"</h3></div><div class='col-md-2' id='streamStatus'></div></div></div>");
				console.log(msg);
			//end error function

			 }
	//end main ajax call
	});
				
	//dunkstream channel and stream info
				
	$.ajax({
	 type: 'GET',
	 url: url + streamArr[3],
	 headers: {
	   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
	 },
	 success: function(data) {
	   $(".streamInfo4").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + data.display_name +"</h3><p><i>" + data.status + "</i></p><p>Last Updated: " + data.updated_at+ "</div><div class='col-md-2' id='streamStatus4'></div></div></div>");
	
		$.ajax({
		 type: 'GET',
		 url: url2 + streamArr[3],
		 headers: {
		   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
		 },
		 success: function(data) {
	   
		   if(data.stream === null) {
			   $("#streamStatus4").html("Channel Offline");
		   }
		   else {
		   	$("#streamStatus4").html("<p><a href='" + data.stream.channel.url + "'>Streaming now!</p><p><img src='" + data.stream.preview.medium + "'><p>" + data.stream.game + "</p></a>");
		   } 
		   //end second ajax success function  
		 }
		 //end second ajax call
		 });
	 },
 
	//error function
	error: function (jqXHR, textStatus, errorThrown) {
		var msg = "Something went wrong.";
			if (jqXHR.status === 0) {
			   msg = "Not connected to the internet";
			   } 
			else if (jqXHR.status == 404) {
			   msg = "Page not found. [404]";
			         } 
			else if (jqXHR.status == 500) {
			   msg = "Internal Server Error [500].";
			         } 
			else if (exception === 'parsererror') {
			   msg = "Requested JSON parse failed.";
			         } 
			else if (exception === 'timeout') {
			   msg = "Time out error.";
			         } 
			else if (exception === 'abort') {
			   msg = "Ajax request aborted.";
			         } 
			else {
			   msg = "Uncaught Error.\n" + jqXHR.responseText;
			         }
			$("streamInfo4").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + msg +"</h3></div><div class='col-md-2' id='streamStatus'></div></div></div>");
				console.log(msg);
			//end error function

			 }
	});	
				
	//ovwpit channel and stream info
				
	$.ajax({
	 type: 'GET',
	 url: url + streamArr[4],
	 headers: {
	   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
	 },
	 success: function(data) {
	   $(".streamInfo5").html("<div class='streamBox'><div class='row'><div class='col-md-2'><p><img src='" + data.logo + "'></p></div><div class='col-md-6'><h3>" + data.display_name +"</h3><p><i>" + data.status + "</i></p><p>Last Updated: " + data.updated_at+ "</div><div class='col-md-2' id='streamStatus5'></div></div></div>");

		$.ajax({
		 type: 'GET',
		 url: url2 + streamArr[4],
		 headers: {
		   'Client-ID': 'kltamf2pgn6a45sisomg4rpywf88xb'
		 },
		 success: function(data) {

		   if(data.stream === null) {
			   $("#streamStatus5").html("Channel Offline");
		   }
		   else {
		   	$("#streamStatus5").html("<p><a href='" + data.stream.channel.url + "'>Streaming now!</p><p><img src='" + data.stream.preview.medium + "'><p>" + data.stream.game + "</p></a>");
		   } 
		   //end second ajax success function  
		 }
		 //end second ajax call
		 });
	//end first ajax success function	 
	 },
	 
	//error function
	error: function (jqXHR, textStatus, errorThrown) {
		var msg = "Something went wrong.";
			if (jqXHR.status === 0) {
			   msg = "Not connected to the internet";
			   } 
			else if (jqXHR.status == 404) {
			   msg = "Page not found. [404]";
			         } 
			else if (jqXHR.status == 500) {
			   msg = "Internal Server Error [500].";
			         } 
			else if (exception === 'parsererror') {
			   msg = "Requested JSON parse failed.";
			         } 
			else if (exception === 'timeout') {
			   msg = "Time out error.";
			         } 
			else if (exception === 'abort') {
			   msg = "Ajax request aborted.";
			         } 
			else {
			   msg = "Uncaught Error.\n" + jqXHR.responseText;
			         }
			$("streamInfo5").html("<div class='streamBox'><div class='row'><div class='col-md-2'></div><div class='col-md-6'><h3>" + msg +"</h3></div><div class='col-md-2' id='streamStatus'></div></div></div>");
				console.log(msg);
			//end error function
			 } 
	 //end first ajax call
	});						
			
			
});