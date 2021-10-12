(function navigation(){
	var menuToggler = document.querySelector("#menu-toggler");

	menuToggler.addEventListener("click", function(e){
		toggleBodyClass("menu-active");
	});

	function toggleBodyClass(className){
		document.body.classList.toggle(className);
	}
})()