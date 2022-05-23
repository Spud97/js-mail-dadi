let emailUtente = prompt("Inserisci la tua E-Mail");
let emailList = [
  "MarcoPolo@gmail.com",
  "DanteAlighieri@gmail.com",
  "LeonardoDaVinci@gmail.com",
  "GiuseppeVerdi@gmail.com",
];

for (let i = 0; i < emailList.length; i++) {
  if (emailUtente === emailList[i]) {
    alert("E-Mail valida.");
  } else if (emailUtente != emailList[i]) { 
    alert("E-Mail non valida, riprova.");
  }
}