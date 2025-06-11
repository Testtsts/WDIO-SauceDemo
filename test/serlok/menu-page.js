const { browser } = require('@wdio/globals')
const {$,$$} = require('@wdio/globals')

exports.MenuPage = class MenuPage{

    static goto(){
        return browser.url("https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein");
    }

    static typeTableNumField(tableNumber){
        return $('#table-name-input').setValue(tableNumber)
    }

    static inputTableNumField(){
        return $('#submit-table-button > .mat-mdc-button-touch-target').click();
    }

    static continueAsGuest(){
        return $(`//*[contains(@class, 'mat-ripple') and contains(text(), 'Guest')]`).click();
    }

    static selectMenuCategory(index){
        return $(`.menu-category-container > :nth-child(${index})`).click();
    }

    static searchMenuItem(searchKeyword){
        $('[aria-label="search-button"]').click();
        return $('.search-input').setValue(searchKeyword);
    }

    static addNthItemToCart(itemIndex){
        return $$('//*[contains(@class, "mdc-button__label") and contains(text(), "Add")]')[itemIndex].click();
    }

    static goToCart(){
        return $('#itemsCart').click();
    }

    static continuePayment(){
        return $('.mt-2 > .mat-mdc-button-touch-target').click();
    }

    static getTableNum(){
        return $('#table-name-input');
    }

    static getPayButton(){
        return $('#p-payment');
    }
}

exports.ONLINE_ORDER_URL = "https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein"