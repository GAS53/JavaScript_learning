// 1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; //alert(c);      // 2 т.к. сначала было увеличено а потом присвоено с
d = b++; //alert(d);      // 1 значение d снача было присвоено 1 а потом уже увеличено
c = (2 + ++a); //alert(c);// 5 (2 + 2 увеличенное до сложения на 1)
d = (2 + b++); //alert(d);// 4 (2 + 2 после сложения b увеличить на 1)
//alert(a);               // 3 1 - было присвоено ++а и ++а 
//alert(b);               // 3 1 - было присвоено b++ и b++ 

//2 Чему будет равен x?
var a = 2;
var x = 1 + (a *= 2); // 5
// console.log(x)


/*3 Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму;
*/

var a = 5
var b = -3
function func(a, b){
    if (a>=0 && b>=0){
        return a - b
    }else if (a<0 && b<0) {
        return a*b
    } else if (a<0 && b>=0 || a>=0 && b<0){
        return a+b
    }
}

var res = func(a,b)
// console.log(res)

/*4 Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.*/

// var a = 7
switch (true) { 
    case (a == 0): console.log(0) 
    case (a == 1):  console.log(1) 
    case (a == 2):  console.log(2) 
    case (a == 3):  console.log(3) 
    case (a == 4):  console.log(4) 
    case (a == 5):  console.log(5) 
    case (a == 6):  console.log(6) 
    case (a == 7):  console.log(7) 
    case (a == 8):  console.log(8) 
    case (a == 9):  console.log(9) 
    case (a == 10):  console.log(10) 
    case (a == 11):  console.log(11) 
    case (a == 12):  console.log(12) 
    case (a == 13):  console.log(13) 
    case (a == 14):  console.log(14) 
    case (a == 15):  console.log(15) 
}


/*5 Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.*/

function summ(a,b){
    return a+b
}
function mul(a,b){
    return a*b
}
function diff(a,b){
    return a-b
}
function div(a,b){
    return a/b
}
// console.log(`summ(2,4) ${summ(2,4)}`)
// console.log(`mul(2,4) ${mul(2, 4)}`)
// console.log(`diff(2,4) ${diff(2, 4)}`)
// console.log(`div(2,4) ${div(2, 4)}`)

/*6  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции.зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).*/

function mathOperation(arg1, arg2, operation){
    switch (true){
        case (operation == '+'): return arg1 + arg2
        case (operation == '-'): return arg1 - arg2
        case (operation == '*'): return arg1 * arg2
        case (operation == '/'): return arg1 / arg2
    }
}
// console.log(mathOperation(2,4,'-'))
// console.log(mathOperation(2, 4, '*'))
// console.log(mathOperation(2, 4, '/'))
// console.log(mathOperation(2, 4, '+'))

/*7 Сравнить null и 0. Объяснить результат.*/
console.log(null == 0)
console.log(null === 0)
// null Не является числом и приведение к числу здесь не работает


/*8 С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень.*/

function pow_(val,pow){
    if (pow == 1){return val}
    else if (pow == 0) {return 1}
    if (pow>0) {
        return val*pow_(val, pow - 1) }
    else if (pow<0){
        return 1/val * pow_(val, pow + 1) }
}

console.log(pow_(2,-4))