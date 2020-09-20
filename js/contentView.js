{
	let conteudo = document.querySelector('.conteudoContainer');
	const mq = window.matchMedia( "(max-width: 799px)" );

	function openCloseConteudo() {
			document.querySelector('.headerMenu').classList.toggle('headerMenuClose');

		if (mq.matches) {
			if(document.querySelector('#main').classList.contains('mainFixed')) {
				document.querySelector('#main').style.top = '0px';
			} else {
			}
			document.querySelector('#main').classList.toggle('mainFixed');
			conteudo.classList.toggle('conteudoContainerAbs');
		} else {
			conteudo.classList.toggle('conteudoContainerAbs');
			console.log(conteudo);
		}
	};
	document.body.addEventListener('click', (el) => {
		if(el.target.classList.contains('contentBlockTitle') || el.target.classList.contains('conteudoScrollCloseBtn')) {
			console.log('cli');
			openCloseConteudo();
		}
	});
}

