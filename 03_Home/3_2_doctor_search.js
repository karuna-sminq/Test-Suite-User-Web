describe("Home Page:", function() {

    it("Doctor/Clinic Name Search should search through", function() {

      var sleep_time = 3000;

      browser.get("http://localhost:9000/#/");

      var doctor = "test";

      //Enter doctor name to search
      element(by.model('search.keyword')).sendKeys(doctor);

      browser.sleep(sleep_time);

      element(by.id('search-input-button')).click();

      browser.sleep(sleep_time);

      //Check for Doctor name searched
      expect(element(by.xpath('/html/body/div[2]/div/div/div[2]/div[2]/span[2]')).getText()).toContain(doctor);

    });


});
