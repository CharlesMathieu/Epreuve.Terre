//trouver la racine carrée d'un nombre
var nb = 25
var cur = nb;
for(var i=0;i<10;i++) {
  cur = cur/2 + nb/(cur*2);
}
console.log("La racine carrée de " + nb + " est " + cur + ".")
