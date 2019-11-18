	var miHora = new Date();
		const mensaje ="buenos dias";
		if (miHora.getHours()<13) {
			document.getElementById('salida').innerHTML = mensaje;
		}else if(miHora.getHours()<21 && miHora.getHours() < 13){
			document.getElementById('salida').innerHTML = '"No son buenos dias"';
		}else{
			document.getElementById('salida').innerHTML = "Esto no furula";
		}
