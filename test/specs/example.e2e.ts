import LoginPage from  '../pageobjects/login.page';
import SearchPage from '../pageobjects/search.page';

describe('My Login application', () => {
    it('should open homepage', async () => {
        await LoginPage.open();
    });

    it('do search', async () => {
        await SearchPage.headerSearch('Tank');
    });
});


