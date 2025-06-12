const {HomePage} = require('./home-page');
const {CatalogSearch} = require("./catalog-search-page");
const {ProductDetail}= require("./product-detail");
const {GlobalElements} = require("./global-elements");
const { browser, expect } = require('@wdio/globals')

describe("magento order suite", ()=>{

  it('should succeed adding item to cart with selected size and color', async () => {

    await HomePage.visitPage();
    await HomePage.searchForItem('Pierce');
    await expect(await CatalogSearch.getNthProduct(0)).toBeDisplayed();
    await CatalogSearch.getNthProduct(0).click();
    await ProductDetail.getSizeOption()[0].click();
    await ProductDetail.getColorOption()[0].click();
    await ProductDetail.fillQtyField(5);
    await ProductDetail.clickAddToCartButton();
    await expect(await GlobalElements.getCartCounter()).toHaveText('5');
  });
})