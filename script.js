
let win = 0;
let draw = 0;
let loss = 0;
let round = 0;

const motivaciosUzenetek = [
  "Ne add fel, bajnok! 💪",
  "Csak az veszít, aki nem próbálja újra! 🚀",
  "Űrlények is elbuknak néha. De te újra harcolsz! 👽",
  "A vereség csak egy újabb kihívás! 🔥"
];

function play(playerChoice) {
  const choices = ['kő', 'papír', 'olló'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  round++;

  let resultText = "";
  if (playerChoice === computerChoice) {
    draw++;
    resultText = "🛸 Döntetlen! Mindketten ugyanazt választottátok.";
  } else if (
    (playerChoice === 'kő' && computerChoice === 'olló') ||
    (playerChoice === 'papír' && computerChoice === 'kő') ||
    (playerChoice === 'olló' && computerChoice === 'papír')
  ) {
    win++;
    resultText = "🌟 Győzelem! Megsemmisítetted az űrellenfelet!";
  } else {
    loss++;
    resultText = "💥 Vesztettél! Az űrlény túljárt az eszeden.";
  }

  document.getElementById('result').innerHTML = `
    <strong>${resultText}</strong><br><br>
    Te választottad: <strong>${playerChoice}</strong><br>
    Gép választása: <strong>${computerChoice}</strong>
  `;

  updateScoreboard();
  updateMotivation();
}

function updateScoreboard() {
  document.getElementById('scoreboard').innerHTML = `
    <h3>📊 Körök állása:</h3>
    Kör: ${round}<br>
    Győzelem: ${win} ⚡<br>
    Döntetlen: ${draw} 🌀<br>
    Vereség: ${loss} 💣
  `;
}

function updateMotivation() {
  const msg = motivaciosUzenetek[Math.floor(Math.random() * motivaciosUzenetek.length)];
  document.getElementById('motivation').innerHTML = `<p>${msg}</p>`;
}

function giveUp() {
  document.getElementById('result').innerHTML = `<strong>Feladtad a harcot... de ne aggódj, itt a motiváció!</strong>`;
  document.getElementById('motivation').innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KxGRhd_iWuE?autoplay=1"
    title="Motivációs videó" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `;
}
