import { BASE_URL } from "../specs/e2e.store.conf";
import {devices} from '../data/devices';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     public open(): Promise<string> {
        if(!browser.isMobile) {  browser.maximizeWindow();   }
        browser.setWindowSize(devices.iPad_Pro.width, devices.iPad_Pro.height); // define viewport
        return browser.url(BASE_URL);
    }
}
