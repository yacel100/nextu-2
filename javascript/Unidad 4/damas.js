$(document).ready(function(){
	inicializarTablero();
});


var inicializarTablero = function(){
	
	for (fila = 1; fila <= 8; fila++) {
		$('#tablero').append($("<div></div>").attr("class", "fila").attr("id", "f"+fila));
		for (columna = 1; columna <= 4; columna++) {
			if(fila % 2 == 0){ 
				$('#f'+fila).append($("<div></div>").attr("class", "celda blanca").attr("id", "c"+(columna*2-1)+"-f"+fila).droppable());
				$('#f'+fila).append($("<div></div>").attr("class", "celda negra").attr("id", "c"+columna*2+"-f"+fila));
			}else{
				$('#f'+fila).append($("<div></div>").attr("class", "celda negra").attr("id", "c"+(columna*2-1)+"-f"+fila));
				$('#f'+fila).append($("<div></div>").attr("class", "celda blanca").attr("id", "c"+columna*2+"-f"+fila).droppable());
			}
		}
	}
	
	//agregamos las fichas rojas
	for (fila = 1; fila <= 8; fila++) {
		for (columna = 1; columna <= 8; columna++) {
			if(fila <= 3){
				if(fila % 2 == 0){
					if(columna % 2 != 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "circulo rojo").draggable());
					}
				}else{
					if(columna % 2 == 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "circulo rojo").draggable());
					}
				}
			}
		}
	}
	
	//agregamos las fichas azules
	for (fila = 1; fila <= 8; fila++) {
		for (columna = 1; columna <= 8; columna++) {
			if(fila >= 6){
				if(fila % 2 == 0){
					if(columna % 2 != 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "circulo azul").draggable());
					}
				}else{
					if(columna % 2 == 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "circulo azul").draggable());
					}
				}
			}
		}
	}
	
}