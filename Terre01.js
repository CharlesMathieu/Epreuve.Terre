const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let AZ = ''
//Je boucle mon tableau
//A chaque tour de boucle j'ajoute une lettre
//à ma variable AZ
for(let i = 0; i<alphabet.length; i++){
AZ += alphabet[i]
}
console.log(AZ)
