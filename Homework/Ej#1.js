// Ejercicio #1
function flatten(numbers) {
    if (numbers.some(number => Array.isArray(number))){
        const results = [...numbers.flat()];
        return flatten(results);
    }
    return numbers;
}