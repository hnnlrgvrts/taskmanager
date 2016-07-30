$( document ).ready(function() {
	
	// Set trigger and container variables
	var trigger = $('nav ul li a' && 'nav a')
		, container = $('#content');
	// Fire on click
	trigger.on('click', function () {
		// Set $this for re-use. Set target from data attribute
		var $this = $(this)
			, target = $this.data('target');
		// Load target page into container
		container.load(target + '.php');
		// Stop normal link behavior
		return false;
	});
	
	
	// submit the signup form
	$('body').on('submit', 'form.form-signup', function() {
		$.post('signup.php', $('.form-signup').serialize(), function(response) {
		
			// response bevat hetgeen je terugkrijgt van signup.php
			// in signup.php kan je bvb terugsturen:
			// exit(json_encode(['status' => 'success', 'message' => '']));
			// exit(json_encode(['status' => 'error', 'message' => 'E-mailadres is reeds in gebruik']));
			console.log(response);
			
			// de response kan je dan bvb afdrukken:
			if (response.status == 'success')
				console.log('Succesvol ingeschreven');
			else if (response.status == 'error')
				console.log('Er ging iets fout:');
				console.log(response.message);
		
		}, 'json');
		
		return false;
	});
	
	// click the submit button on the signup form
	$('body').on('click', '.form-group .btn.btn-primary', function(e) {
		e.preventDefault();
		$('form.form-signup').submit();
		return false;
	});

	
});