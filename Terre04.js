const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//Je récupère mon argument dans le terminal
const myLetter = process.argv[2]
console.log('Vous avez choisi la lettre: ' + myLetter)
//Ensuite j'applique le même code que l'exo 1
//mais à partir de la lettre entrée dans le terminal
let AZ = "" 
for(let i = alphabet.indexOf(myLetter);i< alphabet.length; i++){
AZ += alphabet[i]
}
console.log(AZ)
