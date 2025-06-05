const { browser, expect, $ } = require('@wdio/globals')

exports.LoginPage = class LoginPage{
    static async goto(){
        browser.url('https://www.saucedemo.com/')
        // const loginLogo = await $('.login_logo')
        await expect(await $('.login_logo')).toHaveText("Swag Labs")
    }

    static async writeUserName(username){
        await $('[data-test="username"]').setValue(username)
    }

    static async writePassword(password){
        await $('[data-test="password"]').setValue(password)
    }

    static async clickLoginButton(){
        await $('[data-test="login-button"]').click()
    }

} 