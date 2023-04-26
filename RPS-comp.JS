let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    draws: 0,
  };
}
console.log(score);
//if the user clicks on rock
function rock() {
  PcMove();
  choices("rock");
}
// if the user clicks on paper
function paper() {
  PcMove();
  choices("paper");
}

//if the user clicks on scissors
function scissors() {
  PcMove();
  choices("scissors");
}
//functions
function restart() {
  //to restart the game
  (score.draws = 0), (score.wins = 0), (score.losses = 0);
  localStorage.removeItem("score");

  update();

  const outcome = document.querySelector(".outcome");
  const moved = document.querySelector(".moves");
  if (score.draws === 0 && score.wins === 0 && score.losses === 0) {
    outcome.classList.add("hidden");
    moved.classList.add("hidden");
  } else {
    console.log("keep playing");
  }
}

let CompMove = "";
let result = "";

function PcMove() {
  //youssou's move or the computers
  const compChoice = Math.trunc(Math.random() * 30) + 1;
  if (compChoice >= 0 && compChoice < 10) {
    CompMove = "rock";
  } else if (compChoice >= 10 && compChoice < 20) {
    CompMove = "paper";
  } else if (compChoice >= 20 && compChoice <= 30) {
    CompMove = "scissors";
  }
}

function choices(choice) {
  //the user's moves
  if (choice === "scissors") {
    //if statement for if the user picks scissors
    if (CompMove === "paper") {
      result = "you win";
    } else if (CompMove === "scissors") {
      result = "draw";
    } else if (CompMove === "rock") {
      result = "you lose";
    }

    if (result === `you win`) {
      score.wins++;
    } else if (result === `you lose`) {
      score.losses++;
    } else if (result === `draw`) {
      score.draws++;
    }
  } else if (choice === "paper") {
    //if statement for if the user picks paper
    if (CompMove === "paper") {
      result = "draw";
    } else if (CompMove === "scissors") {
      result = "you lose";
    } else if (CompMove === "rock") {
      result = "you win";
    }

    if (result === `you win`) {
      score.wins++;
    } else if (result === `you lose`) {
      score.losses++;
    } else if (result === `draw`) {
      score.draws++;
    }
  } else if (choice === "rock") {
    //if statement for if the user picks rock
    if (CompMove === "paper") {
      result = "you lose";
    } else if (CompMove === "scissors") {
      result = "you win";
    } else if (CompMove === "rock") {
      result = "draw";
    }

    if (result === `you win`) {
      score.wins++;
    } else if (result === `you lose`) {
      score.losses++;
    } else if (result === `draw`) {
      score.draws++;
    }
  }
  localStorage.setItem("score", JSON.stringify(score));

  function moves() {
    const moved = document.querySelector(".moves");
    moved.innerHTML = `you <img src="RPS-images/${choice}-emoji.png" class="move-icon" />
    <img src="RPS-images/${CompMove}-emoji.png" class="move-icon" />
    youssou`;
  }

  update();
  moves();
  outcome();

  const outcomed = document.querySelector(".outcome");
  const moved = document.querySelector(".moves");
  if (score.draws != 0 || score.wins != 0 || score.losses != 0) {
    outcomed.classList.remove("hidden");
    moved.classList.remove("hidden");
  } else {
    console.log("keep playing");
  }
}

function update() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins},losses: ${score.losses}, draws: ${score.draws}`;
}
update();

function outcome() {
  const outcome = document.querySelector(".outcome");
  outcome.innerHTML = `${result}`;
}
