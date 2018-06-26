const jogador1 = "X";
const jogador2 = "O";
var playTime = jogador1;
var gameOver = false;
var images = new Array();

var sequence = [];
var actualRound = 0;
var seqPos = 0;
var gameOver = false;



preloadImages("imagens/x.png","imagens/o.png")			
atualizaMostrador();
inicializarEspacos();

function preloadImages(){
	for (i = 0; i < preloadImages.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preloadImages.arguments[i]
				}
}
function limparCampos(){
	location.reload();

}


function atualizaMostrador(){

	if (gameOver) { return;}

	if (playTime == jogador1) {

		var jogador = document.querySelectorAll("div#mostrador img")[0];
		jogador.setAttribute("src", images[0].src);
	} else{

		var jogador = document.querySelectorAll("div#mostrador img")[0];
		jogador.setAttribute("src", images[1].src);
	}
}

function inicializarEspacos(){

	var espaco = document.getElementsByClassName("espaco");
	for (var i = 0; i < espaco.length; i++) {

		espaco[i].innerHTML = "<img id='p1' src='"+images[0].src+"' border='0'><img id='p2' src='"+images[1].src+"' border='0'>";
		espaco[i].getElementsByTagName('img')[0].style.display = "none";
		espaco[i].getElementsByTagName('img')[1].style.display = "none";

		espaco[i].addEventListener("click", function(){

			if (gameOver) {return;}



			if(this.getAttribute("jogada") == ""){

				if (playTime == jogador1) {
					this.getElementsByTagName('img')[0].style.display = "inline";
					
					this.setAttribute("jogada", jogador1);
					playTime = jogador2;

				}else{
					this.getElementsByTagName('img')[1].style.display = "inline";
					
					this.setAttribute("jogada", jogador2);
					playTime = jogador1;
				}
				atualizaMostrador();
				verificarVencedor();

			}

		});
	}
}

async function verificarVencedor(){


var a1 = document.getElementById("a1").getAttribute("jogada");
var a2 = document.getElementById("a2").getAttribute("jogada");
var a3 = document.getElementById("a3").getAttribute("jogada");

var b1 = document.getElementById("b1").getAttribute("jogada");
var b2 = document.getElementById("b2").getAttribute("jogada");
var b3 = document.getElementById("b3").getAttribute("jogada");

var c1 = document.getElementById("c1").getAttribute("jogada");
var c2 = document.getElementById("c2").getAttribute("jogada");
var c3 = document.getElementById("c3").getAttribute("jogada");


var vencedor = "";

if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3 ) || (a1==b2 && a1 == c3 )) && a1 != ""  ){
	vencedor = a1;
}else if((b2 == b1 && b2 == b3 && b2 !="" ) || (b2==a2 && b2==c2 && b2 !="") || (b2==a3 && b2==c1 && b2!=""))
{
	vencedor = b2;

}else if(((c3==c2 && c3==c1)||(c3==a3 && c3 == b3)) && c3 != "")
{
	vencedor = c3;
}

if (vencedor != "") {
	gameOver = true;

	 await sleep(50);
	alert("O Vencedor foi o: '" + vencedor + "'");
}



}


function sleep(ms)
{
return new Promise(resolve => setTimeout(resolve, ms));

}






















