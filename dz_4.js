/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.*/


function digit_in_obj(digit){
    digit = String(digit)
    digit = digit.split('').reverse()
    if (1<digit.length && digit.length<4){
        let text_dig = {
            'единицы': digit[0],
            'десятки': (digit[1] != undefined) ? (digit[1]) : (0),
            'сотни':(digit[2] != undefined) ? (digit[2]) : (0)}
        
        console.log(text_dig)
        
        
    } else{
        console.log('введено некорректное значение')
    }
    
}
digit_in_obj(375)
digit_in_obj(35)

/*2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

var basket  = {
    summ: 0,
    items: [],
    append: function(item){this.items.push(item)},
    get_size: function (){return this.items.length},
    get_items: function () {return this.items},
    all_cost: function () {
        for (var i in this.items){
            if (i != undefined) {this.summ += this.items[i].cost}
        }
    return this.summ
    }

}
var it = {name: 'Пицца', cost:150}
var it2 = { name: 'Машина', cost: 1500 }
basket.append(it)
basket.append(it2)
console.log(basket.get_size())
console.log(basket.get_items())
console.log(basket.all_cost())

/*3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в
интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к
тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
разных местах давал возможность вызывать разные методы.
*/
class Product {
    constructor(name) {
        this.cost = 0;
        this.name = name;
    }
    price(cost) {
        this.cost = cost;
        console.log(`${this.name} стоит ${this.cost}.`);
    }
    stop() {
        this.cost = 0;
        console.log(`${this.name} останавливается.`);
    }
    drive() {
        console.log(`${this.name} едет!`);
    }
}


class Car extends Product {
    colored(color){
        this.color = color
        console.log(`машина покрашена в ${this.color} цвет`)
    }
    
}

let ar = new Car("Test_car")
ar.price(2000)
ar.colored('blue')