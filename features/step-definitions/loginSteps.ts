import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../pages/LoginPage';

Given('user launches the application', async () => {
    await browser.url('https://example.com');
});

When('user enters valid credentials', async () => {
    await LoginPage.login('testuser', 'password123');
});

Then('user should login successfully', async () => {
    await expect(browser).toHaveUrlContaining('example');
});
