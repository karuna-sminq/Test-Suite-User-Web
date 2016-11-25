describe("Home Page:", function() {

    it("City, Vertical Search should display selected vertical listing", function() {

        var sleep_time = 3000;

        browser.get("http://localhost:9000");

        browser.sleep(sleep_time);

        element(by.model('cityInput')).click();

        browser.sleep(sleep_time);

        var city = element(by.xpath('/html/body/div[1]/div[2]/div/div/div[1]/div/form/div/div[1]/select/option[1]'));

        var c_text = city.getText();

        //Search by city
        city.click();

        browser.sleep(sleep_time);

        element(by.model('verticalInput')).click();

        browser.sleep(sleep_time);

        var vertical = element(by.xpath('/html/body/div[1]/div[2]/div/div/div[1]/div/form/div/div[2]/select/option[2]'));

        var v_text = vertical.getText();

        //Search by vertical
        vertical.click();

        browser.sleep(sleep_time);

        element(by.id('search-input-keyword')).click();

        browser.sleep(sleep_time);

        v_text.then(function(vert) {

          element(by.id('search-input-button')).click();

          browser.sleep(sleep_time);

          expect(element(by.id('results-label')).isPresent()).toBeTruthy();

          // var url = browser.getCurrentUrl();

          // //Check for city & vertical filter added
          // expect(url).toMatch(c_text.toLowerCase());
          //
          // expect(url).toMatch(v_text.toLowerCase());

          //Check for Vertical Selection in Search Page
          browser.sleep(sleep_time);

          // expect(element(by.model('verticalInput')).getText()).toEqual(vert);

        });

    });

});
