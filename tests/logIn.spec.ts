import { test, expect } from '@playwright/test';

  // Test Case 2: Account Login (Overview)
  /**
   * Objective: Verify that users can successfully log in with valid credentials.
   
   * Steps:
   * 1. Navigate to the login page of Wiley Online Library.
   * 2. Enter valid email and password into the respective fields and click the "Continue" button.
   * 3. Validate that the user is redirected to the dashboard.
   
   * Expected Result: User is logged in, and the dashboard is displayed.
   */
  test('User login with valid credentials', async ({ page }) => {

    // Navigate to the Login page
    await page.goto('https://wiley.scienceconnect.io/login');

    // Enter the registered email
    await page.fill('input[name="email"]', 'alfahadstark123@gmail.com');
    await page.waitForTimeout(1000);

    // Click on the continue button
    await page.click('button[id="sign-in-btn"]');

    // Enter the password
    await page.fill('input[name="password"]', 'alfahad0707');
    await page.waitForTimeout(1000);

    // Click on the continue button
    await page.click('button[id="password-sign-in-btn"]');

    // Checking the title of the Dashboard
    await expect(page).toHaveTitle("Dashboard  - Wiley");

    //Closing the browser
    await page.context().close();

  });