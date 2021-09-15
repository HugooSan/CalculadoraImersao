var n1 = 9.165156;
var n2 = 7.4897321;
var n3 = 4.16489;
var n4 = 5.4;

var nFin = ((n1 + n2 + n3 + n4) / 4 + 1).toFixed(1);

console.log(nFin);
var aprovacao = "";
if (nFin < 7) {
  aprovacao = "Reprovou";
} else {
  aprovacao = "Passou";
}

var avaliacao = "Você: " + aprovacao + "!" + "\nSua nota foi: " + nFin;
var mostraAva = document.getElementById("aprovacao").value;
document.getElementById("aprovacao").innerHTML = avaliacao;
