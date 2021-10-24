// Navigation
(function navigation(){
	var menuToggler = document.querySelector("#menu-toggler");

	menuToggler.addEventListener("click", function(e){
		e.preventDefault();
		toggleBodyClass("menu-active");
	});

	function toggleBodyClass(className){
		document.body.classList.toggle(className);
	}
})();

// Testimonial slider
(function testimonialSlider(){

	var testimonials = document.querySelectorAll(".testimonial");
	console.log(testimonials);
	window.addEventListener("DOMContentLoaded", e => {
		console.log(testimonials)
	})

})();