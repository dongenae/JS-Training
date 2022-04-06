export function Person(first, name) {
  // Assigner first et name comme propriétés propres
  this.first = first;
  this.name = name;
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // Appeler le constructeur Person avec le bon contexte d'éxécution
  // Assigner rights comme propriété propre
  Person.call(this, first, name);
  this.rights = rights;
}

// Définir Person.prototype comme prototype de User.prototype
Object.setPrototypeOf(User.prototype, Person.prototype);

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);
