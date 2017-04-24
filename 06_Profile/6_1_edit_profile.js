describe("Profile: Edit", function () {

  var sleep_time = 3000;

  it("Name should be updated", function () {

    // browser.get("http://staging.web.sminq.com/");
    //
    // browser.sleep(sleep_time);

    //Account Dropdown
    element(by.xpath('//*[@id="main-nav-bar"]/div[2]/ul/li[2]/a')).click();

    browser.sleep(sleep_time);

    //Profile
    element(by.xpath('//*[@id="main-nav-bar"]/div[2]/ul/li[2]/ul/li[1]/a')).click();

    browser.sleep(sleep_time);

    element(by.css('.profile-user-name')).click();

    browser.sleep(sleep_time);

    //Name
    element(by.model('editUser.user.userName')).clear()

    element(by.model('editUser.user.userName')).sendKeys('Sminq Test Name');

    browser.sleep(sleep_time);

    //Save
    element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div/div/div/div/div/form/div[4]/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check for Success
    expect(element(by.id('toast-container')).getText()).toContain('UPDATED');

    browser.sleep(sleep_time);

  });

    it("Email should be updated", function () {

      element(by.css('.profile-user-email')).click();

      browser.sleep(sleep_time);

      element(by.model('editUser.user.userEmail')).clear();

      element(by.model('editUser.user.userEmail')).sendKeys('karunal@sminq.com');

      browser.sleep(sleep_time);

      //Save
      element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div/div/div/div/div/form/div[4]/div[2]/button')).click();

      browser.sleep(sleep_time);

      //Check for Success
      expect(element(by.id('toast-container')).getText()).toContain('UPDATED');

      browser.sleep(sleep_time);

    });

  it("Existing mobile number should not be updated", function () {

    element(by.css('.profile-user-mobile')).click();

    browser.sleep(sleep_time);

    //Existing Mobile Number
    element(by.model('editUser.user.userMobile')).clear();

    //Check for disabled if no mobile number entered
    expect(element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div/div/div/div/div/form/div[4]/div[2]/button')).isEnabled()).toBeFalsy();

    element(by.model('editUser.user.userMobile')).sendKeys('7000000001');

    browser.sleep(sleep_time);

    //Save
    element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div/div/div/div/div/form/div[4]/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check for Error
    expect(element(by.id('toast-container')).getText()).toContain('EXISTS');

    browser.sleep(sleep_time);

  });

  xit("Non registered mobile number should be updated", function () {

    //Non-registered Mobile Number
    element(by.model('editUser.user.userMobile')).clear();

    element(by.model('editUser.user.userMobile')).sendKeys('7000200001');

    browser.sleep(sleep_time);

    //Save
    element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[1]/div/div/div/div/div/div/form/div[4]/div[2]/button')).click();

    browser.sleep(sleep_time);

    //OTP
    expect(element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div[2]/button')).isEnabled()).toBeFalsy();

    element(by.model('otp')).sendKeys('989898');

    browser.sleep(sleep_time);

    //Done
    element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check for Success
    expect(element(by.id('toast-container')).getText()).toContain('ERROR');

    browser.sleep(sleep_time);

  });

});
