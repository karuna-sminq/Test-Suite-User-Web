describe("Search Page: ", function() {

    var sleep_time = 3000;

    it("Join Queue - Clinic Name should match Clinic Dashboard", function() {

        // browser.get("http://localhost:9000/#/");
        //
        // browser.sleep(sleep_time);

        var result = element(by.id('business-name')).getText();

        element(by.id('join-button')).click();

        browser.sleep(sleep_time);

        var clinic = element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div[1]/div/h4')).getText();

        expect(result).toEqual(clinic);

    });

});
