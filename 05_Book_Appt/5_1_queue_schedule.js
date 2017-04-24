describe("Doctor/Clinic Page: ", function() {

    var sleep_time = 3000;

    it("should display list of available timeslots for individual Doctor", function() {

        // browser.get("http://localhost:9000/#/");
        //
        browser.sleep(sleep_time);

        // browser.ignoreSynchronization = true;
        // browser.switchTo().window(1);

        browser.get("http://staging.web.sminq.com/pune/clinics/shreenath-clinic/dr-s-s-ingle");
        
        //Check for TimeGroups
        expect(element.all(by.repeater('timeslot in timeslotTab.content track by $index')).isDisplayed()).toBeTruthy();

        //Check for Timeslots
        expect(element.all(by.repeater('slot in timeslot.timeslots track by $index')).isDisplayed()).toBeTruthy();

    }); //it

}); //describe
