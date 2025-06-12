const { browser, expect, $, $$ } = require('@wdio/globals')

exports.GlobalElements = class GlobalElements{
    static getShowCart() {
        return $('.action.showcart');
    }

    static getCartCounter() {
        return $('.counter-number');
    }

}