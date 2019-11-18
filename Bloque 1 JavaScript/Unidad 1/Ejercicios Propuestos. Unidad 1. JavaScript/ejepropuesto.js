		//const es una constante  y var una variable
		const mensaje = 'Hola mundo';
		//.innerHTML es :(EN EL MISMO HTML ,en la pestaña en la que soy)
		//document.getElementById es recoger un dato del html
		document.getElementById('salida').innerHTML = mensaje;
		

		//Otra manera de hacerlo
		var var1 ='Hola mundo 2';
		document.write("<p id='salida2'>"+var1+"</p>");