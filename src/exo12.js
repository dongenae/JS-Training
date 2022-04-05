export function PubSub() {
  this.events = new Map();
}

PubSub.prototype.on = function (event, callback) {
  // Enregistrer le callback à déclencher suite à l'événement `event`
  if (this.events.get(event)) {
    this.events.get(event).push(callback);
  } else {
    this.events.set(event, [callback]);
  }
  // ou avec un opérateur ternaire
};

PubSub.prototype.emit = function (event, data) {
  // Appeler les callbacks enregistrés pour l'événement `event`
  this.events.get(event).forEach((callback) => callback(data));
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements => pas trop compris l'énoncé

PubSub.prototype.off = function (event, callback) {
  const eventConcerned = this.event.get(event);
  if (eventConcerned) {
    let newCallbacks = [];
    eventConcerned.forEach(function (myCallback) {
      if (callback !== myCallback) {
        newCallbacks.push(myCallback);
      }
    });
    this.event.set(event, newCallbacks);
  }
};
