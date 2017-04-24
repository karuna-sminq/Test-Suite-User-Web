describe("Sign In: Correct", function() {

    var sleep_time = 3000;

    it("Existing user should be able to sign in", function() {

        browser.get("http://staging.web.sminq.com");

        browser.sleep(sleep_time);

        element(by.css('a[href="/login?type=login"]')).click();

        browser.sleep(sleep_time);

        var mobile = 7000000000;

        var pin = 1111;

        var login_btn = element(by.id('sign-in-button'));

        //Mobile
        element(by.xpath('//*[@id="sign-in-form"]/div[1]/input')).clear().then(function() {

            element(by.xpath('//*[@id="sign-in-form"]/div[1]/input')).sendKeys(mobile);

        });

        login_btn.click();

        browser.sleep(sleep_time);

        //PIN
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).clear().then(function() {

            element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div/div/div[2]/div/form/div[2]/input')).sendKeys(pin);

        });

        var login_btn2 = element(by.xpath('//*[@id="sign-in-button"]'));

        //Valid Fields -> Button should be enabled
        expect(login_btn2.isEnabled()).toBeTruthy();

        login_btn2.click();

        browser.sleep(sleep_time);

        expect(element(by.id('toast-container')).getText()).toContain('IN');

        browser.sleep(sleep_time);

    });

});
