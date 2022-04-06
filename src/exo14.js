export function Observable(action) {
  this.observers = [];
  action({
    emit: (value) => {
      // Notifier les observateurs de la valeur émise
      this.observers.forEach((observer) => {
        observer.onValue(value);
      });
    },
    complete: () => {
      // Notifier les observateurs de la complétion
      this.observers.forEach((observer) => {
        observer.onComplete();
      });
    }
  });
}

Observable.prototype.subscribe = function (observer) {
  // Enregistrer l'observateur
  this.observers.push(observer);
  observer.unsubscribe = () => {
    this.observers = this.observers.filter((o) => o !== observer);
  };

  /*
  // Ou sans arrow function, comme on fait function() on utilise le 
  // contexte de l'observer et non pas de l'observable
  
  const observableThis = this;
  observer.unsubscribe = function () {
    observableThis.observers = observableThis.observers.filter(
      (o) => o !== observer
    );
  };
  */
  return observer;
};

/* exemple d'usage: */
/*
const Loto = new Observable(function tirage ({ emit, complete }) {
  setTimeout(() => {
    emit(28)
    emit(16)
    emit(36)
    emit(42)
    complete()
  }, msAvantHeureDuTirage)
})

let michel = Loto.subscribe({
  onValue(numero){
    if(michel.numeros.includes(numero)) michel.numerosBons++;
  },
  onComplete(){
    alert(`Michel a eu ${michel.numerosBons} bons numéros`)
  }
})

michel.numeros = [7, 13, 36, 49]
michel.numerosBons = 0
if(michel.doitAllerQuelquePart) michel.unsubscribe()
*/
