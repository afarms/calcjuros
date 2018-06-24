window.onload= inicio;

/*A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente. REFERÊNCIA: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow*/

var juros=0, capital=0, meses=0, cjuros,i, montante ,elevacao, montantefinal, rendimento, des; 
var meses3;


function inicio(){

	document.getElementById("botao").addEventListener("click",acao);
	document.getElementById("botao2").addEventListener("click",limpar);
	
	

}
function limpar(){
	document.getElementById("capital").value=""; // limpa o campo
	document.getElementById("meses").value=""; // limpa o campo
	document.getElementById("juros").value=""; // limpa o campo
	document.getElementById("resultado").innerHTML=""; // limpa o campo
	juros= 0; capital =0; meses=0;
}


function acao(){
	capital = document.getElementById("capital").value;
	meses = document.getElementById("meses").value;
	juros = document.getElementById("juros").value;
	montantefinal = document.getElementById("resultado");



	console.log("TESTES capital : "+capital+" meses : "+ meses+" juros : "+juros);

	if((juros==0)&(capital==0)&(meses==0)){ //verificando se todos os slots foram preenchidos

		alert("Por favor preenche todos os campos!");
		}else{
			cjuros= (juros/100.0)+1;
			for(i=1; i<= meses; i++){
				console.log("ate aqui foi 2");
				elevacao = Math.pow(cjuros, i); // cjuros será elevado a quantidade de meses.
				console.log("O resultado da elevação é: "+elevacao);
				montante = capital* elevacao;
				rendimento = montante - capital; // calculo somente do juros/rendimento obtido 
				des = (rendimento*100)/capital; // calculado a porsentagem do capital

				// o comando .toFixed eu uso para determinar as cassas dos números. 
				montantefinal.innerHTML +="O montante no "+i+"º mês é: "+montante.toFixed(2)+" R$ | O total de rendimento corresponde à: " +des.toFixed(0)+"% do capital("+capital+")<br>";

			}
		}

}