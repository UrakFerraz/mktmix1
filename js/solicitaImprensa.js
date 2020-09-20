{
	let solicitacaoSlides = document.querySelectorAll('.solicitacaoSteps');
	solicitacaoSlides = [...solicitacaoSlides];
	console.log(solicitacaoSlides);
	

	function slideSolicitacao(num) {
		solicitacaoSlides.forEach(el => el.style.transform = 'translateY(-' + num + '00%)');
		function showTitle() {
			let item = document.querySelector('.solicitacaoTitle');
			item.style.opacity = 1;
			item.style.top = '20px';
		}
		if(num === 1) {
			document.querySelector('.solicitacaoDots').style.opacity = 1;
			return showTitle();
		}
	}

	function dots(num) {
		let dot = document.querySelectorAll('.solicitacaoDot');
		dot = [...dot];
		console.log(dot);
		dot.forEach(el => el.classList.remove('solicitacaoDotAtivo'));
		dot[num].classList.add('solicitacaoDotAtivo');
	}


	document.querySelector('.solicitacaoDots').addEventListener('click', el => {
		if(el.target.classList.contains('solicitacaoDot')) {
			let numero = el.target.className.match(/\d/gmi) - 1;
			console.log(numero);
			dots(numero);
			slideSolicitacao(numero + 1);
		}
	})


	document.querySelector('.solicitacaoStep1').addEventListener('click', el => {
		slideSolicitacao(1);
	});

	document.querySelector('#continuarBtn1').addEventListener('click', el => {
		slideSolicitacao(2);
		dots(1);
	});

	document.querySelector('#continuarBtn2').addEventListener('click', el => {
		slideSolicitacao(3);
		dots(2);
	});

	document.querySelector('#continuarBtn3').addEventListener('click', el => {
		slideSolicitacao(4);
		dots(3);
	});

}