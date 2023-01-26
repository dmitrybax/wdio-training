import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class SearchPage extends Page {
        /**
     * define selectors using getter methods
     */

    public get searchInput () {
        return $('#search');
    }

    public get headerSearchSubmitBtn () {
        return $('button[title=Search]');
    }

    public get toolbarAmount () {
        return $('#toolbar-amount');
    }


        /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async headerSearch(searchEntire: string) {
        await this.searchInput.isDisplayed();
        await this.searchInput.setValue(searchEntire);
        await this.headerSearchSubmitBtn.isClickable();
        await this.headerSearchSubmitBtn.click();
        await this.toolbarAmount.isDisplayed();
        browser.saveScreenshot('./search.png');
    }
}

export default new SearchPage();