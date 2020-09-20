{
	let heroMenuBtns = document.querySelectorAll('.heroMenuBtn');
	heroMenuBtn = Array.from(heroMenuBtns);
	let contentArea = document.querySelector('.contentBlocksWrapper');
	let containerStart = document.querySelector('.heroTitleAnimation');
	let spacer = document.querySelector('.spacer');
	let title = document.querySelector('.heroTitleLine2');

	function mostrar() {
		contentArea.classList.add('contentBlocksWrapperAnimate');
		containerStart.classList.add('heroTitleAnimationStart');
		spacer.classList.add('spacerAnimate');
		title.style.opacity = .5;
	}

	function ocultar() {
		document.querySelector('.inputHeader').style.color = 'var(--f2)';
		document.querySelector('.inputHeader').value = null;
		contentArea.classList.remove('contentBlocksWrapperAnimate');
		containerStart.classList.remove('heroTitleAnimationStart');
		spacer.classList.remove('spacerAnimate');
		title.style.opacity = 1;
	}

	function animaHeader() {
		heroMenuBtn.forEach((item) => item.lastElementChild.classList.remove('heroMenuBtnLineActive'));
		if(spacer.classList.contains('spacerAnimate')) {
			ocultar();
			setTimeout(mostrar, 500);
		} else {
			mostrar();
		}
	}

	function loadContent(el) {

		if(el.target.classList.contains('heroMenuBtn')) {
			animaHeader();
			el.target.lastElementChild.classList.add('heroMenuBtnLineActive');
		}

		if(el.target.classList.contains('headerDropdownChoice')) {
			animaHeader();
		}

		if(el.target.classList.contains('headerSearchBtn')) {
			el.preventDefault();
			document.querySelector('.inputHeader').style.color = 'var(--orange)';
			animaHeader();
		}

		if(el.target.classList.contains('headerDropdown') || el.target.classList.contains('headerDropdownBtn') || el.target.classList.contains('inputHeader')) {
			heroMenuBtn.forEach((item) => item.lastElementChild.classList.remove('heroMenuBtnLineActive'));
			ocultar();
		}
	}

	document.querySelector('.heroTitleWrapper').addEventListener('click', loadContent);

}

