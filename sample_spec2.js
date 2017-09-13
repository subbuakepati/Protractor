/**
 * Created by subbu on 13/09/2017.
 */
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');


        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
        toEqual('3');
    });
});
