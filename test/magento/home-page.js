const { browser, expect, $, $$ } = require('@wdio/globals')

exports.HomePage = class HomePage{
    static async searchForItem(keyword){
        await $('#search').setValue(keyword);
        return await browser.keys("Enter");
    }

    static visitPage(){
        return browser.url("https://magento.softwaretestingboard.com/")
        // await this.page.goto("https://magento.softwaretestingboard.com/")
    }
}

exports.HOME_URL = "https://magento.softwaretestingboard.com/"