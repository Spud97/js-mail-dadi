const dadiPlayer = [];
const dadiUI = [];
const maxNum = 6

let scorePlayer = 0
let scoreUI = 0

for (let i =1; i <= maxNum; i++) {
  const tiriPlayer = Math.floor(Math.random() * maxNum) +1;
  const tiriUI = Math.floor(Math.random() * maxNum) +1;

  dadiPlayer.push(tiriPlayer);
  dadiUI.push(tiriUI);

  scorePlayer += tiriPlayer;
  scoreUI += tiriUI;
}

console.log(scorePlayer, scoreUI)

if (scorePlayer === scoreUI) {
  alert("Pareggio");
} else if (scorePlayer > scoreUI) {
  alert("Vittoria del Player");
} else {
  alert("vittoria dell UI");
}

document.getElementById("casuale1").innerHTML = scorePlayer;
document.getElementById("casuale2").innerHTML = scoreUI;
