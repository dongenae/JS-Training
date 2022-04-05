// essayez d'utiliser l'opérateur spread et rest

// Fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
  return args.reduce((countObj, arg) => {
    countObj[arg] = arg in countObj ? countObj[arg] + 1 : 1;
    return countObj;
  }, {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// Fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  let indexOfRes = -1;
  let countedArgs = count(...args);
  Object.values(countedArgs).reduce(
    (higherNumberOfOccurences, value, index) => {
      if (value >= higherNumberOfOccurences) {
        indexOfRes = index;
        return value;
      }
      return higherNumberOfOccurences;
    },
    0
  );
  return Object.keys(countedArgs)[indexOfRes];
}

export function mostFrequentIn2(...args) {
  let countedArgs = count(...args);
  let maxNumber = Math.max(...Object.values(countedArgs));
  return Object.keys(countedArgs).find((res) => countedArgs[res] === maxNumber);
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
  "Chou";
