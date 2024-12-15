import { test, expect } from '@playwright/test';

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
    await page.waitForTimeout(1000);

    // Click on the "Continue" button to request a password reset
    await page.click('button[id="sign-in-btn"]');
    
    // Click on the "Forgot Password" link
    await page.click('text=Get a verification code'); 
    
    // Wait for a confirmation message indicating the password reset process
    const confirmationMessage = await page.locator('text=Success!'); 
    await expect(confirmationMessage).toBeVisible();
    await page.waitForTimeout(1000);

    //Closing the browser
    await page.context().close();
    
  });



