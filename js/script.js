// Navigation
(function navigation(){
	var menuToggler = document.querySelector("#menu-toggler");
	var contactUsLink = document.querySelector("#nav-contact");

	menuToggler.addEventListener("click", function(e){
		e.preventDefault();
		toggleBodyClass("menu-active");
	});

	contactUsLink.addEventListener("click", function(e){
		e.preventDefault();
		document.body.classList.remove("menu-active");
	});

	function toggleBodyClass(className){
		document.body.classList.toggle(className);
	}
})();


// Testimonial slider
$(document).ready(function(){
  $(".testimonial-carousel").owlCarousel({
	items : 1, 
	itemsDesktop : false,
	itemsDesktopSmall : false,
	itemsTablet: false,
	itemsMobile : false,
	center: true,
	loop: true,
	margin: 100,
	});
});

// Go to the next item
$('.customNextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel', [300]);
});

// Go to the previous item
$('.customPrevBtn').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel', [300]);
});

// Brands slider
$(document).ready(function(){
	$(".brands-carousel").owlCarousel({
		loop: true,
	  	autoplay: 3000, //Set AutoPlay to 3 seconds
		autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
      	items : 1,
		center: true
	});
});

// Smooth scroll. Works on mobile/safari
(function smoothScroll(){
		$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
		) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top
			}, 1000, function() {
			// Callback after animation
			// Must change focus!
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			};
			});
		}
		}
	});
})()


