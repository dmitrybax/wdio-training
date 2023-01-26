import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

export let currentOrderID;

/**
 * sub page containing specific selectors and methods for a specific page
 */

class OrderConfirmation extends Page {
    /**
     * define selectors using getter methods
     */

    public get pageTitle() {
        return $('=Thank you for your purchase!');
    }

    public get continueShoppingButton() {
        return $('=Continue Shopping');
    }

    public get orderID() {
        return $('#maincontent > div.columns > div > div.checkout-success > p:nth-child(1) > span')
    }

        /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    public async orderConfirmation() {
        await this.pageTitle.isDisplayed();
        currentOrderID = await this.orderID.getText();
        await this.continueShoppingButton.isClickable();
        await this.continueShoppingButton.click();
        console.log('ORDER ID: ' +currentOrderID);
    }

}

export default new OrderConfirmation();