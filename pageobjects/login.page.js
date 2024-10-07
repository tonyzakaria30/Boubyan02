class LoginPage {
  // Define elements using selectors
  get usernameField() { return $('input[id="username_input_id"]'); }  // Replace with actual locator
  get passwordField() { return $('input[id="password_input_id"]'); }  // Replace with actual locator
  get loginButton() { return $('button[id="login_button_id"]'); }     // Replace with actual locator
  get dashboard() { return $('div[id="dashboard_element_id"]'); }     // Replace with actual locator

  // Method to login
  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }

  // Check if dashboard is visible
  async isDashboardDisplayed() {
    return await this.dashboard.isDisplayed();
  }
}

module.exports = new LoginPage();
