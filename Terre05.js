const myNumber = process.argv[2]
const pair = myNumber % 2 === 0
//je vérifie si myNumber est un nombre avec else if
if(pair){
  console.log("pair")
} else if(isNaN(parseInt(process.argv[2]))){
  console.log("Tu croyais me la mettre à l'envers?")
} else{
  console.log("impair")
}
