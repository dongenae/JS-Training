// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let objRes = {};
  for (let key in obj) {
    objRes[obj[key]] = key;
  }
  return objRes;
}

/* Méthode plus courte mais un peu plus technique */
export function invertKeysAndValues2(obj) {
  return Object.entries(obj).reduce(function (acc, entry) {
    var key = entry[0],
      value = entry[1];
    acc[value] = key;
    return acc;
  }, {});
}

// ===============================================
// "Mauvaises solutions"
// ===============================================

/* Modifie l'objet initial, pas sur qu'on veuille une 
  méthode avec un effet de bord comme ça :D 
  + risque au niveau du delete si key === value 
  dans l'objet de base... Donc pas recommandé */
export function invertKeysAndValuesWithModif(obj) {
  for (let entry of Object.entries(obj)) {
    obj[entry[1]] = entry[0];
    delete obj[entry[0]];
  }
  return obj;
}
