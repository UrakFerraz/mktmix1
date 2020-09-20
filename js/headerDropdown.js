{
	let dropdown = document.querySelector('.headerDropdownListWrapper');

	function dropDownOpenClose(el) {
		if(el.target.classList.contains('headerDropdown') | el.target.classList.contains('headerDropdownBtn')) {
			document.querySelector('.headerDropdownBtnSvg').classList.toggle('headerDropdownBtnSvgRotate');
			return dropdown.classList.toggle('headerDropdownListWrapperOpen');
		}
		if(dropdown.classList.contains('headerDropdownListWrapperOpen')) {
			document.querySelector('.headerDropdownBtnSvg').classList.toggle('headerDropdownBtnSvgRotate');
			return dropdown.classList.remove('headerDropdownListWrapperOpen');
		}
	}
	document.body.addEventListener('click', dropDownOpenClose);

	dropdown.addEventListener('click', (el) => {
		if(el.target.classList.contains('headerDropdownChoice')) {
			document.querySelector('.headerDropdownTitle').textContent = el.target.innerHTML;
			document.querySelector('.headerDropdownTitle').style.color = 'var(--blue)';
		}
	})
}