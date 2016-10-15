describe("Home Page:", function () {

  it("Locality Search should display locations list and search through", function () {

    var sleep_time = 3000;

    browser.get("http://localhost:9000/#/");

    browser.sleep(sleep_time);

    element(by.model('search.locality')).click();

    browser.sleep(sleep_time);

    var location = "aundh";

    //Search by location
    element(by.model('search.locality')).sendKeys(location);

    browser.sleep(sleep_time);

    element(by.id('search-input-button')).click();

    browser.sleep(sleep_time);

    expect(element(by.xpath('/html/body/div[2]/div/div/div[2]/div[1]/nav/ul/li[2]/span')).isPresent()).toBeTruthy();

    var url = browser.getCurrentUrl();

    //Check for location filter added
    expect(url).toContain(location);

  });

});
