const { test, expect } = require('@playwright/test');

test.describe('Automated Test Cases for Wiley Online Library', () => {

  // Test Case 1: Password Reset (Overview)

  // Objective: Verify that users can reset their password using the "Forgot Password" option.

  // Steps:
  // 1 Open the browser and navigate to the Login page.
  // 2 Enter the registered email and click continue.
  // 3 Click on the "Forgot Password" link.
  // 4 Assert that a confirmation message is displayed indicating the password reset email has been sent.

  //Expected Result: User gets the password rest e-mail 
  
  test('User can reset password using "Forgot Password" option', async ({ page }) => {

    // Navigate to the Login page
    await page.goto('https://wiley.scienceconnect.io/login');

    // Enter the registered email for password reset
    await page.fill('input[name="email"]', 'alfahadstark123@gmail.com'); 

    // Click on the "Continue" button to request a password reset
    await page.click('button[id="sign-in-btn"]');
    
    // Click on the "Forgot Password" link
    await page.click('text=Get a verification code'); 
    
    // Wait for a confirmation message indicating the password reset process
    const confirmationMessage = await page.locator('text=Success!'); 
    await expect(confirmationMessage).toBeVisible();

  });




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

    // Click on the continue button
    await page.click('button[id="sign-in-btn"]');

    // Enter the password
    await page.fill('input[name="password"]', 'alfahad0707');

    // Click on the continue button
    await page.click('button[id="password-sign-in-btn"]');

    // Checking the title of the Dashboard
    await expect(page).toHaveTitle("Dashboard  - Wiley");

  });




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

    // Step 2: Logout 
    await page.click('a[aria-label="Profile Menu Button"]'); // Click the profile btn
    await page.locator('text="Sign out"').click()

    // Step 3: Validate logout
    const loginPage = await page.locator('text=Sign in to CONNECT'); //search for the text
    await expect(loginPage).toBeVisible(); 

  });

});
