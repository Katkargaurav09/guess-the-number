let input = document.getElementById("guess");
let submitBtn = document.getElementById("submitBtn");
let resultText = document.getElementById("resultText");
let attemptsLeft = document.getElementById("attemptsLeft");
let playAgainBtn = document.getElementById("playAgainBtn");

let randomNumber = generateRandomNumber();
let attempts = 3;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1; // 1-10
}

submitBtn.addEventListener("click", () => {
  let guess = Number(input.value);

  if (!guess || guess < 1 || guess > 10) {
    resultText.innerHTML = `<h2>Please enter a number between 1 and 10</h2>`;
    return;
  }

  if (guess === randomNumber) {
    resultText.innerHTML = `<h2>🎉 Correct! You win!</h2>`;
    endGame();
  } else {
    attempts--;
    let hint = guess < randomNumber ? "Too Low!" : "Too High!";
    if (attempts > 0) {
      resultText.innerHTML = `<h2>${hint} Try again!</h2>`;
      attemptsLeft.textContent = `Attempts Left: ${attempts}`;
    } else {
      resultText.innerHTML = `<h2>😞 Game Over! The number was ${randomNumber}</h2>`;
      endGame();
    }
  }

  input.value = "";
});

function endGame() {
  submitBtn.disabled = true;
  input.disabled = true;
  playAgainBtn.classList.remove("hidden");
}

playAgainBtn.addEventListener("click", () => {
  randomNumber = generateRandomNumber();
  attempts = 3;
  input.disabled = false;
  submitBtn.disabled = false;
  playAgainBtn.classList.add("hidden");
  resultText.innerHTML = "";
  attemptsLeft.textContent = `Attempts Left: ${attempts}`;
  input.value = "";
});
