describe("Sign In: Incorrect", function () {

  var sleep_time = 3000;

  it("New user should not be able to sign in without signing up first", function () {

      // browser.get("http://localhost:9000/#/");
      //
      // browser.sleep(sleep_time);

      element(by.css('a[href="#/login"]')).click();

      browser.sleep(sleep_time);

      //Sign In Tab
      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/ul/li[2]/a')).click();

      browser.sleep(sleep_time);

      var mobile = 7242234200;

      var pin = 1111;

      var login_btn = element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[3]/button'));

      expect(login_btn.isEnabled()).toBeFalsy();

      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).sendKeys(mobile);

      element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).sendKeys(pin);

      //Valid Fields -> Button should be enabled
      expect(login_btn.isEnabled()).toBeTruthy();

      login_btn.click();

      expect(element(by.id('toast-container')).getText()).toContain('does not exist');

      browser.sleep(sleep_time);

  });

});
