// Rock, Paper and scissors GAME

function play(materiales) {
    var material = materiales;
	if (material === "rock") {
        return console.log("Rock beats scissors but loses to paper");
    }
    else if (material ===  "scissors" ) {
        return console.log("Scissors beats paper but loses to rock");
    }
    else if (material === "paper") {
        return console.log("Paper beats Rock but loses to scissors");
    }
    else {
        return console.log("Please write rock, paper or scissors to obtain a result");
    }
}

play('scissors');
