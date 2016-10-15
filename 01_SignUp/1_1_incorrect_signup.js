describe("Sign Up: Incorrect", function () {

  var sleep_time = 3000;

  it("Existing user should not be able to re-register", function () {

      browser.get("http://localhost:9000/#/");

      browser.sleep(sleep_time);

      element(by.css('a[href="#/login"]')).click();

      browser.sleep(sleep_time);

      var name = "QATest1";

      var mobile = 7000000000;

      var create_btn = element(by.xpath('/html/body/div[2]/div/div/div[2]/div/div/div[1]/div/form/div[5]/button'));

      expect(create_btn.isEnabled()).toBeFalsy();

      element(by.model('user.userName')).sendKeys(name);

      element(by.model('user.phone')).sendKeys(mobile);

      //T&C not checked -> Button should be disabled
      expect(create_btn.isEnabled()).toBeFalsy();

      create_btn.click();

      expect(element(by.id('toast-container')).getText()).toContain('exists');

  });

});
