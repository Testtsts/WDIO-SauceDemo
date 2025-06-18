const {fakerID_ID: faker} = require('@faker-js/faker');
const {HOMEPAGE_URL, DemoBlazePom} = require("./pom");
const {$,$$,browser, expect} = require('@wdio/globals')

describe("Demo blaze order", ()=>{
    beforeEach(async()=>{
        await DemoBlazePom.visit();
        expect(browser).toHaveUrl(HOMEPAGE_URL);
    })
    it("should success order item from cart", async()=>{
        await DemoBlazePom.selectItemByName("Samsung galaxy s6");
        await DemoBlazePom.addToCart();
        // await DemoBlazePom.clickHomeButton();
        // await DemoBlazePom.selectItemByName("Nokia lumia 1520");
        // await DemoBlazePom.addToCart();
        await DemoBlazePom.goToCart();
        await expect(DemoBlazePom.getTotalPrice()).toHaveText("360");
        await DemoBlazePom.placeOrder();
        await DemoBlazePom.fillName(faker.person.fullName())
        await DemoBlazePom.fillCountry("Indonesia");
        await DemoBlazePom.fillCity(faker.location.city());
        await DemoBlazePom.fillCard(faker.finance.accountNumber());
        await DemoBlazePom.fillMonth(faker.date.month());
        await DemoBlazePom.fillYear("2030");
        await DemoBlazePom.clickPurchase();
        await DemoBlazePom.closeOrderSummary();
        await DemoBlazePom.visit();
        await DemoBlazePom.goToCart();
        await expect(DemoBlazePom.getTotalPrice()).toHaveText('')
    })

    it("should success delete item from cart", async ()=>{
        await DemoBlazePom.selectItemByName("Samsung galaxy s6");
        await DemoBlazePom.addToCart();
        await DemoBlazePom.clickHomeButton();
        await DemoBlazePom.selectItemByName("Sony xperia z5");
        await DemoBlazePom.addToCart();
        // await DemoBlazePom.clickHomeButton();
        // await DemoBlazePom.selectItemByName("HTC One M9");
        // await DemoBlazePom.addToCart();
        // await DemoBlazePom.clickHomeButton();
        // await DemoBlazePom.selectItemByName("Nexus 6");
        // await DemoBlazePom.addToCart();
        await DemoBlazePom.goToCart();
        await expect(DemoBlazePom.getTotalPrice()).toHaveText("680");
        await DemoBlazePom.removeItemFromCartByName("Samsung galaxy s6")
        await expect(DemoBlazePom.getTotalPrice()).toHaveText("320");
    })
})