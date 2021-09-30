// Ejercicio #1
//Este comando toma por entrada una secuencia y devuelve otra secuencia en la cual todos los elementos duplicados 

function flatten(numbers) {
    if (numbers.some(number => Array.isArray(number))){
        const results = [...numbers.flat()];
        return flatten(results);
    }
    return numbers;
}
