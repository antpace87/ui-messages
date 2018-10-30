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
 		var myStatusMessage = this;
	  	var message = message || "Default Message"
	  	var statusMessageTimeout;
	  	
		if(myStatusMessage.statusMessage.find(".status-message").is(':visible')){
	     clearTimeout(statusMessageTimeout);
	    }

		myStatusMessage.statusMessage.find(".status-message .status-message-text").html(message);
		myStatusMessage.statusMessage.find(".status-message").fadeIn();
		
	    statusMessageTimeout = setTimeout(function(){
	       myStatusMessage.statusMessage.find(".status-message").fadeOut(); 
	    }, 5000)
		
	}
}




