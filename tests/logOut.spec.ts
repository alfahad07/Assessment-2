import { test, expect } from '@playwright/test';

  // Test Case 3: Logout Functionality (Overview)
  /**
   * Objective: Verify that logged-in users can successfully log out of the application.
   
   * Steps:
   * 1. Log in to the Wiley Online Library with valid credentials.
   * 2. Locate and click the "Sign out" button in the user profile menu.
   * 3. Validate that the user is redirected to the homepage and the session is terminated.
   
   * Expected Result: User is logged out successfully and redirected to the homepage.
   */
  test('User logout functionality', async ({ page }) => {
    // Step 1: Log in
    await page.goto('https://wiley.scienceconnect.io/login');
    await page.fill('input[name="email"]', 'alfahadstark123@gmail.com');
    await page.click('button[id="sign-in-btn"]');
    await page.fill('input[name="password"]', 'alfahad0707');
    await page.click('button[id="password-sign-in-btn"]');
    await page.waitForTimeout(2000);

    // Step 2: Logout 
    await page.click('a[aria-label="Profile Menu Button"]'); // Click the profile btn
    await page.waitForTimeout(2000);

    await page.locator('text="Sign out"').click()

    // Step 3: Validate logout
    const loginPage = await page.locator('text=Sign in to CONNECT'); //search for the text
    await expect(loginPage).toBeVisible(); 
    await page.waitForTimeout(1000);

    //Closing the browser
    await page.context().close();

  });