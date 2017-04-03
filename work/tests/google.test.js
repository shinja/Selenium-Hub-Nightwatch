
module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch ')
      .waitForElementVisible('input[type=submit]', 1000)
      .click('div#lga')
      .click('input[type=submit]')
      .pause(3000)
      .waitForElementPresent('#main', 5000)
      .assert.containsText('#main', 'Nightwatch.js')
      .end();
  }
};
