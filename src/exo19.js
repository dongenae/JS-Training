export const addAliasForProperties = (object, alias) => {
  // Retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    get(obj, prop) {
      return Reflect.get(obj, prop in alias ? alias[prop] : prop);
    },
    set(obj, prop, valeur) {
      return Reflect.set(obj, prop in alias ? alias[prop] : prop, valeur);
    },
    has(obj, prop) {
      return Reflect.has(obj, prop) || Reflect.has(obj, alias[prop]);
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // Retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // à récupérer via fn.count
  let compteur = 0;
  return new Proxy(fn, {
    apply(fn, thisArg, tabArgs) {
      ++compteur;
      return Reflect.apply(fn, thisArg, tabArgs);
    },
    get(fn, prop) {
      return prop === "count" ? compteur : Reflect.get(fn, prop);
    }
  });
};

// exemple d'utilisation:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
