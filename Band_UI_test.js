const assert = require('assert');

Feature('Band tests UI');

Scenario('Search for band profile page',  ({ I }) => {
    I.amOnPage('/')
    I.see('Encyclopaedia Metallum')
    I.fillField({xpath: "//input[@id='searchQueryBox']"}, 'Metallica')
    I.click({xpath: "//button[text()='Submit']"})
    I.waitForVisible({xpath: "//a[text()='Metallica']"}, 5)
});

Scenario('Verify band status',  async ({ I }) => {
    I.amOnPage('/')
    I.fillField({xpath: "//input[@id='searchQueryBox']"}, 'Metallica')
    I.click({xpath: "//button[text()='Submit']"})
    I.waitForVisible({xpath: "//a[text()='Metallica']"}, 5)
    let text = await I.grabTextFrom({xpath: "//dt[text()='Status:']/following-sibling::dd[1]"})
    assert.deepStrictEqual(text, 'Active')
});