describe("Logout:", function () {

  var sleep_time = 3000;

  it("should log the user out of his account", function () {

    // //My Tokens
    // element(by.xpath('/html/body/div[1]/div[1]/div/div[2]/div[2]/ul/li[2]/a')).click();
    //
    // browser.sleep(sleep_time);

    //My Account dropdown
    element(by.xpath('//*[@id="main-nav-bar"]/div[2]/ul/li[2]/a')).click();

    browser.sleep(sleep_time);

    //Logout
    element(by.css('[ng-click="logout()"]')).click();

    browser.sleep(sleep_time);

    element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[2]/button')).click();

    browser.sleep(sleep_time);

    // expect(element(by.id('toast-container')).isPresent()).toBeTruthy();
    expect(element(by.id('toast-container')).getText()).toContain('OUT');

    browser.sleep(sleep_time);

  });

});
