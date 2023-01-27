//variable pour prendre les éléments entrés en console
const hour = process.argv[2]
const changeHour = hour.slice(0,1)
const pmam = hour.slice(4,6)
const resteHour = hour.slice(1,4)
//je définie mes variables que je vais utiliser
//lorsque l'heure saisie dépasse 09
const hour10 = hour.slice(0,2)
const resteHour10 = hour.slice(2,5)
const pmam10 = hour.slice(5,7)


if(changeHour == 1 && pmam === "am" ){
    console.log("01" + resteHour)
} else if(changeHour == 2 && pmam === "am"){
    console.log("02" + resteHour )
} else if(changeHour == 3 && pmam === "am"){
    console.log("03" + resteHour )
} else if(changeHour == 4 && pmam === "am"){
    console.log("04" + resteHour )
} else if(changeHour == 5 && pmam === "am"){
    console.log("05" + resteHour )
} else if(changeHour == 6 && pmam === "am"){
    console.log("06" + resteHour )
} else if(changeHour == 7 && pmam === "am"){
    console.log("07" + resteHour )
} else if(changeHour == 8 && pmam === "am"){
    console.log("08" + resteHour )
} else if(changeHour == 9 && pmam === "am"){
    console.log("09" + resteHour )
} else if(hour10 == 10 && pmam10 === "am"){
    console.log("10" + resteHour10 )
} else if(hour10 == 11 && pmam10 === "am"){
    console.log("11" + resteHour10 )
} else if(hour10 == 12 && pmam10 === "am"){
    console.log("12" + resteHour10 )
} else if(changeHour == 1 && pmam === "pm"){
    console.log("13" + resteHour )
} else if(changeHour == 2 && pmam === "pm"){
    console.log("14" + resteHour )
} else if(changeHour == 3 && pmam === "pm"){
    console.log("15" + resteHour )
} else if(changeHour == 4 && pmam === "pm"){
    console.log("16" + resteHour )
} else if(changeHour == 5 && pmam === "pm"){
    console.log("17" + resteHour )
} else if(changeHour == 6 && pmam === "pm"){
    console.log("18" + resteHour )
} else if(changeHour == 7 && pmam === "pm"){
    console.log("19" + resteHour )
} else if(changeHour == 8 && pmam === "pm"){
    console.log("20" + resteHour )
} else if(changeHour == 9 && pmam === "pm"){
    console.log("21" + resteHour )
} else if(hour10 == 10 && pmam10 === "pm"){
    console.log("22" + resteHour10 )
} else if(hour10 == 11 && pmam10 === "pm"){
    console.log("23" + resteHour10 )
} else if(hour10 == 12 && pmam10 === "pm"){
    console.log("24" + resteHour10 )
}
 
