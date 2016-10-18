describe("Search Page:", function() {

    var sleep_time = 3000;

    var keyword = "OPD";

    it("Keyword Search should search through listings", function() {

        browser.get("http://localhost:9000/#/");

        browser.sleep(sleep_time);

        //Enter doctor name to search
        element(by.model('search.keyword')).sendKeys(keyword);

        browser.sleep(sleep_time);

        element(by.id('search-input-button')).click();

        browser.sleep(sleep_time);

        //Check for Keyword searched
        expect(element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div[2]/span[2]')).getText()).toContain(keyword);

    });

    it("All Search Results should contain keyword searched for", function() {

        var results = element.all(by.repeater('item in (filteredItems = (items | filter: customFilter)) track by $index'));

        results.count().then(function(count) {
            // console.log(count);
            for (var i = 0; i < count - 1; i++) {
                results.get(i).getText().then(function(value) {
                    // console.log(value);
                    expect(results.get(i).getText()).toMatch(keyword);
                });
            }
        });

    });

});
