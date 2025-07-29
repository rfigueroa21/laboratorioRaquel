import {test} from '@playwright/test';
import { LoginPage } from './pages/Login.page.js';
import { config } from 'dotenv';
import { env } from 'process';

// Load environment variables from .creds.env file
config({ path: './tests/.creds.env' });

test.describe('Login Tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test('should login with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(env.my_user, env.my_password);
        
        // Verify successful login
        await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });


});
