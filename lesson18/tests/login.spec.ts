import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Login Page Tests using POM', () => {
    test('Should successfully log in with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('You logged into a secure area!');
    });

    test('Should show error message with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login('wrongUser', 'wrongPassword');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
    });
});
