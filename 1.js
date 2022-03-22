/*Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf —
температура по Фаренгейту, Tc — по Цельсию.
*/

var degreeCelsius = 5

function func(cel) {
    return (9/5)*cel+32
}
alert(func(degreeCelsius))
console.log(func(degreeCelsius))