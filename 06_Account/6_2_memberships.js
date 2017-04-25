describe("Account - My Memberships", function() {

    var sleep_time = 3000;

    it("should display existing membership details of the user", function() {

        //Memberships Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[2]')).click();

        browser.sleep(sleep_time);

        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[2]/div/div/div')).getText().then(function(data) {

            console.log(data);

            expect(data).toContain("No");

        });

    });

});
