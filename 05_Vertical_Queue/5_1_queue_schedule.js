describe("Doctor/Clinic Page: ", function() {

    var sleep_time = 3000;

    it("If multiple queues, show list of doctors", function() {

        // browser.get("http://localhost:9000/#/");
        //
        // browser.sleep(sleep_time);

        var queue_list = element.all(by.repeater('queue in queues track by $index'));

        queue_list.count().then(function(count) {
            // console.log(count);
            if (count > 1) {

                var queue_name = element(by.id('queue-name')).getText();

                var today_slots = element.all(by.repeater('slot in queue.todaysSlots'));

                expect(element(by.id('see-schedule-button')).isPresent()).toBeTruthy();

                //See Schedule
                element(by.id('see-schedule-button')).click();

                browser.sleep(sleep_time);

                var q_name = element(by.id('doctor-name-heading')).getText();

                expect(queue_name).toEqual(q_name);

                // //Check for Today's Slot Groups
                // var timeslot_group = element(by.css('.timeslot-title.ng-binding')).getText();
                //
                // timeslot_group.getText().then(function(str) {
                //   var patt = /[^Timeslots: ]/;
                //   var res = patt.exec(str);
                //   console.log(res);
                //
                //   expect(today_slots).toContain(res);
                // });

                // var str = "The best things in life are free";
                // var patt = new RegExp("e");
                // var res = patt.exec(str);
                //

            }

        }); //Queue List function

    }); //it

}); //describe
