describe("Sign Up: Correct", function() {

    var sleep_time = 3000;

    it("New User should be able to register for a new account", function() {

        // browser.get("http://staging.web.sminq.com/login?type=login");
        //
        // browser.sleep(sleep_time);

        element(by.id('sign-up-tab')).click();

        browser.sleep(sleep_time);

        var name = "QATest4";

        var mobile = 7216500002;

        var create_btn = element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div/div/div[1]/div/form/div[5]/button'));

        element(by.model('user.userName')).clear().then(function() {

            element(by.model('user.userName')).sendKeys(name);

        });

        element(by.model('user.phone')).clear().then(function() {

            element(by.model('user.phone')).sendKeys(mobile);

        });

        browser.sleep(sleep_time);

        //T&C checked -> Button should be enabled
        expect(create_btn.isEnabled()).toBeTruthy();

        create_btn.click();

        browser.sleep(sleep_time);

        //Enter OTP
        element(by.model('user.otp')).sendKeys(989898);

        browser.sleep(sleep_time);

        //Sign Up
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div/div/div[1]/div/form/div[3]/button')).click();

        browser.sleep(sleep_time);

        expect(element(by.id('toast-container')).getText()).toContain('REGISTERED');

        browser.sleep(sleep_time);

    });

});
