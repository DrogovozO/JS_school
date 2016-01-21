(function IIFE () {
	'use strict';
	var inputOn = $('#onForm'),
		result = $('#result');

	function addMessage (text, name) {
		var divMessage = $('<div></div>').addClass('message');
		divMessage.html('<b>' + name + ': </b>' + text);
		result.append(divMessage);
	}
	function getName () {
		 return $('#name').val();
	}
	function onKeyUpHandler (event) {
		if (event.keyCode === 13) {
			addMessage(this.value, getName());
			this.value = '';
		}
	}
	inputOn.keyup(onKeyUpHandler);
})();