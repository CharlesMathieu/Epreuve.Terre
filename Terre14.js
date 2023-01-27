//je récupère mes 3 valeurs à évaluer
const myNumber1 = process.argv[2]
const myNumber2 = process.argv[3]
const myNumber3 = process.argv[4]
//je teste les valeurs et je console.log la valeur
//du milieu 
if((myNumber1 < myNumber2 && myNumber1 > myNumber3)||(myNumber1 > myNumber2 && myNumber1 < myNumber3)){
    console.log(myNumber1)
} else if((myNumber2 < myNumber1 && myNumber2 > myNumber3)||(myNumber2 > myNumber1 && myNumber2 < myNumber3)){
    console.log(myNumber2)
} else if((myNumber3 < myNumber1 && myNumber3 > myNumber2)||(myNumber3 > myNumber1 && myNumber3 < myNumber2)){
    console.log(myNumber3)
} else{
    console.log("erreur.")
}
