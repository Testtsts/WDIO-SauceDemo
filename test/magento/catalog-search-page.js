const { browser, expect, $, $$ } = require('@wdio/globals')


exports.CatalogSearch = class CatalogSearch{
    static getNthProduct(index){
        return $$('.product-item-link')[index];
    }
}

exports.HOME_URL = "https://magento.softwaretestingboard.com/"