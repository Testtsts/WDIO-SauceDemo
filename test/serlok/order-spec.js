const { browser, expect } = require('@wdio/globals')
const {MenuPage,ONLINE_ORDER_URL} = require('./menu-page.js')


describe('serlok online order menu', ()=>{
    it("should be able to see order summary", async ()=>{
        
        await MenuPage.goto();
        await MenuPage.typeTableNumField("180");
        await MenuPage.inputTableNumField();
        await MenuPage.selectMenuCategory(3);
        await MenuPage.searchMenuItem("ayam");
        await MenuPage.addNthItemToCart(0);
        await MenuPage.addNthItemToCart(1);
        await MenuPage.goToCart();
        await expect(browser).toHaveUrl(/view-order/);
        await MenuPage.continuePayment();
        await expect(browser).toHaveUrl(/payment/);
        await MenuPage.continueAsGuest();
        await expect(MenuPage.getTableNum()).toHaveValue('180');
        await expect(MenuPage.getPayButton()).toBeDisplayed();
    })
})