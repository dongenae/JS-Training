// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  return (
    (typeof x !== "object" && typeof x !== "function") ||
    x === undefined ||
    x === null
  );
}
