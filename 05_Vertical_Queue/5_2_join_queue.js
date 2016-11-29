describe("Join Queue: ", function () {

  var sleep_time = 3000;

  it("description", function () {

    var timeslots = element.all(by.repeater('slot in timeslot.timeslots track by $index'));

    //choose random timeslot
    timeslots.get(1).click();

    browser.sleep(sleep_time);

    expect(element(by.xpath('/html/body/div[4]/div[2]/div[1]/h5')).getText()).toMatch(/Join/);

    //Confirm Booking
    element(by.xpath('/html/body/div[4]/div[2]/div[1]/div/div/form/div[2]/button')).click();

    browser.sleep(sleep_time);

  });

});
