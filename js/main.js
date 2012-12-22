/* ==========================================================================
   Document Ready
   ========================================================================== */

	$(document).ready(function()
	{
		// initialize placeholder pluggin
		$('input, textarea').placeholder();

		// configure modal window
		$.modal.defaults = {
			overlay: "#000",
			opacity: 0.95,
			zIndex: 9999,
			escapeClose: true,
			clickClose: true,
			closeText: "Close",
			showClose: true,
			modalClass: "modal rounded shadow",
			spinnerHtml: null,
			showSpinner: true
		};
	});

/* ==========================================================================
   Utilitiy Functions
   ========================================================================== */

	// open a URL inside a modal window
	$('a[rel="ajax:modal"]').click(function(event) {
		$.ajax({
			url: $(this).attr('href'),
			success: function(newHTML, textStatus, jqXHR) {
				$(newHTML).appendTo('body').modal();      
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// Handle AJAX errors
			}

		// more AJAX customization goes here

		});

		return false;
	});

	// register click event for element
	$("#action").click(function(event) {
		event.preventDefault();
		alert($(this).text());
	});
