const {HomePage,HOME_URL,} = require('./home-page')
const { browser, expect } = require('@wdio/globals')
const {CatalogSearch} = require("./catalog-search-page")

describe("magento search function", ()=>{
    it("using jacket as keyword should return relevant products",async()=>{
        await HomePage.visitPage()
        expect(browser).toHaveUrl(HOME_URL);
        await HomePage.searchForItem("jacket");
        expect(browser).toHaveUrl(/CatalogSearch/)
        await expect(CatalogSearch.getNthProduct(0)).toHaveText(/Jacket/)
    })

})