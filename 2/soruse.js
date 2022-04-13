var basket = {
    summ: 0,
    items: [],
    append: function (item) { this.items.push(item) },
    get_size: function () { return this.items.length },
    get_items: function () { return this.items },
    all_cost: function () {

        for (var i in this.items) {
            if (i != undefined) { this.summ += this.items[i].cost }
        }
        if (this.summ == 0) {
            return 'корзина пуста'
        } else{
           return this.summ 
        }
        
    }

}

// var it = { name: 'Пицца', cost: 150 }
// var it2 = { name: 'Машина', cost: 1500 }
// basket.append(it)
// basket.append(it2)

function drawBoard() {
    alert(basket.all_cost())
}

drawBoard()