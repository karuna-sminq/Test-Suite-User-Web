describe("Home Page: Keyword Search", function() {

  var sleep_time = 3000;

  var keyword = "shree";

    it("should search through", function() {

      // browser.get("http://localhost:9000/#/");
      //
      // browser.sleep(sleep_time);

      //Enter keyword name to search
      element(by.model('searchStr')).sendKeys(keyword);

      browser.sleep(sleep_time);

      element(by.id('search-page-search-button')).click();

      browser.sleep(sleep_time);

      //Check for keyword searched
      expect(browser.getCurrentUrl()).toContain(keyword);

      // browser.navigate().back();

    });

    it("All Search Results should contain keyword searched for", function() {

        var results = element.all(by.repeater('item in (filteredItems = (items | filter: customFilter)) track by item.business'));

        browser.sleep(sleep_time);

        results.count().then(function(count) {
            console.log(count);
            for (var i = 0; i < count - 1; i++) {
                results.get(i).getText().then(function(value) {
                    console.log(value);
                    expect(results.get(i).getText()).toContain(keyword);
                });
            }
        });

    });

});
