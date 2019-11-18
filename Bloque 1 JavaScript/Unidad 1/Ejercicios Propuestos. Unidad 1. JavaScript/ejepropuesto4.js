var ahora;
let nombreEstilo;
		var horaActual;
		var mensaje;

		ahora=new Date();
		horaActual=ahora.getHours();

		if (horaActual<13) {
			mensaje= "Buenos días.";
			nombreEstilo ='mañana';
		}else if(horaActual<21){
			mensaje= "Buenas tardes.";
			nombreEstilo ='tarde';	
		}else if (horaActual<24) {
			mensaje= "Buenas noches.";
			nombreEstilo ='noche';
		}

		document.getElementById('salida').innerHTML=mensaje;
		document.body.className=nombreEstilo;