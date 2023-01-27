//effectuer une exponentiation
const myNumber = process.argv[2]
const exposant = process.argv[3]
if(exposant > 0){
const result = myNumber**exposant
console.log(result)
} else {
    console.log("Erreur, l'exposant ne peut pas être négatif.")
}
