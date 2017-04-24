// describe("Monetization", function() {
//
//     var sleep_time = 3000;
//
//     it("Buy Token", function() {
//
//         element(by.id('search-input-button')).click();
//
//         browser.sleep(sleep_time);
//
//         element(by.id('join-button')).click();
//
//         browser.sleep(sleep_time);
//
//         //See Schedule
//         element(by.xpath('//*[@id="style-1"]/div[1]/div[3]/button')).click();
//
//         browser.sleep(sleep_time);
//
//         var timeslots = element.all(by.repeater('slot in timeslot.timeslots track by $index'));
//
//         //Timeslots
//         timeslots.get(1).click()
//
//         browser.sleep(sleep_time);
//
//         element(by.model('slot.note')).sendKeys('test note');
//
//         browser.sleep(sleep_time);
//
//         //Confirm Appointment
//         element(by.xpath('//*[@id="ngdialog1"]/div[2]/div[1]/div/div/form/div/button')).click();
//
//         browser.sleep(sleep_time);
//
//         //Choose Family Member
//         // element(by.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/form/div/button')).click();
//         //
//         // browser.sleep(sleep_time);
//
//         //Continue
//         // element(by.xpath('//*[@id="ngdialog3"]/div[2]/div[1]/div/div/div/div/div[2]/button')).click();
//         element(by.buttonText('Continue')).click();
//
//         browser.sleep(sleep_time);
//
//     });
//
//     it("Subscription - Online", function () {
//
//       // //Make Payment
//       // element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div[3]/a/button[2]')).click();
//       //
//       // browser.sleep(sleep_time);
//
//       //Choose Subscription Plan
//       var subs = element.all(by.repeater('plan in membershipPlans.registrationPlans'));
//
//       //Regular Plan
//       subs.get(1).click();
//
//       browser.sleep(sleep_time);
//
//       //Pay Online
//       element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[1]/div/div[2]/div/div[1]/div[2]/div[3]/div[2]/div[2]/button')).click();
//
//       browser.sleep(sleep_time);
//
//       //Skip button
//       element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/button[2]')).click();
//
//       browser.sleep(sleep_time);
//
//       //Payment Review
//       var payable_amount = element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[1]/div/div[2]/div/div[3]/div[2]/div/div[2]/span')).getText();
//
//       expect(payable_amount).toContain('50');
//
//       browser.sleep(sleep_time);
//
//       //Pay Booking Charges
//       element(by.xpath('//*[@id="my-wrapper"]/div[3]/div/div/div[1]/div/div[2]/div/div[7]/button')).click();
//
//       browser.sleep(sleep_time);
//
//     });
//
// });
