describe("Home Page:", function() {

  var sleep_time = 3000;

  var keyword = "hdfc";

    it("Keyword Search should search through", function() {

      // browser.get("http://localhost:9000/#/");
      //
      browser.sleep(sleep_time);

      //Enter keyword name to search
      element(by.model('keywordInput')).sendKeys(keyword);

      browser.sleep(sleep_time);

      element(by.id('search-page-search-button')).click();

      browser.sleep(sleep_time);

      //Check for keyword searched
      // expect(element(by.xpath('/html/body/div[1]/div[2]/div/div/div/div[3]/div[5]/div[1]')).getText()).toContain(keyword.toUpperCase());
      //
      // browser.navigate().back();

    });

    it("All Search Results should contain keyword searched for", function() {

        var results = element.all(by.repeater('item in (filteredItems = (items | filter: customFilter)) track by $index'));

        results.count().then(function(count) {
            // console.log(count);
            for (var i = 0; i < count - 1; i++) {
                results.get(i).getText().then(function(value) {
                    // console.log(value);
                    expect(results.get(i).getText()).toContain(keyword.toUpperCase());
                });
            }
        });

    });

});
