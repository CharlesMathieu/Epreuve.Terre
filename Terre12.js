const hour = process.argv[2]
const changeHour = hour.slice(0,2)
const resteHour = hour.slice(2,5)

if(changeHour == 00){
    console.log("12" + resteHour + "am")
} else if(changeHour == 01){
    console.log("1" + resteHour + "am")
} else if(changeHour == 02){
    console.log("2" + resteHour + "am")
} else if(changeHour == 03){
    console.log("3" + resteHour + "am")
} else if(changeHour == 04){
    console.log("4" + resteHour + "am")
} else if(changeHour == 05){
    console.log("5" + resteHour + "am")
} else if(changeHour == 06){
    console.log("6" + resteHour + "am")
} else if(changeHour == 07){
    console.log("7" + resteHour + "am")
} else if(changeHour == 08){
    console.log("8" + resteHour + "am")
} else if(changeHour == 09){
    console.log("9" + resteHour + "am")
} else if(changeHour == 10){
    console.log("10" + resteHour + "am")
} else if(changeHour == 11){
    console.log("11" + resteHour + "am")
} else if(changeHour == 12){
    console.log("12" + resteHour + "pm")
} else if(changeHour == 13){
    console.log("1" + resteHour + "pm")
} else if(changeHour == 14){
    console.log("2" + resteHour + "pm")
} else if(changeHour == 15){
    console.log("3" + resteHour + "pm")
} else if(changeHour == 16){
    console.log("4" + resteHour + "pm")
} else if(changeHour == 17){
    console.log("5" + resteHour + "pm")
} else if(changeHour == 18){
    console.log("6" + resteHour + "pm")
} else if(changeHour == 19){
    console.log("7" + resteHour + "pm")
} else if(changeHour == 20){
    console.log("8" + resteHour + "pm")
} else if(changeHour == 21){
    console.log("9" + resteHour + "pm")
} else if(changeHour == 22){
    console.log("10" + resteHour + "pm")
} else if(changeHour == 23){
    console.log("11" + resteHour + "pm")
} else if(changeHour == 24){
    console.log("12" + resteHour + "pm")
} else{
    console.log("Vous devez écrire l'heure.")
}



