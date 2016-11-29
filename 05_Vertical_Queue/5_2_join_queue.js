describe("Join Queue: ", function() {

    var sleep_time = 3000;

    it("Token booked should be visible in 'My Tokens'", function() {

        var queue_name = element(by.xpath('/html/body/div[1]/div[2]/div/div/div/div/div[1]/div/h4')).getText();

        var timeslots = element.all(by.repeater('slot in timeslot.timeslots track by $index'));

        //choose random timeslot
        timeslots.get(1).click();

        browser.sleep(sleep_time);

        expect(element(by.xpath('/html/body/div[4]/div[2]/div[1]/h5')).getText()).toMatch(/Join/);

        //Confirm Booking
        element(by.xpath('/html/body/div[4]/div[2]/div[1]/div/div/form/div[2]/button')).click();

        browser.sleep(sleep_time);

        //Check for Token Booked
        var live_token_list = element.all(by.repeater('liveToken in liveTokens track by $index'));

        live_token_list.count().then(function(count) {

            for (var i = 0; i < count; i++) {

                live_token_list.get(i).getText().then(function() {

                    element(by.id('queue-name')).getText().then(function(q_name) {

                      expect(queue_name).toEqual(q_name);

                    }); //inner getText function

                }); //outer getText function

            } //for

        }); //count function

    }); //it

}); //describe
