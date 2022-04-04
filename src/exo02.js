// retourne true si l'objet a une propriété ayant comme clé key
export function hasProperty(obj, key) {
  /* Mauvaise solution : si on fait manuellement : 
      obj.key = undefined
    alors la propriété existe encore mais pourtant le test renverra
  false, le "in" semble plus représentatif de l'état réel de l'objet  */
  // return obj[key] !== undefined;

  /* Liste uniquement les clés propres et énumérables */
  // return Object.keys(obj).indexOf(key) !== -1;
  // return Object.keys(obj).includes(key);

  return key in obj;
}

// retourne true si l'objet a une propriété ayant comme valeur value
export function hasPropertyValue(obj, value) {
  /* Liste uniquement les values propres et énumérables */
  // return Object.values(obj).indexOf(value) !== -1;
  // return Object.values(obj).includes(value);

  for (let k in obj) {
    if (obj[k] === value) {
      return true;
    }
  }
  return false;
}

// retourne le nombre de propriétés d'un objet (note: sans compter les propriétés déléguées)
export function getNumberOfProperties(obj) {
  return Object.keys(obj).length;
  // return Object.values(obj).length;
  // return Object.entries(obj).length;
}
