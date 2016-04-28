function hide(e, reflow) {				// Oculta o elemento e faz script de seu estilo
	if(reflow) {						// Se o 2º argumento é verdadeiro oculta o elemento e ultiliza seu espaço
		e.style.display = 'none';
	}
	else {								// Caso contrário
		e.style.visibility = 'hidden';	// Torna e invisivel, mas deixa seu espaço
	}
}