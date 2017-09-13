/**
 * Created by subbu on 08/02/2017.
 */
describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        // Find the element with ng-model matching 'yourName' - this will
        element(by.model('yourName')).sendKeys('Julie');
        element(by.model('todoList.todoText')).sendKeys('hi');
        var editMe = element(by.buttonText('Edit Me'));
        var add = element(by.buttonText('add'));

        var greeting = element(by.binding('yourName'));
        add.click();

        var arguement = element.all(by.repeater('todo in todoList.todos')).get(0);
        var arguement2 = element.all(by.repeater('todo in todoList.todos')).get(2);

        // Assert that the text element has the expected value.

        expect(greeting.getText()).toEqual('Hello Julie!');
        expect(arguement.getText()).toEqual('learn AngularJS');
        expect(arguement2.getText()).toEqual('hi');
    });
});



