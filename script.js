// // Сума всіх цифр від 1 до 100
// let i = 0, summary = 0;
// while (i < 100) {
//     summary += i;
//     i++;
// }
// console.log(`Summary of digits from 1 to 100 is ${summary} .`);

// //  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
// let firstArray = [1, 2, 3, 4, 5];
// console.log('Array elements:')
// for (let j = 0; j < firstArray.length; j++) {
//     console.log(firstArray[j]);
// }

// //Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
// let secondArray = [-1, 22, 3, 44, 5];
// let max = secondArray[0];
// console.log(`Array: ${secondArray}`);
// for (let k = 1; k < secondArray.length; k++) {
//     if (secondArray[k] > max) {
//         max = secondArray[k];
//     }
// }
// console.log(`The max element of array is ${max} .`);

// Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. 
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.
// let digit = [],
//     zero = 0, positive = 0, negative = 0;
// for (let l = 0; l < 8; l++) {
//     digit[l] = +prompt('Please, write any number.');
//     if (digit[l] === 0) {
//         zero++;
//     }
//     if (digit[l] > 0) {
//         positive++;
//     }
//     if (digit[l] < 0) {
//         negative++;
//     }
// }
// console.log(`Users numbers: ${digit}`);
// console.log(`You write null ${zero} times, positive numbers ${positive} times, negative numbers ${negative} times.`);

// Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
// const constDigit = 8;
// let result;
// console.log(`Multiplication table for the number ${constDigit} :`);
// for (let m = 1; m <= 9; m++) {
//     result = constDigit * m;
//     console.log(`       ${constDigit} * ${m} = ${result} `);
// }

// Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
// let thirdArray = [2, 5, 9, 15, 0, 4];
// console.log(`Elements of array: ${thirdArray} that are greater than 3 and less than 10:`);
// for (let n = 0; n < thirdArray.length; n++) {
//     if (thirdArray[n] > 3 && thirdArray[n] < 10) {
//         console.log(thirdArray[n]);
//     }
// }

//Створити калькулятор який буде зациклений. 
//Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
let firstNum, sign, secondNum, calculate, repeat;
do {
    firstNum =+prompt('Please, write the first number.'),
    sign =prompt('Please, write arithmetic sign.'),
    secondNum =+prompt('Please, write the second number.');
    switch (sign) {
        case "+":
            calculate = firstNum + secondNum;
        break;
        case "-":
            calculate = firstNum - secondNum;
        break;
        case "*":
            calculate = firstNum * secondNum;
        break;
        case "/":
            calculate = firstNum / secondNum;
        break;
        default:
            alert( 'You write incorrect sign, please restart page and try again.' );
            sign = '?';
    }
    repeat = confirm(`${firstNum} ${sign} ${secondNum} = ${calculate}   Do you want to use calculator again?`);
} while (repeat);