const { homePage } = require("./homePage");

class loginPage{

    constructor(page){
        this.page = page;

        this.userName = page.locator("#email");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#loginBtn");
    }

    async goTo(){
        await this.page.goto("https://shop.qaautomationlabs.com/?utm_source=chatgpt.com");
    }

    async getLogin(username,passwd){
        await this.userName.fill(username);
        await this.password.fill(passwd);
        await this.loginBtn.click();
        await this.page.waitForLoadState("networkidle");

        return new homePage(this.page);
    }
}

module.exports = {loginPage};