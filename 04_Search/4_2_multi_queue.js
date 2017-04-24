describe("Search Page: ", function() {

    var sleep_time = 3000;

    it("Join Queue - Clinic Name should match Clinic Dashboard", function() {

        browser.get("http://staging.web.sminq.com");

        browser.sleep(sleep_time);

        //Search
        element(by.id('search-input-button')).click();

        browser.sleep(sleep_time);

        var biz_name = element(by.xpath('//*[@id="results"]/div[1]/div[4]/div[2]/p[1]')).getText();

        element(by.id('join-button')).click();

        browser.sleep(sleep_time);

        var clinic = element(by.id('ngdialog1-aria-describedby')).getText();

        expect(biz_name).toEqual(clinic);

        // Queue Count
        var multi_q = element.all(by.repeater('queue in queues track by $index'));

        multi_q.count().then(function(c) {

          console.log("Queues present for this business are: "+c);

        });

    });

});
