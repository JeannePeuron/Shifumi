//Etape 2

function getComputerChoice(){

let Pierre = 0
let feuille = 1
let ciseaux = 2

let value = Math.random()
let convertValue = value * 3 

let finalValue = Math.floor(convertValue)

    if(finalValue == Pierre){
        return "Pierre"
    } else if (finalValue == feuille){
        return "Feuille"
    } else if (finalValue == ciseaux){
        return "Ciseaux"
    }
}
       

<<<<<<< HEAD
=======

console.log(getComputerChoice())

//Etape 3

function getHumanChoice(){
    let message = prompt("SHI-FOU-MI")
    console.log(message)
}

getHumanChoice()
>>>>>>> 1c2bdab1793ad4787da4d2910026e070d60e2294
