describe("Sign In: Correct", function() {

    var sleep_time = 3000;

    it("Existing user should be able to sign in", function() {

        browser.get("http://staging.web.sminq.com/");

        browser.sleep(sleep_time);

        // element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/ul/li[2]/a')).click();
        //
        // browser.sleep(sleep_time);

        element(by.css('a[href="/login?type=login"]')).click();

        browser.sleep(sleep_time);

        // //Sign In Tab
        // element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div/ul/li[2]/a')).click();
        //
        // browser.sleep(sleep_time);

        var mobile = 7000000000;

        var pin = 1111;

        var login_btn = element(by.id('sign-in-button'));

        //Mobile
        element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).clear().then(function() {

            element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[1]/input')).sendKeys(mobile);

        });

        login_btn.click();

        browser.sleep(sleep_time);

        //PIN
        element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).clear().then(function() {

            element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).sendKeys(pin);

        });

        var login_btn2 = element(by.xpath('/html/body/div[1]/div[2]/div/div/div[2]/div/div/div[2]/div/form/div[4]/button'));

        //Valid Fields -> Button should be enabled
        expect(login_btn2.isEnabled()).toBeTruthy();

        // //Alternate Check for OTP if PIN not set
        // expect(element(by.model('otp')).isPresent()).toBeTruthy();

        login_btn2.click();

        browser.sleep(sleep_time);

        expect(element(by.id('toast-container')).getText()).toContain('IN');

        browser.sleep(sleep_time);

    });

});
