import { ChainablePromiseElement } from 'webdriverio';
import homepagePage from '../pageobjects/homepage.page';
import HomePage from "../pageobjects/homepage.page";
import Page from './page';

class Pdp extends Page {

    public get productTitle(){
        return $('h1.page-title')
    }

    public get productColor() {
        return $('div.swatch-option.color')
    }

    public get productQty() {
        return $('input#qty')
    }

    public get productSize() {
        return $('div.swatch-option text')
    }

    public get productAddToCart(){
        return $('button#product-addtocart-button')
    }

    public get productAddToWishlist(){
        return $('div.product-addto-links a:first-child')
    }

    public get productAddToCompare(){
        return $('div.product-addto-links a:nth-child(2)')
    }

    public get popupCartNotification(){
        return $('div.block-minicart');
    }

    


}