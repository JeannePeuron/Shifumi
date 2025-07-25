//Etape 2

function getComputerChoice(){

let pierre = 0
let feuille = 1
let ciseaux = 2

let value = Math.random()
let convertValue = value * 3 

let finalValue = Math.floor(convertValue)

    if(finalValue == pierre){
        return "pierre"
    } else if (finalValue == feuille){
        return "feuille"
    } else if (finalValue == ciseaux){
        return "ciseaux"
    }
}
       

<<<<<<< HEAD
=======

//console.log(getComputerChoice())

//Etape 3

function getHumanChoice(){
    let message = prompt("SHI-FOU-MI")
    console.log(message)
        return message
}

<<<<<<< HEAD
//getHumanChoice()

//Etape 4

let humanScore = 0
let computerScore = 0

//Etape 5

function playRound(humanChoice, computerChoice){
    
        for(let choice = 0; choice < 10 ; choice++){

            if (humanChoice === "ciseaux" && computerChoice === "feuille"){
                return "ciseaux bat feuille!"
            }
            if (humanChoice === "ciseaux" && computerChoice === "pierre"){
                return "pierre bat ciseaux!"
            }
            if (humanChoice === "ciseaux" && computerChoice === "ciseaux"){
                return "match nul!"
            }

            if (humanChoice === "pierre" && computerChoice === "feuille"){
                return "feuille bat pierre!"
            }
            if (humanChoice === "pierre" && computerChoice === "pierre"){
                return "match nul!"
            }
            if (humanChoice === "pierre" && computerChoice === "ciseaux"){
                return "pierre bat ciseaux!"
            }
   
            if (humanChoice === "feuille" && computerChoice === "ciseaux"){
                return "ciseaux bat feuille!"
            }
            if (humanChoice === "feuille" && computerChoice === "pierre"){
                return "feuille bat pierre!"
            }
            if (humanChoice === "feuille" && computerChoice === "feuille"){
                return "match nul!"
            }
        }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection))




    
=======
getHumanChoice()
>>>>>>> 1c2bdab1793ad4787da4d2910026e070d60e2294
>>>>>>> 6415d8492f33099a50ad62a258c4b767ebeda3bd
