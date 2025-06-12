const {$,$$} = require('@wdio/globals')

exports.InventoryPage = class InventoryPage{

    static clickNthAddToCartButton(index) {
        return $$('[data-test="inventory-item"] button')[index].click();
    }
    static getItemCount(){
        // return cy.get('[data-test="inventory-item"] button').its('length').as(indexVariable);
        return $$('[data-test="inventory-item"] button').length;
        
    }

    static getShoppingCartBadge(){
        return $('[data-test="shopping-cart-badge"]');
    }
}

exports.INVENTORY_PAGE_URL = "https://www.saucedemo.com/inventory.html"