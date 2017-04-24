describe("Search: Check Availability", function() {

    var sleep_time = 3000;

    it("should display the next available timeslot for the Clinic", function() {

        //Check Availability
        element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/div[2]/div[2]/div[1]/div/div/button')).click();

        browser.sleep(sleep_time);

        element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/div[2]/div[2]/div[1]/div/div')).getText().then(function(avbl) {

            console.log("Clinic Availability: " + avbl);

            //Check for: Check Availability feature returned some response
            expect(avbl).toContain("available");

        });


    });

});
