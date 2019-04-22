/*variabili dadi ed estrazione numeri da 1 a 6*/
var dado1 = Math.floor (Math.random()*6 ) +1;
document.getElementById("dado1").innerHTML= dado1;
var dado2 = Math.floor (Math.random()*6 ) +1;
document.getElementById("dado2").innerHTML= dado2;
/*condizione: se dado1 è maggiore di dado2*/
if (dado1>dado2) {
  document.getElementById("vincitore").innerHTML = "N°1 VINCE!";
  /*condizione: se i due dadi sono uguali*/
} else if (dado1==dado2){
  document.getElementById("vincitore").innerHTML = "PAREGGIO!";
  /*se i dadi sono diversi*/
} else {
  document.getElementById("vincitore").innerHTML = "N°2 VINCE!";
}
