const assert = require('assert');

Feature('Band tests API');

Scenario('Band profile exists',  ({ I }) => {
    I.sendGetRequest('https://www.metal-archives.com/search?searchString=Metallica&type=band_name');
    I.seeResponseCodeIs(200);
});

Scenario('Band profile contains band information',  ({ I }) => {
    I.sendGetRequest('https://www.metal-archives.com/bands/Metallica/125');
    I.seeResponseCodeIs(200);
});