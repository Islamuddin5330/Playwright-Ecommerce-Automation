const {addressPage} = require("./addressPage")

class productSummary{

    constructor(page){
        this.page = page;

        this.selectedProduct = page.locator("tbody tr");
        this.productName = page.locator("td.align-left");
        this.proceedBtn = page.locator("#checkoutBtn");

    }

    async getCheckSelectedProduct(shirtName){
        await this.selectedProduct.first().waitFor();
        const verifyProduct = await this.selectedProduct.count();

        console.log("Selected Products are :", verifyProduct);

        for(let i=0; i<verifyProduct; i++){
            const finalProductName = (await this.selectedProduct.nth(i).locator("td.align-left").textContent())?.trim();
            console.log("Cart Products:", finalProductName)

            if (shirtName.includes(finalProductName)) {
            console.log("Product matched: ", finalProductName)
        } else {
            console.log("Product not matched: ", finalProductName)
        }
        }
    }

    async getProceedBtn(){
        await this.proceedBtn.click();
        return new addressPage(this.page);
    }
}

module.exports = {productSummary};