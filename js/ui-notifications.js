// $('head').append('<link rel="stylesheet" type="text/css" href="/css/ui-notifications.css">');

class UINotifications {
	constructor() {
		window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>');
		var statusMessageHtml = '<div class="status-message"><p class="status-message-inner"><span class="status-message-text">Welcome to My App</span><span class="status-message-close">X</span></p></div>';
		var inYourFaceHtml = '<div class="in-your-face pulse"><p class="in-your-face-inner"><span class="in-your-face-text">Great Job!</span></p></div>';

		$(document).on("click", ".status-message-close", function(){
			$(".status-message").fadeOut();
		});

		this.statusMessage = $("<div/>").html(statusMessageHtml);
		this.inYourFace = $("<div/>").html(inYourFaceHtml);
		
		$('body').prepend(this.inYourFace);
		$('body').prepend(this.statusMessage);

	}

 	showStatusMessage(message){
 		var notifications = this;
	  	var message = message || "Default Message"
	  	var statusMessageTimeout;
	  	
		if(notifications.statusMessage.find(".status-message").is(':visible')){
	     clearTimeout(statusMessageTimeout);
	    }

		notifications.statusMessage.find(".status-message .status-message-text").html(message);
		notifications.statusMessage.find(".status-message").fadeIn();
		
	    statusMessageTimeout = setTimeout(function(){
	       notifications.statusMessage.find(".status-message").fadeOut(); 
	    }, 5000)
		
	}
	showInYourFace(message, callback){
		var notifications = this;
		var inYourFaceTimeout;
		var inYourFaceRandoms = ["Good work!", "Hard work!", "Nice job!", "Hustle!"]

		var message = message || inYourFaceRandoms[Math.floor(Math.random()*inYourFaceRandoms.length)];;
		var callback = callback || function(){};

		if(notifications.inYourFace.find(".in-your-face").is(':visible')){
	     clearTimeout(inYourFaceTimeout);
	    }

		notifications.inYourFace.find(".in-your-face .in-your-face-text").html(message);
		notifications.inYourFace.find(".in-your-face").show();
		
	    inYourFaceTimeout = setTimeout(function(){
	       notifications.inYourFace.find(".in-your-face").fadeOut(function(){
	       	callback();
	       }); 

	    }, 1000)
	}
}




