function destructivelyAppendKitten (name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten () {
  kittens.shift ();
}
function appendKitten(name) {
  kittens.concat(name);
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten () {
  kittens.slice(-1);
}
function removeFirstKitten () {
  kittens.splice(1);
}