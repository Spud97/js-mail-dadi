let emailUtente = prompt("Inserisci la tua E-Mail");
let emailList = [
  "MarcoPolo@gmail.com",
  "DanteAlighieri@gmail.com",
  "LeonardoDaVinci@gmail.com",
  "GiuseppeVerdi@gmail.com",
];
const notValid = []

for (let i = 0; i < emailList.length; i++) {
  if (emailUtente === emailList[i]) {
    alert("E-Mail valida.");
  } else if (emailUtente != emailList[i]) { 
    notValid.push(emailUtente)
  }
}

if (emailUtente === notValid[3]) {
  alert("E-Mail non valida, riprova.");
}