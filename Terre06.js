//je récupère deux arguments
const number1 = process.argv[2]
const number2 = process.argv[3]
//je divise entre eux ces deux arguments
//j'affiche le résultat et le reste de la division
if(number1 > number2 && (number2 > 0)){
    const result = number1 / number2
    const rest = number1 % number2
    console.log("résultat: " + result)
    console.log("reste " + rest)
} else{
    console.log("erreur")
}
