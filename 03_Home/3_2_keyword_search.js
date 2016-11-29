describe("Home Page:", function() {

  var sleep_time = 3000;

    it("Keyword Search should search through", function() {

      // browser.get("http://localhost:9000/#/");
      //
      browser.sleep(sleep_time);

      var keyword = "chowk";

      //Enter keyword name to search
      element(by.model('keywordInput')).sendKeys(keyword);

      browser.sleep(sleep_time);

      element(by.id('search-page-search-button')).click();

      browser.sleep(sleep_time);

      //Check for keyword searched
      expect(element(by.xpath('/html/body/div[1]/div[2]/div/div/div/div[3]/div[5]/div[1]')).getText()).toContain(keyword.toUpperCase());

      browser.navigate().back();

    });

});
