// conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

   framework: 'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
     specs: ['01_SignUp/1_1_incorrect_signup.js','01_SignUp/1_2_correct_signup.js','01_SignUp/1_3_logout.js',
     '02_SignIn/2_1_incorrect_signin.js','02_SignIn/2_2_correct_signin.js',
     '03_Home/3_1_locality_search.js','03_Home/3_2_doctor_search.js',
   ],

   /*=============================================>>>>>
   = Spec files =
   ===============================================>>>>>*/

  /**
   * '01_SignUp/1_1_incorrect_signup.js','01_SignUp/1_2_correct_signup.js','01_SignUp/1_3_logout.js',
   * '02_SignIn/2_1_incorrect_signin.js','02_SignIn/2_2_correct_signin.js',
   * '03_Home/3_1_locality_search.js','03_Home/3_2_doctor_search.js',
   */

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
