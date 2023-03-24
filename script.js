// Agregar comportamiento de desplazamiento suave a los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});		
	});
});

// Agregar la clase de transición al cuerpo
const links = document.querySelectorAll('a');
links.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		const href = link.getAttribute('href');
		document.querySelector('body').classList.add('page-transition');
		setTimeout(() => {
			window.location.href = href;
		}, 600);
	});
});




