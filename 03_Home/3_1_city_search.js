describe("Home Page: City / Vertical Search", function() {

    var sleep_time = 3000;

    it("should display selected vertical listing", function() {

        browser.get("http://staging.web.sminq.com");

        browser.sleep(sleep_time);

        element(by.model('$parent.cityInput')).click();

        browser.sleep(sleep_time);

        var city = element(by.xpath('//*[@id="search-input-location"]/option[1]'));

        var c_text = city.getText();

        //Search by city
        city.click();

        browser.sleep(sleep_time);

        element(by.id('search-input-button')).click();

        browser.sleep(sleep_time);

        //Checks on Search Page

        expect(element(by.model('cityInput')).getText()).toContain(c_text);

        expect(element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div/div[2]/div/div[1]/div[1]/p')).isPresent()).toBeTruthy();

    });

});
