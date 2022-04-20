let toBasketBtns = document.querySelectorAll('.toBasketBtn');
toBasketBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name });
    });
});

function get_prod_name() {
    const entities = ['phone', 'Notebook', 'tv'];
    const colors = ['Samsung', 'Lg', 'Abble', 'Sony'];
    return colors[randomInt(0, colors.length - 1)] + ' ' + entities[randomInt(0, entities.length - 1)];
    
}


function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function render_prod_name() {
    let all_names = document.querySelectorAll('.prod_name')
    for (i=0;i<all_names.length;i++){
        all_names[i].textContent = this.get_prod_name()
    }
}

render_prod_name()



let basket = {
    products: {},
    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    },

    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },


    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },


    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th scope = "row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', productRow);
    },
};