var kittens = ["Milo","Otis","Garfield"];
function destructivelyAppendKitten (name){
  kittens.push("Ralph");
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name){
  kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift("Milo")
}
function appendKitten(name){
  return [...kittens,"Broom"]
}
function prependKitten(name){
  return ["Arnold",...kittens]
}