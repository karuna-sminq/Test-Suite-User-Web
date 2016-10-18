describe("Doctor/Clinic Page: ", function() {

    var sleep_time = 3000;

    it("If multiple queues, show list of doctors", function() {

        // browser.get("http://localhost:9000/#/");
        //
        // browser.sleep(sleep_time);

        var queue_list = element.all(by.repeater('queue in queues track by $index'));

        queue_list.count().then(function(count) {
            console.log(count);
            if (count > 1) {

                var queue_name = element(by.id('queue-name')).getText();

                expect(element(by.id('see-schedule-button')).isPresent()).toBeTruthy();

                //See Schedule
                element(by.id('see-schedule-button')).click();

                browser.sleep(sleep_time);

                var q_name = element(by.xpath('/html/body/div/div[2]/div/div/div[2]/div[1]/div/h4')).getText();

                expect(queue_name).toEqual(q_name);

            }

        });


    });

});
