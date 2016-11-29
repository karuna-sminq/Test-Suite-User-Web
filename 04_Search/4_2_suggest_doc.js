describe("Search Page: ", function () {

  var sleep_time = 3000;

  it("Suggest Doctor - Not logged in user should be prompted to login", function () {

    browser.get("http://localhost:9000");

    browser.sleep(10000);

    //Keyword
    element(by.id('search-input-keyword')).sendKeys('testing');

    browser.sleep(sleep_time);

    //Search
    element(by.id('search-input-button')).click();

    browser.sleep(sleep_time);

    //Suggest Doctor
    element(by.css('.button.suggest-button.custom-button.float-center')).click();

    browser.sleep(sleep_time);

    //Check if not logged in -> Show Login Popup
    expect(element(by.id('ngdialog1-aria-labelledby')).getText()).not.toMatch(/Suggest/);

    //Login Flow:
    element(by.id('phone-input')).sendKeys(7000000000);

    browser.sleep(sleep_time);

    element(by.xpath('/html/body/div[4]/div[2]/div[1]/div/div/form/div[2]/button')).click();

    browser.sleep(sleep_time);

    element(by.model('newUser.pin')).sendKeys(1111);

    browser.sleep(sleep_time);

    element(by.xpath('/html/body/div[4]/div[2]/div[1]/div/div/form/button')).click();

    browser.sleep(sleep_time);

  });

  it("Suggest Doctor - Logged in user only should be able to Suggest a doc", function () {

    //Suggest Doctor
    element(by.css('.button.suggest-button.custom-button.float-center')).click();

    browser.sleep(sleep_time);

    //Check if logged in -> Show Suggest Popup
    expect(element(by.xpath('/html/body/div[4]/div[2]/form/h4')).getText()).toMatch(/Suggest/);

    element(by.model('suggest.doctorName')).sendKeys("Dr. QA Test");

    browser.sleep(sleep_time);

    //Check for Suggest Button State
    expect(element(by.xpath('/html/body/div[4]/div[2]/form/div[3]/button')).isEnabled()).toBeFalsy();

    element(by.model('suggest.doctorNumber')).sendKeys(1234567890);

    //Check for Suggest Button State
    expect(element(by.xpath('/html/body/div[4]/div[2]/form/div[3]/button')).isEnabled()).toBeTruthy();

    element(by.xpath('/html/body/div[4]/div[2]/form/div[3]/button')).click();

    browser.sleep(sleep_time);

    expect(element(by.id('toast-container')).getText()).toContain('SENT');

    //Back
    browser.navigate().back();

    browser.sleep(sleep_time);
    
  });

});
