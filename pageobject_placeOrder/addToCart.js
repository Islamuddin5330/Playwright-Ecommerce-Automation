const {productSummary} = require('./productSummary')

class addToCart{

    constructor(page){
        this.page = page;

        this.products = page.locator("div.product-item");

        this.cart = page.locator("#cartdesk");
    }

    async getSelectProduct(shirtName) {

        await this.products.first().waitFor();

        const countEachProduct = await this.products.count();

        console.log("Total product:", countEachProduct);

        for (let i = 0; i < countEachProduct; i++) {

            // Get current product card
            const product = this.products.nth(i);

            // Get product name from current card
            const productName = (
                await product.getByRole("link").first().textContent()
            )?.trim();

            console.log("Checking product:", productName);

            if (shirtName.includes(productName)) {

                // Click Add to Cart inside current product card
                await product.locator("button.addToCart").click();

                console.log("Product added:", productName);
            }
        }
    }

    async goToCart(){
        await this.cart.click();
        return new productSummary(this.page)
    }
}

module.exports = {addToCart};