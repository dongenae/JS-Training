export const range = (start, end) => {
  return {
    [Symbol.iterator]: function () {
      let currentValue = start;
      return {
        next() {
          return {
            done: currentValue > end,
            value: currentValue++
          };
        }
      };
    }
  };
};

/* Méthode avec une fonction* yield (plus concise mais peut être un peu 
moins claire quand on maitrise pas) */
export const range2 = (start, end) => {
  return {
    [Symbol.iterator]: function* () {
      let currentValue = start;
      while (currentValue <= end) yield currentValue++;
    }
  };
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
