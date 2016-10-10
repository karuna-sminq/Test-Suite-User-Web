// conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

   framework: 'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
     specs: ['01_Login/login_spec.js','01_Login/overview_spec.js',
   '02_Add_Sminq/add_sminq_spec.js','02_Add_Sminq/reschedule_spec.js',
  //  '03_Dashboard/dashboard_spec.js','03_Dashboard/dashboard_changestatus_spec.js',
  //  '03_Dashboard/queue_menu_spec.js','03_Dashboard/timeslot_details_spec.js',
  //  '04_Schedule/schedule_today_spec.js','04_Schedule/schedule_upcoming_spec.js',
  //  '05_History/sminq_history_spec.js','05_History/user_history_spec.js',
  //  '06_Timeslots/timeslots_active_spec.js','06_Timeslots/timeslots_all_spec.js',
  //  '07_Settings/settings_help_spec.js','07_Settings/settings_profile_spec.js'
   ],

   /*=============================================>>>>>
   = Spec files =
   ===============================================>>>>>*/

  /**
   * '01_Login/login_spec.js','01_Login/overview_spec.js',
   * '02_Add_Sminq/add_sminq_spec.js','02_Add_Sminq/reschedule_spec.js',
   * '03_Dashboard/dashboard_spec.js','03_Dashboard/dashboard_changestatus_spec.js','03_Dashboard/queue_menu_spec.js','03_Dashboard/timeslot_details_spec.js',
   * '04_Schedule/schedule_today_spec.js','04_Schedule/schedule_upcoming_spec.js',
   * '05_History/sminq_history_spec.js','05_History/user_history_spec.js',
   * '06_Timeslots/timeslots_active_spec.js','06_Timeslots/timeslots_all_spec.js',
   * '07_Settings/settings_help_spec.js','07_Settings/settings_profile_spec.js'
   */

   /*= End of Spec files =*/
   /*=============================================<<<<<*/

   onPrepare: function() {
     browser.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
           savePath: './reports/',
           takeScreenshotsOnlyOnFailures: true,
//           consolidate: true
//             consolidateAll: true
        })
      );
   }

}
