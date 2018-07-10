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
  return [kittens,name];
}