import {test} from '@playwright/test';  
import { PIMPage } from './pages/PIM.page.js';
import { LoginPage } from './pages/Login.page.js';    
import { config } from 'dotenv';
import { env } from 'process';  

// Load environment variables from .creds.env file
config({ path: './tests/.creds.env' });

test.describe('PIM Tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test('should navigate to PIM section', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(env.my_user, env.my_password);
        const pimPage = new PIMPage(page);
        
        // Navigate to PIM section
        await pimPage.navigateToPIM();

        // Verify PIM section is displayed
        await page.waitForURL(/.*\/pim\/viewEmployeeList/);
    });

    test('should add a new employee', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(env.my_user, env.my_password);
        const pimPage = new PIMPage(page);
        
        // Navigate to PIM section and add employee
        await pimPage.navigateToPIM();
        await pimPage.addEmployee('John', 'Doe');

        // Verify employee added successfully
        await page.waitForURL(/.*\/pim\/viewPersonalDetails\/empNumber\/\d+/);
        await page.locator('h6:has-text("John Doe")').isVisible();
    });
});