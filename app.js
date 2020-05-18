//Task 3
const arrTaskThree = [1, 2, 3, 4, 5];
console.log("Последний элемент массива .pop - " + arrTaskThree.pop(3));//вырезаем последний элемент
console.log("Последний элемент массива .splice (массив стал меньше (-1) после .pop - " + arrTaskThree.splice(3, 1));

let pushArr = arrTaskThree.push(333); //добавляет значение в конец массива
// console.log(arrTaskThree.splice(0,4,444));

//shift
console.log(arrTaskThree.shift(0));// вырезаем первый элемент
console.log(arrTaskThree.splice(0,1));//  вырезаем первый элемент с помощью slice
//unshift

console.log(arrTaskThree.unshift(111));// добавили 1 элемент к массиву
console.log(arrTaskThree.splice(0,4));

//concat
let mas1=[122, 44, 22], mas2=[99, 2466, 25, 21];
let newMas= mas1.concat(mas2);
console.log(newMas);
let newMasSplice = mas1.slice(0) + mas2.slice(0);
console.log(newMasSplice);