describe("Account - Clinic Registrations", function() {

    var sleep_time = 3000;

    it("should display the queues with which user is registered", function() {

        //Registrations Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[3]')).click();

        browser.sleep(sleep_time);

        var reg = element.all(by.repeater('point in payments.userAccount.registrationDetails'));

        console.log("\nRegistration Details: ");

        reg.count().then(function(c) {

            for (var i = 0; i < c; i++) {

                reg.get(i).getText().then(function(data) {

                    console.log("- " + data);

                });

            } //for loop

        }); //count function

    });

});
