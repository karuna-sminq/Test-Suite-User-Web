describe("Account - Settings", function() {

    var sleep_time = 3000;

    it("Incorrect Set PIN", function() {

        //Settings Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[7]')).click();

        browser.sleep(sleep_time);

        element(by.model('editUser.user.pin')).sendKeys('1111');

        browser.sleep(sleep_time);

        element(by.model('editUser.user.confirmPin')).sendKeys('111');

        browser.sleep(sleep_time);

        //Check for Error
        expect(element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[7]/div/div/div/div/form/div[3]/div[2]/button')).isEnabled()).toBeFalsy();

    });

    it("Correct Set PIN: : should set/reset user's login PIN", function() {

        element(by.model('editUser.user.confirmPin')).clear().then(function(confirm) {

            element(by.model('editUser.user.confirmPin')).sendKeys('1111');

            browser.sleep(sleep_time);

        });

        //Check for button state
        expect(element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[7]/div/div/div/div/form/div[3]/div[2]/button')).isEnabled()).toBeTruthy();

        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[7]/div/div/div/div/form/div[3]/div[2]/button')).click();

        browser.sleep(sleep_time);

        //Check for Success
        expect(element(by.id('toast-container')).getText()).toContain('UPDATED');

        browser.sleep(sleep_time);

    });

});
