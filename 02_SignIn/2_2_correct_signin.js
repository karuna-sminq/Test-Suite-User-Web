describe("Sign In: Correct", function () {

  var sleep_time = 3000;

  it("Existing user should be able to sign in", function () {

      browser.get("http://localhost:9000/#/");

      browser.sleep(sleep_time);

      element(by.css('a[href="#/login"]')).click();

      browser.sleep(sleep_time);

      //Sign In Tab
      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/ul/li[2]/a')).click();

      browser.sleep(sleep_time);

      var mobile = 7000000000;

      var pin = 1111;

      var login_btn = element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[3]/button'));

      expect(login_btn.isEnabled()).toBeFalsy();

      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).sendKeys(mobile);

      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).sendKeys(pin);

      //Valid Fields -> Button should be enabled
      expect(login_btn.isEnabled()).toBeTruthy();

      //Alternate Check for OTP if PIN not set
      expect(element(by.model('otp')).isPresent()).toBeTruthy();

      login_btn.click();

      expect(element(by.id('toast-container')).getText()).toContain('Logged in');

  });

});
