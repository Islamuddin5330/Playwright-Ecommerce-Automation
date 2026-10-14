import { test } from "@playwright/test";

const { loginPage } = require("../../pageobject_placeOrder/loginPage");
const { homePage } = require("../../pageobject_placeOrder/homePage");
const { addToCart } = require("../../pageobject_placeOrder/addToCart");
const { productSummary } = require("../../pageobject_placeOrder/productSummary");
const { addressPage } = require("../../pageobject_placeOrder/addressPage");

test("Add Product to the Carts", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const shirtName = ["White T-Shirt", "Blue Pant", "White Sports Shoes", "Black Sandal"];

    const LoginPage = new loginPage(page);
    await LoginPage.goTo();
    const HomePage = await LoginPage.getLogin("demo@demo.com", "demo");
    const AddToCart = await HomePage.getSelectMensWear("Home");

    await AddToCart.getSelectProduct(shirtName);
    const proSummary = await AddToCart.goToCart();
    await proSummary.getCheckSelectedProduct(shirtName);
    const Address = await proSummary.getProceedBtn();
    await Address.fillAllAddressDetails("Mr Beam"," ","Khan","mryour@gmail.com","9988112200","Beside your Home","Telanagan","Warangle","300015");
    await Address.continueBtn();
    await Address.getPlaceOrder();


});