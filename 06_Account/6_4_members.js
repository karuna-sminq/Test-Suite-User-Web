describe("Account - Family Members", function() {

    var sleep_time = 3000;

    it("should Add new family member", function() {

        //Members Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[4]')).click();

        browser.sleep(sleep_time);

        //Add Member
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[1]/div[3]/button')).click();

        browser.sleep(sleep_time);

        var add_btn = element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/form/div[3]/button'));

        expect(add_btn.isEnabled()).toBeFalsy();

        element(by.model('family.name')).sendKeys('Fam1');

        browser.sleep(sleep_time);

        expect(add_btn.isEnabled()).toBeTruthy();

        element(by.model('family.phone')).sendKeys('12');

        browser.sleep(sleep_time);

        expect(add_btn.isEnabled()).toBeFalsy();

        element(by.model('family.phone')).sendKeys('34567890');

        browser.sleep(sleep_time);

        //Add button
        add_btn.click();

        browser.sleep(sleep_time);

        //Check for Success
        expect(element(by.id('toast-container')).getText()).toContain('OTP SENT');

        browser.sleep(sleep_time);

        //Verify OTP
        element(by.model('family.otp')).sendKeys('989898');

        browser.sleep(sleep_time);

        element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/form/div[3]/div[2]/button')).click();

        browser.sleep(sleep_time);

        //Check for Success
        expect(element(by.id('toast-container')).getText()).toContain('VERIFIED');

        browser.sleep(sleep_time);

        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[4]/div/div/div[1]/div[1]/div[2]/div[3]/span')).getText().then(function(text) {

          expect(text).toMatch(/verified/);

        });

    });

});
