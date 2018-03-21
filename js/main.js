var firstClick = false;
var firstChild = [];
var puntuation = 0;
var globalCounter = 0;
var usedImages = [];
var imagenes = [ 
	"1.png",
	"2.png",
	"3.png",
	"4.png",
	"5.png",
	"6.png",
	"7.png",
	"8.png",
	"9.png",
	"10.png"
];
/**
* Función encargada de poner las imágenes en posiciones aleatorias
*/
function randomImage() {
	let random = Math.floor((Math.random() * imagenes.length));
	var image = imagenes[random];
	imagenes.splice(random, 1);
	usedImages.push(image);
	return "img/" + image;
}

/**
* Función que basado en 
**/
function getOtherImage(){
	let random = Math.floor((Math.random() * usedImages.length));
	let image = usedImages[random];
	usedImages.splice(random, 1);
	return "img/" + image;
}

/**
* Función que pone las imágenes en cada div
*/
function cualImagen( fila, col ){

	let random = Math.floor((Math.random() * 10) + 1);
	var imagenes = [ 
		"1.png",
		"2.png",
		"3.png",
		"4.png",
		"5.png",
		"6.png",
		"7.png",
		"8.png",
		"9.png",
		"10.png"
	];
	var pos = (fila+1)*5 + col;
	return "img/" + imagenes[ pos % 10 ];
}

/*
* Función que devuelve el formato de fila y columna de divs para ser agregados
*/
function htmlCarta( fila, col ){
	let id = fila + ',' + col;
	if(globalCounter <= 10){
		return '<div id= "'+ id + '"class="square" onclick="voltearCarta(\''+ id + '\')"><img src="' +  randomImage() + '" /></div>';
	}else{
		return '<div id= "'+ id + '"class="square" onclick="voltearCarta(\''+ id + '\')"><img src="' +  getOtherImage() + '" /></div>';
	}
	
}

function inicializar() {
	document.getElementById('puntos').innerHTML = '0';
	globalCounter = 0;
	imagenes = [ 
		"1.png",
		"2.png",
		"3.png",
		"4.png",
		"5.png",
		"6.png",
		"7.png",
		"8.png",
		"9.png",
		"10.png"
	];
	firstClick = false;
	firstChild = [];
	puntuation = 0;
	globalCounter = 0;
	usedImages = [];
}

/**
* Pone las cartas en la mesa
*/
function repartir(){
	inicializar();
	var cartas="";
	for( var fila = 0; fila < 4; fila++){
		cartas += '<div class="row">'
		for( col = 0; col < 5; col++){
			globalCounter++;
			cartas += htmlCarta( fila, col );
		}
		cartas += "</div>"
	}
	tab = document.getElementById("tablero");
	tab.innerHTML = cartas;
}

/**
*Función encargada de voltear las cartas y volverlas a su estado original si no son pareja
**/
function voltearCarta(element) {

	let children = document.getElementById(element).childNodes;
	if(children.length > 0){
		children[0].style.visibility = 'visible';
		if(!firstClick){
			firstChild[0] = children[0];
			firstClick = true;
		}else{
			firstChild[1] = children[0];
			firstClick = false;
			validatePair();
		}
	}
}

/**
* Función encargada de validar si el usuario ha encontardo una pareja, en caso de no haberlo hecho voltea las cartas de nuevo.
*/
function validatePair(){
	if(firstChild[1].getAttribute("src") == firstChild[0].getAttribute("src")){
		let puntos = document.getElementById('puntos');
		puntuation += 1;
		puntos.innerHTML = puntuation;
		
	}else{
		setTimeout(function(){
		    firstChild[1].style.visibility = 'hidden';
			firstChild[0].style.visibility = 'hidden';
		}, 500);
	}
}



