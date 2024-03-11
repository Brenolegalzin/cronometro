let segundos = 0;
let minutos = 0;
let horas = 0;
let onOrOff = false;
function loop(){
	if(onOrOff==true){
		if(segundos>=60){
			segundos = 0;
			minutos += 1;
		}
		segundos += 1;
		document.getElementById("timer").innerText = horas+":"+minutos+":"+segundos;
		if(minutos>=60){
			minutos = 0;
			horas += 1;
		}
		setTimeout(loop, 1000);
	}
}
function pausar(){
	onOrOff = false;
	comecar = memoria;
}
function reset(){
	segundos = 0;
	minutos = 0;
	horas = 0;
	document.getElementById("timer").innerText = segundos+":"+minutos+":"+horas;
	if(onOrOff==false){
		comecar = memoria
	}
}
function comecar(){
	onOrOff = true;
	loop();
	comecar = function() {};
}
let memoria = comecar;
