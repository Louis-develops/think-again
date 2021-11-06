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

		// Scroll cta section into view on mobile
		document.querySelector("#cta").scrollIntoView({ 
			behavior: 'smooth' 
		});
	});

	function toggleBodyClass(className){
		document.body.classList.toggle(className);
	}
})();


// Testimonial slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
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