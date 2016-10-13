describe("Landing Page:", function () {

  it("Locality Search should display locations list and search through", function () {

    browser.get("http://localhost:9000/#/");

    browser.sleep(3000);

    element(by.model('search.locality')).click();

    browser.sleep(3000);

    element(by.model('search.locality')).click();

    browser.sleep(3000);

    element.all(by.repeater('locality in localities')).then(function(location) {
      location[3].click();
    });

    browser.sleep(3000);

    element(by.id('search-input-button')).click();

  });

});
