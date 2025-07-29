import { Page } from '@playwright/test';

export class PIMPage {
    constructor(page) {
        this.page = page;
    }

    get pimMenuItem() {
        return this.page.locator('a.oxd-main-menu-item:has-text("PIM")');
    }

    get addButton() {
        return this.page.locator('button:has(.bi-plus)')
    }

    get firstNameInput() {
        return this.page.locator('input[name="firstName"]');
    }

    get lastNameInput() {
        return this.page.locator('input[name="lastName"]');
    }

    get saveButton() {
        return this.page.locator('button[type="submit"]');
    }


  async addEmployee(firstName, lastName) {
    await this.addButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
}

async navigateToPIM() {
    await this.pimMenuItem.click();
  }

}