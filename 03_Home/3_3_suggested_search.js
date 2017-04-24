describe("Home Page: Suggested Search", function() {

    var sleep_time = 3000;

    it("should redirect to specialization search suggested", function() {

        element(by.model('searchStr')).click();

        //Suggested Searches
        element(by.xpath('//*[@id="static-item"]/div[2]')).click();

        browser.sleep(sleep_time);

        //Check for suggested searches
        expect(browser.getCurrentUrl()).toContain('specialist');

    });

});
