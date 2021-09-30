const arr1 = ['super','bow','bowl','tar','get','book','let'],
      arr2 = ['bow','crystal','organic','ally','rain','line'],
      arr3 = ['top','main','tree','ally','fin','line'],
      arr4 = ['bel', 'bed', 'low', 'grab', 'be', 'knight']

describe("Should find the correct matching pairs and indices", function() {
  Test.assertDeepEquals(compoundMatch(arr1, 'superbowl'), ['super','bowl', [0,2]])
  Test.assertDeepEquals(compoundMatch(arr2, 'crystalline'), ['crystal','line', [1,5]])
  Test.assertDeepEquals(compoundMatch(arr2, 'rainbow'), ['bow','rain', [4,0]])
  Test.assertDeepEquals(compoundMatch(arr2, 'organically'), ['organic','ally', [2,3]])
  Test.assertDeepEquals(compoundMatch(arr3, 'mainline'), ['main','line', [1,5]])
  Test.assertDeepEquals(compoundMatch(arr3, 'treetop'), ['top','tree', [2,0]])
});

function compoundMatch(words,target){
    const arr1 = [];
    for (let i = 0; i <words.length; i++){
        if(target.includes(words[i])){
            arr1.push(words[i]);
        }
    }
    let part1;
    let part2;
    outer: for (let i = 0; i < arr.length; i++){
        if (target.includes(arr1[i])) {
            part1 = arr1[i];
            for (let j = 0; j < arr1.length; j++){
                if (target.replace(part1,) ===arr1[j]){
                    part2 = arr1[j];
                    break outer;

                }
            }
        }
}
if (part1 === undefined || part2 === undefined) {
    return null;
    }
    let indexes = part1 + part2 === target ? 
    [words.indexOf(part1), words.indexOf(part2)] : [words.indexOf(part2), words.indexOf(part1)];

    console.log([part1, part2, indexes]);
}