// conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },
    specs: [
        // '01_SignUp/1_1_incorrect_signup.js',
        // '01_SignUp/1_2_correct_signup.js',
        // '01_SignUp/1_3_logout.js',
        // '02_SignIn/2_1_incorrect_signin.js',
        // '02_SignIn/2_2_correct_signin.js',
        // '03_Home/3_1_city_vertical_search.js',
        // '03_Home/3_2_keyword_search.js',
        // '04_Search/4_1_suggest_doc.js',
        '04_Search/4_2_multi_queue.js',
        '05_Vertical_Queue/5_1_queue_schedule.js',
        '05_Vertical_Queue/5_2_join_queue.js'
    ],

    /*=============================================>>>>>
    = Spec files =
    ===============================================>>>>>*/

    // '01_SignUp/1_1_incorrect_signup.js',
    // '01_SignUp/1_2_correct_signup.js',
    // '01_SignUp/1_3_logout.js',
    // '02_SignIn/2_1_incorrect_signin.js',
    // '02_SignIn/2_2_correct_signin.js',
    // '03_Home/3_1_city_vertical_search.js',
    // '03_Home/3_2_keyword_search.js',
    // '04_Search/4_1_suggest_doc.js',
    // '04_Search/4_2_multi_queue.js',
    // '05_Vertical_Queue/5_1_queue_schedule.js',
    // '05_Vertical_Queue/5_2_join_queue.js'

    /*= End of Spec files =*/
    /*=============================================<<<<<*/

    onPrepare: function() {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports/',
                takeScreenshotsOnlyOnFailures: true,
            })
        );
    }

}
