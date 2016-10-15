describe("Home Page:", function () {

  it("Locality Search should display locations list and search through", function () {

    browser.get("http://localhost:9000/#/");

    browser.sleep(3000);

    element(by.model('search.locality')).click();

    browser.sleep(3000);

    var location = "aundh";

    //Search by location
    element(by.model('search.locality')).sendKeys(location);

    browser.sleep(3000);

    element(by.id('search-input-button')).click();

    browser.sleep(3000);

    expect(element(by.xpath('/html/body/div[2]/div/div/div[2]/div[1]/nav/ul/li[2]/span')).isPresent()).toBeTruthy();

    var url = browser.getCurrentUrl();

    //Check for location filter added
    expect(url).toContain(location);

  });

});
