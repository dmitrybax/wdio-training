import { ChainablePromiseElement } from 'webdriverio';
import HomePage from "../pageobjects/homepage.page";
import Page from './page';

class AdvancedSearch extends Page {

    public get searchButton() {
        return $('#form-validate > div > div > button > span');
    }

    public get errorMessage() {
        return $('.message-error');
    }

    public get productName() {
        return $('input[name=name]');
    }

    public get searchResults() {
        return $('div.search.results')
    }




    public async advancedSearch(keyword: string) {
        await browser.url('https://stage-sandbox.m2cloud.blueacorn.net/catalogsearch/advanced/');
        await this.searchButton.waitForClickable({ timeout: 10000 });
        await this.searchButton.scrollIntoView();
        await this.searchButton.click(); // negative
        await this.errorMessage.waitForDisplayed({ timeout: 10000 });
        await this.productName.isClickable();
        await this.productName.setValue(keyword);
        await this.searchButton.isClickable();
        await this.searchButton.click();
        await this.searchResults.waitForDisplayed({ timeout: 10000 });
    }

}

export default new AdvancedSearch();