describe("Join Queue: ", function() {

    var sleep_time = 3000;
    var queue_name;

    it("Token booked should be visible in 'My Tokens'", function() {

        element(by.id('doctor-name-heading')).getText().then(function(qname) {

            queue_name = qname;

        });

        var timeslots = element.all(by.repeater('slot in timeslot.timeslots track by $index'));

        //choose random timeslot
        timeslots.get(1).click();

        browser.sleep(sleep_time);

        //Login Flow:
        element(by.model('newUser.phone')).sendKeys(7000000022);

        browser.sleep(sleep_time);

        element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div/button')).click();

        browser.sleep(sleep_time);

        element(by.model('newUser.pin')).sendKeys(1111);

        browser.sleep(sleep_time);

        //Confirm button
        element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div[2]/form/div[2]/button')).click();

        browser.sleep(sleep_time);

        //Check for Token Booked
        var live_token_list = element.all(by.repeater('liveToken in liveTokens track by $index'));

        live_token_list.count().then(function(c) {
            // console.log("COUNT ============== " + c);

            expect(live_token_list.get(0).isPresent()).toBeTruthy();

            for (var i = 0; i < c; i++) {

                live_token_list.get(i).getText().then(function(text) {

                    // console.log('LIVE TEXT ============= ' + text);

                    element(by.css('.queue-name.black-text')).getText().then(function(q_name) {

                        // console.log(queue_name + '================' + q_name);

                        expect(q_name).toEqual(queue_name);

                        browser.sleep(sleep_time);

                    }); //inner getText function

                }); //outer getText function

            } //for

        }); //count function

    }); //it

}); //describe
