# Laboratorio 1 - Playwright Testing Project

This project contains automated tests for the OrangeHRM demo application using Playwright.

## Project Structure

```
Laboratorio_1/
├── package.json
├── playwright.config.js
├── README.md
├── playwright-report/
│   └── index.html
├── test-results/
├── tests/
│   ├── .creds.env
│   ├── example.spec.js
│   ├── login.spec.js
│   ├── pim.spec.js
│   └── pages/
│       ├── Login.page.js
│       └── PIM.page.js
```

## Test Cases

### Login Tests (`login.spec.js`)
- **Valid Login**: Tests successful login with valid credentials

### PIM Tests (`pim.spec.js`)
- **Navigate to PIM**: Tests navigation to the PIM (Personnel Information Management) section
- **Add Employee**: Tests adding a new employee with first name and last name

## Page Object Model

This project uses the Page Object Model (POM) design pattern for better test organization and maintainability:

### LoginPage (`pages/Login.page.js`)
- Handles login functionality
- Contains locators for username, password fields and login button
- Provides `login(username, password)` method

### PIMPage (`pages/PIM.page.js`)
- Handles PIM section functionality
- Contains locators for PIM navigation, add button, form fields
- Provides methods:
  - `navigateToPIM()`: Navigate to PIM section
  - `addEmployee(firstName, lastName)`: Add a new employee

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Laboratorio_1
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Variables

Create a `.creds.env` file in the `tests/` directory with your credentials:

```env
my_user=Admin
my_password=admin123
```

**Note**: The `.creds.env` file should be added to `.gitignore` to keep credentials secure.

### Playwright Configuration

The project uses `playwright.config.js` for Playwright configuration. Default settings include:
- Browser: Chromium, Firefox, and WebKit
- Base URL: OrangeHRM demo site
- Test timeout and other settings

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test login.spec.js
npx playwright test pim.spec.js
```

### Run Tests in Headed Mode (Visible Browser)
```bash
npx playwright test --headed
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests on Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Viewing Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

The report will be available in the `playwright-report/` directory.

## Test Data

### Application Under Test
- **URL**: https://opensource-demo.orangehrmlive.com/
- **Test Credentials**:
  - Username: Admin
  - Password: admin123

### Test Scenarios Covered
1. **Authentication**: Login with valid credentials
2. **Navigation**: Access PIM module
3. **Employee Management**: Add new employee records
4. **Validation**: Verify successful operations with URL patterns and UI elements

## Best Practices Implemented

1. **Page Object Model**: Separation of test logic and page elements
2. **Environment Variables**: Secure credential management
3. **Regex Patterns**: Dynamic URL validation for generated employee IDs
4. **Descriptive Test Names**: Clear test case descriptions
5. **Proper Assertions**: Verification of expected outcomes

## Locator Strategies Used

- CSS selectors with classes
- Text-based locators for better readability
- Attribute-based locators for specific elements
- Regex patterns for dynamic content validation

## Troubleshooting

### Common Issues

1. **Module Import Errors**:
   - Ensure file paths in imports are correct
   - Check that files exist in the specified locations

2. **Environment Variable Issues**:
   - Verify `.creds.env` file exists in `tests/` directory
   - Ensure `dotenv` package is installed
   - Check that environment variables are loaded with `config()`

3. **Locator Issues**:
   - Use Playwright Inspector for debugging: `npx playwright test --debug`
   - Verify element selectors with browser developer tools

4. **Test Timeout Issues**:
   - Increase timeout in `playwright.config.js` if needed
   - Use `page.waitForLoadState()` for page loading

## Contributing

1. Follow the existing code structure and naming conventions
2. Add new page objects for new sections of the application
3. Use descriptive test names and comments
4. Update this README when adding new features or test cases

## Dependencies

- `@playwright/test`: Playwright testing framework
- `dotenv`: Environment variable management

## License

This project is for educational/testing purposes.
