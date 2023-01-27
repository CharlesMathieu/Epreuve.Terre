//J'utilise slice pour écrire à partir de l'index 2
//pour éviter d'avoir les noms de fichier inutiles
const myArray = process.argv.slice(2);

//Je boucle mon tableau pour avoir ses arguments 1 par 1
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
