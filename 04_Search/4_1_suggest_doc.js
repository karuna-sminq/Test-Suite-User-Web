describe("Search Page: ", function () {

  var sleep_time = 3000;

  it("Suggest Doctor - Not logged in user should be prompted to login", function () {

    // browser.get("http://localhost:9000");
    //
    // browser.sleep(sleep_time);

    // //Keyword
    // element(by.model('searchStr')).sendKeys('testing');
    //
    // browser.sleep(sleep_time);
    //
    // //Search
    // element(by.id('search-input-button')).click();
    //
    // browser.sleep(sleep_time);

    //Suggest Doctor
    element(by.xpath('//*[@id="results"]/div[2]/div/div[2]/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check if not logged in -> Show Login Popup
    expect(element(by.id('ngdialog1-aria-labelledby')).getText()).not.toMatch(/Suggest/);

    //Login Flow:
    element(by.model('newUser.phone')).sendKeys(7000000000);

    browser.sleep(sleep_time);

    element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div[2]/button')).click();

    browser.sleep(sleep_time);

    element(by.model('newUser.pin')).sendKeys(1111);

    browser.sleep(sleep_time);

    element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div[2]/button')).click();

    browser.sleep(sleep_time);

  });

  it("Suggest Doctor - Logged in user only should be able to Suggest a doc", function () {

    //Suggest Doctor
    element(by.xpath('//*[@id="results"]/div[2]/div/div[2]/div[2]/button')).click();

    browser.sleep(sleep_time);

    //Check if logged in -> Show Suggest Popup
    expect(element(by.id('ngdialog2-aria-labelledby')).getText()).toMatch(/Suggest/);

    element(by.model('suggest.doctorName')).sendKeys("Dr. QA Test");

    browser.sleep(sleep_time);

    //Check for Suggest Button State
    expect(element(by.xpath('//*[@id="ngdialog2"]/div[2]/div[1]/form/div[3]/button')).isEnabled()).toBeFalsy();

    element(by.model('suggest.doctorNumber')).sendKeys(1234567890);

    //Check for Suggest Button State
    expect(element(by.xpath('//*[@id="ngdialog2"]/div[2]/div[1]/form/div[3]/button')).isEnabled()).toBeTruthy();

    element(by.xpath('//*[@id="ngdialog2"]/div[2]/div[1]/form/div[3]/button')).click();

    browser.sleep(sleep_time);

    expect(element(by.id('toast-container')).getText()).toContain('SENT');

    //Back
    browser.navigate().back();

    browser.sleep(sleep_time);

  });

});
