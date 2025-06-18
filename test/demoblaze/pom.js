const {$,$$,browser} = require('@wdio/globals')

exports.DemoBlazePom = class DemoBlazePom{


    static visit(){
        return browser.url('https://www.demoblaze.com/')
    }

    static selectItemByName(itemName){
        return $(`.hrefch*=${itemName}`).click();
    }

    static addToCart(){
        return $(".btn.btn-success.btn-lg").click();
    }

    static goToCart(){
        return $("#cartur").click();
    }

    static removeItemFromCartByName(itemName){
        return $(`.success*=${itemName}`).$(`=Delete`).click();
    }

    static getTotalPrice(){
        return $("#totalp")
    }

    static placeOrder(){
        return $(".btn.btn-success").click();
    }

    static fillName(name){
        return $("#name").setValue(name);
    }
    
    static fillCountry(country){
        return $("#country").setValue(country);
    }

    static fillCity(city){
        return $('#city').setValue(city);
    }

    static fillCard(card){
        return $('#card').setValue(card)
    }

    static fillMonth(month){
        return $('#month').setValue(month)
    }

    static fillYear(year){
        return $('#year').setValue(year)
    }

    static clickPurchase(){
        // return $('//button[contains(@class, "btn-primary") and contains(text(), "Purchase")]').click();
        return $(".btn-primary*=Purchase").click();
        return $(".btn.btn-primary").$('*=Purchase').click();
        
    }

    static closeOrderSummary(){
        return $(".confirm.btn.btn-lg.btn-primary").click();
    }

    static clickHomeButton(){
        return $("#nava").click();
    }
    
}

exports.HOMEPAGE_URL = "https://www.demoblaze.com/"