export const range = (start, end) => {
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          return {
            done: start > end,
            value: start++
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
      while (start <= end) yield start++;
    }
  };
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
