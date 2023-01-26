import { data } from 'cypress/types/jquery';
import { forEach, includes } from 'cypress/types/lodash';
import { ChainablePromiseElement } from 'webdriverio';
const fetch = require('node-fetch');
// const expect = require('chai');
import Page from './page';
const fs = require('fs');


class HomePage extends Page {


    public async takeScreenshot(filename: string) {
        let title = await browser.getTitle();
        let modifiedTitle = title.replace('/', '-');
        let dateFormat = new Date().toISOString().replace(/:/g, '-');
        return browser.saveScreenshot(`./screenshots/${modifiedTitle}.${filename}.${dateFormat}.png`)
    }

    // Full-page screenshot
    public async fullPageScreenshot(filename: string) {
        return browser.saveFullPageScreen();
    }

    public get footer(){
        return $('footer.page-footer');
    }
    public get footerSubscribeForm(){
        return $('input[id=newsletter]');
    }
    public get footerSubscribeFormSubmit(){
        return $("//button[*='Subscribe']");
    }

    public get menuItem() {
        return $('a=Beer')
    };


    // GET URL RESPONSE
      public async makeRequest(url) {
        fetch(url)
          .then(response => {

            let statusCode;
            if (response.status === 200) {
                statusCode = ' - PASSED'
            } else {
                statusCode = ' - FAILED'
            }

            console.log(url + ' - CODE: ' + response.status + statusCode);    // Console log results
            let result = url + ' <- CODE: ' + response.status  + '    ';

            // write result to JSON
           return fs.writeFile('urlResponse.json', JSON.stringify(result), {flag: 'a+'}, function(err) {
                if (err) throw err;
            })
          })
          .catch(err => {
            console.log(err);
          });
      }
      
    // URL RESPONSE CHECKER
        public async brokenLinksChecker() {
        const links = $$('a'); // get all URLs from the page
        const urls = links.map(link => link.getAttribute('href'));
        let filteredArray = (await urls).filter(e => e !== '#');    // remove all # links
        let file = fs.createWriteStream('urlResponse.json');    // create JSON file
        filteredArray.forEach(value => this.makeRequest(value));    // run makeRequest function for each URL
    }


    /**
     * 
     * @param email user email
     * @param type positive/negative test
     * 
     */

    public async findMenuItem() {
        await this.menuItem.isDisplayed();
        await this.menuItem.click();
        await browser.back();
    }

     public async footerSubscribe(email: string) {
            await this.footerSubscribeForm.isDisplayed()
            await this.footerSubscribeFormSubmit.click(); // negative scenario
            await this.footerSubscribeForm.setValue(email); // positive scenario
            await this.footerSubscribeFormSubmit.click();
    }

    public open(): Promise<string> {
        return super.open();
    }





}
export default new HomePage();

function then(arg0: (response: any) => void) {
    throw new Error('Function not implemented.');
}
