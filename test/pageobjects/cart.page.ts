import { ChainablePromiseElement } from 'webdriverio';
import HomePage from "../pageobjects/homepage.page";
import Page from './page';

class Cart extends Page {

    public get headerCartIcon() {
        return $('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a');
    }

    public get minicartQty() {
        return $('.item-qty')
    }

    public get minicartUpdateQty() {
        return $('button[id*=update-cart-item]')
    }

    public get viewCart() {
        return $('a*=View and Edit');
    }

    public get minicartProceedToCheckoutButton() {
        return $('#top-cart-btn-checkout');
    }

    public get cartProceedToCheckoutButton() {
        return $('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button')
    }



    public async miniCart() {
        await browser.pause(5000);
        await this.headerCartIcon.isClickable();
        await this.headerCartIcon.click();
        await this.minicartQty.isDisplayed();
        await this.minicartQty.setValue('2');
        await this.minicartUpdateQty.isClickable();
        await this.minicartUpdateQty.click();
        await this.viewCart.isClickable();
        await this.viewCart.click();
        await browser.pause(1000);
        await this.cartProceedToCheckoutButton.isClickable();
        await this.cartProceedToCheckoutButton.click();
        // await this.minicartProceedToCheckoutButton.isClickable();
        // await this.minicartProceedToCheckoutButton.click();
    }

}

export default new Cart();