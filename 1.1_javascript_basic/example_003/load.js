/* 
* O eventon "load" ocorre quando um documento está totalmente carregado. Normalmente,
* precisamos esperar por por esses eventos antes de começarmos a executar nosso código JavaScript.
*/

window.onload = function() {												// Executa a função quando o documento for carregado
	var images = document.getElementsByTagName('img');						// Localiza todas as marca <img> no documento

	for (var i = 0; i < images.length; i++) {								// * Faz um laço por elas, adicionando um rotina de tratamento para eventos "click" em
		var image = images[i];												// * cada um para que clicar na imagem a oculte.
		if (image.addEventListener)											// Outro modo de registrar um rotina de tratamento
			image.addEventListener('click', hide, false);
		else
			image.attachEvent('onclick', hide);								// Para compatibilidade com o IE8 e anteriores
	}
	function hide(event) { event.target.style.visibility = 'hidden'; }		// Esta é a função de rotina para tratamento de evento registado anteriormente
}