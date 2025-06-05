// const {fakerID_ID: faker} = require('@faker-js/faker');
const {LoginPage} = require("./login-page")
const {InventoryPage, INVENTORY_PAGE_URL} = require('./inventory-page');
const { browser, expect } = require('@wdio/globals')

const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";

describe('full flow', () => {
    it('e2e', async () => {
        // Go to login page
        await LoginPage.goto();
        // await LoginPage.writeUserName(STANDARD_USERNAME);
        // await LoginPage.writePassword(GENERIC_PASSWORD);
        // await LoginPage.clickLoginButton();
        // await expect(browser).toHaveUrl(INVENTORY_PAGE_URL);
        // const availableItemCount = await InventoryPage.getItemCount();
        // let randomIndex1 = Math.floor(Math.random() * availableItemCount);
        // let randomIndex2 = Math.floor(Math.random() * availableItemCount);
        // while (randomIndex1 === randomIndex2) {
        //     randomIndex2 = Math.floor(Math.random() * availableItemCount);
        // }

        // // Add two random items to cart
        // await InventoryPage.clickNthAddToCartButton(randomIndex1);
        // await InventoryPage.clickNthAddToCartButton(randomIndex2);

        // // Verify cart has 2 items
        // const badge = await InventoryPage.getShoppingCartBadge();
        // await expect(badge).toContain('2');

        // // Go to cart
        // await badge.click();
        // await expect(browser).toHaveUrl(CART_PAGE_URL);

        // // Remove 1st item
        // await CartPage.clickNthRemoveItemButton(0);
        // const itemCount = await CartPage.getItemCount();
        // // assert.strictEqual(itemCount, 1);

        // // Checkout
        // await CartPage.clickCheckoutButton();
        // await expect(browser).toHaveUrl(CHECKOUT_ONE_URL);

        // await CheckoutComplete.fillFirstName(faker.person.firstName());
        // await CheckoutComplete.fillLastName(faker.person.lastName());
        // await CheckoutComplete.fillPostalCode(faker.location.zipCode());
        // await CheckoutComplete.clickContinueButton();
        // await expect(browser).toHaveUrl(CHECKOUT_TWO_URL);

        // // Verify shopping cart still has 1 item
        // const badge2 = await InventoryPage.getShoppingCartBadge();
        // await expect(badge2).toHaveTextContaining('1');

        // // Finish
        // await CheckoutComplete.clickFinishButton();
        // await expect(browser).toHaveUrl(CHECKOUT_COMPLETE_URL);
        // const header = await CheckoutComplete.getCompleteHeader();
        // await expect(header).toHaveTextContaining(ORDER_COMPLETED_STRING);
    });
});
