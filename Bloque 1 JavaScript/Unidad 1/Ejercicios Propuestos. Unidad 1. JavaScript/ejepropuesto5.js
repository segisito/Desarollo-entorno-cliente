var dia;
		var nombreDia;
		var sal;
		momentoActual=new Date();
		dia=momentoActual.getDay();
		/*
		if (dia==1) {
			sal="Carita1.png";
			nombreDia="Lunes";
		}else if (dia==2) {
			sal="Carita2.png";
			nombreDia="Martes";
		}else if (dia==3) {
			sal="Carita3.png";
			nombreDia="Miercoles";
		}else if (dia==4) {
			sal="Carita4.png";
			nombreDia="Jueves";
		}else if (dia==5) {
			sal="Carita5.png";
			nombreDia="Viernes";
		}else if (dia==6) {
			sal="Carita6.png";
			nombreDia="Sabado";
		} else if (dia==7) {
			sal="Carita0.png";
			nombreDia="Domingo";
		}*/
	    switch(dia){
			case 1:
				sal="Carita1.png";
				nombreDia="Lunes";
			break;
			case 2:
				sal="Carita2.png";
				nombreDia="Martes";
			break;
			case 3:
				sal="Carita3.png";
				nombreDia="Miercoles";
			break;
			case 4:
				sal="Carita4.png";
				nombreDia="Jueves";
			break;
			case 5:
				sal="Carita5.png";
				nombreDia="Viernes";
			break;
			case 6:
				sal="Carita6.png";
				nombreDia="Sabado";
			break;
			case 7:
				sal="Carita0.png";
				nombreDia="Domingo";
			break;
	  }
		document.getElementById('salida').innerHTML=nombreDia;
		document.getElementById("imagen").innerHTML='<img src="'+sal+'"/>';