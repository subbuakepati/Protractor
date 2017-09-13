/**
 * Created by subbu on 08/02/2017.
 */
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');

        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        element(by.model('yourName')).sendKeys('Julie');
        element(by.model('todoList.todoText')).sendKeys('hi');
        var editMe = element(by.buttonText('Edit Me'));
        var add = element(by.buttonText('add'));

        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = element(by.binding('yourName'));
        add.click();

        var arguement = element.all(by.repeater('todo in todoList.todos')).get(0);
        var arguement2 = element.all(by.repeater('todo in todoList.todos')).get(2);

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.

        expect(greeting.getText()).toEqual('Hello Julie!');
        expect(arguement.getText()).toEqual('learn AngularJS');
        expect(arguement2.getText()).toEqual('hi');
    });
});

function afterEach() {
    browser.close();
}

