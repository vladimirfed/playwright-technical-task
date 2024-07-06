import { test, expect } from '@playwright/test';

const CREDENTIALS = {
  name: 'InterviewUser',
  email: 'interviewuser@gmail.com',
  password: 'InterviewUser',
} as const;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.veeam.com/');
});

test('should show the error when public email in registration is used', async ({ page }) => {
  await page.click('a.main-navigation__item-title:has-text("Support")');
  await page.click('text=R&D Forums');
  
  await expect(page).toHaveURL(/forums\.veeam\.com.*/);
  await page.click('text=Register');
  setTimeout(async () => await page.click('text=I AGREE TO THESE TERMS'), 1000);

  await page.fill('input[name="username"]', CREDENTIALS.name);
  await page.fill('input[name="new_password"]', CREDENTIALS.password);
  await page.fill('input[name="password_confirm"]', CREDENTIALS.password);
  await page.fill('input[name="email"]', CREDENTIALS.email);
  setTimeout(async () => await page.click('#submit'), 1000); 

  const errorMessage = await page.textContent('.error');
  expect(errorMessage).toContain("Public email are not allowed.");
});
