describe("Search Page: ", function() {

    var sleep_time = 3000;

    it("Join Queue - Clinic Name should match Clinic Dashboard", function() {

        browser.get("http://localhost:9000");

        browser.sleep(sleep_time);

        //Search
        element(by.id('search-input-button')).click();

        browser.sleep(sleep_time);

        var biz_name = element(by.id('business-name')).getText();

        element(by.id('join-button')).click();

        browser.sleep(sleep_time);

        var clinic = element(by.xpath('//*[@id="business-name"]')).getText();

        expect(biz_name).toEqual(clinic);

    });

});
