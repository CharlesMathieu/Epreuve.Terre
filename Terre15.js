//je récupère mes  valeurs
const myNumber1 = process.argv[2]
const myNumber2 = process.argv[3]
const myNumber3 = process.argv[4]

//je teste mes valeurs
if(myNumber1 < myNumber2 && myNumber2 < myNumber3){
    console.log("Triée !")
} else if(typeof(myNumber2) === 'undefined' ){
    console.log("erreur.")

} else{
    console.log("Pas triée !")
}

