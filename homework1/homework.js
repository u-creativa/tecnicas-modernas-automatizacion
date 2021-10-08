// #1
// ['a','a','a', 'b','b','c','a','b', 'b','c'] -->
// [['a',3],['b',2],['c',1],['a',1],['b',2],['c',1]]

function uniqC(...values) {
  return getSubArrays(...values).map((subArray) => [...new Set(subArray), subArray.length]);
}

function getSubArrays(...values) {
  let start = 0;
  let end = 0;
  const subValues = [];
  for (let index = 0; index < values.length; index++) {
    if (values[index] === values[index + 1]) end++;
    else {
      subValues.push(values.slice(start, end + 1));
      start = end + 1;
      end = start;
    }
  }
  return subValues;
}

// console.log(uniqC('a', 'a', 'a', 'b', 'b', 'c', 'a', 'b', 'b', 'c'));

// #2
[1, [2, 3], 4, 5, [6, [7, [8, [9, [10, [11, [12]]]]]]]];
[1, [2, 3], 4, 5];
// Recursividad
function myFlat(values) {
  // if (values.some(Array.isArray)) {
  //   return myFlat([...values.flat()]);
  // } else {
  //   return values;
  // }
  return values.some(Array.isArray) ? myFlat([...values.flat()]) : values;
}
console.log(myFlat(['a', ['b', 2], 3, null, [[4], ['c']]]));
