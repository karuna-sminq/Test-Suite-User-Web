describe("Search Page: ", function () {

  var sleep_time = 3000;

  it("Suggest Doctor - Not logged in user should be prompted to login", function () {

    //Suggest Doctor
    element(by.xpath('/html/body/div/div[2]/div/div/div[3]/div[2]/div[4]/div/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check if not logged in -> Show Login Popup
    expect(element(by.xpath('/html/body/div[2]/div/div/form/h4')).getText()).not.toMatch(/Suggest/);

    element(by.css('.close')).click();

  });

  it("Suggest Doctor - Logged in user only should be able to Suggest a doc", function () {

    //Suggest Doctor
    element(by.xpath('/html/body/div/div[2]/div/div/div[3]/div[2]/div[4]/div/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check if not logged in -> Show Login Popup
    expect(element(by.xpath('/html/body/div[2]/div/div/form/h4')).getText()).toMatch(/Suggest/);

    element(by.model('suggest.doctorName')).sendKeys("Dr. QA Test");

    browser.sleep(sleep_time);

    //Check for Suggest Button State
    expect(element(by.css('.button.large.suggest-button')).isEnabled()).toBeFalsy();

    element(by.model('suggest.doctorNumber')).sendKeys(1234567890);

    //Check for Suggest Button State
    expect(element(by.css('.button.large.suggest-button')).isEnabled()).toBeTruthy();

    element(by.css('.button.large.suggest-button')).click();

    browser.sleep(sleep_time);

    expect(element(by.id('toast-container')).getText()).toContain('sent');

  });

});
