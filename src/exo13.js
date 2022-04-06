// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // Retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(function callback(error, result) {
        error ? reject(error) : resolve(result);
      }, ...args);
    });
  };
  /* NB : pas super utile à savoir en pratique mais intéressant,
   ce qu'il faut retenir c'est qu'on peut convertir des callbacks 
  en Promise qui sont beaucoup plus pratiques */
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(100)
  .then(() => {
    console.log("1");
    return wait(100);
  })
  .then(() => {
    console.log("2");
    return wait(100);
  })
  .then(() => {
    console.log("3");
  })
  .catch((error) => {
    console.error("Erreur: " + error);
  });
