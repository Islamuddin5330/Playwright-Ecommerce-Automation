const {expect} = require("@playwright/test");

const {addToCart} = require("./addToCart");

class homePage {

    constructor(page) {
        this.page =page;
        this.Menswear = page.locator("#qaNav");
        this.menswearBtn = page.getByRole("link", { name: "Shop Men Fashion" });
    }

    async getSelectMensWear(verify) {
        await expect(this.Menswear).toContainText(verify);
        console.log("Login successful");
        // Go to Shop
        await this.menswearBtn.click();
        await this.page.waitForLoadState("domcontentloaded");

        return new addToCart(this.page);
    }
}

module.exports = {homePage};