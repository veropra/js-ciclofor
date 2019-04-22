/*chiedere l'email all'utente*/
var email=prompt ("Inserisci la tua email");
/*Lista email di chi può accedere*/
var list=["nomecognome@gmail.it","nome@gmail.com","nome@libero.it"];
/*ciclo for per verificare che l'email sia corretta*/
for (var i=0; i<list.length; i++); {
  if (list[i] == email); {
    document.getElementById("accesso").innerHTML = list[i] + "<br>ACCESSO EFFETTUATO<br>";
  }
}
