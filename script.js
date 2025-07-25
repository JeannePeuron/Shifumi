//Etape 2

function getComputerChoice(){

let pierre = 0
let feuille = 1
let ciseaux = 2

let value = Math.random()
let convertValue = value * 3 

let finalValue = Math.floor(convertValue)

//console.log(finalValue)

    if(finalValue == pierre){
        return "pierre"
    } else if (finalValue == feuille){
        return "feuille"
    } else if (finalValue == ciseaux){
        return "ciseaux"
    }

    
}
       

//console.log(getComputerChoice())

//Etape 3

function getHumanChoice(){
    let message = prompt("SHI-FOU-MI")
    console.log(message)
        return message
       
}

//getHumanChoice()

//Etape 4

let humanScore = 0
let computerScore = 0

//Etape 5



function playRound(humanChoice, computerChoice){
    
        for(let choice = 0; choice < 5 ; choice++){

            if (humanChoice === "ciseaux" && computerChoice === "feuille"){
                return "Vous gagnez !! Ciseaux bat Feuille!"
            }
                else if (humanChoice === "feuille" && computerChoice === "ciseaux"){
                return "Vous perdez !! Ciseaux bat Feuille!"
            } 

            else if (humanChoice === "ciseaux" && computerChoice === "pierre"){ 
                return "Vous perdez !! Pierre bat Ciseaux!"
            }
            else if (humanChoice === "pierre" && computerChoice === "ciseaux"){
                return "Vous gagnez !! Pierre bat Ciseaux!"
            }
             else if (humanChoice === "ciseaux" && computerChoice === "ciseaux" || humanChoice === "feuille" && computerChoice === "feuille" || humanChoice === "pierre" && computerChoice === "pierre"){
                return "Egalité ! Match nul!"
            }

            else if (humanChoice === "pierre" && computerChoice === "feuille") { 
                return "Vous perdez !! Feuille bat Pierre!"
            }
            else if (humanChoice === "feuille" && computerChoice === "pierre" ){
                return "Vous gagnez !! Feuille bat Pierre!"
            }


        }

        //console.log(humanChoice.toLowerCase(humanChoice))

}

//console.log(playRound(humanSelection, computerSelection))


function playGame() {


    for(let i = 0 ; i < 5 ; i++){

        const humanChoice = getHumanChoice ()
        const computerChoice = getComputerChoice ()
        //playRound(humanChoice, computerChoice)
        console.log(playRound (humanChoice, computerChoice))
    }
    

}

console.log(playGame())