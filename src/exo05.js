const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export const instructions = [];

// TOFIX: imprimer la chanson correctement
for (let i = 0; i < paroles.length; i++) {
  instructions.push(function printNextLine() {
    return paroles[i] + ", " + paroles[i];
  });
}

/* Le "let" défini un scope pour le i limité au tour de boucle 
en cours donc chaque tour de boucle va définir une closure avec 
la valeur actuelle du i. Tandis que le "var" définit un i global 
à tous les tours de boucle donc chaque fonction générée par le for 
pointera sur le même objet en mémoire. */

// code de test, à essayer en console pour voir le problème
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/
