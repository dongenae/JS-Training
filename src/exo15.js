export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// Assigner person comme prototype

// 1) avec Object.setPrototypeOf
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};
Object.setPrototypeOf(user, person);

// 2) avec Object.create et avec Object.assign
/* export const user = Object.create(person);
Object.assign(user, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});
*/

// Assigner user comme prototype

// 1) avec Object.setPrototypeOf
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};
Object.setPrototypeOf(bob, user);

// 2) avec Object.create et avec Object.assign
/* export const bob = Object.create(user);
Object.assign(bob, {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
}); */
