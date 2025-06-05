const {$,$$} = require('@wdio/globals')

exports.CartPage = class CartPage{

    static clickNthRemoveItemButton(index){
        return $$('[data-test="inventory-item"] button')[index].click();
    }

    static getItemCount(){
        return $$('[data-test="inventory-item"] button').length;
    }

    static async clickCheckoutButton(){
        return await $('[data-test="checkout"]').click();
    }

}

exports.CART_PAGE_URL = "https://www.saucedemo.com/cart.html"