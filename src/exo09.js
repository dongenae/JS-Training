// Retourner un nouvel objet avec les propriétés de l'objet data
// et ces valeurs par défaut pour les propriétés manquantes :

export function parseUserData(data) {
  // 1 - en utilisant Object.assign
  const defaults = { name: "Anonymous", isAdmin: false };
  return Object.assign({}, defaults, data);
}

export function parseUserData2(data) {
  // 2 - en utilisant l'opérateur spread sur les properties
  const defaults = { name: "Anonymous", isAdmin: false };
  return { ...defaults, ...data };
}

export function parseUserData3({
  name = "Anonymous",
  isAdmin = false,
  ...props
}) {
  // 3 - en utilisant le destructuring et les paramètres par défaut pour parseUserData
  return { name, isAdmin, ...props };
}
