const {$,$$} = require('@wdio/globals')

exports.CheckoutComplete = class CheckoutComplete{

    static getCompleteHeader(){
        return $('[data-test="complete-header"]');
        
    }

    static fillFirstName(firstName){
        return $('[data-test="firstName"]').setValue(firstName);
    }

    static fillLastName(lastName){
        return $('[data-test="lastName"]').setValue(lastName);
    }

    static fillPostalCode(postalCode){
        return $('[data-test="postalCode"]').setValue(postalCode);
    }
    
    static clickContinueButton(){
        return $('[data-test="continue"]').click();
    }

    static clickFinishButton(){
        return $('[data-test="finish"]').click();
    }

}

exports.CHECKOUT_COMPLETE_URL = "https://www.saucedemo.com/checkout-complete.html"

exports.ORDER_COMPLETED_STRING = "Thank you for your order!";

exports.CHECKOUT_ONE_URL = "https://www.saucedemo.com/checkout-step-one.html"

exports.CHECKOUT_TWO_URL = "https://www.saucedemo.com/checkout-step-two.html"