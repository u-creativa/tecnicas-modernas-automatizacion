// Ejercicio #2
var arrays = [1,[2,3],4,5,[6,[7]]];
function flat(data) {
  var a = []
  data.forEach(e => Array.isArray(e) ? a = a.concat(flat(e)) : a.push(e));
  return a;
}
// returns [1, 2, 3, 4, 5, 6, 7]

console.log (flat(arrays));

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, [('a', ['b', 2], 3, null, [[4], ['c']])]);
  }
// returns ['a', 'b', 2, 3, null, 4, 'c']
