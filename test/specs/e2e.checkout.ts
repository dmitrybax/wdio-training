import { WatchDirectoryFlags } from "typescript";
import homepagePage from "../pageobjects/homepage.page";
import HomePage from "../pageobjects/homepage.page";
import Pdp from '../pageobjects/pdp.page';
import Cart from '../pageobjects/cart.page';
import contactPage from "../pageobjects/contact.page";
import { CUSTOMER_EMAIL, CUSTOMER_FIRST_NAME, CUSTOMER_LAST_NAME, CUSTOMER_ADDRESS, CUSTOMER_CITY, CUSTOMER_ZIP, CUSTOMER_PHONE, CREDIT_CARD, EXP_DATE, CVV, SIMPLE_PRODUCT } from '../specs/e2e.store.conf';
import SearchPage from '../pageobjects/search.page';
import Checkout from '../pageobjects/checkout.page';
import OrderConfirmation from '../pageobjects/confirmation.page';
import OrdersAndReturns from '../pageobjects/ordersANDreturns.page';
import ordersANDreturnsPage from "../pageobjects/ordersANDreturns.page";
import AdvancedSearch from "../pageobjects/advancedSearch.page";
const WdioImageComparisonService = require('wdio-image-comparison-service').default;
let wdioImageComparisonService = new WdioImageComparisonService({});

describe('E2E Test', () =>{

    it('Should open Store', async () => {
        await homepagePage.open();
        await homepagePage.brokenLinksChecker();
    });

    // it('Should test Homepage', async () => {
    //     await homepagePage.findMenuItem();
    //     await homepagePage.footerSubscribe(CUSTOMER_EMAIL);
    // });

    // it('Should test Contact page', async () => {
    //     await contactPage.contactForm(CUSTOMER_FIRST_NAME, CUSTOMER_EMAIL, CUSTOMER_PHONE, 'Test message...Test message...');
    // });

    //    it('do search', async () => {
    //     await SearchPage.headerSearch('Tank');
    //     await SearchPage.checkModes();
    //     await SearchPage.sortProducts();
    // });

    // it('check pdp', async () => {
    //     await Pdp.simpleProduct(SIMPLE_PRODUCT);
    // });

    // it('check mini cart', async () => {
    //     await Cart.miniCart();
    // });

    // it('do checkout', async () => {
    //     await browser.pause(5000);
    //     await Checkout.doCheckout(CUSTOMER_EMAIL, CUSTOMER_FIRST_NAME, CUSTOMER_LAST_NAME, CUSTOMER_ADDRESS, CUSTOMER_CITY, CUSTOMER_ZIP, CUSTOMER_PHONE, CREDIT_CARD, EXP_DATE, CVV);
    // });

    // it('verify order confirmation page', async () => {
    //     await OrderConfirmation.orderConfirmation();
    // });

    // it('verify orders and returns page', async () => {
    //     await ordersANDreturnsPage.verifyOrders(CUSTOMER_LAST_NAME, CUSTOMER_EMAIL);
    // });

    // it('verify advanced search', async () => {
    //     await AdvancedSearch.advancedSearch('Tank');
    // });

})



