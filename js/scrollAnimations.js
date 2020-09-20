{
	var prevScrollpos = window.innerHeight;

	let title1 = document.querySelector(".heroTitleLine2");
	let headerLogoText = document.querySelector(".headerLogoText");
	let heroMenu = document.querySelector(".heroMenu");
	let headerForm = document.querySelector(".headerForm");


	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		let titleTop = title1.getBoundingClientRect().top;
		let heroMenuTop = heroMenu.getBoundingClientRect().top;
		let headerFormTop = headerForm.getBoundingClientRect().top;
		let headerLogoTextTop = headerForm.getBoundingClientRect().top;


		console.log(currentScrollPos, prevScrollpos, titleTop);


		  if (headerLogoTextTop > 200) {
		    headerLogoText.style.opacity = 0;
		  } else {
		    headerLogoText.style.opacity = 1;
		  }

		  if (titleTop > 100) {
		    title1.style.opacity = '0.5';
		  } else {
		    title1.style.opacity = 0;
		  }

		  if (heroMenuTop > 200) {
		    heroMenu.style.opacity = 1;
		  } else {
		    heroMenu.style.opacity = 0;
		  }

		  if (headerFormTop > 200) {
		    headerForm.style.opacity = 1;
		  } else {
		    headerForm.style.opacity = 0;
		  }

		  prevScrollpos = currentScrollPos;
	}
}