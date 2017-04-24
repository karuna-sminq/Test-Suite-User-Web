describe("Home Page: Autocomplete Search", function() {

    var sleep_time = 3000;
    var keyword = "homeopathy";
    var clinic_title1, clinic_title2;

    it("should display the autocomplete dropdown for text entered", function() {

        element(by.model('searchStr')).sendKeys(keyword);

        //Check for Autocomplete dropdown list
        var auto = element.all(by.repeater('result in results'));
        auto.count().then(function(c) {

            console.log(c);

        });

        auto.get(0).getText().then(function(txt1){

          // console.log(txt1);
          clinic_title1 = txt1;

        });

        auto.get(0).click();

        browser.sleep(sleep_time);

        // var auto_searched = element.all(by.repeater('item in (filteredItems = (items | filter: customFilter)) track by item.business'));
        //
        // auto_searched.get(0).getText().then(function(txt2){
        //
        //   // console.log(txt2);
        //   clinic_title2 = txt2;
        //
        // });
        //
        // clinic_title1 = clinic_title1.slice(0, -35);
        // console.log(clinic_title1);
        //
        // //Check for Autocomplete searched results
        // expect(clinic_title2).toMatch(/clinic_title1/);

    });

});
