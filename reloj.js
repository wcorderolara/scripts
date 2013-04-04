function reloj(){
	var mc = new Date();
	var hora = mc.getHours();
	var min = mc.getMinutes();
	var seg = mc.getSeconds();
	var str_segundo = new String(seg);
	var str_minuto = new String(min);
	var str_hora = new String(hora);
	var mihora;
	var clock = document.getElementById("dvreloj");

	if(str_segundo.length == 1){
		seg = "0" + seg;
	}

	if(str_minuto.length == 1){
		min = "0" + min;
	}

	if(str_hora.length == 1){
		hora = "0" + hora;
	}

	mihora = hora + ":" + min + ":" + seg;

	clock.innerHTML = mihora;

	setTimeout("reloj",1000);

}