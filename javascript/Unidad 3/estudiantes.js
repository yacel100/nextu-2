var validarNumero = function(numero){
	return !isNaN(parseInt(numero));
}

var editar = function(codigo){
	var estudiante = $.parseJSON(localStorage.getItem(codigo));
	$("#codigo").val(estudiante.codigo);
	$("#nombre").val(estudiante.nombre);
	$("#nota").val(estudiante.nota);
	mostrarEstudiantes();
}

var eliminar = function(codigo){

	var result = confirm("Esta seguro de eliminar el elemento?");
	if (result) {
		localStorage.removeItem(codigo);
	}
	mostrarEstudiantes();
}

var mostrarEstudiantes = function(){
	
	var contenido = '<table border="1">'+
				'<tr>'+
					'<th style="border: 1px solid black;">Codigo</th>'+
					'<th style="border: 1px solid black;">Nombre</th>'+
					'<th style="border: 1px solid black;">Nota</th>'+
					'<th style="border: 1px solid black;">Editar</th>'+
					'<th style="border: 1px solid black;">Eliminar</th>'+
				'</tr>';


	for (var i = 0; i < localStorage.length; i++) {
		var codigo = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(codigo));

		contenido += '<tr>'+
					'<td>'+estudiante.codigo+'</td>'+
					'<td>'+estudiante.nombre+'</td>'+
					'<td>'+estudiante.nota+'</td>'+
					'<td><input type="button" onclick="editar('+estudiante.codigo+')" value="Editar"></input></td>'+
					'<td><input type="button" onclick="eliminar('+estudiante.codigo+')" value="Eliminar"></input></td>'+
					'</tr>';
	}
	contenido += '<table>';
	$("#listado").html(contenido);

}

var registrarEstudiante = function(){
	if(validarNumero($("#nota").val())){
		var estudiante = new Object;
		estudiante.codigo = $("#codigo").val();
		estudiante.nombre = $("#nombre").val();
		estudiante.nota = $("#nota").val();

		localStorage.setItem(estudiante.codigo, JSON.stringify(estudiante));
		mostrarEstudiantes();
	}else{
		alert("Ingrese un valor valido")
	}
} 

var calcularPromedio = function(){
	var promedio;
	var sumaTotal = 0;
	for (var i = 0; i < localStorage.length; i++) {
		var codigo = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(codigo));
		sumaTotal += parseInt(estudiante.nota);
		console.log( estudiante );
	}
	promedio = sumaTotal / localStorage.length;
	alert("El promedio es: "+promedio);
} 

var calcularMayor = function(){
	var mayor = new Object;
	mayor.nota = -1;
	
	for (var i = 0; i < localStorage.length; i++) {
		var codigo = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(codigo));
		if(estudiante.nota > mayor.nota ){
			mayor = estudiante;
		}
	}
	
	alert("El mayor es: "+"codigo: " + mayor.codigo+", nombre: " + mayor.nombre+", nota: "+ mayor.nota);
} 

var calcularMenor = function(){
	var menor = new Object;
	menor.nota = 9999999999999;
	
	for (var i = 0; i < localStorage.length; i++) {
		var codigo = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(codigo));
		if(estudiante.nota < menor.nota ){
			menor = estudiante;
		}
	}
	
	alert("El menor es: "+"codigo: " + menor.codigo+", nombre: " + menor.nombre+", nota: "+ menor.nota);
} 

$(document).ready(function(){
	$("#registrarEstudiante").click(registrarEstudiante);
	$("#calcularPromedio").click(calcularPromedio);
	$("#calcularMayor").click(calcularMayor);
	$("#calcularMenor").click(calcularMenor);
	mostrarEstudiantes();
});
