describe("Sign Up: Correct", function() {

    var sleep_time = 3000;

    it("New User should be able to register for a new account", function() {

        // browser.get("http://localhost:9000/#/");
        //
        // browser.sleep(sleep_time);

        element(by.css('a[href="#/login"]')).click();

        browser.sleep(sleep_time);

        var name = "QATest2";

        var mobile = 7215000000;

        var create_btn = element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[1]/div/form/div[5]/button'));

        expect(create_btn.isEnabled()).toBeFalsy();

        element(by.model('user.userName')).clear().then(function() {

            element(by.model('user.userName')).sendKeys(name);

        });

        element(by.model('user.phone')).clear().then(function() {

            element(by.model('user.phone')).sendKeys(mobile);

        });

        browser.sleep(sleep_time);

        //T&C not checked -> Button should be disabled
        expect(create_btn.isEnabled()).toBeFalsy();

        create_btn.click();

        browser.sleep(sleep_time);

        //Enter OTP
        element(by.model('user.otp')).sendKeys(989898);

        browser.sleep(sleep_time);

        //Check for PIN field - not mandatory
        expect(element(by.model('user.pin')).isEnabled()).toBeTruthy();

        element(by.model('user.pin')).sendKeys(1111);

        browser.sleep(sleep_time);

        element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/div/div[1]/div/form/div[3]/button')).click();

        browser.sleep(sleep_time);

        expect(element(by.id('toast-container')).getText()).toContain('Registered');

        browser.sleep(sleep_time);

    });

});
