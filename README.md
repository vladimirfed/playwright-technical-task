# Test Plan: Check Registration Error when Public Email is used

## Test Information
- **Test Name:** Should show the error when public email in registration is used
- **Test Type:** UI End-to-End Test
- **Framework:** Playwright
- **Language:** TypeScript

## Test Environment
- **URL:** https://www.veeam.com/
- **Browser:** Any browser supported by Playwright (Chrome, Firefox, WebKit)

## Objective
To verify that the registration process displays an error message when a user attempts to register with a public email address.

## Prerequisites
1. Ensure you have the following installed: Node and npm, Playwright and TypeScript.

## Installation and Running the test
1. Clone the repository.
   ```bash
   git clone https://github.com/vladimirfed/playwright-technical-task.git

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run test

# Test Steps

1. Navigate to Home Page [https://www.veeam.com/](https://www.veeam.com/).
2. Click on the "Support" menu item.
3. Click on "R&D Forums".
4. Verify that the URL matches the expected pattern for the forums page.
5. Click on the "Register" button.
6. Click on the "I AGREE TO THESE TERMS" button.
7. Fill the "username" field with the test username.
8. Fill the "new_password" field with the test password.
9. Fill the "password_confirm" field with the test password.
10. Fill the "email" field with the test email.
11. Click on the "Submit" button.
12. Check if an error message with text "Public email are not allowed.*" is displayed.
