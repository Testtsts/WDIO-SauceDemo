const {fakerID_ID: faker} = require('@faker-js/faker');
const {LoginPage} = require("./login-page")
const {InventoryPage, INVENTORY_PAGE_URL} = require('./inventory-page');
const { browser, expect } = require('@wdio/globals')
const {CartPage, CART_PAGE_URL} = require("./cart-page");
const {CheckoutComplete, CHECKOUT_COMPLETE_URL, CHECKOUT_ONE_URL, CHECKOUT_TWO_URL, ORDER_COMPLETED_STRING} = require('./checkout-process');

const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";

describe('Sauce Demo order item', () => {
    it('Should be able to checkout', async () => {
        // Go to login page
        await LoginPage.goto();
        await LoginPage.writeUserName(STANDARD_USERNAME);
        await LoginPage.writePassword(GENERIC_PASSWORD);
        await LoginPage.clickLoginButton();
        await expect(browser).toHaveUrl(INVENTORY_PAGE_URL);
        const availableItemCount = await InventoryPage.getItemCount();
        let randomIndex1 = Math.floor(Math.random() * availableItemCount);
        let randomIndex2 = Math.floor(Math.random() * availableItemCount);
        // console.log("\n----")
        // console.log(availableItemCount,randomIndex1,randomIndex2)
        while (randomIndex1 === randomIndex2) {
            randomIndex2 = await Math.floor(Math.random() * availableItemCount);
        }
        await InventoryPage.clickNthAddToCartButton(randomIndex1);
        await InventoryPage.clickNthAddToCartButton(randomIndex2);
        // console.log("\n----")
        // console.log(availableItemCount,randomIndex1,randomIndex2)
        // await browser.debug(100)
        const badge = await InventoryPage.getShoppingCartBadge();
        await expect(badge).toHaveText('2');
        await badge.click();
        await expect(browser).toHaveUrl(CART_PAGE_URL);
        await CartPage.clickNthRemoveItemButton(0);
        const itemCount = await CartPage.getItemCount();
        expect(itemCount).toStrictEqual(1)
        await CartPage.clickCheckoutButton();
        await expect(browser).toHaveUrl(CHECKOUT_ONE_URL);
        await CheckoutComplete.fillFirstName(faker.person.firstName());
        await CheckoutComplete.fillLastName(faker.person.lastName());
        await CheckoutComplete.fillPostalCode(faker.location.zipCode());
        await CheckoutComplete.clickContinueButton();
        await expect(browser).toHaveUrl(CHECKOUT_TWO_URL);
        const badge2 = await InventoryPage.getShoppingCartBadge();
        await expect(badge2).toHaveText('1');
        await CheckoutComplete.clickFinishButton();
        await expect(browser).toHaveUrl(CHECKOUT_COMPLETE_URL);
        const header = await CheckoutComplete.getCompleteHeader();
        await expect(header).toHaveText(expect.stringContaining(ORDER_COMPLETED_STRING));
    });
});
