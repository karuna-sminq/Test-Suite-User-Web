describe("Logout:", function () {

  var sleep_time = 3000;

  it("should log the user out of his account", function () {

    element(by.css('a[href="#/account"]')).click();

    browser.sleep(sleep_time);

    //Logout
    expect(element(by.css('[ng-click="logout()"]')).isPresent()).toBeTruthy();
    // element(by.css('[ng-click="logout()"]')).click();

    browser.sleep(sleep_time);

    expect(element(by.id('toast-container')).getText()).toContain('out');

    browser.sleep(sleep_time);

  });

});
