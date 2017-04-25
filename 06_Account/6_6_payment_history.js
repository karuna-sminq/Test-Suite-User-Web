describe("Account - Payment History", function() {

    var sleep_time = 3000;

    it("should show the user's payment History details", function() {

        //Payment History Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[6]')).click();

        browser.sleep(sleep_time);

        var payment_hist = element.all(by.repeater('payment in payments.userTransactions'));

        payment_hist.count().then(function(c) {

            console.log("Payment History List:");

            for (var i = 0; i < c; i++) {

                payment_hist.get(i).element(by.css('.bolder')).getText().then(function(qname, amt) {

                    console.log("- " + qname);

                });

            } //for

        }); //bookmark_list

    });

});
