const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

describe('Login functionality', () => {

  before(async () => {
    // Launch the app before running tests
    await browser.url('app://path/to/app');
  });

  it('should login successfully with valid credentials', async () => {
    await LoginPage.login('bob@example.com', '10203040');
    const isDashboardVisible = await LoginPage.isDashboardDisplayed();
    assert.strictEqual(isDashboardVisible, true, 'Dashboard should be displayed after successful login');
  });

  it('should fail with incorrect credentials', async () => {
    await LoginPage.login('alice@example.com', 'wrongPassword');
    const isDashboardVisible = await LoginPage.isDashboardDisplayed();
    assert.strictEqual(isDashboardVisible, false, 'Dashboard should not be displayed after invalid login');
  });

  it('should not login with empty fields', async () => {
    await LoginPage.login('', '');
    const isDashboardVisible = await LoginPage.isDashboardDisplayed();
    assert.strictEqual(isDashboardVisible, false, 'Dashboard should not be displayed with empty login details');
  });
});
