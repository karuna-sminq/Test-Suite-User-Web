describe("Home Page:", function() {

  var sleep_time = 3000;

    it("Doctor/Clinic Name Search should search through", function() {

      // browser.get("http://localhost:9000/#/");

      var doctor = "test";

      //Enter doctor name to search
      element(by.model('search.keyword')).sendKeys(doctor);

      browser.sleep(sleep_time);

      element(by.id('search-input-button')).click();

      browser.sleep(sleep_time);

      //Check for Doctor name searched
      expect(element(by.xpath('/html/body/div[2]/div/div/div[2]/div[2]/span[2]')).getText()).toContain(doctor);

      browser.navigate().back();

    });

    it("Keyword Search should search through", function () {

      var keyword = "OPD";

      //Enter doctor name to search
      element(by.model('search.keyword')).sendKeys(keyword);

      browser.sleep(sleep_time);

      element(by.id('search-input-button')).click();

      browser.sleep(sleep_time);

      //Check for Doctor name searched
      expect(element(by.xpath('/html/body/div[2]/div/div/div[2]/div[2]/span[2]')).getText()).toContain(keyword);

    });

});
