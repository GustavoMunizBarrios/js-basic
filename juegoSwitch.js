function play(materiales) {
    
    var material = materiales;

    switch (material) {
        case "rock":
            console.log("Rock beats scissors but loses to paper");
            break;
        case "scissors":
            console.log("Scissors beats paper but loses to rock");
            break;
        case "paper":
            console.log("Paper beats Rock but loses to scissors");
            break;
        default:
            console.log("Please write rock, paper or scissors to obtain a result");
    }

}
play('scissors');