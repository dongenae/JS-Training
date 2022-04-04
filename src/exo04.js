export function watchProperty(obj, prop, onRead, onWrite) {
  // changer le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - onRead() lorsque la propriété prop est accédée
  // - onWrite(newValue) lorsque la propriété prop est modifiée
  // ces fonctions sont juste des observateurs et n'ont pas de valeur de retour
  // or il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let propValue = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function () {
      onRead();
      return propValue;
    },
    set: function (value) {
      onWrite(value);
      propValue = value;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  let reg = /[A-Z]/;
  for (let key in obj) {
    if (key[0] === "_") {
      Object.defineProperty(obj, key, {
        enumerable: false
      });
    } else if (reg.test(key[0])) {
      Object.defineProperty(obj, key, {
        writable: false,
        configurable: false
      });
    }
  }
}

/*
  Solution plus élégante et plus concise
*/
export function setPrivatesAndConstants2(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  let reg = /[A-Z]/;
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      enumerable: key[0] !== "_",
      writable: !reg.test(key[0]),
      configurable: !reg.test(key[0])
    });
  }
}
