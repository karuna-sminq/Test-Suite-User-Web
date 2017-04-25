describe("Account - Bookmarks", function() {

    var sleep_time = 3000;
    var original, new_list;

    it("should display list of bookmarks added by user", function() {

        //Bookmarks Tab
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[1]/ul/li[5]')).click();

        browser.sleep(sleep_time);

        var bookmark_list = element.all(by.repeater('favorite in favorites track by $index'));

        bookmark_list.count().then(function(c) {

            console.log("Bookmark List:");

            for (var i = 0; i < c; i++) {

                bookmark_list.get(i).element(by.css('.zero-bottom-margin.favorite-name.clip-text')).getText().then(function(fav) {

                    console.log("- " + fav);
                    original = fav;

                });

            } //for

        }); //bookmark_list

    });

    it("should remove an existing bookmark", function() {

        //Remove bookmark
        element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[2]/div[2]/div/div[5]/div/div/div[2]/div[2]/div[2]/span/bookmark-item/button')).click();

        browser.sleep(sleep_time);

        //Check for Success
        expect(element(by.id('toast-container')).getText()).toContain('REMOVED');

        browser.sleep(sleep_time);

        var bookmark_list = element.all(by.repeater('favorite in favorites track by $index'));

        bookmark_list.count().then(function(c) {

            console.log("Updated Bookmark List:");

            for (var i = 0; i < c; i++) {

                bookmark_list.get(i).element(by.css('.zero-bottom-margin.favorite-name.clip-text')).getText().then(function(fav1) {

                    console.log("- " + fav1);
                    new_list = fav1;

                });

            } //for

        }); //bookmark_list

        expect(original).not.toEqual(new_list);

    });

});
