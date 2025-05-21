function leer()
{
	//Referencia por pseudoclase.
	var nom=document.forms["formulario"].elements[0].value;
	/*
	document.forms referencia al formulario, dentro de los [] se establece el nombre del formulario en caso de haber más de uno,
	 .elements[0] son los elementos que mostrará según la división(hijos/clase), se enlista según un arreglo.
	*/
	//Referencia por Id.
	var clave=document.getElementById("pass").value;
	//Referencia por TagName (Etiqueta (label, input, etc.)).
	var car=document.getElementsByTagName("select")[0].value
	//Referencia por Name.
	var gen=document.getElementsByName("genero");
	/*
	en referencia por name, no se agrega .value debido a la cantidad de type="radio" que se tienen.
	*/
	for (i=0; i<gen.length; i++)
	{
		if(gen[i].checked)
		{
			var g=gen[i].value;
		}
		/*
		Este for se inicia en 0 y se recorre por el número de "radio" gracias a var.length, se condiciona con un if que si
		la posición de var en i está seleccionada (con gen[i].checked), una variable nueva tomará el valor de esa posición.
		*/
	}
	var ok=document.getElementsById("check").checked;
	//Impresión de resultados.
	document.getElementById("resultado").innerHTML="\<br>Nombre del usuario: "+nom+"\<br>Contraseña: "+clave+"\<br>Carrera: "+car+"\<br>Género: "+g+"\<br>Aceptado: "+ok;
	/*
	Para mostrar los resultados, se concatenan de la siguiente maner: Entre comillas se escibe algún texto a mostrar,
	si se precisa un salto de línea se antepone un \<br> antes del texto pero dentro de las comillas, y al cerrarlas se agrega
	la variable a utilizar de la forma +var, si se precisa mostrar más de una, se agrega un + al final de la variable.
	*/
}