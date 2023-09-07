const Selections = document.querySelectorAll('[data-selection]');
const res = document.querySelector('.results');
let GamesNumber = 0, playerWins = 0, computerWins = 0;

let array = ['rock', 'paper', 'scissor'];


function WhoWins(playerSelection){
    // document.body.style.opacity = '.8';
    // Selections.style.opacity = '1';
    const ComputerSelection = array[Math.floor(Math.random() * 3)];
    console.log(ComputerSelection);
    res.setAttribute('style', "color: white; text-shadow: 3px 3px 3px black; font-size: 30px");

    ++GamesNumber;

    if(playerSelection == ComputerSelection){
        res.textContent = "Tie : No body wins";
    }
    else if((playerSelection == "rock" && ComputerSelection == "scissor") ||
    (playerSelection == "papper" && ComputerSelection == "rock") ||
    (playerSelection == "scissor" && ComputerSelection == "papper") ){
        res.textContent = "You Wins !!";
        playerWins++;
    }
    else if(( ComputerSelection == "rock" && playerSelection == "scissor") ||
    (ComputerSelection == "papper" &&  playerSelection == "rock") ||
    (ComputerSelection == "scissor" &&  playerSelection == "papper") ){
        res.textContent = "Computer Wins !!";
        computerWins++;
    }


    if(GamesNumber == 5){
        if(playerWins > computerWins){
            res.textContent = "Game Over :: You Wins !!";
            res.setAttribute('style', "color: rgba(122, 217, 144,1); text-shadow: 5px 5px 5px black; font-size: 35px");
        }
        else if(playerWins == computerWins){
            res.textContent = "Drawing !!";
            res.setAttribute('style', "color: rgba(102, 185, 245,1); text-shadow: 5px 5px 5px black; font-size: 35px");
        }
        else {
            res.textContent = "Game Over :: You Loss !!";
            res.setAttribute('style', "color: rgba(221, 230, 108, 1); text-shadow: 5px 5px 5px black; font-size: 35px");
        }
        GamesNumber = 0;
        playerWins = 0;
        computerWins = 0;
    }
}


Selections.forEach(selection => {
    selection.addEventListener('click',()=>{
        const selectionName = selection.dataset.selection;
        WhoWins(selectionName);
    })
    
});


// const rock = document.querySelector('#rock');
// const papper = document.querySelector('#papper');
// const scissor = document.querySelector('#scissor');

// function WhoWins(playerChoice) {
//     console.log(playerChoice.lastElementChild.textContent);
// }

// rock.addEventListener('click',WhoWins(rock));
// papper.addEventListener('click',WhoWins(papper));
// scissor.addEventListener('click',WhoWins(scissor));



// const Choice = document.querySelector('.choice');

// function getPlayerSelection(element){
//     console.log(element.lastElementChild.textContent);

//     // const playerChoice = Choice.lastElementChild;
//     // console.log(playerChoice.textContent);

// }
// Choice.forEach(element => {
//     element.addEventListener('click', getPlayerSelection(element));
// });



// Choice.addEventListener('click',getPlayerSelection);