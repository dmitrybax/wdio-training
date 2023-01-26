import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';
import { currentOrderID } from './confirmation.page';

class OrdersAndReturns extends Page {

    public get pageTitle() {
        return $('span=Orders and Returns')
    }

    public get continueButton() {
        return $('button[title=Continue]')
    }

    public get orderID() {
        return $('input[name=oar_order_id]')
    }

    public get lastName() {
        return $('input[name=oar_billing_lastname]')
    }

    public get email() {
        return $('input[name=oar_email]')
    }

    public get orderStatus() {
        return $('.order-status')
    }


    public async verifyOrders(lastname: string, email: string) {
        await browser.url('https://stage-sandbox.m2cloud.blueacorn.net/sales/guest/form/');
        await this.pageTitle.isDisplayed();
        await this.continueButton.isClickable();
        await this.continueButton.click(); // negative
        await this.orderID.isDisplayed();
        await this.orderID.setValue(currentOrderID);
        await this.lastName.setValue(lastname);
        await this.email.setValue(email);
        await this.continueButton.click();
        await this.orderStatus.waitForDisplayed({ timeout: 10000 });
    };


}

export default new OrdersAndReturns();