{
	function init() {
		let fadeBlank = document.querySelector('.fadeBlank');
		fadeBlank.style.opacity = 0;
		let bemVindo = document.querySelector('.heroTitleLine1');
		let containerStart = document.querySelector('.heroTitleAnimation');
		setTimeout(function(){
			bemVindo.style.top = '50%';
			bemVindo.style.opacity = 1;
		}, 500);
		setTimeout(function(){
			let title = document.querySelector('.heroTitleLine2');
			title.style.opacity = 1;
			title.style.transform = 'translateX(-50%) translateY(0%)';
			containerStart.style.height = '60vh';
			setTimeout(function(){
				bemVindo.style.opacity = 0;
			}, 200);
			setTimeout(function(){
				containerStart.style.height = '50vh';
				bemVindo.style.opacity = 0;
				let heroMenu = document.querySelector('.heroMenu');
				heroMenu.style.opacity = 1;
				heroMenu.style.top = 0;
				setTimeout(function(){
					let headerForm = document.querySelector('.headerForm');
					headerForm.style.opacity = 1;
					headerForm.style.top = 0;
				}, 300);
			}, 900);
		}, 1300);
	}
}