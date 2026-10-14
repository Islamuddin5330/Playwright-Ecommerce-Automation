class addressPage {

    constructor(page) {
        this.page = page;

        // Store locators only
        this.firstname = page.locator("#firstname");
        this.middlename = page.locator("#middlename");
        this.lastname = page.locator("#lastname");
        this.email = page.locator("#email");
        this.phone = page.locator("#phone");
        this.address = page.locator("#address");
        this.states = page.locator("#states");
        this.city = page.locator("#city");
        this.pincode = page.locator("#pincode");

        this.price = page.locator("#totalPrice");

        this.continue = page.getByTestId("continue-btn");
        this.placeOrder = page.getByTestId("place-order-btn");

        // Add this
        this.orderConfirmation = page.locator("div h1");
    }

    async fillAllAddressDetails(first, middle, last, em, ph, add, st, ct, pi) {

        await this.firstname.fill(first);
        await this.middlename.fill(middle);
        await this.lastname.fill(last);
        await this.email.fill(em);
        await this.phone.fill(ph);
        await this.address.fill(add);
        await this.states.fill(st);
        await this.city.fill(ct);
        await this.pincode.fill(pi);
    }

    async getTotalPrice() {
        return await this.price.textContent();
    }

    async continueBtn() {
        await this.continue.click();
    }

    async getPlaceOrder() {
        console.log("Clicking Place Order...");
        
        await this.placeOrder.click();

        console.log("Waiting for order confirmation...");
        await this.orderConfirmation.waitFor();

        console.log(
            "Confirmation text:",
            await this.orderConfirmation.textContent()
        );
    }
}

module.exports = { addressPage };