import { ChainablePromiseElement } from 'webdriverio';
import HomePage from "../pageobjects/homepage.page";
import Page from './page';

class ClpPlp extends Page {

    public get promo(){
        return $('div.blocks-promo>a');
    }

    public get productFilters() {
        return $('div.filter-options');
    }

    public get productFiltersShobByMobile() {
        return $('//div//strong[text()="Shop By"]');
    }

    public get productFiltersMobile() {
        return $("//div//div[text()='Size']")

    }

    public get productFiltersMobileLink() {
        return $('div.filter-options-content a')
    }

    public get productSortBy() {
        return $('select#sorter')
    }

    public get productsPerPage() {

        return $('select#limiter')
    }

    public get previousPage(){
        return $('a.action.previous')
    }

    public get nextPage(){
        return $('a.action.next')
    }

    public get gridView(){
        return $('.mode-grid')
    }

    public get listView(){
        return $('.mode-list')
    }

    


}

export default new ClpPlp();