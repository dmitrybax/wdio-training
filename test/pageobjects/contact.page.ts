import { ChainablePromiseElement } from 'webdriverio';
import HomePage from "../pageobjects/homepage.page";
import Page from './page';

class ContactPage extends Page {

    public get footerContactPage() {
        return $('.page-footer').$('a=Contact Us');
    }
    
    public get form() {
        return $('#contact-from');
    }
    
    public get name() {
        return $('#name');
    }

    public get email() {
        return $('#email');
    }

    public get phone() {
        return $('#telephone');
    }
    
    public get message() {
        return $('#comment');
    }

    public get submitButton() {
        return $('button[title=Submit]');
    }



    public async contactForm(name: string, email: string, phone: string, message: string) {
        await this.footerContactPage.isClickable();
        await this.footerContactPage.click();
        await this.submitButton.isClickable(); // negative scenario
        await this.submitButton.click();
        await this.name.setValue(name);
        await this.email.setValue(email);
        await this.phone.setValue(phone);
        await this.message.setValue(message);
        await this.submitButton.isClickable();
        await this.submitButton.click();
    }

}

export default new ContactPage();