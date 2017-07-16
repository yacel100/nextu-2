$(document).ready(function(){
	inicializarTablero();
});


var roja= "roja";
azul = "azul";
turno = roja;

var inicializarTablero = function(){

	for (fila = 1; fila <= 8; fila++) {
		$('#tablero').append($("<div></div>").attr("class", "fila").attr("id", "f"+fila));
		for (columna = 1; columna <= 4; columna++) {
			if(fila % 2 == 0){ 
				$('#f'+fila).append($("<div></div>").attr("class", "celda blanca").attr("id", "c"+(columna*2-1)+"-f"+fila).attr("fila", fila).attr("columna",columna*2-1));
				$('#f'+fila).append($("<div></div>").attr("class", "celda negra").attr("id", "c"+columna*2+"-f"+fila).attr("fila", fila).attr("columna",columna*2));
			}else{
				$('#f'+fila).append($("<div></div>").attr("class", "celda negra").attr("id", "c"+(columna*2-1)+"-f"+fila).attr("fila", fila).attr("columna",columna*2-1));
				$('#f'+fila).append($("<div></div>").attr("class", "celda blanca").attr("id", "c"+columna*2+"-f"+fila).attr("fila", fila).attr("columna",columna*2));
			}
		}
	}
	
	//agregamos las fichas rojas
	for (fila = 1; fila <= 8; fila++) {
		for (columna = 1; columna <= 8; columna++) {
			if(fila <= 3){
				if(fila % 2 == 0){
					if(columna % 2 != 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "ficha roja"));
					}
				}else{
					if(columna % 2 == 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "ficha roja"));
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
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "ficha azul"));
					}
				}else{
					if(columna % 2 == 0){
						$('#c'+columna+'-f'+fila).append($("<div></div>").attr("class", "ficha azul"));
					}
				}
			}
		}
	}
	//agregamos el evento mouseover a todas las fichas
	$('#tablero').on("mouseover", ".ficha", function(){
		if($(this).hasClass(turno)){ //es su turno
			//verificamos si puede moverse.
			if(turno == roja){ //las rojas deben moverse hacia abajo
				//verificamos si puede moverse hacia la izquierda
				if( $(this).parent().attr("columna") > 1 ){
					//obtenemos la diagonal inferior izquierda
					idIzquierdo = "#c"+(parseInt($(this).parent().attr("columna"))-1)+"-f"+(parseInt($(this).parent().attr("fila")) +1);
					var izquierdo = $(idIzquierdo);
					if((izquierdo).children().length > 0){
						console.log("no puede mover a la izquierda");
					}else{
						console.log("puede mover a la izquierda");
						$(this).draggable({
							revert : function(event, ui) {
					            $(this).data("ui-draggable").originalPosition = {
					                top : 0,
					                left : 0
					            };
					            return !event;
					        }
						});
						$(idIzquierdo).droppable({
						  tolerance: "fit",
						  drop: function( event, ui ) {
						  	$(ui.draggable).remove();
						  	$(idIzquierdo).append($("<div></div>").attr("class", "ficha roja"));
						  }
						});
					}
				}
				if( $(this).parent().attr("columna") < 8 ){
					//obtenemos la diagonal inferior derecho
					idDerecho = "#c"+(parseInt($(this).parent().attr("columna"))+1)+"-f"+(parseInt($(this).parent().attr("fila")) +1);
					var derecho = $(idDerecho);
					if((derecho).children().length > 0){
						console.log("no puede mover a la derecha");
					}else{
						console.log("puede mover a la derecha");
						$(this).draggable({
							revert : function(event, ui) {
					            $(this).data("ui-draggable").originalPosition = {
					                top : 0,
					                left : 0
					            };
					            return !event;
					        }
						});
						$(idDerecho).droppable({
						  tolerance: "fit",
						  drop: function( event, ui ) {
						  	$(ui.draggable).remove();
						  	$(idDerecho).append($("<div></div>").attr("class", "ficha roja"));
						  }
						});
					}
				}
				turno = azul;
			}else{
				//verificamos si puede moverse hacia la izquierda
				if( $(this).parent().attr("columna") > 1 ){
					//obtenemos la diagonal superior izquierda
					idIzquierdo = "#c"+(parseInt($(this).parent().attr("columna"))-1)+"-f"+(parseInt($(this).parent().attr("fila")) - 1);
					var izquierdo = $(idIzquierdo);
					if((izquierdo).children().length > 0){
						console.log("no puede mover a la izquierda");
					}else{
						console.log("puede mover a la izquierda");
						$(this).draggable({
							revert : function(event, ui) {
					            $(this).data("ui-draggable").originalPosition = {
					                top : 0,
					                left : 0
					            };
					            return !event;
					        }
						});
						$(idIzquierdo).droppable({
						  tolerance: "fit",
						  drop: function( event, ui ) {
						  	$(ui.draggable).remove();
						  	$(idIzquierdo).append($("<div></div>").attr("class", "ficha azul"));
						  }
						});
					}
				}
				if( $(this).parent().attr("columna") < 8 ){
					//obtenemos la diagonal superior derecha
					idDerecho = "#c"+(parseInt($(this).parent().attr("columna"))+1)+"-f"+(parseInt($(this).parent().attr("fila")) - 1);
					var derecho = $(idDerecho);
					if((derecho).children().length > 0){
						console.log("no puede mover a la derecha");
					}else{
						console.log("puede mover a la derecha");
						$(this).draggable({
							revert : function(event, ui) {
					            $(this).data("ui-draggable").originalPosition = {
					                top : 0,
					                left : 0
					            };
					            return !event;
					        }
						});
						$(idDerecho).droppable({
						  tolerance: "fit",
						  drop: function( event, ui ) {
						  	$(ui.draggable).remove();
						  	$(idDerecho).append($("<div></div>").attr("class", "ficha azul"));
						  }
						});
					}
				}

				turno = roja;
			}
		}else{
			//do nothing, no es su turno
		}
	});

	$('.ficha').mouseout(function(){
		//$(this).draggable('disable');
	});
};


