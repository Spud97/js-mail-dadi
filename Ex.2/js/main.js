let dado1 = [Math.floor(Math.random()*5)+1]
let dado2 = [Math.floor(Math.random()*5)+1]

if (dado1 = dado2) {
    alert("Pareggio")
} else if (dado1 > dado2) {
    alert("Vittoria del Player")
} else {
    alert("vittoria del UI")
}

document.getElementById("casuale1").innerHTML = dado1;
document.getElementById("casuale2").innerHTML = dado2;