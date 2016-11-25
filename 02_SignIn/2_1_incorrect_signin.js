describe("Sign In: Incorrect", function () {

  var sleep_time = 3000;

  it("New user should not be able to sign in without signing up first", function () {

      browser.get("http://localhost:9000");

      browser.sleep(sleep_time);

      element(by.css('a[href="/login?type=login"]')).click();

      browser.sleep(sleep_time);

      // //Sign In Tab
      // element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/ul/li[2]/a')).click();
      //
      // browser.sleep(sleep_time);

      var mobile = 7242234200;

      var login_btn = element(by.id('sign-in-button'));

      expect(login_btn.isEnabled()).toBeFalsy();

      element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).sendKeys(mobile);

      browser.sleep(sleep_time);

      //Valid Fields -> Button should be enabled
      expect(login_btn.isEnabled()).toBeTruthy();

      login_btn.click();

      browser.sleep(sleep_time);

      expect(element(by.id('toast-container')).getText()).toContain('DOES NOT EXIST');

      browser.sleep(sleep_time);

  });

});
